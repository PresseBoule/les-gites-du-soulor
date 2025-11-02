# 🌐 Guide d'achat de Nom de Domaine - OVHcloud + Netlify

## 📋 Informations du site
- **Nom** : Les Gîtes du Soulor
- **Netlify** : Déployé ✅
- **Domaine à acheter** : OVHcloud
- **Connexion** : DNS vers Netlify

---

## 🎯 Étape 1 : Choisir votre nom de domaine

### Suggestions de noms de domaine
Voici les meilleures options par ordre de préférence :

1. **gites-soulor.com** ⭐ (Recommandé)
   - Court et mémorisable
   - SEO-friendly pour "gîtes Soulor"
   - Extension .com internationale

2. **gitesdusoulor.fr** ⭐
   - Extension française (.fr)
   - Bon pour le SEO local
   - Sans tirets (plus simple à dire)

3. **gites-du-soulor.com**
   - Nom complet
   - Très explicite

4. **soulor-gites.com**
   - Alternative intéressante
   - Met "Soulor" en premier

5. **lesgitesdusoulor.com**
   - Nom complet avec article
   - Plus long mais très descriptif

### Extensions recommandées
- **.com** → Standard international (8-12€/an)
- **.fr** → Extension française, excellente pour SEO local (8-10€/an)
- **.eu** → Extension européenne (8€/an)

**💡 Conseil** : Achetez .com ET .fr si possible pour protéger votre marque (15-20€/an au total)

---

## 🛒 Étape 2 : Acheter le domaine sur OVHcloud

### 1️⃣ Aller sur OVHcloud
🔗 **https://www.ovhcloud.com/fr/**

### 2️⃣ Rechercher votre domaine
1. Cliquez sur **"Noms de domaine"** dans le menu
2. Entrez le nom souhaité : `gites-soulor`
3. Cliquez sur **"Rechercher"**

### 3️⃣ Vérifier la disponibilité
✅ **Disponible** → Passez à l'étape suivante
❌ **Pris** → Essayez une autre variante

### 4️⃣ Sélectionner le domaine
- Cochez `.com` et/ou `.fr`
- Ajoutez au panier
- **Options importantes** :
  - ✅ Protection WHOIS (masque vos données personnelles) - Gratuit/Inclus
  - ✅ Renouvellement automatique (recommandé)
  - ❌ Email (pas nécessaire pour l'instant)
  - ❌ **Hébergement web → REFUSEZ/DÉCLINEZ** ⚠️

### ⚠️ IMPORTANT : Hébergement web
**OVHcloud va vous proposer un hébergement web (Perso, Pro, etc.)**

🚫 **VOUS N'EN AVEZ PAS BESOIN !**

Pourquoi ?
- ✅ Vous utilisez déjà **Netlify** pour l'hébergement (GRATUIT)
- ✅ Netlify est plus rapide et moderne qu'un hébergement OVH
- ✅ Netlify gère automatiquement SSL, CDN, déploiement
- 💰 L'hébergement OVH coûte 3-10€/mois en plus (inutile)

**Ce qu'il faut acheter :**
- ✅ Nom de domaine uniquement (8-12€/AN)
- ❌ PAS d'hébergement
- ❌ PAS d'email (sauf si vous en voulez vraiment)

**Réponse sur OVHcloud :**
- Si on vous propose "Pack hébergement + domaine" → **Refusez**
- Si on vous demande "Voulez-vous un hébergement ?" → **Non merci**
- Cochez **"Domaine seul"** ou **"Sans hébergement"**

### 5️⃣ Créer un compte OVHcloud
Si vous n'en avez pas :
- Email
- Mot de passe sécurisé
- Informations personnelles (propriétaire du domaine)

**⚠️ IMPORTANT** : 
- Utilisez une adresse email que vous consultez régulièrement
- Ces infos serviront pour le WHOIS (annuaire des domaines)
- La protection WHOIS masquera vos données publiques

### 6️⃣ Payer
- Carte bancaire, PayPal, ou virement
- Prix moyen : **8-12€/an pour .com** ou **.fr**
- Achetez pour 1 an minimum (possibilité de 2-5 ans)

### 7️⃣ Confirmer l'achat
- Vous recevrez un email de confirmation
- Activation sous **15 minutes à 2 heures**

---

## ⚙️ Étape 3 : Configurer les DNS pour Netlify

### 🔍 Récupérer l'URL Netlify
1. Allez sur **https://app.netlify.com**
2. Cliquez sur votre site
3. Allez dans **"Site settings"** > **"Domain management"**
4. Notez l'URL par défaut (ex: `votre-site.netlify.app`)

### 🌐 Ajouter le domaine sur Netlify

#### Option A : Netlify DNS (Recommandé - Plus simple)
1. Sur Netlify, cliquez **"Add domain"**
2. Entrez votre domaine : `gites-soulor.com`
3. Netlify vous donne 4 serveurs DNS :
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
4. **Copiez ces 4 serveurs DNS**

#### Sur OVHcloud :
1. Connectez-vous à **https://www.ovh.com/manager/**
2. Allez dans **"Noms de domaine"**
3. Cliquez sur votre domaine (`gites-soulor.com`)
4. Onglet **"Serveurs DNS"**
5. Cliquez **"Modifier les serveurs DNS"**
6. Choisissez **"Utiliser des serveurs DNS personnalisés"**
7. Entrez les 4 serveurs DNS de Netlify
8. **Validez**

**⏱️ Délai de propagation** : 24-48 heures (souvent 2-4 heures en pratique)

---

#### Option B : Configuration DNS manuelle (Plus complexe)

Si vous préférez garder les DNS chez OVHcloud :

1. Sur OVHcloud, allez dans **"Zone DNS"**
2. Supprimez les enregistrements A existants
3. Ajoutez ces enregistrements :

**Pour le domaine principal (gites-soulor.com)**
```
Type : A
Sous-domaine : @ (ou vide)
Cible : 75.2.60.5
TTL : 3600
```

**Pour www (www.gites-soulor.com)**
```
Type : CNAME
Sous-domaine : www
Cible : votre-site.netlify.app
TTL : 3600
```

**Note** : L'IP `75.2.60.5` est l'IP de charge de Netlify (peut changer, vérifiez sur Netlify Docs)

4. Enregistrez les modifications

---

## 🔐 Étape 4 : Activer HTTPS (SSL)

### Sur Netlify (Automatique)
1. Une fois le domaine connecté (après propagation DNS)
2. Allez dans **"Domain settings"** > **"HTTPS"**
3. Netlify génère automatiquement un certificat SSL Let's Encrypt
4. Activez **"Force HTTPS"** pour rediriger HTTP → HTTPS

**⏱️ Délai** : Certificat SSL actif sous 15 min à 1 heure après propagation DNS

---

## ✅ Étape 5 : Vérifications finales

### Checklist de vérification

- [ ] Le domaine est acheté sur OVHcloud
- [ ] Les DNS sont configurés (Netlify ou OVHcloud)
- [ ] Le domaine est ajouté sur Netlify
- [ ] La propagation DNS est terminée (24-48h max)
- [ ] Le site s'affiche sur le nouveau domaine
- [ ] HTTPS fonctionne (cadenas vert dans le navigateur)
- [ ] Force HTTPS est activé
- [ ] www redirige vers le domaine principal (ou inversement)

### Tester la propagation DNS
🔗 **https://dnschecker.org**
- Entrez votre domaine
- Vérifiez que les DNS sont propagés mondialement

### Tester le HTTPS
🔗 **https://www.ssllabs.com/ssltest/**
- Testez votre domaine
- Visez un score A ou A+

---

## 📧 Étape 6 : Configurer les emails (Optionnel)

### Option 1 : Email professionnel OVHcloud
- **MX Plan** : 1,20€/mois (1 email)
- Adresse : `contact@gites-soulor.com`

### Option 2 : Google Workspace (ex-G Suite)
- **Prix** : 5,75€/mois par utilisateur
- Gmail professionnel avec votre domaine
- Drive, Calendar, Meet inclus

### Option 3 : Gratuit - Alias email
- Utilisez **ImprovMX** (gratuit) pour rediriger les emails
- Redirigez `contact@gites-soulor.com` → `spanazol@wanadoo.fr`

**Configuration ImprovMX** :
1. Allez sur **https://improvmx.com**
2. Ajoutez votre domaine
3. Configurez les enregistrements MX dans OVHcloud
4. Créez des alias (contact, info, reservation, etc.)

---

## 🎯 Étape 7 : Mettre à jour le site

Une fois le domaine actif, mettez à jour ces éléments :

### 1️⃣ Métadonnées SEO (index.html)
```html
<!-- Mettre à jour l'URL canonique -->
<link rel="canonical" href="https://gites-soulor.com/">
<meta property="og:url" content="https://gites-soulor.com/">
```

### 2️⃣ Sitemap (public/sitemap.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gites-soulor.com/</loc>
    <lastmod>2024-11-02</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3️⃣ Robots.txt (public/robots.txt)
```
User-agent: *
Allow: /

Sitemap: https://gites-soulor.com/sitemap.xml
```

### 4️⃣ Google Search Console
1. Allez sur **https://search.google.com/search-console**
2. Ajoutez votre nouveau domaine
3. Vérifiez la propriété (via DNS ou fichier HTML)
4. Soumettez le sitemap : `https://gites-soulor.com/sitemap.xml`

### 5️⃣ Liens externes
- Mettez à jour les liens dans vos bios Instagram/TikTok
- Mettez à jour les liens sur les sites de réservation
- Informez vos clients du nouveau domaine

---

## 💰 Résumé des coûts

### Année 1
| Service | Prix | Nécessaire |
|---------|------|------------|
| Domaine .com (OVHcloud) | 8-12€/an | ✅ Oui |
| Domaine .fr (OVHcloud) | 8-10€/an | ⭐ Recommandé |
| Protection WHOIS | Gratuit | ✅ Inclus |
| Hébergement Netlify | Gratuit | ✅ Inclus |
| SSL/HTTPS | Gratuit | ✅ Inclus |
| Email professionnel | 0-70€/an | ❌ Optionnel |

**Total minimum** : 8-12€/an (juste le domaine)
**Total recommandé** : 16-22€/an (domaine .com + .fr)

### Années suivantes
- Renouvellement automatique du domaine
- Même prix (8-12€/an par domaine)

---

## 🚀 Plan d'action simplifié

### Aujourd'hui (30 minutes)
1. ✅ Aller sur OVHcloud.com
2. ✅ Rechercher et acheter `gites-soulor.com` (ou .fr)
3. ✅ Activer la protection WHOIS
4. ✅ Attendre l'email de confirmation (15 min - 2h)

### Demain (15 minutes)
1. ✅ Ajouter le domaine sur Netlify
2. ✅ Récupérer les 4 serveurs DNS Netlify
3. ✅ Configurer les DNS sur OVHcloud
4. ✅ Attendre la propagation DNS (2-48h)

### Dans 2-3 jours (10 minutes)
1. ✅ Vérifier que le site fonctionne sur le nouveau domaine
2. ✅ Activer Force HTTPS sur Netlify
3. ✅ Mettre à jour les métadonnées du site
4. ✅ Soumettre le sitemap à Google
5. ✅ Mettre à jour les bios Instagram/TikTok

---

## 🆘 Problèmes courants

### Le domaine ne fonctionne pas après 48h
- Vérifiez les DNS sur dnschecker.org
- Vérifiez que vous avez bien entré les 4 serveurs DNS
- Contactez le support OVHcloud ou Netlify

### HTTPS ne s'active pas
- Attendez la propagation DNS complète
- Vérifiez que le domaine pointe bien vers Netlify
- Retirez et rajoutez le domaine sur Netlify

### Le www ne fonctionne pas
- Configurez un enregistrement CNAME pour www
- Ou configurez une redirection sur Netlify

### Erreur "Domain already taken" sur Netlify
- Le domaine est déjà utilisé par un autre site Netlify
- Vérifiez que vous utilisez le bon compte Netlify

---

## 📞 Support

### OVHcloud Support
- 📧 https://www.ovh.com/manager/dedicated/#/support/tickets
- 📞 1007 (depuis la France, gratuit)
- 💬 Chat en ligne sur le site

### Netlify Support
- 📧 https://www.netlify.com/support/
- 📚 Docs : https://docs.netlify.com
- 💬 Forum : https://answers.netlify.com

---

## 🎉 Une fois terminé

Votre site sera accessible sur :
- ✅ **https://gites-soulor.com** (ou le nom choisi)
- ✅ **https://www.gites-soulor.com** (redirection)
- 🔒 HTTPS sécurisé avec certificat SSL
- ⚡ Performance maximale avec Netlify CDN
- 🌍 Accessible mondialement en quelques millisecondes

**Félicitations !** Vous aurez un site professionnel avec un domaine personnalisé ! 🏔️✨

---

**Note** : Ce guide est valable en novembre 2024. Les prix et procédures peuvent évoluer.
**Date de création** : 2 novembre 2024
