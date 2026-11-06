import { CmsText } from '../components/admin/CmsFields';
import { useAdmin } from '../contexts/AdminContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { EditableText } from '../components/admin/EditableText';
import { EditableImage } from '../components/admin/EditableImage';
import { Calendar, Home, Map, Users, Ban } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const { content } = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content || !content.hero) {
    return (
      <div className="min-h-screen bg-[#3a4a5a] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Les Gîtes du Soulor - Location Gîte Arrens-Marsous Val d'Azun Pyrénées</title>
        <meta name="description" content="Location de gîtes 3 personnes à Arrens-Marsous dans le Val d'Azun, Hautes-Pyrénées. Bain nordique et sauna. 4 gîtes tout confort au cœur des Pyrénées." />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/" />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 relative min-h-screen flex flex-col justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 165, 116, 0.1) 35px, rgba(196, 165, 116, 0.1) 70px)`
          }} />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <motion.div className="text-center mb-16">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <EditableText
                path="hero.badge"
                value={content.hero.badge || 'Arrens-Marsous, Hautes-Pyrénées'}
                as="span"
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#c4a574]/10 via-[#5a7a9f]/10 to-[#c4a574]/10 border border-[#c4a574]/30 text-[#c4a574] backdrop-blur-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block relative"
            >
              {/* Glow effect behind title */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c4a574]/30 via-transparent to-[#5a7a9f]/30 blur-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <EditableText
                path="hero.titre"
                value={content.hero.titre ? content.hero.titre.toUpperCase() : 'LES GÎTES DU SOULOR'}
                as="h1"
                className="text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] bg-gradient-to-r from-white via-[#c4a574] to-white bg-clip-text text-transparent relative"
                style={{ fontFamily: 'serif' }}
              />
              
              {/* Animated underline */}
              <motion.div className="flex justify-center gap-2 mt-6">
                <motion.div
                  className="h-1 w-20 bg-[#c4a574] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.div
                  className="h-1 w-2 bg-[#c4a574] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
                <motion.div
                  className="h-1 w-8 bg-[#c4a574] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                />
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <EditableText
                path="hero.sousTitre"
                value={content.hero.sousTitre || 'Votre Refuge d\'Exception au Cœur des Pyrénées'}
                as="p"
                className="text-white/70 text-lg"
              />
            </motion.div>
          </motion.div>

          {/* Image with Side Panels - Ultra Modern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative max-w-6xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            {/* Enhanced glow effect */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-[#c4a574]/30 via-[#5a7a9f]/30 to-[#c4a574]/30 blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <div className="flex items-center gap-2 relative">
              {/* Left Panel with enhanced gradient and 3D effect */}
              <motion.div
                initial={{ x: -100, opacity: 0, rotateY: -45 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                whileHover={{ x: -5, rotateY: -5 }}
                className="hidden md:block w-24 h-[450px] bg-gradient-to-br from-[#c4a574] via-[#d4b584] to-[#b89560] rounded-l-3xl shadow-2xl relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  style={{ transform: 'skewX(-20deg)' }}
                />
                
                {/* Geometric pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/2 w-16 h-16 border border-white rotate-45" />
                  <div className="absolute bottom-1/4 left-1/2 w-12 h-12 border border-white rotate-45" />
                </div>
              </motion.div>

              {/* Main Image with 3D hover effect */}
              <motion.div
                className="flex-1 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="h-[450px] relative overflow-hidden rounded-lg shadow-2xl">
                  <EditableImage
                    path="hero.imageMain"
                    src={content.hero.imageMain || '/images/postimg/BZMLXsYh/2022-10-10.jpg'}
                    alt="Les Gîtes du Soulor"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(1.05) contrast(1.08) saturate(1.12)'
                    }}
                  />
                  {/* Multi-layer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3843]/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/0 via-transparent to-[#5a7a9f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border particles */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#c4a574]/0 rounded-lg"
                    whileHover={{ borderColor: 'rgba(196, 165, 116, 0.6)' }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#c4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#c4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#c4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#c4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Right Panel with enhanced gradient and 3D effect */}
              <motion.div
                initial={{ x: 100, opacity: 0, rotateY: 45 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                whileHover={{ x: 5, rotateY: 5 }}
                className="hidden md:block w-24 h-[450px] bg-gradient-to-bl from-[#b89560] via-[#d4b584] to-[#c4a574] rounded-r-3xl shadow-2xl relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['200%', '-100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1 }}
                  style={{ transform: 'skewX(20deg)' }}
                />

                {/* Geometric pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/3 right-1/2 w-16 h-16 border border-white rotate-45" />
                  <div className="absolute bottom-1/3 right-1/2 w-12 h-12 border border-white rotate-45" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section SEO Introduction */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-3xl text-white mb-6 text-center" style={{ fontFamily: 'serif' }}><CmsText id="HomePage-text-001" scope={[]}>{"Gîtes de Montagne à Arrens-Marsous, Val d'Azun"}</CmsText></h2>
                
                <p className="text-white/90 leading-relaxed mb-6"><CmsText id="HomePage-text-002" scope={[]}>{"Bienvenue aux "}</CmsText><strong className="text-[#c4a574]"><CmsText id="HomePage-text-003" scope={[]}>{"Gîtes du Soulor"}</CmsText></strong><CmsText id="HomePage-text-004" scope={[]}>{", votre havre de paix au cœur des "}</CmsText><strong className="text-[#c4a574]"><CmsText id="HomePage-text-005" scope={[]}>{"Hautes-Pyrénées"}</CmsText></strong><CmsText id="HomePage-text-006" scope={[]}>{". Nous vous proposons "}</CmsText><strong className="text-[#c4a574]"><CmsText id="HomePage-text-007" scope={[]}>{"4 gîtes pour 3 personnes"}</CmsText></strong><CmsText id="HomePage-text-008" scope={[]}>{" dans le charmant village d'"}</CmsText><strong className="text-[#c4a574]"><CmsText id="HomePage-text-009" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="HomePage-text-010" scope={[]}>{", au pied du mythique "}</CmsText><strong className="text-[#c4a574]"><CmsText id="HomePage-text-011" scope={[]}>{"Col du Soulor"}</CmsText></strong><CmsText id="HomePage-text-012" scope={[]}>{". Que vous recherchiez un "}</CmsText><strong><CmsText id="HomePage-text-013" scope={[]}>{"week-end romantique"}</CmsText></strong><CmsText id="HomePage-text-014" scope={[]}>{", une "}</CmsText><strong><CmsText id="HomePage-text-015" scope={[]}>{"semaine de randonnée"}</CmsText></strong><CmsText id="HomePage-text-016" scope={[]}>{" ou un "}</CmsText><strong><CmsText id="HomePage-text-017" scope={[]}>{"séjour ressourçant avec bain nordique et sauna"}</CmsText></strong><CmsText id="HomePage-text-018" scope={[]}>{", nos hébergements de montagne vous offrent le cadre idéal pour vos vacances dans les Pyrénées."}</CmsText></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl text-[#c4a574] mb-4 flex items-center gap-2">
                      <Home className="w-5 h-5" /><CmsText id="HomePage-text-019" scope={[]}>{"Nos 4 Gîtes pour 3 Personnes"}</CmsText></h3>
                    <p className="text-white/80 leading-relaxed text-sm mb-3">
                      <strong className="text-white"><CmsText id="HomePage-text-020" scope={[]}>{"Le Suyen"}</CmsText></strong>, <strong className="text-white"><CmsText id="HomePage-text-021" scope={[]}>{"Le Tech"}</CmsText></strong>, <strong className="text-white"><CmsText id="HomePage-text-022" scope={[]}>{"L'Estaing"}</CmsText></strong><CmsText id="HomePage-text-023" scope={[]}>{" et "}</CmsText><strong className="text-white"><CmsText id="HomePage-text-024" scope={[]}>{"Le Soum"}</CmsText></strong><CmsText id="HomePage-text-025" scope={[]}>{" : quatre gîtes tout confort, entièrement équipés, avec cuisine aménagée, salle de bain moderne, et un accès privilégié à nos équipements bien-être."}</CmsText></p>
                    <p className="text-white/70 text-sm"><CmsText id="HomePage-text-026" scope={[]}>{"Tous nos gîtes sont indépendants, offrant intimité et tranquillité pour votre séjour en montagne."}</CmsText></p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="text-xl text-[#c4a574] mb-4 flex items-center gap-2">
                      <Map className="w-5 h-5" /><CmsText id="HomePage-text-027" scope={[]}>{"Situation Géographique Idéale"}</CmsText></h3>
                    <p className="text-white/80 leading-relaxed text-sm mb-3"><CmsText id="HomePage-text-028" scope={[]}>{"Situés au cœur du "}</CmsText><strong className="text-white"><CmsText id="HomePage-text-029" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="HomePage-text-030" scope={[]}>{", nos gîtes sont le point de départ parfait pour explorer le "}</CmsText><strong><CmsText id="HomePage-text-031" scope={[]}>{"Parc National des Pyrénées"}</CmsText></strong><CmsText id="HomePage-text-032" scope={[]}>{", les "}</CmsText><strong><CmsText id="HomePage-text-033" scope={[]}>{"stations de ski d'Hautacam et Grand Tourmalet"}</CmsText></strong><CmsText id="HomePage-text-034" scope={[]}>{", et les nombreux sentiers de randonnée de la région."}</CmsText></p>
                    <p className="text-white/70 text-sm"><CmsText id="HomePage-text-035" scope={[]}>{"Accès facile : 30 min de Lourdes, 1h de Pau, 45 min de Tarbes."}</CmsText></p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed mb-6"><CmsText id="HomePage-text-036" scope={[]}>{"Le "}</CmsText><strong><CmsText id="HomePage-text-037" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="HomePage-text-038" scope={[]}>{" est une vallée préservée des Pyrénées, réputée pour sa beauté naturelle et son authenticité. En séjournant dans nos gîtes à "}</CmsText><strong><CmsText id="HomePage-text-039" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="HomePage-text-040" scope={[]}>{", vous bénéficiez d'un accès privilégié aux "}</CmsText><strong><CmsText id="HomePage-text-041" scope={[]}>{"cols mythiques du Soulor et d'Aubisque"}</CmsText></strong><CmsText id="HomePage-text-042" scope={[]}>{", aux "}</CmsText><strong><CmsText id="HomePage-text-043" scope={[]}>{"lacs de montagne"}</CmsText></strong><CmsText id="HomePage-text-044" scope={[]}>{" (lac d'Estaing, lac d'Ilhéou), et à une multitude d'activités outdoor : "}</CmsText><em><CmsText id="HomePage-text-045" scope={[]}>{"randonnée pédestre"}</CmsText></em>, <em><CmsText id="HomePage-text-046" scope={[]}>{"VTT"}</CmsText></em>, <em><CmsText id="HomePage-text-047" scope={[]}>{"ski alpin et ski de fond"}</CmsText></em><CmsText id="HomePage-text-048" scope={[]}>{" en hiver, "}</CmsText><em><CmsText id="HomePage-text-049" scope={[]}>{"via ferrata"}</CmsText></em><CmsText id="HomePage-text-050" scope={[]}>{", et bien plus encore."}</CmsText></p>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20 mt-6">
                  <h3 className="text-xl text-white mb-3"><CmsText id="HomePage-text-051" scope={[]}>{"Pourquoi choisir Les Gîtes du Soulor ?"}</CmsText></h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-052" scope={[]}>{"4 gîtes modernes et tout équipés pour 3 personnes"}</CmsText></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-053" scope={[]}>{"Bain nordique chauffé au feu de bois et sauna traditionnel"}</CmsText></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-054" scope={[]}>{"Emplacement idéal au pied des montagnes"}</CmsText></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-055" scope={[]}>{"Accès aux randonnées et stations de ski"}</CmsText></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-056" scope={[]}>{"Formules flexibles : week-end, semaine ou séjour long"}</CmsText></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c4a574] mt-1">✓</span>
                      <span><CmsText id="HomePage-text-057" scope={[]}>{"Parking privé et Wi-Fi gratuit inclus"}</CmsText></span>
                    </li>
                  </ul>
                </div>

                <p className="text-white/70 leading-relaxed text-sm mt-6 text-center"><CmsText id="HomePage-text-058" scope={[]}>{"Que vous planifiez une "}</CmsText><strong className="text-white"><CmsText id="HomePage-text-059" scope={[]}>{"escapade romantique"}</CmsText></strong><CmsText id="HomePage-text-060" scope={[]}>{", un "}</CmsText><strong className="text-white"><CmsText id="HomePage-text-061" scope={[]}>{"séjour bien-être"}</CmsText></strong><CmsText id="HomePage-text-062" scope={[]}>{" ou des "}</CmsText><strong className="text-white"><CmsText id="HomePage-text-063" scope={[]}>{"vacances sportives"}</CmsText></strong><CmsText id="HomePage-text-064" scope={[]}>{", nos gîtes à Arrens-Marsous vous promettent une expérience authentique dans les Pyrénées. Réservez dès maintenant et vivez un séjour inoubliable en montagne !"}</CmsText></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d3843]/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <EditableText
              path="texts.infoSectionTitre"
              value={content.texts?.infoSectionTitre || "Quelques informations pour un séjour serein"}
              as="h2"
              className="text-white text-3xl"
              style={{ fontFamily: 'serif' }}
            />
          </motion.div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(content.infoCards || [
              {
                icon: 'Calendar',
                title: 'Culture et Sobriété',
                description: 'Vous découvrirez une ambiance chaleureuse alliant confort moderne et charme authentique, avec des équipements éco-responsables pour un séjour en harmonie avec la nature.',
              },
              {
                icon: 'Home',
                title: 'Au Cœur des Sommets',
                description: 'Situés à proximité des plus belles randonnées des Pyrénées, nos gîtes vous offrent un accès en moins de 30 min aux pistes de ski en hiver et aux sentiers de montagne en été.',
              },
              {
                icon: 'Map',
                title: "Un Accueil Respectueux",
                description: "Notre équipe est à votre écoute pour rendre votre séjour inoubliable. Nous vous accompagnons dans la découverte de la région et partageons nos meilleures adresses locales.",
              },
            ]).map((card, index) => {
              const iconMap: { [key: string]: any } = { Calendar, Home, Map };
              const Icon = iconMap[card.icon] || Calendar;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="text-center group cursor-pointer relative"
                >
                  {/* Card background with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/5 via-transparent to-[#5a7a9f]/5 rounded-2xl border border-white/5 group-hover:border-[#c4a574]/30 transition-all duration-300" />
                  
                  <div className="relative p-6">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-4 rounded-full bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 group-hover:from-[#c4a574]/30 group-hover:to-[#5a7a9f]/30 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white/80 group-hover:text-[#c4a574] transition-colors" />
                      </div>
                    </motion.div>
                    <EditableText
                      path={`infoCards.${index}.title`}
                      value={card.title}
                      as="h3"
                      className="text-white mb-3 group-hover:text-[#c4a574] transition-colors"
                    />
                    <EditableText
                      path={`infoCards.${index}.description`}
                      value={card.description}
                      as="p"
                      className="text-white/60 leading-relaxed"
                      multiline
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-16 pb-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#5a7a9f]/20 via-[#c4a574]/20 to-[#5a7a9f]/20 blur-3xl" />
            
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574] via-[#5a7a9f] to-[#c4a574] p-[4px] rounded-3xl">
                <div className="h-full w-full bg-[#2d3843] rounded-3xl" />
              </div>
              
              {/* Image container */}
              <div className="relative">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <EditableImage
                    path="hero.imageSecondaire"
                    src={content.hero.imageSecondaire || '/images/postimg/QNwn7RLP/unnamed1.jpg'}
                    alt="Les Artigaux - Appartements"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(1.05) contrast(1.08) saturate(1.12)'
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3843]/60 via-transparent to-transparent" />
                  
                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#c4a574]/20 via-transparent to-[#5a7a9f]/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#c4a574]/50 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#c4a574]/50 rounded-br-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Règlement Section */}
      <section className="py-16 bg-gradient-to-b from-[#3a4a5a] to-[#2d3843] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <EditableText
              path="texts.reglementTitre"
              value={content.texts?.reglementTitre || "Règlement des Gîtes"}
              as="h2"
              className="text-white text-3xl"
              style={{ fontFamily: 'serif' }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Âge minimum */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/5 via-transparent to-[#5a7a9f]/5 rounded-2xl border border-white/5 group-hover:border-[#c4a574]/30 transition-all duration-300" />
              
              <div className="relative p-8 text-center">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Users className="w-8 h-8 text-red-400" />
                  </div>
                </motion.div>
                <EditableText
                  path="texts.ageMinTitre"
                  value={content.texts?.ageMinTitre || "Âge Minimum"}
                  as="h3"
                  className="text-white text-xl mb-3 group-hover:text-[#c4a574] transition-colors"
                />
                <EditableText
                  path="texts.ageMinDescription"
                  value={content.texts?.ageMinDescription || "Nos gîtes sont inadaptés pour les enfants de moins de 10 ans. Nous vous remercions de votre compréhension."}
                  as="p"
                  className="text-white/70 leading-relaxed"
                  multiline
                />
              </div>
            </motion.div>

            {/* Animaux interdits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/5 via-transparent to-[#5a7a9f]/5 rounded-2xl border border-white/5 group-hover:border-[#c4a574]/30 transition-all duration-300" />
              
              <div className="relative p-8 text-center">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <Ban className="w-8 h-8 text-red-400" />
                  </div>
                </motion.div>
                <EditableText
                  path="texts.animauxTitre"
                  value={content.texts?.animauxTitre || "Animaux Non Admis"}
                  as="h3"
                  className="text-white text-xl mb-3 group-hover:text-[#c4a574] transition-colors"
                />
                <EditableText
                  path="texts.animauxDescription"
                  value={content.texts?.animauxDescription || "Les animaux ne sont pas acceptés dans nos gîtes afin de garantir le confort de tous nos visiteurs."}
                  as="p"
                  className="text-white/70 leading-relaxed"
                  multiline
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
