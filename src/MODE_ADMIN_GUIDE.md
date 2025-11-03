# Guide du Mode Administration

## 🔐 Comment accéder au mode admin

1. **Cliquez sur le cadenas 🔒** situé en bas de page (dans le footer)
2. **Entrez le mot de passe** : `admin123`
3. Le mode administration s'active et une **barre dorée** apparaît en haut de la page

## ✏️ Comment modifier le contenu

### Modifier un texte
1. **Survolez un texte** avec votre souris
2. Un **contour doré** et une **icône d'édition** apparaissent
3. **Cliquez sur le texte** pour le modifier
4. Une **zone d'édition** s'ouvre
5. **Modifiez le texte** comme vous le souhaitez
6. Cliquez sur le **bouton vert ✓** pour sauvegarder
7. Ou cliquez sur le **bouton rouge ✗** pour annuler

**Raccourcis clavier :**
- `Entrée` : Sauvegarder (pour les textes courts)
- `Échap` : Annuler

### Modifier une image
1. **Survolez une image** avec votre souris
2. Un **overlay sombre** avec "Modifier l'image" apparaît
3. **Cliquez sur l'image**
4. Une **fenêtre d'édition** s'ouvre
5. **Collez l'URL de votre nouvelle image**
   - 💡 **Astuce** : Uploadez vos images sur [PostImage](https://postimg.cc/) ou [ImgBB](https://imgbb.com/)
   - Copiez l'URL "Direct Link"
6. Un **aperçu** de l'image s'affiche
7. Cliquez sur **"Sauvegarder"** pour confirmer

## 💾 Sauvegarder vos modifications

1. Après avoir modifié du contenu, un **indicateur "Modifications non sauvegardées"** apparaît dans la barre admin
2. Cliquez sur le bouton **"Sauvegarder"** dans la barre admin (en haut)
3. Un message **"Sauvegardé !"** confirme que vos changements sont enregistrés
4. ⚠️ **Important** : Les modifications ne sont définitives qu'après avoir cliqué sur "Sauvegarder"

## 🐛 Mode Debug

1. Cliquez sur le bouton **🐛** dans la barre admin
2. Vous verrez :
   - L'**état actuel du contenu** (nombre d'éléments chargés)
   - Un bouton **"Réinitialiser tout"** pour revenir aux valeurs par défaut

### Réinitialiser le contenu
Si quelque chose ne fonctionne pas correctement :
1. Activez le **mode debug** (bouton 🐛)
2. Cliquez sur **"Réinitialiser tout"**
3. Confirmez l'action
4. La page se recharge avec les **données par défaut**

## 🚪 Quitter le mode admin

1. Cliquez sur le bouton **"Quitter"** dans la barre admin
2. Le mode admin se désactive
3. Les modifications sauvegardées restent en place

## 📝 Éléments modifiables

### Textes éditables
- ✅ Titres de sections
- ✅ Descriptions
- ✅ Tarifs et prix
- ✅ Informations de contact
- ✅ Noms des gîtes
- ✅ Équipements

### Images éditables
- ✅ Image principale du hero
- ✅ Image secondaire
- ✅ Photos des gîtes (prochainement)
- ✅ Photos du bien-être (prochainement)

## ⚠️ Limitations actuelles

- Les **galeries d'images** des gîtes ne sont pas encore éditables en direct
- Pour modifier les galeries, contactez votre développeur
- Les **icônes** ne sont pas modifiables (Calendrier, Maison, etc.)

## 🆘 Dépannage

### Le mode admin ne s'active pas
- Vérifiez que vous utilisez le bon mot de passe : `admin123`
- Rafraîchissez la page (F5)
- Vérifiez votre connexion internet

### Les modifications ne s'affichent pas
- Avez-vous cliqué sur **"Sauvegarder"** ?
- Rafraîchissez la page pour voir les changements sauvegardés

### Une image ne s'affiche pas
- Vérifiez que l'URL est correcte
- Vérifiez que l'URL commence par `https://`
- Utilisez des services d'hébergement d'images fiables (PostImage, ImgBB)

### Les tarifs ont disparu
1. Activez le mode debug (🐛)
2. Vérifiez que "Tarifs: X items" s'affiche
3. Si c'est "null ou undefined", cliquez sur **"Réinitialiser tout"**

## 💡 Conseils

- **Sauvegardez régulièrement** vos modifications
- **Testez vos changements** avant de quitter le mode admin
- **Utilisez des images optimisées** (pas trop lourdes)
- **Gardez une copie** des textes importants avant de les modifier
- **Utilisez le mode debug** si quelque chose ne fonctionne pas

## 🔒 Sécurité

- Ne partagez **jamais le mot de passe admin** publiquement
- Pour changer le mot de passe, contactez votre développeur
- Les modifications sont **définitives** après sauvegarde
