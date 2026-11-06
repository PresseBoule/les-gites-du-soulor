import { PriceRange, PriceSummary, priceRange } from '../components/SitePrices';
import { CmsText } from '../components/admin/CmsFields';
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
              <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-001" scope={[]}>{"Gîte avec Bain Nordique"}</CmsText></h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto"><CmsText id="GiteBainNordiquePage-text-002" scope={[]}>{"Séjour bien-être avec bain nordique chauffé au feu de bois et sauna dans les Pyrénées"}</CmsText></p>
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
                  <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-003" scope={[]}>{"Bain Nordique Chauffé au Feu de Bois dans les Hautes-Pyrénées"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-004" scope={[]}>{"Imaginez-vous plongé dans un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-005" scope={[]}>{"bain nordique"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-006" scope={[]}>{" à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-007" scope={[]}>{"38°C"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-008" scope={[]}>{", chauffé naturellement au "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-009" scope={[]}>{"feu de bois"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-010" scope={[]}>{", tout en admirant les "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-011" scope={[]}>{"sommets enneigés des Pyrénées"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-012" scope={[]}>{". C'est l'expérience unique que vous offrent Les Gîtes du Soulor à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-013" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-014" scope={[]}>{", au cœur du "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-015" scope={[]}>{"Val d'Azun"}</CmsText></strong>.
                  </p>

                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-016" scope={[]}>{"Le "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-017" scope={[]}>{"bain nordique"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-018" scope={[]}>{", également appelé "}</CmsText><em><CmsText id="GiteBainNordiquePage-text-019" scope={[]}>{"hot tub"}</CmsText></em>, <em><CmsText id="GiteBainNordiquePage-text-020" scope={[]}>{"spa nordique"}</CmsText></em><CmsText id="GiteBainNordiquePage-text-021" scope={[]}>{" ou "}</CmsText><em><CmsText id="GiteBainNordiquePage-text-022" scope={[]}>{"bain suédois"}</CmsText></em><CmsText id="GiteBainNordiquePage-text-023" scope={[]}>{", est une tradition ancestrale venue des pays scandinaves. Contrairement aux jacuzzis électriques, notre bain nordique est chauffé de manière 100% naturelle grâce à un "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-024" scope={[]}>{"poêle à bois immergé"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-025" scope={[]}>{". Cette méthode authentique permet d'atteindre et maintenir une température idéale entre "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-026" scope={[]}>{"37 et 40°C"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-027" scope={[]}>{", parfaite pour la détente musculaire et la relaxation."}</CmsText></p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 mt-6">
                    <h3 className="text-xl text-[#c4a574] mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-028" scope={[]}>{"L'expérience bain nordique aux Gîtes du Soulor"}</CmsText></h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteBainNordiquePage-text-029" scope={[]}>{"Bain privatif"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-030" scope={[]}>{" : réservation exclusive par tranches d'1 heure"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteBainNordiquePage-text-031" scope={[]}>{"Vue panoramique"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-032" scope={[]}>{" sur les montagnes du Val d'Azun"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteBainNordiquePage-text-033" scope={[]}>{"Chauffage au feu de bois"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-034" scope={[]}>{" : expérience authentique et écologique"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteBainNordiquePage-text-035" scope={[]}>{"Capacité 4-6 personnes"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-036" scope={[]}>{" (idéal pour 2 en couple)"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteBainNordiquePage-text-037" scope={[]}>{"Eau chauffée à l'avance"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-038" scope={[]}>{" pour profiter dès votre arrivée"}</CmsText></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bienfaits du bain nordique */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-039" scope={[]}>{"Les Bienfaits du Bain Nordique"}</CmsText></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-040" scope={[]}>{"Relaxation Profonde"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-041" scope={[]}>{"La chaleur de l'eau (37-40°C) détend les muscles en profondeur, soulage les tensions accumulées, et favorise la libération d'endorphines. Idéal après une journée de "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-042" scope={[]}>{"randonnée en montagne"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-043" scope={[]}>{" ou de "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-044" scope={[]}>{"ski"}</CmsText></strong>.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Droplets className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-045" scope={[]}>{"Amélioration de la Circulation"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-046" scope={[]}>{"L'immersion dans l'eau chaude dilate les vaisseaux sanguins, améliore la circulation sanguine et aide à éliminer les toxines. Excellent pour la récupération sportive et la vitalité."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Thermometer className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-047" scope={[]}>{"Réduction du Stress"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-048" scope={[]}>{"Le bain nordique en extérieur, combiné à la "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-049" scope={[]}>{"vue sur les montagnes"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-050" scope={[]}>{" et au "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-051" scope={[]}>{"crépitement du feu de bois"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-052" scope={[]}>{", offre une déconnexion totale. Le stress mental et physique s'évapore littéralement."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Sun className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-053" scope={[]}>{"Meilleur Sommeil"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-054" scope={[]}>{"Une séance de bain nordique en soirée favorise un "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-055" scope={[]}>{"sommeil profond et réparateur"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-056" scope={[]}>{". La baisse de température corporelle après le bain induit naturellement l'endormissement."}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Sauna traditionnel */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-057" scope={[]}>{"Sauna Traditionnel Finlandais"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-058" scope={[]}>{"En complément du bain nordique, nos gîtes donnent accès à un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-059" scope={[]}>{"sauna traditionnel en bois"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-060" scope={[]}>{", construit selon les méthodes finlandaises. Ce sauna à "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-061" scope={[]}>{"chaleur sèche"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-062" scope={[]}>{" (70-90°C) offre des bienfaits complémentaires au bain nordique."}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3"><CmsText id="GiteBainNordiquePage-text-063" scope={[]}>{"🌡️ Chaleur Sèche"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-064" scope={[]}>{"Le sauna finlandais diffuse une "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-065" scope={[]}>{"chaleur sèche intense"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-066" scope={[]}>{" qui fait transpirer abondamment, élimine les toxines et purifie la peau en profondeur."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3"><CmsText id="GiteBainNordiquePage-text-067" scope={[]}>{"💪 Détente Musculaire"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-068" scope={[]}>{"La chaleur du sauna pénètre profondément dans les muscles, soulage les "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-069" scope={[]}>{"courbatures"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-070" scope={[]}>{" et favorise la récupération après l'effort."}</CmsText></p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#5a7a9f]/10 to-transparent border border-[#5a7a9f]/20">
                    <h3 className="text-lg text-white mb-3"><CmsText id="GiteBainNordiquePage-text-071" scope={[]}>{"Circuit Nordique : Sauna + Bain Nordique"}</CmsText></h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-3"><CmsText id="GiteBainNordiquePage-text-072" scope={[]}>{"Pour une expérience bien-être optimale, nous vous recommandons le "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-073" scope={[]}>{"circuit nordique"}</CmsText></strong> :
                    </p>
                    <ol className="text-white/70 text-sm space-y-2 ml-4">
                      <li><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-074" scope={[]}>{"1."}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-075" scope={[]}>{" Commencer par 10-15 min de "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-076" scope={[]}>{"sauna"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-077" scope={[]}>{" (chaleur sèche)"}</CmsText></li>
                      <li><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-078" scope={[]}>{"2."}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-079" scope={[]}>{" Douche froide ou repos 5 min"}</CmsText></li>
                      <li><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-080" scope={[]}>{"3."}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-081" scope={[]}>{" Plonger dans le "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-082" scope={[]}>{"bain nordique"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-083" scope={[]}>{" (eau chaude 38°C) pour 20-30 min"}</CmsText></li>
                      <li><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-084" scope={[]}>{"4."}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-085" scope={[]}>{" Répéter le cycle 2-3 fois pour un effet maximal"}</CmsText></li>
                    </ol>
                    <p className="text-white/60 text-xs mt-3"><CmsText id="GiteBainNordiquePage-text-086" scope={[]}>{"💡 Ce contraste chaud-froid stimule la circulation, booste le système immunitaire et procure une sensation de bien-être intense."}</CmsText></p>
                  </div>
                </div>

                {/* Réservation du bain nordique */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-087" scope={[]}>{"Comment réserver le Bain Nordique ?"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-088" scope={[]}>{"L'accès au "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-089" scope={[]}>{"bain nordique"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-090" scope={[]}>{" et au "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-091" scope={[]}>{"sauna"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-092" scope={[]}>{" est "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-093" scope={[]}>{"inclus"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-094" scope={[]}>{" pour tous les locataires de nos gîtes. Pour profiter de ces équipements, il suffit de réserver en ligne via notre plateforme dédiée."}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2"><CmsText id="GiteBainNordiquePage-text-095" scope={[]}>{"1️⃣"}</CmsText></div>
                      <h3 className="text-white font-medium mb-2"><CmsText id="GiteBainNordiquePage-text-096" scope={[]}>{"Réservez votre gîte"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-097" scope={[]}>{"Choisissez l'un de nos 4 gîtes 3 personnes"}</CmsText></p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2"><CmsText id="GiteBainNordiquePage-text-098" scope={[]}>{"2️⃣"}</CmsText></div>
                      <h3 className="text-white font-medium mb-2"><CmsText id="GiteBainNordiquePage-text-099" scope={[]}>{"Réservez votre créneau"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-100" scope={[]}>{"Réservation par tranches d'1 heure sur notre plateforme"}</CmsText></p>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <div className="text-3xl mb-2"><CmsText id="GiteBainNordiquePage-text-101" scope={[]}>{"3️⃣"}</CmsText></div>
                      <h3 className="text-white font-medium mb-2"><CmsText id="GiteBainNordiquePage-text-102" scope={[]}>{"Profitez !"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-103" scope={[]}>{"Le bain est chauffé à l'avance pour vous"}</CmsText></p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                    <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-104" scope={[]}>{"Infos Pratiques Bain Nordique"}</CmsText></h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-105" scope={[]}>{"Réservation :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-106" scope={[]}>{" Par tranches d'1 heure, en ligne sur notre plateforme"}</CmsText></li>
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-107" scope={[]}>{"Température :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-108" scope={[]}>{" 37-40°C (température idéale pour la détente)"}</CmsText></li>
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-109" scope={[]}>{"Capacité :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-110" scope={[]}>{" 4-6 personnes (idéal pour 2 en couple)"}</CmsText></li>
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-111" scope={[]}>{"Chauffage :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-112" scope={[]}>{" Nous chauffons le bain 2-3h avant votre créneau"}</CmsText></li>
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-113" scope={[]}>{"Accès :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-114" scope={[]}>{" Privatif (vous seuls pendant votre créneau)"}</CmsText></li>
                      <li>• <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-115" scope={[]}>{"Saison :"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-116" scope={[]}>{" Toute l'année (magique en hiver avec la neige !)"}</CmsText></li>
                    </ul>
                  </div>
                </div>

                {/* Bain nordique en hiver */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-117" scope={[]}>{"Bain Nordique en Hiver : Une Expérience Magique"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-118" scope={[]}>{"L'"}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-119" scope={[]}>{"hiver"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-120" scope={[]}>{" est la période parfaite pour profiter du bain nordique ! Imaginez : il fait "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-121" scope={[]}>{"-5°C"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-122" scope={[]}>{" à l'extérieur, les "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-123" scope={[]}>{"sommets sont enneigés"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-124" scope={[]}>{", et vous êtes plongé dans une eau à "}</CmsText><strong><CmsText id="GiteBainNordiquePage-text-125" scope={[]}>{"38°C"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-126" scope={[]}>{". Le contraste est saisissant et absolument magique."}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Snowflake className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-127" scope={[]}>{"Après-Ski Détente"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-128" scope={[]}>{"Après une journée de "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-129" scope={[]}>{"ski à Hautacam"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteBainNordiquePage-text-130" scope={[]}>{"Cauterets"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-131" scope={[]}>{" ou "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-132" scope={[]}>{"Barèges-La Mongie"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-133" scope={[]}>{", rien de tel qu'un bain nordique pour détendre les muscles et évacuer les courbatures. Un vrai luxe après le ski !"}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-134" scope={[]}>{"Ciel Étoilé"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteBainNordiquePage-text-135" scope={[]}>{"En soirée, profitez du bain nordique sous les "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-136" scope={[]}>{"étoiles des Pyrénées"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-137" scope={[]}>{". Le Val d'Azun, préservé de la pollution lumineuse, offre un "}</CmsText><strong className="text-white"><CmsText id="GiteBainNordiquePage-text-138" scope={[]}>{"ciel nocturne exceptionnel"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-139" scope={[]}>{". Romantisme garanti !"}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Nos 4 gîtes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteBainNordiquePage-text-140" scope={[]}>{"Nos 4 Gîtes avec Bain Nordique"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteBainNordiquePage-text-141" scope={[]}>{"Les Gîtes du Soulor proposent "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteBainNordiquePage-text-142" scope={[]}>{"4 gîtes indépendants pour 3 personnes"}</CmsText></strong><CmsText id="GiteBainNordiquePage-text-143" scope={[]}>{", tous avec accès au bain nordique et au sauna :"}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteBainNordiquePage-text-144" scope={[]}>{"🏔️ Le Suyen"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-145" scope={[]}>{"Gîte cosy 3 personnes • Cuisine équipée • Bain nordique & sauna"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteBainNordiquePage-text-146" scope={[]}>{"🏔️ Le Tech"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-147" scope={[]}>{"Gîte tout confort • Literie premium • Accès bien-être"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteBainNordiquePage-text-148" scope={[]}>{"🏔️ L'Estaing"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-149" scope={[]}>{"Gîte moderne • Vue montagne • Bain nordique privatif"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteBainNordiquePage-text-150" scope={[]}>{"🏔️ Le Soum"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteBainNordiquePage-text-151" scope={[]}>{"Gîte équipé • Confort optimal • Spa nordique & sauna"}</CmsText></p>
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
                      <Calendar className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-152" scope={[]}>{"Réserver votre gîte avec bain nordique"}</CmsText></Link>
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
                      <Flame className="w-5 h-5" /><CmsText id="GiteBainNordiquePage-text-153" scope={[]}>{"Réserver un créneau bain nordique"}</CmsText></Link>
                  </motion.div>
                  
                  <p className="text-white/60 text-sm mt-4"><PriceSummary wellness /></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
