# Guide : Recréer le design "Les Gîtes du Soulor" dans Figma Design

Ce guide vous explique étape par étape comment recréer visuellement le design et simuler les animations dans Figma Design.

---

## 🎨 PARTIE 1 : Configuration de base

### 1.1 Créer le document
1. Ouvrez Figma Design
2. Créez un nouveau fichier (`Cmd/Ctrl + N`)
3. Créez un Frame : `F` puis cliquez et glissez
   - Nom : "Desktop"
   - Dimensions : **1440 × 3000px** (page complète)
   - Fond : `#3a4a5a`

### 1.2 Palette de couleurs
Créez des styles de couleurs (clic droit → "Create style") :

| Nom du style | Code couleur | Usage |
|--------------|--------------|-------|
| `bg-primary` | `#3a4a5a` | Fond principal |
| `bg-dark` | `#2d3843` | Fond sombre |
| `bg-darker` | `#4a5a6a` | Fond plus clair |
| `accent-gold` | `#c4a574` | Accent doré |
| `accent-blue` | `#5a7a9f` | Accent bleu |
| `text-white` | `#ffffff` | Texte |
| `text-muted` | `#ffffff` à 60% opacité | Texte secondaire |

---

## 🌄 PARTIE 2 : Fond avec dégradé

### 2.1 Créer le dégradé de fond
1. Sélectionnez votre Frame "Desktop"
2. Dans le panneau de droite → **Fill**
3. Changez de "Solid" à **"Linear"** (dégradé linéaire)
4. Configurez le dégradé :
   - **Point 1** (en haut à gauche) : `#2d3843`
   - **Point 2** (au milieu) : `#3a4a5a`
   - **Point 3** (en bas à droite) : `#4a5a6a`
5. Ajustez l'angle du dégradé : environ **135°** (diagonal)

### 2.2 Ajouter les éléments flottants (bulles lumineuses)
1. Créez une **Ellipse** (`O`) : 200 × 200px
2. Remplissage : `#c4a574` avec **opacité 5%**
3. Effet → **Layer blur** : **100px**
4. Dupliquez (`Cmd/Ctrl + D`) et variez :
   - Taille : 150px, 250px, 180px
   - Couleurs : `#5a7a9f` (opacité 5%), `#ffffff` (opacité 5%)
   - Positions : dispersées sur toute la page

> 💡 **Astuce animation** : Pour simuler le mouvement, créez plusieurs frames et déplacez légèrement les bulles, puis utilisez le prototype avec "Smart Animate"

---

## 🏔️ PARTIE 3 : Pattern de montagnes SVG

### 3.1 Créer les montagnes vectorielles
1. Outil **Pen** (`P`)
2. Dessinez une silhouette de montagne (formes triangulaires irrégulières)
3. Largeur : **1440px**, Hauteur : **200px**
4. Position : en bas du hero section
5. Remplissage : `#ffffff` avec **opacité 10%**

**Technique rapide** :
- Créez plusieurs triangles avec l'outil polygone
- Variez les hauteurs : 80px, 120px, 60px, 140px
- Disposez-les côte à côte en se chevauchant
- Sélectionnez tout → Union (dans la barre du haut)

### 3.2 Ajouter de la profondeur
1. Dupliquez le calque de montagnes
2. Déplacez légèrement vers le bas (20px)
3. Changez l'opacité à **5%**
4. Créez 2-3 couches pour l'effet de profondeur

---

## 📝 PARTIE 4 : Header (Navigation)

### 4.1 Structure
1. Créez un Rectangle : **1440 × 80px**
2. Position : En haut (X: 0, Y: 0)
3. Remplissage initial : Transparent

### 4.2 État "scrollé" (version avec fond)
1. Dupliquez le header sur une nouvelle frame "Header-Scrolled"
2. Ajoutez un fond :
   - Couleur : `#2d3843`
   - Opacité : **95%**
3. Effet → **Background blur** : **20px** (effet glassmorphism)
4. Effet → **Drop shadow** :
   - Y: 4px, Blur: 20px
   - Couleur: noir à 10% opacité

### 4.3 Texte de navigation
Texte "LES GITES DU SOULOR" :
- Police : **Serif** (Playfair Display, Merriweather, ou autre serif)
- Taille : **14px**
- Letterspacing : **0.2em** (important !)
- Couleur : `#ffffff`

Liens de navigation :
- Police : **Sans-serif** (Inter, SF Pro)
- Taille : **14px**
- Couleur : `#ffffff` à **80% opacité**
- Hover : **100% opacité** + translation Y: **-2px**

---

## 🎯 PARTIE 5 : Titre "LES GITES DU SOULOR"

### 5.1 Texte avec dégradé
1. Créez un texte (`T`) : "LES GITES DU SOULOR"
   - Police : **Serif** (Playfair Display recommandé)
   - Taille : **72px** (ou 96px pour desktop)
   - Letterspacing : **0.2em**
   - Line height : **1.2**
   - Alignement : **Centré**

2. Appliquez un dégradé au texte :
   - Sélectionnez le texte
   - Fill → **Linear gradient**
   - Configuration :
     - Gauche : `#ffffff`
     - Milieu : `#c4a574` (50%)
     - Droite : `#ffffff`
   - Angle : **horizontal (0°)**

### 5.2 Ligne décorative sous le titre
1. Créez un Rectangle : **400 × 4px**
2. Position : centré sous le titre (20px d'écart)
3. Fill → **Linear gradient** (horizontal)
   - Gauche : Transparent
   - Milieu : `#c4a574`
   - Droite : Transparent

> 💡 **Animation** : Pour l'effet d'apparition, créez une version à 0% de largeur et utilisez Smart Animate

---

## 🖼️ PARTIE 6 : Image principale avec panneaux

### 6.1 Structure à 3 colonnes

**Panneau gauche** :
1. Rectangle : **80 × 400px**
2. Remplissage → **Linear gradient** :
   - Direction : diagonal (haut-gauche → bas-droite)
   - Point 1 : `#c4a574`
   - Point 2 : `#b89560`
3. Border radius : **24px** (côté gauche uniquement)
4. Effet → **Drop shadow** :
   - X: 0, Y: 8px, Blur: 24px
   - Couleur : noir à 30%

**Panneau droit** : Même chose mais inversé (gradient de `#b89560` → `#c4a574`)

**Image centrale** :
1. Rectangle : **800 × 400px**
2. Fill → **Image** (votre photo de chalet)
3. Superposez un Rectangle avec :
   - Gradient : de transparent → `#2d3843` (60% opacité) en bas
   - Blend mode : **Normal**

### 6.2 Effet de lueur (glow)
1. Créez un Rectangle plus grand : **900 × 480px**
2. Placez-le **derrière** les 3 panneaux
3. Fill → **Linear gradient** radial
   - Centre : `#c4a574` à 20% opacité
   - Bords : Transparent
4. Effet → **Layer blur** : **80px**

### 6.3 Animations sur les panneaux
**Pour simuler le pulse lumineux** :
1. Ajoutez un Rectangle blanc semi-transparent sur le panneau
2. Gradient : de haut en bas (blanc 20% → transparent)
3. Créez 3 frames avec différentes opacités (30%, 60%, 30%)
4. Prototype → Smart Animate avec loop

---

## 💳 PARTIE 7 : Cartes d'information

### 7.1 Structure de carte
Dimensions : **360 × 280px**

1. **Fond de base** :
   - Rectangle avec border radius : **16px**
   - Fill : `#2d3843` à **3% opacité**
   - Stroke : **1px**, couleur `#ffffff` à **5% opacité**

2. **Fond au hover (état interactif)** :
   - Dupliquez la carte
   - Ajoutez un second fill → **Linear gradient**
     - Direction : diagonal
     - Couleurs : `#c4a574` (10% opacité) → Transparent
   - Stroke : `#c4a574` à **30% opacité**

### 7.2 Icône avec cercle dégradé
1. Créez une **Ellipse** : **64 × 64px**
2. Fill → **Linear gradient** (diagonal)
   - `#c4a574` à 20% opacité
   - `#5a7a9f` à 20% opacité
3. Importez une icône (Calendar, Home, Map)
   - Couleur : `#ffffff` à 80% opacité
   - Au hover : `#c4a574`

### 7.3 Texte
**Titre** :
- Police : **16px, Medium**
- Couleur : `#ffffff`
- Hover : `#c4a574`

**Description** :
- Police : **14px, Regular**
- Couleur : `#ffffff` à 60% opacité
- Line height : **1.5**

### 7.4 Effet de levée (hover)
Pour simuler le `-10px` au hover :
1. Créez une variante "Hover" de la carte
2. Déplacez-la de **10px vers le haut**
3. Augmentez légèrement l'ombre :
   - Drop shadow : Y: **16px**, Blur: **32px**

---

## 🏞️ PARTIE 8 : Grande image avec bordure dégradée

### 8.1 Créer la bordure dégradée
**Technique de bordure avec dégradé** :

1. **Rectangle extérieur** : **1000 × 600px**
   - Fill → **Linear gradient**
   - Direction : diagonal (haut-gauche → bas-droite)
   - Couleurs : `#c4a574` → `#5a7a9f` → `#c4a574`
   - Border radius : **24px**

2. **Rectangle intérieur** : **992 × 592px** (8px plus petit)
   - Fill : `#2d3843`
   - Border radius : **20px**
   - Centrez-le parfaitement dans le rectangle extérieur

3. **Image** : **992 × 592px**
   - Placez au-dessus du rectangle intérieur
   - Mask/Clip content

> 💡 Cela crée une bordure de **4px** avec dégradé

### 8.2 Décorations d'angle
1. Créez un **Rectangle** : **48 × 48px**
2. Supprimez le fond
3. Ajoutez un **Stroke** :
   - 2px, couleur `#c4a574` à 50% opacité
4. Border radius : **16px** (top-left uniquement)
5. Positionnez à **16px** du coin en haut à gauche
6. Dupliquez pour le coin bas-droit (inversé)

### 8.3 Effet glow ambiant
1. Rectangle : **1100 × 700px** (plus grand que l'image)
2. Placez **derrière** l'image
3. Fill → **Linear gradient** radial
   - Couleurs : `#5a7a9f` (20%) → `#c4a574` (20%) → Transparent
4. Layer blur : **100px**

### 8.4 Overlay au hover
Créez une variante "Hover" :
1. Ajoutez un Rectangle par-dessus l'image
2. Fill → **Linear gradient** diagonal
   - `#c4a574` (20% opacité) → Transparent → `#5a7a9f` (20%)
3. Blend mode : **Overlay** ou **Soft light**

---

## 🎬 PARTIE 9 : Créer des animations avec Prototype

### 9.1 Animation d'apparition au scroll
Pour simuler le "scroll reveal" :

1. **Créez 2 frames** :
   - Frame 1 : Élément avec `opacity: 0%` + déplacé de **50px vers le bas**
   - Frame 2 : Élément avec `opacity: 100%` + position normale

2. **Configurez le prototype** :
   - Sélectionnez Frame 1
   - Mode prototype (en haut à droite)
   - Créez une connexion vers Frame 2
   - Trigger : **After delay** (0ms)
   - Animation : **Smart Animate**
   - Duration : **800ms**
   - Easing : **Ease out**

### 9.2 Effet hover sur les cartes
1. Créez une version "Default" et "Hover" de la carte
2. Connectez-les avec :
   - Trigger : **While hovering**
   - Animation : **Smart Animate**
   - Duration : **200ms**

### 9.3 Rotation d'icône (360°)
1. Créez 2 états de l'icône
2. État 2 : Rotation de **360°** (dans le panneau Transform)
3. Connectez avec Smart Animate
4. Duration : **500ms**
5. Easing : **Ease in-out**

### 9.4 Animation des bulles flottantes
1. Créez **4 frames** avec les bulles à différentes positions (mouvement Y de 0 → 30 → 0)
2. Connectez-les en boucle :
   - Frame 1 → Frame 2 (after delay 2s)
   - Frame 2 → Frame 3 (after delay 2s)
   - Frame 3 → Frame 4 (after delay 2s)
   - Frame 4 → Frame 1 (after delay 2s)
3. Smart Animate avec **ease-in-out**

---

## 🔧 PARTIE 10 : Techniques avancées

### 10.1 Glassmorphism (effet de verre)
Pour le header scrollé :
1. Rectangle avec fond `#2d3843` à 95% opacité
2. Effet → **Background blur** : 20px
3. Stroke : 1px blanc à 10% opacité (top ou bottom uniquement)

### 10.2 Ombres douces et réalistes
Configuration d'ombre moderne :
- **Shadow 1** : X: 0, Y: 4px, Blur: 12px, Spread: 0, Couleur: noir 5%
- **Shadow 2** : X: 0, Y: 8px, Blur: 24px, Spread: -8px, Couleur: noir 8%
(Ajoutez plusieurs ombres pour plus de réalisme)

### 10.3 Text gradient (dégradé sur texte)
Méthode alternative si le fill gradient ne fonctionne pas :
1. Créez le texte
2. Créez un Rectangle avec le gradient désiré
3. Positionnez le rectangle par-dessus le texte
4. Sélectionnez les deux
5. Clic droit → **Use as mask**

### 10.4 Auto Layout pour composants réactifs
Pour les cartes et sections :
1. Sélectionnez tous les éléments d'une carte
2. `Shift + A` → Auto Layout
3. Configurez :
   - Direction : **Vertical**
   - Spacing : **16px**
   - Padding : **24px**
   - Alignment : **Center**

---

## ✨ PARTIE 11 : Checklist finale

### Vérifications :
- [ ] Palette de couleurs créée et appliquée
- [ ] Typographie cohérente (serif pour titres, sans-serif pour corps)
- [ ] Espacements multiples de 4 ou 8px
- [ ] Tous les border-radius sont cohérents (16px, 24px)
- [ ] Ombres douces et réalistes
- [ ] Dégradés harmonieux (pas trop forts)
- [ ] Opacités pour créer de la hiérarchie
- [ ] Effets de blur pour profondeur
- [ ] Versions hover créées pour éléments interactifs
- [ ] Prototypes configurés pour preview

### Pour tester :
1. Passez en mode **Présentation** (en haut à droite)
2. Testez les hovers et animations
3. Vérifiez la cohérence visuelle

---

## 🎓 Ressources complémentaires

### Plugins Figma utiles :
- **Noise & Texture** : Ajouter du grain aux fonds
- **Blobs** : Créer des formes organiques pour les bulles
- **Iconify** : Bibliothèque d'icônes
- **Unsplash** : Images gratuites

### Polices recommandées :
- **Titres** : Playfair Display, Cormorant, Cinzel
- **Corps** : Inter, SF Pro Display, Poppins

---

## 📋 Résumé des effets clés

| Effet | Technique Figma |
|-------|----------------|
| Dégradé de fond | Linear gradient avec 3 points de couleur |
| Texte dégradé | Fill → Linear gradient sur texte |
| Glow/Lueur | Rectangle + Layer blur (80-100px) |
| Glassmorphism | Background blur + opacité |
| Bordure dégradée | Rectangle extérieur avec gradient + rectangle intérieur |
| Hover élévation | Variante avec position Y décalée + ombre plus forte |
| Animation scroll | Smart Animate entre état caché/visible |
| Bulles flottantes | Layer blur + faible opacité + gradient radial |
| Ombres modernes | Multiple drop shadows avec différents blur |

---

**Bon courage pour votre design ! 🏔️**

Si vous avez des questions sur une partie spécifique, n'hésitez pas à demander plus de détails.
