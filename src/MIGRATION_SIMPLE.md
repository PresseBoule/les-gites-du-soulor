# ✅ Migration Simple - 5 étapes

**Temps** : 15 minutes  
**Risque** : Minimal

---

## 🎯 Ce que vous devez faire

### Étape 1 : Sauvegarde (2 min)

```bash
git checkout -b backup-avant-seo
git push origin backup-avant-seo
git checkout main
```

✅ **Sauvegarde créée** - Vous pouvez revenir en arrière à tout moment

---

### Étape 2 : Télécharger les fichiers (1 min)

1. Dans Figma Make, cliquez sur **"Download Project"**
2. Extrayez le ZIP sur votre ordinateur
3. Vous avez maintenant 2 dossiers :
   - 📁 **Ancien** (votre projet GitHub actuel)
   - 📁 **Nouveau** (projet téléchargé de Figma Make)

---

### Étape 3 : Copier les fichiers corrigés (5 min)

**Copiez UNIQUEMENT ces 5 fichiers du nouveau vers l'ancien** :

```
Nouveau → Ancien

1. components/admin/EditableGiteGallery.tsx
2. components/admin/AdminToolbar.tsx  
3. components/ui/dialog.tsx
4. components/WellnessSection.tsx
5. README.md
```

**Comment ?**
- Ouvrez les 2 dossiers côte à côte
- Copiez-collez chaque fichier un par un
- Confirmez le remplacement

---

### Étape 4 : Copier les nouveaux guides (5 min)

**Copiez TOUS les fichiers .md de la racine** :

```
Nouveau → Ancien

Copiez tous les fichiers qui se terminent par .md :
- START_HERE_SEO.md
- GUIDE_SEO_COMPLET.md
- GUIDE_GERANT_SEO.md
- etc. (tous les .md)
```

**ET** copiez ce fichier dans /public :
```
public/README_SEO.md
```

**Comment ?**
- Sélectionnez tous les .md du nouveau dossier
- Copiez-les dans l'ancien dossier
- Ils ne remplaceront que le README.md

---

### Étape 5 : Tester et Push (2 min)

```bash
# Dans votre projet
npm run dev
```

**Vérifiez** :
- ✅ Le site se charge sans erreur
- ✅ Pas d'erreur dans la console
- ✅ Le mode admin fonctionne

**Si tout est OK** :
```bash
git add .
git commit -m "Ajout SEO complet + corrections bugs"
git push origin main
```

✅ **TERMINÉ !**

---

## 📋 Checklist visuelle

- [ ] Sauvegarde créée (backup-avant-seo)
- [ ] Projet téléchargé depuis Figma Make
- [ ] 5 fichiers React copiés
- [ ] Tous les .md copiés
- [ ] Test local réussi (npm run dev)
- [ ] Pas d'erreur console
- [ ] Push sur GitHub
- [ ] Netlify redéploie automatiquement
- [ ] Test du sitemap : https://lesgitesdusoulor.fr/sitemap.xml

---

## ⚠️ Fichiers à NE PAS copier

**N'écrasez JAMAIS ces fichiers** :

```
❌ package.json
❌ package-lock.json
❌ vite.config.ts
❌ tsconfig.json
❌ .gitignore
❌ node_modules/ (ne copiez JAMAIS ce dossier)
```

**Gardez ceux de votre projet actuel !**

---

## 🛡️ Si quelque chose ne va pas

```bash
# Retour immédiat à l'état d'avant
git checkout backup-avant-seo
git push origin main --force
```

Ou contactez-moi !

---

## 🎯 Résumé ultra-rapide

```
1. Backup        → git checkout -b backup
2. Download      → Télécharger de Figma Make
3. Copier        → 5 fichiers .tsx + tous les .md
4. Tester        → npm run dev
5. Push          → git push

Total : 15 minutes
```

---

**C'est tout !** Simple et sûr. 🚀
