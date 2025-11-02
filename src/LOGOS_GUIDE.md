# 🎨 Guide d'intégration des logos - Les Gîtes du Soulor

## 📋 Logos à remplacer

Vous devez remplacer les 3 fichiers suivants dans le dossier `/public` :

### 1. **logo-gs.png** (PRIORITAIRE ⭐)
- **Utilisation** : Favicon (icône dans l'onglet du navigateur et les résultats Google)
- **Logo à utiliser** : Le logo "GS" doré sur fond bleu
- **Tailles recommandées** : 
  - Minimum : 192x192 pixels
  - Idéal : 512x512 pixels
  - Format : PNG avec fond transparent OU avec le fond bleu #3a4a5a
- **Impact SEO** : ⭐⭐⭐⭐⭐ C'est le logo qui apparaîtra dans les résultats Google !

### 2. **logo-full.png**
- **Utilisation** : Partages sur réseaux sociaux (Facebook, LinkedIn, Twitter)
- **Logo à utiliser** : Le logo complet "LES GÎTES DU SOULOR" avec les montagnes
- **Tailles recommandées** : 
  - Idéal : 1200x630 pixels (ratio Open Graph)
  - Minimum : 800x420 pixels
  - Format : PNG
- **Impact SEO** : ⭐⭐⭐⭐ Visibilité maximale lors des partages sociaux

### 3. **logo-mountains.png**
- **Utilisation** : Logo secondaire, header, emails
- **Logo à utiliser** : Le logo avec les montagnes et la maison
- **Tailles recommandées** : 
  - Format : PNG avec fond transparent
  - Taille libre (minimum 300x300 pixels)
- **Impact SEO** : ⭐⭐⭐ Complète votre identité visuelle

---

## 🚀 Instructions de remplacement

### Méthode 1 : Via Figma Make (Recommandé)
1. Exportez vos logos depuis Figma en PNG
2. Renommez-les selon les noms ci-dessus
3. Remplacez les fichiers dans `/public`

### Méthode 2 : Formats optimaux
Pour chaque logo, créez plusieurs versions :

**Pour logo-gs.png** (le plus important) :
```
/public/logo-gs.png          → 512x512px (PNG)
/public/logo-gs-192.png      → 192x192px (PNG) 
/public/logo-gs-32.png       → 32x32px (PNG)
/public/logo-gs-16.png       → 16x16px (PNG)
```

**Pour logo-full.png** :
```
/public/logo-full.png        → 1200x630px (PNG)
```

**Pour logo-mountains.png** :
```
/public/logo-mountains.png   → Format libre (PNG)
```

---

## ✅ Vérification après upload

Une fois les logos uploadés, vérifiez :

### 1. Favicon (logo GS) ✓
- [ ] Ouvrez votre site dans un navigateur
- [ ] Vérifiez que le logo "GS" apparaît dans l'onglet
- [ ] Testez sur mobile (ajoutez à l'écran d'accueil)

### 2. Open Graph (partages sociaux) ✓
- [ ] Utilisez l'outil [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Collez votre URL : `https://www.gites-soulor.com`
- [ ] Vérifiez que le logo complet s'affiche

### 3. Google Search Console ✓
- [ ] Dans quelques jours, vérifiez que le logo GS apparaît dans les résultats Google
- [ ] Utilisez [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 🎯 Optimisations SEO appliquées

### ✅ Fichiers créés/modifiés
- `/public/manifest.json` → Configuration PWA avec vos logos
- `/index.html` → Métadonnées complètes (favicon, Open Graph, Schema.org)
- Tous les formats d'icônes (iOS, Android, Windows)

### ✅ Métadonnées Schema.org
Le logo "GS" est déclaré comme logo officiel de votre entreprise dans les données structurées JSON-LD, ce qui aide Google à l'associer à votre marque.

### ✅ Multi-plateforme
- **Desktop** : Favicon dans tous les navigateurs
- **Mobile iOS** : Apple Touch Icons
- **Mobile Android** : PWA Icons
- **Réseaux sociaux** : Open Graph + Twitter Cards
- **Google** : Logo dans les résultats de recherche

---

## 📱 URLs des logos (à mettre à jour après upload)

Une fois les vrais logos uploadés, vérifiez que ces URLs fonctionnent :
- `https://www.gites-soulor.com/logo-gs.png`
- `https://www.gites-soulor.com/logo-full.png`
- `https://www.gites-soulor.com/logo-mountains.png`

---

## 🔍 Outils de test recommandés

1. **Favicon** : https://realfavicongenerator.net/favicon_checker
2. **Open Graph** : https://www.opengraph.xyz/
3. **Twitter Cards** : https://cards-dev.twitter.com/validator
4. **Schema.org** : https://validator.schema.org/
5. **Google Rich Results** : https://search.google.com/test/rich-results

---

## 💡 Conseils supplémentaires

### Pour maximiser la visibilité Google :
1. **Cohérence** : Utilisez toujours le logo "GS" comme favicon
2. **Qualité** : Logos en haute résolution (PNG 512x512 minimum)
3. **Référencement local** : Vérifiez votre fiche Google Business Profile
4. **Patience** : Google peut prendre 2-4 semaines pour indexer le nouveau logo

### Pour les réseaux sociaux :
1. Partagez votre site sur Facebook/Twitter après upload des logos
2. Utilisez les debuggers pour forcer le rafraîchissement du cache
3. Le logo complet (logo-full.png) sera affiché automatiquement

---

## ⚠️ Important

- **Ne supprimez pas** le fichier `/public/favicon.svg` pour l'instant (backup)
- **Testez** sur plusieurs navigateurs après upload
- **Videz le cache** de votre navigateur pour voir les changements

---

## 📞 Support

Si vous avez des questions sur l'intégration des logos ou si quelque chose ne fonctionne pas comme prévu, contactez votre développeur ou consultez la documentation Google Search Console.

---

**Date de création** : Novembre 2024  
**Dernière mise à jour** : Novembre 2024  
**Statut** : ✅ Configuration SEO optimale en place - En attente des vrais logos
