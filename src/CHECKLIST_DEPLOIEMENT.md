# ✅ Checklist de Déploiement - Les Gîtes du Soulor

**Site** : https://lesgitesdusoulor.fr  
**Date** : _________________

---

## 🚀 Avant le déploiement

### Code et fichiers
- [ ] Tous les fichiers sont commités sur Git
- [ ] Aucune erreur dans la console développeur
- [ ] Le build local fonctionne (`npm run build`)
- [ ] Les tests passent (si applicable)

### Fichiers SEO
- [ ] `/public/sitemap.xml` existe et est à jour
- [ ] `/public/robots.txt` existe
- [ ] `/public/manifest.json` existe
- [ ] Tous les logos sont dans `/public`
- [ ] `/index.html` contient tous les meta tags

### Configuration
- [ ] `netlify.toml` est configuré
- [ ] Variables d'environnement Supabase configurées
- [ ] Mot de passe admin défini : `admin123`

---

## 🌐 Déploiement Netlify

### Connexion et configuration
- [ ] Compte Netlify créé
- [ ] Nouveau site créé depuis le repo Git
- [ ] Build command : `npm run build`
- [ ] Publish directory : `dist`

### Variables d'environnement
- [ ] `SUPABASE_URL` configurée
- [ ] `SUPABASE_ANON_KEY` configurée
- [ ] `SUPABASE_SERVICE_ROLE_KEY` configurée

### Domaine
- [ ] Domaine custom ajouté : `lesgitesdusoulor.fr`
- [ ] DNS configuré (voir OVH)
- [ ] HTTPS activé (certificat SSL)
- [ ] Redirections www → non-www (ou inverse)

---

## 🔍 Tests post-déploiement

### URLs principales
- [ ] Site principal : https://lesgitesdusoulor.fr
- [ ] HTTPS fonctionne (🔒 dans la barre)
- [ ] Pas d'erreur 404
- [ ] Toutes les pages se chargent

### URLs SEO
- [ ] https://lesgitesdusoulor.fr/sitemap.xml
- [ ] https://lesgitesdusoulor.fr/robots.txt
- [ ] https://lesgitesdusoulor.fr/manifest.json
- [ ] https://lesgitesdusoulor.fr/logo-gs.png
- [ ] https://lesgitesdusoulor.fr/logo-full.png

### Fonctionnalités
- [ ] Navigation fonctionne
- [ ] Liens internes fonctionnent
- [ ] Liens externes s'ouvrent
- [ ] Images s'affichent toutes
- [ ] Formulaire de contact fonctionne
- [ ] Bouton de réservation fonctionne
- [ ] Animations fonctionnent
- [ ] Pas d'erreur console

### Mode Admin
- [ ] Cadenas 🔒 visible en bas à gauche
- [ ] Modal de connexion s'ouvre
- [ ] Login fonctionne avec `admin123`
- [ ] Barre admin s'affiche en haut
- [ ] Clic sur texte ouvre l'éditeur
- [ ] Clic sur image ouvre l'éditeur
- [ ] Sauvegarde fonctionne
- [ ] Déconnexion fonctionne

---

## 📱 Tests responsive

### Mobile
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablette iPad
- [ ] Affichage correct
- [ ] Pas de débordement horizontal
- [ ] Texte lisible
- [ ] Boutons cliquables
- [ ] Navigation mobile fonctionne

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Résolution 1920x1080
- [ ] Résolution 1366x768

---

## 🎯 Google Search Console

### Configuration initiale
- [ ] Compte Google créé/utilisé
- [ ] Aller sur : https://search.google.com/search-console
- [ ] Ajouter propriété : `https://lesgitesdusoulor.fr`
- [ ] Méthode : Balise HTML (déjà en place)
- [ ] Cliquer sur "Vérifier"
- [ ] Statut : "Propriété vérifiée" ✅

### Sitemap
- [ ] Aller dans "Sitemaps"
- [ ] Entrer : `sitemap.xml`
- [ ] Cliquer "Envoyer"
- [ ] Attendre statut "Réussite" (24-48h)

### Indexation
- [ ] Dans la barre de recherche : entrer l'URL du site
- [ ] Cliquer "Demander une indexation"
- [ ] Attendre validation
- [ ] Confirmer la demande
- [ ] Attendre indexation (24-72h)

### Vérification
- [ ] Dans Google : `site:lesgitesdusoulor.fr`
- [ ] Le site doit apparaître (après 24-72h)

---

## 🏢 Google Business Profile

### Création du profil
- [ ] Aller sur : https://business.google.com
- [ ] Cliquer "Gérer maintenant"
- [ ] Rechercher ou créer "Les Gîtes du Soulor"
- [ ] Confirmer l'emplacement

### Informations
- [ ] **Nom** : Les Gîtes du Soulor
- [ ] **Catégorie** : Location de gîtes
- [ ] **Adresse** : Col du Soulor, 65400 Arrens-Marsous
- [ ] **Téléphone** : 06 45 79 59 39
- [ ] **Email** : spanazol@wanadoo.fr
- [ ] **Site web** : https://lesgitesdusoulor.fr
- [ ] **GPS** : 42.9647, -0.2097

### Contenu
- [ ] Description complète (750 caractères)
- [ ] 10+ photos de qualité
- [ ] Horaires d'arrivée/départ
- [ ] Attributs (WiFi, parking, etc.)
- [ ] Liens réseaux sociaux

### Validation
- [ ] Vérification par courrier (ou téléphone)
- [ ] Code de vérification saisi
- [ ] Profil activé ✅

---

## 📱 Réseaux sociaux

### Instagram
- [ ] Profil @les_gites_du_soulor créé
- [ ] Bio avec lien vers site
- [ ] Photo de profil : logo
- [ ] 5+ posts initiaux
- [ ] Hashtags dans bio
- [ ] Story à la une "Réservation"

### TikTok
- [ ] Profil @les_gites_du_soulor créé
- [ ] Bio avec lien vers site
- [ ] Photo de profil : logo
- [ ] 3+ vidéos initiales
- [ ] Hashtags pertinents

---

## 🧪 Validation SEO

### Test Rich Results
- [ ] Aller sur : https://search.google.com/test/rich-results
- [ ] Entrer : `https://lesgitesdusoulor.fr`
- [ ] Vérifier : "Aucune erreur"
- [ ] Données structurées valides ✅

### Test Open Graph
- [ ] Aller sur : https://www.opengraph.xyz/
- [ ] Entrer l'URL du site
- [ ] Vérifier l'aperçu Facebook/Instagram
- [ ] Image, titre, description corrects ✅

### PageSpeed Insights
- [ ] Aller sur : https://pagespeed.web.dev/
- [ ] Entrer l'URL du site
- [ ] Score Performance : 90+ ✅
- [ ] Score SEO : 100 ✅
- [ ] Score Accessibility : 95+ ✅
- [ ] Mobile-Friendly : 100% ✅

### Autres tests
- [ ] Sitemap XML validator
- [ ] Robots.txt validator
- [ ] Meta tags checker
- [ ] Broken links checker

---

## 📊 Analytics (Optionnel)

### Google Analytics
- [ ] Compte créé
- [ ] Propriété créée pour le site
- [ ] Code de tracking installé
- [ ] Données arrivent

### Autres outils
- [ ] Hotjar (heatmaps)
- [ ] Matomo (analytics alternatif)
- [ ] Microsoft Clarity (gratuit)

---

## 📧 Communication

### Informer le client
- [ ] Email avec URL du site
- [ ] Guide d'utilisation mode admin
- [ ] Login et mot de passe admin
- [ ] Liens vers Search Console
- [ ] Liens vers Business Profile
- [ ] Documentation complète

### Formation
- [ ] Démonstration du mode admin
- [ ] Comment modifier textes
- [ ] Comment modifier images
- [ ] Comment sauvegarder
- [ ] Comment répondre aux avis Google
- [ ] Comment publier sur réseaux sociaux

---

## 📚 Documentation fournie

- [ ] `GUIDE_SEO_COMPLET.md`
- [ ] `GUIDE_GERANT_SEO.md`
- [ ] `MODE_ADMIN_GUIDE.md`
- [ ] `GUIDE_REFERENCEMENT_GOOGLE.md`
- [ ] `GUIDE_DOMAINE_OVHCLOUD.md`
- [ ] `SEO_CONFIGURATION_FINALE.md`
- [ ] Cette checklist

---

## 🔄 Maintenance programmée

### Semaine 1
- [ ] Vérifier indexation Google
- [ ] Surveiller erreurs Search Console
- [ ] Tester mode admin avec le gérant
- [ ] Répondre aux premières questions

### Mois 1
- [ ] Analyser premières stats Search Console
- [ ] Optimiser selon retours utilisateurs
- [ ] Ajouter contenu si nécessaire
- [ ] Vérifier performances

### Mois 3
- [ ] Audit SEO complet
- [ ] Ajustements si nécessaire
- [ ] Formation rappel au gérant
- [ ] Bilan des résultats

---

## ✅ Validation finale

### Signatures

**Développeur** : _________________  
Date : _________________  
Statut : ☐ Tous les tests OK

**Client** : _________________  
Date : _________________  
Statut : ☐ Site validé et accepté

---

## 🎉 Site mis en ligne !

Une fois cette checklist complétée :
- ✅ Le site est en ligne
- ✅ Le SEO est configuré
- ✅ Google peut indexer
- ✅ Le gérant peut modifier
- ✅ Le site est documenté

**Félicitations ! 🚀**

---

**Dernière mise à jour** : 3 novembre 2024  
**Version** : 1.0
