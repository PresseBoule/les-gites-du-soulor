import { motion } from 'motion/react';
import { Flame, Droplets, Sparkles, Heart, Calendar, Thermometer, Clock, Sun, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function GiteBainNordiquePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gîte avec Bain Nordique Pyrénées - Hot Tub & Sauna Arrens-Marsous | Les Gîtes du Soulor</title>
        <meta name="description" content="Gîte 3 personnes avec bain nordique chauffé au feu de bois et sauna dans les Pyrénées. Hébergement bien-être à Arrens-Marsous, Val d'Azun. Réservation en ligne." />
        <meta name="keywords" content="gîte bain nordique, hot tub pyrénées, gîte sauna, bain nordique montagne, spa pyrénées, gîte bien-être" />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/gite-bain-nordique" />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d3843]/50 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Flame className="w-16 h-16 text-[#c4a574] mx-auto" />
              </motion.div>
              <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'serif' }}>
                Gîte avec Bain Nordique
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Séjour bien-être avec bain nordique chauffé au feu de bois et sauna dans les Pyrénées
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenu SEO Principal */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-lg max-w-none"
              >
                {/* Introduction */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Bain Nordique Chauffé au Feu de Bois dans les Hautes-Pyrénées
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Imaginez-vous plongé dans un <strong className="text-[#c4a574]">bain nordique</strong> à <strong className="text-[#c4a574]">38°C</strong>, chauffé naturellement au <strong className="text-[#c4a574]">feu de bois</strong>, tout en admirant les <strong>sommets enneigés des Pyrénées</strong>. C'est l'expérience unique que vous offrent Les Gîtes du Soulor à <strong className="text-[#c4a574]">Arrens-Marsous</strong>, au cœur du <strong className="text-[#c4a574]">Val d'Azun</strong>.
                  </p>

                  <p className="text-white/80 leading-relaxed mb-6">
                    Le <strong>bain nordique</strong>, également appelé <em>hot tub</em>, <em>spa nordique</em> ou <em>bain suédois</em>, est une tradition ancestrale venue des pays scandinaves. Contrairement aux jacuzzis électriques, notre bain nordique est chauffé de manière 100% naturelle grâce à un <strong>poêle à bois immergé</strong>. Cette méthode authentique permet d'atteindre et maintenir une température idéale entre <strong>37 et 40°C</strong>, parfaite pour la détente musculaire et la relaxation.
                  </p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 mt-6">
                    <h3 className="text-xl text-[#c4a574] mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      L'expérience bain nordique aux Gîtes du Soulor
                    </h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Bain privatif</strong> : réservation exclusive par tranches d'1 heure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Vue panoramique</strong> sur les montagnes du Val d'Azun</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Chauffage au feu de bois</strong> : expérience authentique et écologique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Capacité 4-6 personnes</strong> (idéal pour 2 en couple)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Eau chauffée à l'avance</strong> pour profiter dès votre arrivée</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bienfaits du bain nordique */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Les Bienfaits du Bain Nordique
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Relaxation Profonde
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        La chaleur de l'eau (37-40°C) détend les muscles en profondeur, soulage les tensions accumulées, et favorise la libération d'endorphines. Idéal après une journée de <strong className="text-white">randonnée en montagne</strong> ou de <strong className="text-white">ski</strong>.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Droplets className="w-5 h-5" />
                        Amélioration de la Circulation
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        L'immersion dans l'eau chaude dilate les vaisseaux sanguins, améliore la circulation sanguine et aide à éliminer les toxines. Excellent pour la récupération sportive et la vitalité.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Thermometer className="w-5 h-5" />
                        Réduction du Stress
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Le bain nordique en extérieur, combiné à la <strong className="text-white">vue sur les montagnes</strong> et au <strong className="text-white">crépitement du feu de bois</strong>, offre une déconnexion totale. Le stress mental et physique s'évapore littéralement.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Sun className="w-5 h-5" />
                        Meilleur Sommeil
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Une séance de bain nordique en soirée favorise un <strong className="text-white">sommeil profond et réparateur</strong>. La baisse de température corporelle après le bain induit naturellement l'endormissement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sauna traditionnel */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Sauna Traditionnel Finlandais
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    En complément du bain nordique, nos gîtes donnent accès à un <strong className="text-[#c4a574]">sauna traditionnel en bois</strong>, construit selon les méthodes finlandaises. Ce sauna à <strong>chaleur sèche</strong> (70-90°C) offre des bienfaits complémentaires au bain nordique.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3">🌡️ Chaleur Sèche</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Le sauna finlandais diffuse une <strong className="text-white">chaleur sèche intense</strong> qui fait transpirer abondamment, élimine les toxines et purifie la peau en profondeur.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3">💪 Détente Musculaire</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        La chaleur du sauna pénètre profondément dans les muscles, soulage les <strong className="text-white">courbatures</strong> et favorise la récupération après l'effort.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#5a7a9f]/10 to-transparent border border-[#5a7a9f]/20">
                    <h3 className="text-lg text-white mb-3">Circuit Nordique : Sauna + Bain Nordique</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      Pour une expérience bien-être optimale, nous vous recommandons le <strong className="text-[#c4a574]">circuit nordique</strong> :
                    </p>
                    <ol className="text-white/70 text-sm space-y-2 ml-4">
                      <li><strong className="text-white">1.</strong> Commencer par 10-15 min de <strong>sauna</strong> (chaleur sèche)</li>
                      <li><strong className="text-white">2.</strong> Douche froide ou repos 5 min</li>
                      <li><strong className="text-white">3.</strong> Plonger dans le <strong>bain nordique</strong> (eau chaude 38°C) pour 20-30 min</li>
                      <li><strong className="text-white">4.</strong> Répéter le cycle 2-3 fois pour un effet maximal</li>
                    </ol>
                    <p className="text-white/60 text-xs mt-3">
                      💡 Ce contraste chaud-froid stimule la circulation, booste le système immunitaire et procure une sensation de bien-être intense.
                    </p>
                  </div>
                </div>

                {/* Réservation du bain nordique */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Comment réserver le Bain Nordique ?
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    L'accès au <strong className="text-[#c4a574]">bain nordique</strong> et au <strong className="text-[#c4a574]">sauna</strong> est <strong>inclus</strong> pour tous les locataires de nos gîtes. Pour profiter de ces équipements, il suffit de réserver en ligne via notre plateforme dédiée.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2">1️⃣</div>
                      <h3 className="text-white font-medium mb-2">Réservez votre gîte</h3>
                      <p className="text-white/70 text-sm">
                        Choisissez l'un de nos 4 gîtes 3 personnes
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2">2️⃣</div>
                      <h3 className="text-white font-medium mb-2">Réservez votre créneau</h3>
                      <p className="text-white/70 text-sm">
                        Réservation par tranches d'1 heure sur notre plateforme
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2">3️⃣</div>
                      <h3 className="text-white font-medium mb-2">Profitez !</h3>
                      <p className="text-white/70 text-sm">
                        Le bain est chauffé à l'avance pour vous
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                    <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Infos Pratiques Bain Nordique
                    </h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li>• <strong className="text-white">Réservation :</strong> Par tranches d'1 heure, en ligne sur notre plateforme</li>
                      <li>• <strong className="text-white">Température :</strong> 37-40°C (température idéale pour la détente)</li>
                      <li>• <strong className="text-white">Capacité :</strong> 4-6 personnes (idéal pour 2 en couple)</li>
                      <li>• <strong className="text-white">Chauffage :</strong> Nous chauffons le bain 2-3h avant votre créneau</li>
                      <li>• <strong className="text-white">Accès :</strong> Privatif (vous seuls pendant votre créneau)</li>
                      <li>• <strong className="text-white">Saison :</strong> Toute l'année (magique en hiver avec la neige !)</li>
                    </ul>
                  </div>
                </div>

                {/* Bain nordique en hiver */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Bain Nordique en Hiver : Une Expérience Magique
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    L'<strong className="text-[#c4a574]">hiver</strong> est la période parfaite pour profiter du bain nordique ! Imaginez : il fait <strong>-5°C</strong> à l'extérieur, les <strong>sommets sont enneigés</strong>, et vous êtes plongé dans une eau à <strong>38°C</strong>. Le contraste est saisissant et absolument magique.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Snowflake className="w-5 h-5" />
                        Après-Ski Détente
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Après une journée de <strong className="text-white">ski à Hautacam</strong>, <strong className="text-white">Cauterets</strong> ou <strong className="text-white">Barèges-La Mongie</strong>, rien de tel qu'un bain nordique pour détendre les muscles et évacuer les courbatures. Un vrai luxe après le ski !
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Ciel Étoilé
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        En soirée, profitez du bain nordique sous les <strong className="text-white">étoiles des Pyrénées</strong>. Le Val d'Azun, préservé de la pollution lumineuse, offre un <strong className="text-white">ciel nocturne exceptionnel</strong>. Romantisme garanti !
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nos 4 gîtes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Nos 4 Gîtes avec Bain Nordique
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Les Gîtes du Soulor proposent <strong className="text-[#c4a574]">4 gîtes indépendants pour 3 personnes</strong>, tous avec accès au bain nordique et au sauna :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Suyen</h3>
                      <p className="text-white/70 text-sm">Gîte cosy 3 personnes • Cuisine équipée • Bain nordique & sauna</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Tech</h3>
                      <p className="text-white/70 text-sm">Gîte tout confort • Literie premium • Accès bien-être</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ L'Estaing</h3>
                      <p className="text-white/70 text-sm">Gîte moderne • Vue montagne • Bain nordique privatif</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Soum</h3>
                      <p className="text-white/70 text-sm">Gîte équipé • Confort optimal • Spa nordique & sauna</p>
                    </div>
                  </div>
                </div>

                {/* CTA Réservation */}
                <div className="text-center mt-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4"
                  >
                    <Link
                      to="https://gite-soulor-reservation.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c4a574] to-[#b89560] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#c4a574]/30 transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5" />
                      Réserver votre gîte avec bain nordique
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="https://bain-sauna-gite-soulor.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <Flame className="w-5 h-5" />
                      Réserver un créneau bain nordique
                    </Link>
                  </motion.div>
                  
                  <p className="text-white/60 text-sm mt-4">
                    Tarifs gîte : Week-end dès 400€ • Semaine dès 150€/nuit • Bain nordique inclus
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
