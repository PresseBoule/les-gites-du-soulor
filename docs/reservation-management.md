# Gestion des réservations — préparation du 6 novembre 2026

## Périmètre

Le bouton Réservations apparaît dans la barre d’édition après connexion au cadenas existant. Il réunit les demandes des quatre gîtes et les créneaux combinés bain nordique + sauna. Recherche, filtres par ressource/statut, confirmation, mise en attente, refus, annulation, corbeille et restauration. Une action est enregistrée immédiatement, indépendamment de la publication des textes et photos. Aucun email n’est envoyé par ces actions.

Supprimer déplace dans la corbeille, conserve l’enregistrement et libère les dates. Restaurer rétablit le statut précédent, après contrôle des conflits. Une demande de gîte en attente bloque déjà ses nuits. Les prix historiques restent inchangés. Les dates, coordonnées et prix ne sont pas éditables dans cette première version ; elle ne crée pas de réservation manuelle.

Airbnb : seuls les blocages du flux ICS sont visibles ; aucun nom de voyageur n’est inventé. Ils restent en lecture seule et se modifient sur Airbnb. Chaque confirmation ou réactivation consulte le calendrier externe. Une panne bloque ces opérations ; elle n’empêche pas d’annuler une demande locale. La lecture ICS demeure soumise au délai de publication d’Airbnb : aucune garantie de synchronisation instantanée n’est ajoutée.

## Dépendances et déploiement coordonné

Trois dépôts changent ensemble : `les-gites-du-soulor` (CMS), `gites-du-soulor` (gîtes), `gite-soulor-reservation-bain-sauna` (bien-être). Aucun de ces changements ne doit être publié isolément sans la migration SQL.

1. Sauvegarder les trois fonctions actuellement déployées et les deux tables de réservations, dans un emplacement privé. Ne pas écraser `cms:published`, les tarifs ou les secrets existants.
2. Appliquer et vérifier `supabase/migrations/20261106_reservation_management.sql`. Elle ne supprime ni ne transforme les réservations existantes. Elle retire l’accès direct des rôles publics aux données clients et réserve les transactions au backend.
3. Déployer le backend gîtes vers `make-server-497309b8`, depuis `supabase/functions/server/index.tsx` du dépôt gîtes. Déployer le backend bien-être vers `make-server-2b20b999`, depuis `src/supabase/functions/server/index.tsx` du dépôt bien-être. Les créations passent désormais par les mêmes transactions SQL que les restaurations. Le backend bien-être conserve la compatibilité avec les anciens clients pour les créations simples.
4. Déployer le backend CMS vers `make-server-66cb1054`, depuis `src/supabase/functions/server/index.tsx` de ce dépôt. Conserver les secrets et le mot de passe actuels.
5. Publier les frontends CMS et bien-être seulement après ces backends. Le frontend gîtes ne change pas de contrat.
6. Vérifier en production uniquement les lectures publiques et le refus d’accès sans session. Faire confirmer l’accès au propriétaire avec son mot de passe. Ne pas créer de fausse réservation réelle, envoyer d’email de test ou annuler une réservation réelle pour valider le déploiement.

Les anciens endpoints de modification/suppression par jeton statique du backend gîtes répondent 410. La gestion doit passer par la session du cadenas et les contrôles de concurrence.

## Contrôles effectués et limites

Tests automatisés du CMS existant, du backend de gestion, des disponibilités gîtes et du backend public bien-être. La migration SQL est exécutée dans PostgreSQL local via PGlite sur des données fictives : chevauchements, départ exclusif, annulation/restauration, comparaison de version, restauration après nouvelle réservation, annulation complète d’un groupe de créneaux en conflit, restrictions des rôles publics. Ce moteur local sérialise ses requêtes ; le verrou transactionnel doit aussi être vérifié dans un environnement Supabase isolé avant publication. Les imports des fonctions sont assemblés séparément pour vérifier leur résolution.

L’ouverture du panneau a été vérifiée dans le navigateur avec des données fictives. Le navigateur de test a bloqué la confirmation JavaScript native ; elle a été remplacée par une confirmation dans le panneau. Le parcours visuel complet de cette confirmation et l’affichage mobile restent à reprendre avant publication.

Point préexistant à examiner avant mise en ligne : le calendrier bien-être convertit les dates du sélecteur avec `toISOString()`. Une date choisie à minuit en France peut correspondre à la veille en UTC. Cette version conserve la convention actuelle pour ne pas déplacer silencieusement les réservations existantes. Le panneau affiche la date enregistrée. Avant de modifier cette convention, confronter les réservations futures au calendrier et aux confirmations d’origine ; il serait incorrect de décaler toutes les dates arbitrairement.

Retour arrière : retirer d’abord l’interface et le backend de gestion, puis rétablir les anciens backends publics si nécessaire. Conserver les fonctions SQL et les statuts d’annulation ; ne pas effacer la corbeille ou l’historique.
