// Types pour le contenu modifiable du site

export interface PriceItem {
  season: string;
  price: string;
  unit?: string;
  icon: string;
  color: string;
}

export interface TarifOption {
  type: string;
  subtitle: string;
  note?: string;
  icon: string;
  prices: PriceItem[];
}

export interface Equipement {
  nom: string;
  icone: string;
}

export interface Gite {
  nom: string;
  description: string;
  capacite: string;
  superficie?: string;
  equipements?: Equipement[];
  image?: string; // Image principale de la carte
  gallery?: string[]; // Galerie de photos
  color?: string; // Couleur de thème (gradient)
  accentColor?: string; // Couleur d'accent
  hasBalcony?: boolean; // Possède un balcon
  inConstruction?: boolean; // En travaux
}

export interface Contact {
  telephone: string;
  email: string;
  adresse: string;
  entreprise?: string;
  siret?: string;
  description?: string;
}

export interface Social {
  instagram: string;
  tiktok: string;
  instagramHandle?: string;
  tiktokHandle?: string;
}

export interface Hero {
  titre: string;
  sousTitre: string;
  description?: string;
  badge: string;
  imageMain?: string;
  imageSecondaire?: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  description: string;
}

export interface WellnessFeature {
  title: string;
  description: string;
}

export interface Wellness {
  titre?: string;
  description?: string;
  features?: WellnessFeature[];
}

export interface NavItem {
  label: string;
  id: string;
}

export interface Texts {
  siteName?: string;
  // Info section
  infoSectionTitre?: string;
  // Règlement
  reglementTitre?: string;
  ageMinTitre?: string;
  ageMinDescription?: string;
  animauxTitre?: string;
  animauxDescription?: string;
  // Footer
  footerDescription?: string;
  footerLiensRapides?: string;
  footerContact?: string;
  footerSuivez?: string;
  footerMentions?: string;
  footerCopyright?: string;
  // Contact
  contactTitre?: string;
  contactDescription?: string;
  contactNom?: string;
  contactEmail?: string;
  contactTelephone?: string;
  contactAdresse?: string;
  contactMessage?: string;
  contactEnvoyer?: string;
  // Map
  mapTitre?: string;
  mapDescription?: string;
  mapItineraire?: string;
  // Cookie
  cookieTitre?: string;
  cookieDescription?: string;
  cookieAccepter?: string;
  cookieRefuser?: string;
}

export interface SiteContent {
  tarifs?: TarifOption[];
  gites?: Gite[];
  contact?: Contact;
  social?: Social;
  hero?: Hero;
  infoCards?: InfoCard[];
  wellness?: Wellness;
  navigation?: NavItem[];
  texts?: Texts;
}

// Contenu par défaut (celui actuellement dans le site)
export const defaultContent: SiteContent = {
  tarifs: [
    {
      type: 'Week-End',
      subtitle: 'Vendredi 16h à Dimanche 11h',
      icon: 'Moon',
      prices: [
        { season: 'Basse Saison', price: '400€', icon: 'Leaf', color: 'from-green-400/20 to-emerald-600/20' },
        { season: 'Moyenne', price: '425€', icon: 'Sun', color: 'from-yellow-400/20 to-orange-500/20' },
        { season: 'Haute Saison', price: '450€', icon: 'Snowflake', color: 'from-blue-400/20 to-cyan-600/20' },
      ],
    },
    {
      type: 'Séjour en Semaine',
      subtitle: 'Dimanche 16h au Vendredi 11h',
      note: 'MINIMUM 2 NUITS',
      icon: 'Calendar',
      prices: [
        { season: 'Basse Saison', price: '150€', unit: 'la nuit', icon: 'Leaf', color: 'from-green-400/20 to-emerald-600/20' },
        { season: 'Moyenne', price: '165€', unit: 'la nuit', icon: 'Sun', color: 'from-yellow-400/20 to-orange-500/20' },
        { season: 'Haute Saison', price: '180€', unit: 'la nuit', icon: 'Snowflake', color: 'from-blue-400/20 to-cyan-600/20' },
      ],
    },
    {
      type: 'La Semaine',
      subtitle: 'Séjour complet 7 jours',
      icon: 'Sunrise',
      prices: [
        { season: 'Basse Saison', price: '1150€', icon: 'Leaf', color: 'from-green-400/20 to-emerald-600/20' },
        { season: 'Moyenne', price: '1250€', icon: 'Sun', color: 'from-yellow-400/20 to-orange-500/20' },
        { season: 'Haute Saison', price: '1350€', icon: 'Snowflake', color: 'from-blue-400/20 to-cyan-600/20' },
      ],
    },
  ],
  gites: [],
  contact: {
    telephone: "06 45 79 59 39",
    email: "spanazol@wanadoo.fr",
    adresse: "42 route du Soulor, 65400 Arrens-Marsous, France",
    entreprise: "SARL Les Artigaux",
    siret: "851 041 590 00015",
    description: "N'hésitez pas à nous contacter pour toute question concernant nos gîtes, les tarifs ou pour effectuer une réservation."
  },
  social: {
    instagram: "https://www.instagram.com/les_gites_du_soulor/",
    tiktok: "https://www.tiktok.com/@les_gites_du_soulor",
    instagramHandle: "@les_gites_du_soulor",
    tiktokHandle: "@les_gites_du_soulor"
  },
  hero: {
    titre: "Les Gîtes du Soulor",
    sousTitre: "Votre Refuge d'Exception au Cœur des Pyrénées",
    description: "Découvrez nos 4 gîtes de charme nichés dans les montagnes pyrénéennes. Un havre de paix où tradition et modernité se rencontrent pour vous offrir un séjour inoubliable.",
    badge: "Arrens-Marsous, Hautes-Pyrénées",
    imageMain: "https://i.postimg.cc/BZMLXsYh/2022-10-10.jpg",
    imageSecondaire: "https://i.postimg.cc/Dzpf7yyS/Les-Artigaux-appartements.jpg"
  },
  infoCards: [
    {
      icon: 'Calendar',
      title: 'Culture et Sobriété',
      description: 'Vous découvrirez une ambiance chaleureuse alliant confort moderne et charme authentique, avec des équipements éco-responsables pour un séjour en harmonie avec la nature.',
    },
    {
      icon: 'Home',
      title: 'Au Cœur des Sommets',
      description: 'Situés à proximité des plus belles randonnées des Pyrénées, nos gîtes vous offrent un accès en moins de 30min aux pistes de ski en hiver et aux sentiers de montagne en été.',
    },
    {
      icon: 'Map',
      title: "Un Accueil Respectueux",
      description: "Notre équipe est à votre écoute pour rendre votre séjour inoubliable. Nous vous accompagnons dans la découverte de la région et partageons nos meilleures adresses locales.",
    },
  ],
  wellness: {
    titre: "Espace Bien-Être",
    description: "Après vos journées en montagne, ressourcez-vous dans notre espace bien-être privatif",
    features: [
      {
        title: "Bain Nordique",
        description: "Plongez dans une expérience de détente unique avec notre bain nordique chauffé au feu de bois, face aux sommets enneigés."
      },
      {
        title: "Sauna",
        description: "Profitez de notre sauna traditionnel en bois pour une relaxation profonde et une expérience bien-être authentique en montagne."
      }
    ]
  },
  navigation: [
    { label: 'Accueil', id: 'hero' },
    { label: 'Tarifs', id: 'pricing' },
    { label: 'Nos Gîtes', id: 'gites' },
    { label: 'Bien-être', id: 'wellness' },
    { label: 'Localisation', id: 'location-map' },
    { label: 'Contact', id: 'contact' },
  ],
  texts: {
    siteName: "LES GÎTES DU SOULOR",
    // Info section
    infoSectionTitre: "Quelques informations pour un séjour serein",
    // Règlement
    reglementTitre: "Règlement des Gîtes",
    ageMinTitre: "Âge Minimum",
    ageMinDescription: "Nos gîtes sont inadaptés pour les enfants de moins de 17 ans. Nous vous remercions de votre compréhension.",
    animauxTitre: "Animaux Non Admis",
    animauxDescription: "Les animaux ne sont pas acceptés dans nos gîtes afin de garantir le confort de tous nos visiteurs.",
    // Footer
    footerDescription: "Découvrez nos gîtes d'exception au cœur des Pyrénées. Un havre de paix où tradition et modernité se rencontrent.",
    footerLiensRapides: "Liens Rapides",
    footerContact: "Contact",
    footerSuivez: "Suivez-nous",
    footerMentions: "Mentions Légales",
    footerCopyright: "Tous droits réservés",
    // Contact
    contactTitre: "Contactez-nous",
    contactDescription: "N'hésitez pas à nous contacter pour toute question concernant nos gîtes, les tarifs ou pour effectuer une réservation.",
    contactNom: "Votre nom",
    contactEmail: "Votre email",
    contactTelephone: "Votre téléphone",
    contactAdresse: "Adresse",
    contactMessage: "Votre message",
    contactEnvoyer: "Envoyer",
    // Map
    mapTitre: "Notre Localisation",
    mapDescription: "Situés au cœur des Pyrénées, à Arrens-Marsous",
    mapItineraire: "Obtenir l'itinéraire",
    // Cookie
    cookieTitre: "Cookies & Confidentialité",
    cookieDescription: "Nous utilisons des cookies pour améliorer votre expérience de navigation. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.",
    cookieAccepter: "Accepter",
    cookieRefuser: "Refuser",
  }
};
