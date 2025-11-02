# 🎯 Upload des logos - Guide Final

## ✅ Configuration terminée !

Tout est prêt pour afficher vos logos. Il ne reste plus qu'à remplacer les fichiers placeholders par les vraies images.

---

## 📁 Fichiers à remplacer dans `/public/`

### 1. **logo-gs.png** ⭐ (PRIORITAIRE)
**Emplacement** : `/public/logo-gs.png`  
**Description** : Logo "GS" doré sur fond bleu  
**Utilisation** :
- Favicon (icône dans l'onglet Google) ✅
- Navigation du site (en haut à gauche) ✅
- Icônes mobile iOS/Android ✅

**Specs recommandées** :
- Format : PNG
- Taille : 512x512 pixels
- Fond : Transparent OU bleu #3a4a5a
- Poids : < 100 KB

---

### 2. **logo-full.png**
**Emplacement** : `/public/logo-full.png`  
**Description** : Logo complet "LES GÎTES DU SOULOR" avec montagnes  
**Utilisation** :
- Partages Facebook ✅
- Partages LinkedIn ✅
- Partages Twitter/X ✅
- Open Graph ✅

**Specs recommandées** :
- Format : PNG ou JPG
- Taille : 1200x630 pixels (ratio 1.91:1)
- Poids : < 500 KB

---

### 3. **logo-mountains.png**
**Emplacement** : `/public/logo-mountains.png`  
**Description** : Logo avec montagnes et maison  
**Utilisation** :
- Données structurées Schema.org ✅
- Usage secondaire

**Specs recommandées** :
- Format : PNG
- Taille : Flexible (minimum 300x300px)
- Fond : Transparent
- Poids : < 200 KB

---

## 🚀 Comment uploader les logos

### Option 1 : Via Figma Make (interface web)
1. Cliquez sur le dossier `/public/` dans l'explorateur de fichiers
2. Uploadez vos 3 logos PNG
3. Assurez-vous qu'ils portent exactement ces noms :
   - `logo-gs.png`
   - `logo-full.png`
   - `logo-mountains.png`

### Option 2 : Depuis Figma
1. Ouvrez votre design Figma
2. Sélectionnez chaque logo
3. Exportez en PNG avec les tailles recommandées
4. Renommez selon les noms ci-dessus
5. Uploadez dans `/public/`

---

## ✨ Où les logos apparaîtront

### Logo GS (en haut à gauche)
```
┌────────────────────────────────────────┐
│  [GS] LES GÎTES DU SOULOR     [Menu]   │  ← Navigation
└────────────────────────────────────────┘
```

### Logo GS (favicon Google)
```
🔍 Google:
   [GS] Les Gîtes du Soulor - Location...
        www.gites-soulor.com
```

### Logo complet (réseaux sociaux)
```
📱 Facebook/LinkedIn:
   ┌──────────────────────────────────┐
   │  [LOGO COMPLET AVEC MONTAGNES]   │
   │  Les Gîtes du Soulor             │
   │  Location de gîtes...            │
   └──────────────────────────────────┘
```

---

## ✅ Checklist après upload

- [ ] Rechargez le site (Ctrl+F5 pour vider le cache)
- [ ] Vérifiez le logo dans la navigation (haut gauche)
- [ ] Vérifiez le favicon dans l'onglet du navigateur
- [ ] Testez un partage sur Facebook avec [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Testez sur mobile (ajoutez à l'écran d'accueil)

---

## 🎨 Optimisation des logos (si besoin)

Si vos logos sont trop lourds, utilisez :
- [TinyPNG](https://tinypng.com/) - Compression PNG
- [Squoosh](https://squoosh.app/) - Optimisation Google
- [ImageOptim](https://imageoptim.com/) - Mac uniquement

---

## ⚡ Effet immédiat vs Délai

| Endroit | Délai d'apparition |
|---------|-------------------|
| Navigation du site | ✅ Immédiat |
| Favicon navigateur | ✅ Immédiat (après vidage cache) |
| Facebook/LinkedIn | ⏳ 24-48h (utiliser debugger) |
| Google Search | ⏳ 2-4 semaines |
| Google Business | ⏳ 1-2 semaines |

---

## 🔧 Déjà configuré pour vous

✅ Navigation avec logo GS  
✅ Favicon multi-tailles (16, 32, 192, 512px)  
✅ Apple Touch Icons (iOS)  
✅ Android PWA Icons  
✅ Open Graph (Facebook, LinkedIn)  
✅ Twitter Cards  
✅ Schema.org avec logo  
✅ Manifest.json  

---

## 💡 Astuce Pro

Pour voir le logo immédiatement après upload :
1. Uploadez les fichiers
2. Ouvrez le navigateur en navigation privée
3. Rechargez la page
4. Le logo devrait apparaître !

Si ça ne fonctionne pas, videz le cache :
- Chrome : Ctrl+Shift+Delete
- Firefox : Ctrl+Shift+Delete
- Safari : Cmd+Option+E

---

## 📞 Problèmes ?

### Le logo n'apparaît pas dans la navigation
→ Vérifiez que le fichier s'appelle bien `logo-gs.png` (pas `Logo-GS.png` ou autre)

### Le favicon ne change pas
→ Videz le cache du navigateur et rechargez

### Le logo Facebook ne s'affiche pas
→ Utilisez le [Facebook Debugger](https://developers.facebook.com/tools/debug/) pour forcer le rafraîchissement

---

**Statut** : 🟢 Prêt pour l'upload des logos  
**Prochaine étape** : Uploader les 3 fichiers PNG dans `/public/`
