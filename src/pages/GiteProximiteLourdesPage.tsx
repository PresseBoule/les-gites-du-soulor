import { PriceRange, PriceSummary, priceRange } from '../components/SitePrices';
import { CmsText } from '../components/admin/CmsFields';
import { motion } from 'motion/react';
import { MapPin, Car, Train, Church, Mountain, Calendar, Home, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function GiteProximiteLourdesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gîte près de Lourdes - Location 30 min de Lourdes avec Bain Nordique | Les Gîtes du Soulor</title>
        <meta name="description" content="Gîte 3 personnes à 30 min de Lourdes, dans les Pyrénées. Hébergement calme à Arrens-Marsous avec bain nordique et sauna. Alternative nature à Lourdes." />
        <meta name="keywords" content="gîte proche lourdes, hébergement lourdes, location lourdes, gîte 30 min lourdes, alternative lourdes" />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/gite-proximite-lourdes" />
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
                <MapPin className="w-16 h-16 text-[#c4a574] mx-auto" />
              </motion.div>
              <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-001" scope={[]}>{"Gîte à proximité de Lourdes"}</CmsText></h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto"><CmsText id="GiteProximiteLourdesPage-text-002" scope={[]}>{"Hébergement calme et nature à 30 minutes de Lourdes, dans les Pyrénées"}</CmsText></p>
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
                  <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-003" scope={[]}>{"Location Gîte près de Lourdes dans les Hautes-Pyrénées"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteProximiteLourdesPage-text-004" scope={[]}>{"Vous recherchez un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-005" scope={[]}>{"hébergement calme"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-006" scope={[]}>{" à proximité de "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-007" scope={[]}>{"Lourdes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-008" scope={[]}>{" ? Les Gîtes du Soulor, situés à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-009" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-010" scope={[]}>{" dans le "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-011" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-012" scope={[]}>{", vous proposent "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-013" scope={[]}>{"4 gîtes pour 3 personnes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-014" scope={[]}>{" à seulement "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-015" scope={[]}>{"30 minutes de Lourdes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-016" scope={[]}>{". Une alternative parfaite pour profiter du calme de la montagne tout en restant proche de la cité mariale."}</CmsText></p>

                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="GiteProximiteLourdesPage-text-017" scope={[]}>{"Que vous veniez à Lourdes pour un "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-018" scope={[]}>{"pèlerinage"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-019" scope={[]}>{", une "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-020" scope={[]}>{"visite touristique"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-021" scope={[]}>{", ou simplement pour découvrir les "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-022" scope={[]}>{"Pyrénées"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-023" scope={[]}>{", nos gîtes offrent un cadre reposant loin de l'agitation urbaine, tout en restant facilement accessibles depuis Lourdes via la "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-024" scope={[]}>{"D821"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-025" scope={[]}>{" (route du Val d'Azun)."}</CmsText></p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20 mt-6">
                    <h3 className="text-xl text-white mb-4"><CmsText id="GiteProximiteLourdesPage-text-026" scope={[]}>{"Pourquoi choisir un gîte près de Lourdes ?"}</CmsText></h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteProximiteLourdesPage-text-027" scope={[]}>{"Calme et sérénité"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-028" scope={[]}>{" : Loin de l'agitation touristique de Lourdes"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteProximiteLourdesPage-text-029" scope={[]}>{"Nature préservée"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-030" scope={[]}>{" : Cadre montagnard authentique dans le Val d'Azun"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteProximiteLourdesPage-text-031" scope={[]}>{"Proximité"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-032" scope={[]}>{" : Seulement 30 min en voiture de Lourdes"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteProximiteLourdesPage-text-033" scope={[]}>{"Meilleur rapport qualité/prix"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-034" scope={[]}>{" : Tarifs plus attractifs qu'en centre-ville de Lourdes"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong><CmsText id="GiteProximiteLourdesPage-text-035" scope={[]}>{"Équipements bien-être"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-036" scope={[]}>{" : Bain nordique et sauna inclus"}</CmsText></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accès depuis Lourdes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-037" scope={[]}>{"Comment venir de Lourdes à Arrens-Marsous ?"}</CmsText></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Car className="w-5 h-5" /><CmsText id="GiteProximiteLourdesPage-text-038" scope={[]}>{"En Voiture depuis Lourdes"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-039" scope={[]}>{"Trajet :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-040" scope={[]}>{" 30 minutes (25 km)"}</CmsText><br />
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-041" scope={[]}>{"Route :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-042" scope={[]}>{" D821 (route du Val d'Azun)"}</CmsText><br />
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-043" scope={[]}>{"Itinéraire :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-044" scope={[]}>{" Lourdes → Argelès-Gazost → Arrens-Marsous"}</CmsText></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-045" scope={[]}>{"Route panoramique avec vue sur les montagnes. Parking privé gratuit à l'arrivée."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Train className="w-5 h-5" /><CmsText id="GiteProximiteLourdesPage-text-046" scope={[]}>{"En Train + Transfert"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-047" scope={[]}>{"Gare :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-048" scope={[]}>{" Lourdes (TGV Paris-Lourdes 4h30)"}</CmsText><br />
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-049" scope={[]}>{"Transfert :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-050" scope={[]}>{" Taxi ou navette (30 min)"}</CmsText><br />
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-051" scope={[]}>{"Distance :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-052" scope={[]}>{" 25 km"}</CmsText></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-053" scope={[]}>{"Nous pouvons vous conseiller des services de taxi locaux."}</CmsText></p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" /><CmsText id="GiteProximiteLourdesPage-text-054" scope={[]}>{"Distances depuis nos Gîtes"}</CmsText></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-055" scope={[]}>{"Lourdes :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-056" scope={[]}>{" 30 min (25 km)"}</CmsText></div>
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-057" scope={[]}>{"Argelès-Gazost :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-058" scope={[]}>{" 15 min (12 km)"}</CmsText></div>
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-059" scope={[]}>{"Cauterets :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-060" scope={[]}>{" 35 min (30 km)"}</CmsText></div>
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-061" scope={[]}>{"Pau :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-062" scope={[]}>{" 1h (60 km)"}</CmsText></div>
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-063" scope={[]}>{"Tarbes :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-064" scope={[]}>{" 45 min (50 km)"}</CmsText></div>
                      <div>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-065" scope={[]}>{"Toulouse :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-066" scope={[]}>{" 2h15 (185 km)"}</CmsText></div>
                    </div>
                  </div>
                </div>

                {/* Visiter Lourdes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-067" scope={[]}>{"Que visiter à Lourdes depuis nos Gîtes ?"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    <strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-068" scope={[]}>{"Lourdes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-069" scope={[]}>{" est la "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-070" scope={[]}>{"2ème ville touristique de France"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-071" scope={[]}>{" après Paris, avec plus de 6 millions de visiteurs par an. La ville est mondialement connue pour son "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-072" scope={[]}>{"sanctuaire marial"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-073" scope={[]}>{", mais offre également de nombreuses attractions touristiques."}</CmsText></p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Church className="w-5 h-5" /><CmsText id="GiteProximiteLourdesPage-text-074" scope={[]}>{"Le Sanctuaire de Lourdes"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-075" scope={[]}>{"Grotte de Massabielle"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-076" scope={[]}>{"Basilique de l'Immaculée Conception"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-077" scope={[]}>{"Basilique du Rosaire"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-078" scope={[]}>{"Basilique souterraine Saint-Pie X"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-079" scope={[]}>{"... Le sanctuaire s'étend sur 52 hectares et accueille pèlerins et visiteurs toute l'année. Accès gratuit."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3"><CmsText id="GiteProximiteLourdesPage-text-080" scope={[]}>{"🏰 Le Château Fort de Lourdes"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteProximiteLourdesPage-text-081" scope={[]}>{"Forteresse médiévale perchée sur un piton rocheux, offrant une "}</CmsText><strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-082" scope={[]}>{"vue panoramique sur Lourdes et les Pyrénées"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-083" scope={[]}>{". Abrite le "}</CmsText><strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-084" scope={[]}>{"Musée Pyrénéen"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-085" scope={[]}>{" avec des collections d'art populaire et d'histoire locale."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3"><CmsText id="GiteProximiteLourdesPage-text-086" scope={[]}>{"🎭 Autres Attractions"}</CmsText></h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-087" scope={[]}>{"Pic du Jer :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-088" scope={[]}>{" Funiculaire jusqu'au sommet (948m), vue à 360° sur les Pyrénées"}</CmsText></li>
                        <li>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-089" scope={[]}>{"Lac de Lourdes :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-090" scope={[]}>{" Plan d'eau aménagé, promenades, activités nautiques"}</CmsText></li>
                        <li>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-091" scope={[]}>{"Grottes de Bétharram :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-092" scope={[]}>{" Réseau souterrain spectaculaire (20 min de Lourdes)"}</CmsText></li>
                        <li>• <strong className="text-white"><CmsText id="GiteProximiteLourdesPage-text-093" scope={[]}>{"Chemin de Croix :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-094" scope={[]}>{" Parcours spirituel dans la forêt"}</CmsText></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Combiner Lourdes et montagne */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-095" scope={[]}>{"Combiner Visite de Lourdes et Séjour Montagne"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteProximiteLourdesPage-text-096" scope={[]}>{"En séjournant dans nos gîtes à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-097" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-098" scope={[]}>{", vous combinez le meilleur des deux mondes : la "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-099" scope={[]}>{"visite de Lourdes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-100" scope={[]}>{" et la "}</CmsText><strong><CmsText id="GiteProximiteLourdesPage-text-101" scope={[]}>{"découverte authentique des Pyrénées"}</CmsText></strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-white mb-3"><CmsText id="GiteProximiteLourdesPage-text-102" scope={[]}>{"Exemple : Séjour Week-end"}</CmsText></h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-103" scope={[]}>{"Samedi matin :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-104" scope={[]}>{" Visite du Sanctuaire de Lourdes (2-3h)"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-105" scope={[]}>{"Samedi après-midi :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-106" scope={[]}>{" Randonnée au Lac d'Estaing (Val d'Azun)"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-107" scope={[]}>{"Samedi soir :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-108" scope={[]}>{" Bain nordique au gîte (détente)"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-109" scope={[]}>{"Dimanche :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-110" scope={[]}>{" Château de Lourdes + Pic du Jer"}</CmsText></li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#5a7a9f]/10 to-transparent border border-[#5a7a9f]/20">
                      <h3 className="text-lg text-white mb-3"><CmsText id="GiteProximiteLourdesPage-text-111" scope={[]}>{"Exemple : Séjour Semaine"}</CmsText></h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-112" scope={[]}>{"Jour 1-2 :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-113" scope={[]}>{" Visite complète de Lourdes et environs"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-114" scope={[]}>{"Jour 3-5 :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-115" scope={[]}>{" Randonnées dans le Val d'Azun"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-116" scope={[]}>{"Jour 6 :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-117" scope={[]}>{" Cauterets + Pont d'Espagne"}</CmsText></li>
                        <li><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-118" scope={[]}>{"Jour 7 :"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-119" scope={[]}>{" Détente au gîte (bain nordique, sauna)"}</CmsText></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nos gîtes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-120" scope={[]}>{"Nos Gîtes près de Lourdes"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteProximiteLourdesPage-text-121" scope={[]}>{"Les Gîtes du Soulor proposent "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteProximiteLourdesPage-text-122" scope={[]}>{"4 hébergements indépendants pour 3 personnes"}</CmsText></strong><CmsText id="GiteProximiteLourdesPage-text-123" scope={[]}>{", idéaux pour un séjour en couple près de Lourdes. Chaque gîte est entièrement équipé et offre tout le confort moderne."}</CmsText></p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20 mb-6">
                    <h3 className="text-xl text-white mb-4"><CmsText id="GiteProximiteLourdesPage-text-124" scope={[]}>{"Équipements de nos Gîtes"}</CmsText></h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-125" scope={[]}>{"Cuisine entièrement équipée"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-126" scope={[]}>{"Salle de bain moderne avec douche"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-127" scope={[]}>{"Literie de qualité (160x200)"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-128" scope={[]}>{"Salon avec TV écran plat"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-129" scope={[]}>{"Wi-Fi gratuit haut débit"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-130" scope={[]}>{"Parking privé gratuit"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-131" scope={[]}>{"Accès bain nordique chauffé au feu de bois"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-132" scope={[]}>{"Accès sauna traditionnel"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-133" scope={[]}>{"Linge de maison fourni"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteProximiteLourdesPage-text-134" scope={[]}>{"Ménage de fin de séjour inclus"}</CmsText></span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-135" scope={[]}>{"🏔️ Le Suyen"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-136" scope={[]}>{"Gîte 3 personnes avec accès bien-être"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-137" scope={[]}>{"🏔️ Le Tech"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-138" scope={[]}>{"Gîte tout confort proche de Lourdes"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-139" scope={[]}>{"🏔️ L'Estaing"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-140" scope={[]}>{"Hébergement moderne à 30 min de Lourdes"}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-141" scope={[]}>{"🏔️ Le Soum"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-142" scope={[]}>{"Gîte équipé avec bain nordique"}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Tarifs */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteProximiteLourdesPage-text-143" scope={[]}>{"Tarifs de nos Gîtes près de Lourdes"}</CmsText></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-144" scope={[]}>{"Une nuit"}</CmsText></h3>
                      <p className="text-3xl text-white font-bold mb-2"><PriceRange option={0} /></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-146" scope={[]}>{"Selon la saison"}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-147" scope={[]}>{"Dès 2 nuits"}</CmsText></h3>
                      <p className="text-3xl text-white font-bold mb-2"><PriceRange option={1} /></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-149" scope={[]}>{"Par nuit, selon la saison"}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteProximiteLourdesPage-text-150" scope={[]}>{"Semaine complète"}</CmsText></h3>
                      <p className="text-3xl text-white font-bold mb-2"><PriceRange option={2} /></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteProximiteLourdesPage-text-152" scope={[]}>{"7 nuits"}</CmsText></p>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm text-center mt-4"><CmsText id="GiteProximiteLourdesPage-text-153" scope={[]}>{"Tarifs variables selon la saison (basse, moyenne, haute). Tout inclus : linge, ménage, Wi-Fi, parking, accès bain nordique & sauna."}</CmsText></p>
                </div>

                {/* CTA Réservation */}
                <div className="text-center mt-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="https://gite-soulor-reservation.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c4a574] to-[#b89560] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#c4a574]/30 transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5" /><CmsText id="GiteProximiteLourdesPage-text-154" scope={[]}>{"Réserver votre gîte près de Lourdes"}</CmsText></Link>
                  </motion.div>
                  <p className="text-white/60 text-sm mt-4"><CmsText id="GiteProximiteLourdesPage-text-155" scope={[]}>{"À 30 min de Lourdes • 4 gîtes 3 personnes • Bain nordique & sauna inclus"}</CmsText></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
