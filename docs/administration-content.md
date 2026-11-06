# Administration des Gîtes du Soulor — version à valider

## Diagnostic

Lecture publique effectuée le 6 novembre 2026, sans connexion administrateur ni écriture : l’API `make-server-66cb1054/content` répond 200 mais renvoie des tarifs dans `gites`, un objet d’accueil dans `contact` et des coordonnées dans `hero`. Cette permutation est compatible avec une ancienne lecture `mget` associant les réponses à leurs positions. Le module GitHub actuel préserve déjà l’ordre par clé ; la version réellement déployée et les lignes historiques doivent donc être comparées avant mise en service. La copie publique de diagnostic est conservée localement et exclue de Git.

Autres problèmes établis dans le code :

- Le chargement public et l’éditeur utilisaient deux états indépendants. Le pied de page recevait le contenu chargé initialement, pas l’aperçu modifié.
- Les fiches détaillées de chaque gîte lisaient un tableau codé dans la page, sans reprendre les photos ni descriptions enregistrées.
- De nombreux textes, photos et pages de présentation n’étaient reliés à aucun champ enregistré.
- Le remplacement des photos demandait des adresses et proposait du code ; le contenu initial de l’éditeur pouvait rester ancien après changement de galerie.
- L’ancienne API avait un mot de passe de secours public et réutilisait le mot de passe en clair à chaque sauvegarde.

## Utilisation prévue

1. Cliquer sur le cadenas du pied de page et saisir le mot de passe personnel.
2. Cliquer sur un texte ou une photo pour préparer une modification. Les libellés de liens se modifient depuis le catalogue afin de conserver une navigation utilisable.
3. Ouvrir « Textes, photos et réglages » pour chercher un contenu, filtrer les photos, modifier les périodes de saison ou changer le mot de passe.
4. Pour les galeries : ouvrir une fiche de gîte, puis « Gérer toutes les photos de ce gîte ». Ajouter des fichiers JPG/PNG/WebP, retirer des photos ou modifier leur ordre.
5. Vérifier l’aperçu, puis cliquer sur « Publier ». Sans ce clic, les changements ne sont pas publics. Un rechargement demande confirmation si des modifications restent non publiées.

Les coordonnées, textes et images des pages actives sont reliés au contenu Supabase. Les anciens composants non utilisés ne sont pas proposés dans le catalogue. Les changements éditoriaux ne permettent pas d’injecter du HTML ou du JavaScript, de modifier les règles de réservation, de confirmer une réservation, ni de modifier le calendrier Airbnb.

Le catalogue contient les textes statiques de toutes les pages actives et les champs structurés connus. Certains éléments répétés ou contenus de fenêtres sont ajoutés lorsqu’ils sont affichés. Il ne s’agit pas d’un constructeur de mises en page : les composants et la structure du site restent dans le code.

## Tarifs communs

Le document `cms:published`, dans `kv_store_66cb1054`, contient `tarifs` et `seasonPeriods`. Les prix présentés sur le site, les demandes de réservation et les réponses tarifaires de l’agent utilisent ces mêmes montants. La modification du service de réservation se trouve dans la branche associée du dépôt `gites-du-soulor`.

- Chaque nuit suit sa saison ; la date de fin est exclue.
- Dès deux nuits, le tarif dégressif s’applique à toutes les nuits du séjour, y compris lorsque celui-ci traverse plusieurs saisons.
- Le prix affiché pour sept nuits est calculé à partir de sept fois le tarif dégressif. Modifier ce dernier met à jour le prix de la semaine.
- Prix négatifs, dates invalides et chevauchements de saisons bloquent la publication.
- Une nuit sans saison configurée reste « tarif à confirmer » ; une erreur de lecture de la source tarifaire ne réactive jamais silencieusement les anciens montants.
- Les résumés et fourchettes de prix des pages publiques se recalculent depuis les tarifs. Ils ne constituent pas des montants éditoriaux indépendants.
- Une demande préparée avec un ancien prix est refusée avant enregistrement si le montant serveur a changé.

L’intégration couvre les prix et les périodes ; elle ne transforme pas automatiquement chaque texte libre du site en règle métier de l’agent. Une modification des capacités, des conditions commerciales ou du règlement doit également être vérifiée dans les réponses de l’agent avant publication commerciale.

## Enregistrement et accès

La publication écrit un document unique avec une révision et conserve les trois versions précédentes côté serveur. Une comparaison atomique de la révision empêche deux publications concurrentes de s’écraser. L’interface ne présente un succès qu’après confirmation du serveur. Une panne de chargement bloque la publication pour ne pas écraser le contenu distant avec les valeurs par défaut.

Les sessions sont des jetons aléatoires de deux heures, conservés en mémoire du navigateur. Les mots de passe ne sont plus stockés dans le navigateur. Le mot de passe existant est migré vers PBKDF2 au premier accès réussi ; aucun mot de passe de secours n’est accepté. Un changement de mot de passe révoque les autres sessions. L’API vérifie l’accès pour les publications, changements de mot de passe et envois de fichiers.

Les photos sont enregistrées dans le bucket public `soulor-site-media`, sous des noms uniques. Le serveur vérifie la signature des fichiers et refuse SVG et fichiers de plus de 6 Mo. Les clés privilégiées restent dans la fonction Supabase. La migration SQL fournie retire l’accès direct des rôles publics à la table CMS ; elle ne touche pas les réservations.

## Vérifications effectuées

- 12 tests CMS exécutant les véritables routes Hono et le véritable module KV sur un adaptateur de base de données local : ordre des clés, publication/relecture, contrôle d’accès, migration du mot de passe, expiration, révocation, concurrence, validation, médias et erreurs.
- 27 tests de réservation/agent : règles de calendrier et dates existantes, nouveaux prix publiés, refus d’utiliser des prix anciens après une panne et changement de prix entre aperçu et demande.
- Compilation de production des deux applications et assemblage de la fonction CMS complète.
- Essais manuels dans le navigateur, avec le serveur local de test uniquement : cadenas, connexion, modification et publication d’un titre, rechargement, modification via le catalogue, remplacement d’une photo, navigation et modification d’un prix (130 € → semaine 910 € dans le jeu de test).
- Lecture de contrôle avec la clé publique : la table CMS n’a exposé aucune ligne. Ce contrôle de lecture ne remplace pas la vérification des droits d’écriture prévue à la mise en service.

Les tests locaux utilisent des identifiants et données fictifs. Aucun mot de passe réel n’a été essayé ; aucun contenu Supabase, calendrier ou client réel n’a été modifié. Le stockage distant, l’application de la migration et le bon fonctionnement de la version déployée restent à valider sur l’environnement cible.

## Mise en service — après accord

1. Sauvegarder le code réellement déployé, les lignes CMS et les réglages d’accès. Relire les anciennes coordonnées enregistrées : la réponse historique contient des coordonnées différentes de celles actuellement affichées. Ne pas les republier sans validation du propriétaire. Ne pas réimporter les anciens tableaux de prix obsolètes.
2. Tester la migration et les deux fonctions dans un environnement isolé, avec sa propre table et ses propres secrets. Vérifier une vraie écriture/relecture et un envoi de photo Storage avec des données de test.
3. Vérifier l’existence d’un mot de passe personnel. S’il n’en existe pas, configurer `SITE_ADMIN_PASSWORD` dans Supabase avec une valeur forte, sans l’inscrire dans Git ni dans le chat.
4. Appliquer la migration de protection de `kv_store_66cb1054`, puis déployer la fonction CMS `make-server-66cb1054`. L’entrée CLI est `supabase/functions/make-server-66cb1054/index.ts`. Elle importe le code partagé sous `src/`.
5. Déployer la fonction de réservation `make-server-497309b8` et le calendrier associés AVANT la première publication de nouveaux prix dans le CMS. Vérifier `/pricing` et les contrôles de calendriers réels.
6. Déployer le site, vérifier les coordonnées et le contenu chargé, puis tester avec le propriétaire une modification réversible et sa relecture depuis une autre session. Ne pas créer de demande de réservation réelle pour ces essais.
7. Contrôler que l’agent et le calendrier reprennent le prix publié. Le rétablissement d’une ancienne version de contenu doit repasser par une publication avec la révision courante ; ne pas réactiver l’ancienne API à mot de passe public.

À ce stade, aucune de ces opérations de production n’a été effectuée.

Références : [validation d’identité Supabase](https://supabase.com/docs/reference/javascript/auth-getuser), [envoi de fichiers Storage](https://supabase.com/docs/guides/storage/uploads/standard-uploads).
