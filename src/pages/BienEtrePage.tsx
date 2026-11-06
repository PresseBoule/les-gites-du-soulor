import { CmsText } from '../components/admin/CmsFields';
import { motion } from 'motion/react';
import { Sparkles, Droplets, Wind, Sun, Moon, Heart, Flame, Snowflake, Calendar } from 'lucide-react';
import { EditableText } from '../components/admin/EditableText';
import { EditableImage } from '../components/admin/EditableImage';
import { useAdmin } from '../contexts/AdminContext';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function BienEtrePage() {
  const { content } = useAdmin();
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen bg-[#3a4a5a] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  const services = [
    {
      icon: Flame,
      titre: 'Bain Nordique',
      description: 'Plongez dans une expérience de détente unique avec notre bain nordique chauffé au feu de bois, face aux sommets enneigés. Profitez de la chaleur apaisante de l\'eau tout en contemplant les paysages pyrénéens.',
      avantages: ['Chauffé au feu de bois', 'Vue sur les montagnes', 'Réservation privative', 'Expérience authentique'],
      couleur: 'from-orange-500/20 to-red-500/20',
      image: '/images/postimg/SQ5Nzs4k/2005472970463032322.jpg',
    },
    {
      icon: Droplets,
      titre: 'Sauna Traditionnel',
      description: 'Profitez de notre sauna traditionnel en bois pour une relaxation profonde et une expérience bien-être authentique en montagne. Idéal après une journée de randonnée.',
      avantages: ['Sauna en bois', 'Chaleur sèche', 'Détente musculaire', 'Accès inclus'],
      couleur: 'from-blue-500/20 to-cyan-500/20',
      image: '/images/postimg/w3KfYJsZ/8779031119280369718.jpg',
    },
    {
      icon: Wind,
      titre: 'Détente & Repos',
      description: 'Après vos activités en montagne, profitez de nos espaces de détente pour vous ressourcer pleinement dans un cadre naturel préservé.',
      avantages: ['Espace privatif', 'Calme absolu', 'Vue panoramique', 'Air pur de montagne'],
      couleur: 'from-purple-500/20 to-pink-500/20',
      image: '/images/postimg/pXqCBg0M/4519027198872613593.jpg',
    },
  ];

  const activites = [
    {
      icon: Sun,
      titre: 'Randonnées Guidées',
      description: 'Découvrez les plus beaux sentiers des Pyrénées avec nos guides locaux expérimentés.',
      saison: 'Toute l\'année',
    },
    {
      icon: Snowflake,
      titre: 'Ski & Raquettes',
      description: 'Stations de ski et circuits de raquettes à moins d\'1h.',
      saison: 'Décembre à Mars',
    },
    {
      icon: Heart,
      titre: 'Bien-être Thermal',
      description: 'À proximité des thermes de Saint-Lary et Cauterets pour des soins curatifs.',
      saison: 'Toute l\'année',
    },
    {
      icon: Moon,
      titre: 'Observation des Étoiles',
      description: 'Nuits magiques sous un ciel étoilé préservé de la pollution lumineuse.',
      saison: 'Été principalement',
    },
    {
      icon: Calendar,
      titre: 'Programme Bien-être',
      description: 'Organisez votre séjour avec un programme bien-être personnalisé.',
      saison: 'Toute l\'année',
    },
  ];

  const bienfaits = [
    {
      titre: 'Détente Musculaire',
      description: 'Le sauna et les massages soulagent les tensions accumulées',
    },
    {
      titre: 'Meilleur Sommeil',
      description: 'L\'air pur de la montagne et nos équipements favorisent un sommeil réparateur',
    },
    {
      titre: 'Ressourcement Mental',
      description: 'L\'environnement naturel et le calme permettent une vraie déconnexion',
    },
    {
      titre: 'Vitalité Retrouvée',
      description: 'Les activités en plein air redonnent énergie et dynamisme',
    },
  ];

  // Galerie complète de photos du bain nordique et sauna
  const galerie = [
    '/images/postimg/SQ5Nzs4k/2005472970463032322.jpg', // Vue panoramique bain nordique avec reflet
    '/images/postimg/w3KfYJsZ/8779031119280369718.jpg', // Gros plan sauna avec porte circulaire
    '/images/postimg/sfBGLbDZ/IMG-3073.jpg', // Intérieur du sauna
    '/images/postimg/pXqCBg0M/4519027198872613593.jpg', // Bain nordique avec vue Pyrénées
    '/images/postimg/j5fKH6t2/IMG-3075.jpg', // Bain nordique panorama montagneux
    '/images/postimg/mrzG43cC/IMG-3070.jpg', // Panneau d'entrée
    '/images/postimg/5yprLjYd/IMG-3078.jpg', // Bain nordique avec poêle
    '/images/postimg/25p0qncS/8209701038044386348.jpg', // Vue d'ensemble
    '/images/postimg/NFvxbB8v/unnamed.jpg', // Vue d'ensemble 2
  ];

  const photosVisibles = showAllPhotos ? galerie : galerie.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Bien-être Gîte Pyrénées : Bain Nordique & Sauna Arrens-Marsous | Les Gîtes du Soulor</title>
        <meta name="description" content="Espace bien-être avec bain nordique chauffé au feu de bois et sauna traditionnel dans nos gîtes d'Arrens-Marsous. Détente face aux Pyrénées. Réservation en ligne." />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/bien-etre" />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d3843]/50 to-transparent" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#c4a574] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 2, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Sparkles className="w-16 h-16 text-[#c4a574] mx-auto" />
              </motion.div>
              <EditableText
                path="pages.bienEtre.titre"
                value={content.pages?.bienEtre?.titre || 'Bien-être & Détente'}
                as="h1"
                className="text-5xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              />
              <EditableText
                path="pages.bienEtre.sousTitre"
                value={content.pages?.bienEtre?.sousTitre || 'Ressourcez-vous au cœur des Pyrénées'}
                as="p"
                className="text-white/70 text-xl max-w-2xl mx-auto"
              />
            </motion.div>

            {/* Image Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-[#c4a574]/30 via-[#5a7a9f]/30 to-[#c4a574]/30 blur-3xl" />
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-[#1a252f]">
                <EditableImage
                  path="pages.bienEtre.imageHero"
                  src={content.pages?.bienEtre?.imageHero || '/images/postimg/SQ5Nzs4k/2005472970463032322.jpg'}
                  alt="Bien-être"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3843]/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services de bien-être */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <EditableText
                path="pages.bienEtre.servicesTitre"
                value={content.pages?.bienEtre?.servicesTitre || 'Nos Services Bien-être'}
                as="h2"
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              />
              <EditableText
                path="pages.bienEtre.servicesSousTitre"
                value={content.pages?.bienEtre?.servicesSousTitre || 'Des prestations premium pour votre confort'}
                as="p"
                className="text-white/60 text-lg mb-6"
              />
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#c4a574]/20 to-[#5a7a9f]/20 border border-[#c4a574]/30 backdrop-blur-sm">
                <p className="text-[#c4a574] text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span><CmsText id="BienEtrePage-text-001" scope={[]}>{"Sauna et Bain Nordique : réservation par tranche d'1h"}</CmsText></span>
                </p>
              </div>
            </motion.div>

            {/* Bouton Réserver en haut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <motion.a
                href="https://bain-sauna-gite-soulor.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c4a574] to-[#a08960] text-white rounded-full hover:shadow-lg hover:shadow-[#c4a574]/30 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span><CmsText id="BienEtrePage-text-002" scope={[]}>{"Réserver Sauna & Bain Nordique"}</CmsText></span>
              </motion.a>
            </motion.div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.titre}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="absolute -inset-4 bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <EditableImage
                          path={`pages.bienEtre.services.${index}.image`}
                          src={service.image}
                          alt={service.titre}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d3843]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Icon badge */}
                        <div className="absolute top-6 right-6">
                          <div className={`p-4 rounded-full bg-gradient-to-br ${service.couleur} backdrop-blur-sm border border-white/20`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Corner decoration */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#c4a574]/50 rounded-tl-xl" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#c4a574]/50 rounded-br-xl" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-4">
                      <EditableText
                        path={`pages.bienEtre.services.${index}.titre`}
                        value={service.titre}
                        as="h3"
                        className="text-3xl text-white"
                        style={{ fontFamily: 'serif' }}
                      />
                      <EditableText
                        path={`pages.bienEtre.services.${index}.description`}
                        value={service.description}
                        as="p"
                        className="text-white/70 leading-relaxed text-lg"
                        multiline
                      />
                      
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {service.avantages.map((avantage, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex items-center gap-2 text-white/80"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#c4a574]" />
                            <EditableText
                              path={`pages.bienEtre.services.${index}.avantages.${idx}`}
                              value={avantage}
                              as="span"
                              className="text-sm"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Texte SEO Introduction */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <div className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="BienEtrePage-text-003" scope={[]}>{"Bain Nordique et Sauna au Cœur des Pyrénées"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="BienEtrePage-text-004" scope={[]}>{"Découvrez notre "}</CmsText><strong className="text-[#c4a574]"><CmsText id="BienEtrePage-text-005" scope={[]}>{"espace bien-être unique"}</CmsText></strong><CmsText id="BienEtrePage-text-006" scope={[]}>{" à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="BienEtrePage-text-007" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="BienEtrePage-text-008" scope={[]}>{", au cœur du "}</CmsText><strong className="text-[#c4a574]"><CmsText id="BienEtrePage-text-009" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="BienEtrePage-text-010" scope={[]}>{" dans les Hautes-Pyrénées. Nos gîtes proposent des équipements bien-être de qualité : un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="BienEtrePage-text-011" scope={[]}>{"bain nordique chauffé au feu de bois"}</CmsText></strong><CmsText id="BienEtrePage-text-012" scope={[]}>{" et un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="BienEtrePage-text-013" scope={[]}>{"sauna traditionnel en bois"}</CmsText></strong><CmsText id="BienEtrePage-text-014" scope={[]}>{", pour une expérience de détente authentique en montagne."}</CmsText></p>
                  
                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="BienEtrePage-text-015" scope={[]}>{"Le "}</CmsText><strong><CmsText id="BienEtrePage-text-016" scope={[]}>{"bain nordique"}</CmsText></strong><CmsText id="BienEtrePage-text-017" scope={[]}>{", également appelé "}</CmsText><em><CmsText id="BienEtrePage-text-018" scope={[]}>{"hot tub"}</CmsText></em><CmsText id="BienEtrePage-text-019" scope={[]}>{" ou "}</CmsText><em><CmsText id="BienEtrePage-text-020" scope={[]}>{"spa nordique"}</CmsText></em><CmsText id="BienEtrePage-text-021" scope={[]}>{", est une expérience bien-être incomparable. Imaginez-vous plongé dans une eau chaude à 38°C, chauffée naturellement au feu de bois, tout en admirant les "}</CmsText><strong><CmsText id="BienEtrePage-text-022" scope={[]}>{"sommets enneigés des Pyrénées"}</CmsText></strong><CmsText id="BienEtrePage-text-023" scope={[]}>{" depuis votre bain. Cette pratique ancestrale venue des pays scandinaves combine les bienfaits de la chaleur, de l'hydrothérapie et du contact avec la nature."}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-xl text-[#c4a574] mb-3"><CmsText id="BienEtrePage-text-024" scope={[]}>{"🔥 Bain Nordique"}</CmsText></h3>
                      <ul className="text-white/70 text-sm space-y-2 list-disc list-inside">
                        <li><CmsText id="BienEtrePage-text-025" scope={[]}>{"Chauffé au feu de bois traditionnel"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-026" scope={[]}>{"Température idéale 37-40°C"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-027" scope={[]}>{"Vue panoramique sur les Pyrénées"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-028" scope={[]}>{"Réservation privative par tranche d'1h"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-029" scope={[]}>{"Capacité 4-6 personnes (idéal pour 2)"}</CmsText></li>
                      </ul>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-xl text-[#c4a574] mb-3"><CmsText id="BienEtrePage-text-030" scope={[]}>{"🌡️ Sauna Traditionnel"}</CmsText></h3>
                      <ul className="text-white/70 text-sm space-y-2 list-disc list-inside">
                        <li><CmsText id="BienEtrePage-text-031" scope={[]}>{"Sauna finlandais en bois massif"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-032" scope={[]}>{"Chaleur sèche 70-90°C"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-033" scope={[]}>{"Idéal après randonnée ou ski"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-034" scope={[]}>{"Accès privatif sur réservation"}</CmsText></li>
                        <li><CmsText id="BienEtrePage-text-035" scope={[]}>{"Détente musculaire profonde"}</CmsText></li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="BienEtrePage-text-036" scope={[]}>{"Notre "}</CmsText><strong><CmsText id="BienEtrePage-text-037" scope={[]}>{"sauna traditionnel"}</CmsText></strong><CmsText id="BienEtrePage-text-038" scope={[]}>{" est construit selon les méthodes finlandaises, avec du bois noble qui diffuse une chaleur sèche bénéfique pour la santé. Après une journée de "}</CmsText><strong><CmsText id="BienEtrePage-text-039" scope={[]}>{"randonnée dans les Pyrénées"}</CmsText></strong><CmsText id="BienEtrePage-text-040" scope={[]}>{", une sortie "}</CmsText><strong><CmsText id="BienEtrePage-text-041" scope={[]}>{"ski à la station Hautacam"}</CmsText></strong><CmsText id="BienEtrePage-text-042" scope={[]}>{" ou une balade dans le "}</CmsText><strong><CmsText id="BienEtrePage-text-043" scope={[]}>{"Parc National des Pyrénées"}</CmsText></strong><CmsText id="BienEtrePage-text-044" scope={[]}>{", rien de tel qu'une session sauna pour détendre les muscles et évacuer les toxines."}</CmsText></p>

                  <p className="text-white/70 leading-relaxed text-sm">
                    <strong className="text-white"><CmsText id="BienEtrePage-text-045" scope={[]}>{"Réservation simple et rapide :"}</CmsText></strong><CmsText id="BienEtrePage-text-046" scope={[]}>{" Le bain nordique et le sauna se réservent en ligne par tranches d'1 heure. Vous profitez ainsi d'un "}</CmsText><strong><CmsText id="BienEtrePage-text-047" scope={[]}>{"moment privatif"}</CmsText></strong><CmsText id="BienEtrePage-text-048" scope={[]}>{", sans partage avec d'autres clients. Nous chauffons le bain nordique à l'avance pour que vous puissiez en profiter dès votre arrivée. L'accès aux équipements bien-être est inclus pour tous nos locataires."}</CmsText></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Activités */}
        <section className="py-16 bg-gradient-to-b from-transparent via-[#2d3843]/30 to-transparent relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <EditableText
                path="pages.bienEtre.activitesTitre"
                value={content.pages?.bienEtre?.activitesTitre || 'Activités & Découvertes'}
                as="h2"
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {activites.map((activite, index) => {
                const Icon = activite.icon;
                return (
                  <motion.div
                    key={activite.titre}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/5 via-transparent to-[#5a7a9f]/5 rounded-2xl border border-white/5 group-hover:border-[#c4a574]/30 transition-all duration-300" />
                    
                    <div className="relative p-6 text-center">
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 rounded-full bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20">
                          <Icon className="w-8 h-8 text-[#c4a574]" />
                        </div>
                      </motion.div>
                      <EditableText
                        path={`pages.bienEtre.activites.${index}.titre`}
                        value={activite.titre}
                        as="h3"
                        className="text-xl text-white mb-2"
                      />
                      <EditableText
                        path={`pages.bienEtre.activites.${index}.description`}
                        value={activite.description}
                        as="p"
                        className="text-white/60 text-sm mb-3"
                        multiline
                      />
                      <EditableText
                        path={`pages.bienEtre.activites.${index}.saison`}
                        value={activite.saison}
                        as="div"
                        className="text-[#c4a574] text-xs"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galerie Photos */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <EditableText
                path="pages.bienEtre.galerieTitre"
                value={content.pages?.bienEtre?.galerieTitre || 'Galerie Photos'}
                as="h2"
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              />
              <EditableText
                path="pages.bienEtre.galerieSousTitre"
                value={content.pages?.bienEtre?.galerieSousTitre || 'Découvrez nos équipements bien-être'}
                as="p"
                className="text-white/60 text-lg"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {photosVisibles.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                  >
                    <EditableImage
                      path={`pages.bienEtre.galerie.${index}`}
                      src={photo}
                      alt={`Bain nordique et sauna ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d3843]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-l border-t border-[#c4a574]/60 rounded-tl-lg" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-[#c4a574]/60 rounded-br-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bouton Voir plus / Voir moins */}
            {galerie.length > 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-12"
              >
                <motion.button
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#c4a574] to-[#a08960] text-white rounded-full hover:shadow-lg hover:shadow-[#c4a574]/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    {showAllPhotos ? (
                      <>
                        <span><CmsText id="BienEtrePage-text-049" scope={[]}>{"Voir moins"}</CmsText></span>
                        <motion.span
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ▲
                        </motion.span>
                      </>
                    ) : (
                      <>
                        <span><CmsText id="BienEtrePage-text-050" scope={[]}>{"Voir plus ("}</CmsText>{galerie.length - 4}<CmsText id="BienEtrePage-text-051" scope={[]}>{" autres photos)"}</CmsText></span>
                        <motion.span
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ▼
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Bienfaits */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <EditableText
                path="pages.bienEtre.bienfaitsTitre"
                value={content.pages?.bienEtre?.bienfaitsTitre || 'Les Bienfaits d\'un Séjour Bien-être'}
                as="h2"
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bienfaits.map((bienfait, index) => (
                <motion.div
                  key={bienfait.titre}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl border border-white/10 group-hover:border-[#c4a574]/30 bg-white/5 transition-all">
                    <EditableText
                      path={`pages.bienEtre.bienfaits.${index}.titre`}
                      value={bienfait.titre}
                      as="h3"
                      className="text-xl text-white mb-2 group-hover:text-[#c4a574] transition-colors"
                    />
                    <EditableText
                      path={`pages.bienEtre.bienfaits.${index}.description`}
                      value={bienfait.description}
                      as="p"
                      className="text-white/70"
                      multiline
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 rounded-3xl blur-2xl" />
              <div className="relative p-10 rounded-3xl border border-[#c4a574]/30 bg-gradient-to-br from-[#2d3843]/80 to-[#3a4a5a]/80 backdrop-blur-sm text-center">
                <Sparkles className="w-12 h-12 text-[#c4a574] mx-auto mb-4" />
                <EditableText
                  path="pages.bienEtre.ctaTitre"
                  value={content.pages?.bienEtre?.ctaTitre || 'Réservez votre Séjour Bien-être'}
                  as="h3"
                  className="text-3xl text-white mb-4"
                  style={{ fontFamily: 'serif' }}
                />
                <EditableText
                  path="pages.bienEtre.ctaDescription"
                  value={content.pages?.bienEtre?.ctaDescription || 'Offrez-vous une parenthèse de détente et de ressourcement dans un cadre naturel exceptionnel. Contactez-nous pour composer votre séjour sur mesure.'}
                  as="p"
                  className="text-white/70 leading-relaxed mb-6"
                  multiline
                />
                
                {/* Bouton Réserver en bas */}
                <motion.a
                  href="https://bain-sauna-gite-soulor.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c4a574] to-[#a08960] text-white rounded-full hover:shadow-lg hover:shadow-[#c4a574]/30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span><CmsText id="BienEtrePage-text-052" scope={[]}>{"Réserver Sauna & Bain Nordique"}</CmsText></span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
