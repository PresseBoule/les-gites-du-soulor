# 📁 Dossier Public - Fichiers SEO

Ce dossier contient tous les fichiers statiques et SEO de votre site.

---

## 📄 Fichiers présents

### 🔍 SEO et indexation

#### `sitemap.xml`
**Rôle** : Liste toutes les pages de votre site pour Google
- ✅ Automatiquement servi par Netlify
- 🔗 Accessible sur : `https://lesgitesdusoulor.fr/sitemap.xml`
- 📅 Mettez à jour la date `<lastmod>` après chaque modification importante

#### `robots.txt`
**Rôle** : Indique aux moteurs de recherche quelles pages indexer
- ✅ Permet l'indexation de tout le site
- ❌ Bloque uniquement `/admin/` et `/api/`
- 🔗 Accessible sur : `https://lesgitesdusoulor.fr/robots.txt`

#### `manifest.json`
**Rôle** : Permet d'installer le site comme application mobile (PWA)
- 📱 Nom de l'app : "Les Gîtes du Soulor"
- 🎨 Couleurs : Bleu (#3a4a5a) et Or (#c4a574)
- 🖼️ Icônes : Utilise les logos du site

---

### 🖼️ Logos et icônes

#### `logo-gs.png`
- Logo "GS" principal
- Utilisé comme favicon
- Taille : 512x512px
- Format : PNG avec transparence

#### `logo-gs.svg`
- Version vectorielle du logo "GS"
- Utilisé pour l'affichage adaptatif
- Qualité parfaite à toutes les tailles

#### `logo-full.png`
- Logo complet avec texte
- Utilisé pour les partages sociaux
- Taille : 1200x630px (format Open Graph)

#### `logo-mountains.png`
- Logo avec montagnes
- Variante visuelle
- Taille : Haute résolution

#### `favicon.svg`
- Icône du site dans l'onglet du navigateur
- Format vectoriel
- Compatible tous navigateurs modernes

---

## ⚠️ Fichiers à NE PAS modifier

### ❌ Ne modifiez JAMAIS directement :

- `robots.txt` (sauf instruction spéciale)
- `manifest.json` (sauf changement de marque)
- Les logos (sauf remplacement)

### ✅ Vous POUVEZ modifier :

- `sitemap.xml` : Uniquement pour mettre à jour la date `<lastmod>`

**Comment mettre à jour la date du sitemap** :
```xml
<lastmod>2024-11-03</lastmod>  <!-- ← Changez cette date -->
```

---

## 🔄 Workflow de déploiement

### Ce qui se passe automatiquement :

1. **Vous modifiez** un fichier dans ce dossier
2. **Vous commitez** sur Git (ou via l'interface)
3. **Netlify déploie** automatiquement
4. **Le fichier est servi** à la racine du site

### Exemples :

- `/public/sitemap.xml` → `https://lesgitesdusoulor.fr/sitemap.xml`
- `/public/robots.txt` → `https://lesgitesdusoulor.fr/robots.txt`
- `/public/logo-gs.png` → `https://lesgitesdusoulor.fr/logo-gs.png`

---

## 🧪 Tests après déploiement

### Vérifiez que tout fonctionne :

```bash
# Sitemap
https://lesgitesdusoulor.fr/sitemap.xml

# Robots.txt
https://lesgitesdusoulor.fr/robots.txt

# Logos
https://lesgitesdusoulor.fr/logo-gs.png
https://lesgitesdusoulor.fr/logo-full.png
https://lesgitesdusoulor.fr/logo-mountains.png

# Manifest
https://lesgitesdusoulor.fr/manifest.json
```

### Outils de validation :

- **Sitemap** : https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Robots.txt** : https://support.google.com/webmasters/answer/6062598
- **Open Graph** : https://www.opengraph.xyz/
- **Manifest** : https://manifest-validator.appspot.com/

---

## 📊 Impact SEO

### Sitemap.xml
- 🎯 **Impact** : ÉLEVÉ
- ⏱️ **Effet** : 24-48h
- 📈 **Améliore** : Indexation Google

### Robots.txt
- 🎯 **Impact** : MOYEN
- ⏱️ **Effet** : 1-7 jours
- 📈 **Améliore** : Contrôle du crawl

### Manifest.json
- 🎯 **Impact** : BAS (SEO)
- ⏱️ **Effet** : Immédiat
- 📈 **Améliore** : UX mobile, PWA

### Logos
- 🎯 **Impact** : MOYEN
- ⏱️ **Effet** : Immédiat
- 📈 **Améliore** : Partages sociaux, branding

---

## 🔒 Sécurité

### Fichiers publics
Tous les fichiers de ce dossier sont **publiquement accessibles**.

### Ne mettez JAMAIS :
- ❌ Mots de passe
- ❌ Clés API
- ❌ Données sensibles
- ❌ Fichiers privés

---

## 📚 Documentation complète

Pour plus d'informations :
- 📖 `/GUIDE_SEO_COMPLET.md` - Guide SEO complet
- 👨‍💼 `/GUIDE_GERANT_SEO.md` - Guide pour le gérant
- 🚀 `/GUIDE_REFERENCEMENT_GOOGLE.md` - Google Search Console

---

**Créé le** : 3 novembre 2024  
**Dernière mise à jour** : 3 novembre 2024
