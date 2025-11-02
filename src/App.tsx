import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Home, Mail, Map, Sparkles } from 'lucide-react';
import { Button } from './components/ui/button';
import { MountainPattern } from './components/MountainPattern';
import { FloatingElements } from './components/FloatingElements';
import { Pricing } from './components/Pricing';
import { GitesSection } from './components/GitesSection';
import { WellnessSection } from './components/WellnessSection';
import { MapSection } from './components/MapSection';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      <div className="min-h-screen bg-gradient-to-br from-[#2d3843] via-[#3a4a5a] to-[#4a5a6a] relative overflow-hidden">
        <FloatingElements />
        
        {/* Navigation */}
        <Navigation scrollY={scrollY} />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 relative min-h-screen flex flex-col justify-center">
        <MountainPattern />
        
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
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#c4a574]/10 via-[#5a7a9f]/10 to-[#c4a574]/10 border border-[#c4a574]/30 text-[#c4a574] backdrop-blur-sm">
                Pyrénées - Arrens-Marsous
              </span>
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

              <h1
                className="text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] bg-gradient-to-r from-white via-[#c4a574] to-white bg-clip-text text-transparent relative"
                style={{ fontFamily: 'serif' }}
              >
                LES GITES DU
                <br />
                SOULOR
              </h1>
              
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-white/70 mt-8 max-w-2xl mx-auto text-lg"
            >
              Vivez une expérience unique au cœur des Pyrénées
            </motion.p>
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
                <motion.div
                  className="h-[450px] bg-cover bg-center relative overflow-hidden rounded-lg shadow-2xl"
                  style={{
                    backgroundImage: 'url(https://i.postimg.cc/BZMLXsYh/2022-10-10.jpg)',
                    filter: 'brightness(1.05) contrast(1.08) saturate(1.12)'
                  }}
                  whileHover={{ rotateY: 2, rotateX: -2 }}
                >
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
                </motion.div>
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

      {/* Info Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d3843]/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-white text-center text-3xl mb-12"
            style={{ fontFamily: 'serif' }}
          >
            Quelques informations pour un séjour serein
          </motion.h2>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: 'Un lien entre et culture et sobriété',
                description: 'Vous découvrirez une ambiance chaleureuse alliant confort moderne et charme authentique, avec des équipements éco-responsables pour un séjour en harmonie avec la nature.',
              },
              {
                icon: Home,
                title: 'Près dans les sommets',
                description: 'Situés à proximité des plus belles randonnées des Pyrénées, nos gîtes vous offrent un accès direct aux pistes de ski en hiver et aux sentiers de montagne en été.',
              },
              {
                icon: Map,
                title: "L'accueil, une ligne qu'on respectons",
                description: "Notre équipe est à votre écoute pour rendre votre séjour inoubliable. Nous vous accompagnons dans la découverte de la région et partageons nos meilleures adresses locales.",
              },
            ].map((card, index) => {
              const Icon = card.icon;
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
                    <h3 className="text-white mb-3 group-hover:text-[#c4a574] transition-colors">{card.title}</h3>
                    <p className="text-white/60 leading-relaxed">{card.description}</p>
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
                <div
                  className="aspect-[16/10] bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: 'url(https://i.postimg.cc/Dzpf7yyS/Les-Artigaux-appartements.jpg)',
                    filter: 'brightness(1.05) contrast(1.08) saturate(1.12)'
                  }}
                >
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

      {/* Pricing Section */}
      <Pricing />

      {/* Gites Section */}
      <GitesSection />

      {/* Wellness Section - Bain Nordique & Sauna */}
      <WellnessSection />

      {/* Map Section */}
      <MapSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Cookie Banner */}
      <CookieBanner />
      </div>
    </>
  );
}
