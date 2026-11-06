# Gestion des réservations — préparation du 6 novembre 2026

## Périmètre

Le bouton Réservations apparaît dans la barre d’édition après connexion au cadenas existant. Il réunit les demandes des quatre gîtes et les créneaux combinés bain nordique + sauna. Recherche, filtres par ressource/statut, confirmation, mise en attente, refus, annulation, corbeille et restauration. Une action est enregistrée immédiatement, indépendamment de la publication des textes et photos. Aucun email n’est envoyé par ces actions.

Supprimer déplace dans la corbeille, conserve l’enregistrement et libère les dates. Restaurer rétablit le statut précédent, après contrôle des conflits. Une demande de gîte en attente bloque déjà ses nuits. Les prix historiques restent inchangés. Les dates, coordonnées et prix ne sont pas éditables dans cette première version ; elle ne crée pas de réservation manuelle.

Airbnb : seuls les blocages du flux ICS sont visibles ; aucun nom de voyageur n’est inventé. Ils restent en lecture seule et se modifient sur Airbnb. Chaque confirmation ou réactivation consulte le calendrier externe. Une panne bloque ces opérations ; elle n’empêche pas d’annuler une demande locale. La lecture ICS demeure soumise au délai de publication d’Airbnb : aucune garantie de synchronisation instantanée n’est ajoutée.

## Dépendances et déploiement coordonné

Trois dépôts changent ensemble : `les-gites-du-soulor` (CMS), `gites-du-soulor` (gîtes), `gite-soulor-reservation-bain-sauna` (bien-être). Aucun de ces changements ne doit être publié isolément sans la migration SQL.

1. Sauvegarder les trois fonctions actuellement déployées et les deux tables de réservations, dans un emplacement privé. Ne pas écraser `cms:published`, les tarifs ou les secrets existants.
2. Appliquer et vérifier `supabase/migrations/20261106_reservation_management.sql`. Elle ne supprime ni ne transforme les réservations existantes. Elle réserve les transactions au backend ; la protection des tables est appliquée séparément après la publication du calendrier bien-être.
3. Déployer le backend gîtes vers `make-server-497309b8`, depuis `supabase/functions/server/index.tsx` du dépôt gîtes. Déployer le backend bien-être vers `make-server-2b20b999`, depuis `src/supabase/functions/server/index.tsx` du dépôt bien-être. Les créations passent désormais par les mêmes transactions SQL que les restaurations. Le backend bien-être conserve la compatibilité avec les anciens clients pour les créations simples.
4. Déployer le backend CMS vers `make-server-66cb1054`, depuis `src/supabase/functions/server/index.tsx` de ce dépôt. Conserver les secrets et le mot de passe actuels.
5. Publier d’abord le frontend bien-être. Vérifier ses lectures via la nouvelle fonction, puis appliquer `20261106_protect_reservation_data.sql` pour retirer l’accès direct public aux deux tables. Les anciens onglets utilisant encore les écritures directes doivent être rechargés. Publier ensuite le frontend CMS. Le frontend gîtes ne change pas de contrat.
6. Vérifier en production uniquement les lectures publiques et le refus d’accès sans session. Faire confirmer l’accès au propriétaire avec son mot de passe. Ne pas créer de fausse réservation réelle, envoyer d’email de test ou annuler une réservation réelle pour valider le déploiement.

Les anciens endpoints de modification/suppression par jeton statique du backend gîtes répondent 410. La gestion doit passer par la session du cadenas et les contrôles de concurrence.

## Contrôles effectués et limites

Tests automatisés du CMS existant, du backend de gestion, des disponibilités gîtes et du backend public bien-être. La migration SQL est exécutée dans PostgreSQL local via PGlite sur des données fictives : chevauchements, départ exclusif, annulation/restauration, comparaison de version, restauration après nouvelle réservation, annulation complète d’un groupe de créneaux en conflit, restrictions des rôles publics. Le moteur local sérialise ses requêtes. Le verrou a également été vérifié sur Supabase dans le schéma isolé `soulor_reservation_test_20261106_1410`, avec des verrous portant un préfixe distinct de la production : deux connexions SQL simultanées, première réservation acceptée, seconde refusée pour conflit après libération du verrou. Le rollback complet du groupe bien-être a aussi été validé sur ce schéma. Aucune table de réservations de production n’a été modifiée. Les imports des fonctions sont assemblés séparément pour vérifier leur résolution.

Le parcours navigateur suppression → corbeille → restauration a été vérifié avec une réservation fictive. Une différence d’ordre des clés JSON après enregistrement PostgreSQL a été corrigée par une empreinte canonique ; un test exige désormais une restauration réussie avec la révision immédiatement retournée. Affichage mobile vérifié à 390 × 844 pixels.

Audit en lecture seule, autorisé par le propriétaire le 6 novembre 2026 : le calendrier Netlify réel diffère du dépôt. Il utilise déjà des dates civiles locales, une limite de deux heures consécutives (y compris 23h–0h–1h) et EmailJS. Ces comportements sont conservés dans le correctif. Les noms et emails n’ont pas été demandés au serveur lors de la lecture : projection des dates/heures/statuts seulement. Les dates/heures ont été lues intégralement avec contrôle du compte exact ; des doublons existent sur des créneaux à venir. Aucune réservation réelle n’a été modifiée ni décalée ; aucune déduplication automatique. Le panneau signale les créneaux occupés plusieurs fois.

Le backend Edge Function bien-être actuellement présent répond 404 à la route `/bookings` utilisée par l’ancien code GitHub. Le calendrier réellement en ligne lit et écrit directement dans la table Supabase. Il est donc impératif de déployer et vérifier le nouveau backend avant de publier le frontend, puis de fermer l’accès direct public aux données clients.

Retour arrière : retirer d’abord l’interface et le backend de gestion, puis rétablir les anciens backends publics si nécessaire. Conserver les fonctions SQL et les statuts d’annulation ; ne pas effacer la corbeille ou l’historique.
