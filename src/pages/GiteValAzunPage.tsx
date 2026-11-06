import { PriceRange, PriceSummary, priceRange } from '../components/SitePrices';
import { CmsText } from '../components/admin/CmsFields';
import { motion } from 'motion/react';
import { Mountain, MapPin, Compass, Calendar, Heart, Sparkles, Home, Sun, Snowflake, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function GiteValAzunPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gîte Val d'Azun - Location 3 Personnes avec Bain Nordique | Les Gîtes du Soulor</title>
        <meta name="description" content="Louez un gîte 3 personnes au cœur du Val d'Azun, Hautes-Pyrénées. Bain nordique, sauna, randonnée. Séjour nature à Arrens-Marsous. Réservation en ligne." />
        <meta name="keywords" content="gîte val d'azun, location val d'azun, hébergement val d'azun, gîte pyrénées, gîte 3 personnes val d'azun" />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/gite-val-azun" />
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
                <Mountain className="w-16 h-16 text-[#c4a574] mx-auto" />
              </motion.div>
              <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-001" scope={[]}>{"Gîte Val d'Azun"}</CmsText></h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto"><CmsText id="GiteValAzunPage-text-002" scope={[]}>{"Votre hébergement de charme au cœur de la vallée préservée du Val d'Azun"}</CmsText></p>
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
                  <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-003" scope={[]}>{"Location de Gîte dans le Val d'Azun"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteValAzunPage-text-004" scope={[]}>{"Le "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteValAzunPage-text-005" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="GiteValAzunPage-text-006" scope={[]}>{" est l'une des vallées les plus préservées et authentiques des "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteValAzunPage-text-007" scope={[]}>{"Hautes-Pyrénées"}</CmsText></strong><CmsText id="GiteValAzunPage-text-008" scope={[]}>{". Situé entre le célèbre "}</CmsText><strong><CmsText id="GiteValAzunPage-text-009" scope={[]}>{"Col du Soulor"}</CmsText></strong><CmsText id="GiteValAzunPage-text-010" scope={[]}>{" et le "}</CmsText><strong><CmsText id="GiteValAzunPage-text-011" scope={[]}>{"Col d'Aubisque"}</CmsText></strong><CmsText id="GiteValAzunPage-text-012" scope={[]}>{", cette vallée offre des paysages époustouflants et une nature intacte. Les Gîtes du Soulor, situés à "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteValAzunPage-text-013" scope={[]}>{"Arrens-Marsous"}</CmsText></strong><CmsText id="GiteValAzunPage-text-014" scope={[]}>{", vous proposent "}</CmsText><strong><CmsText id="GiteValAzunPage-text-015" scope={[]}>{"4 gîtes pour 3 personnes"}</CmsText></strong><CmsText id="GiteValAzunPage-text-016" scope={[]}>{" idéalement placés pour découvrir toutes les richesses de cette région exceptionnelle."}</CmsText></p>

                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="GiteValAzunPage-text-017" scope={[]}>{"Que vous soyez "}</CmsText><strong><CmsText id="GiteValAzunPage-text-018" scope={[]}>{"amateur de randonnée"}</CmsText></strong>, <strong><CmsText id="GiteValAzunPage-text-019" scope={[]}>{"passionné de cyclisme"}</CmsText></strong><CmsText id="GiteValAzunPage-text-020" scope={[]}>{" (le Tour de France passe régulièrement par les cols du Val d'Azun), ou simplement à la recherche d'un "}</CmsText><strong><CmsText id="GiteValAzunPage-text-021" scope={[]}>{"séjour ressourçant en montagne"}</CmsText></strong><CmsText id="GiteValAzunPage-text-022" scope={[]}>{", notre gîte Val d'Azun est le point de départ idéal pour vos aventures pyrénéennes."}</CmsText></p>
                </div>

                {/* Pourquoi le Val d'Azun */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-023" scope={[]}>{"Pourquoi choisir un gîte dans le Val d'Azun ?"}</CmsText></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Mountain className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-024" scope={[]}>{"Nature Préservée"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-025" scope={[]}>{"Le Val d'Azun fait partie du "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-026" scope={[]}>{"Parc National des Pyrénées"}</CmsText></strong><CmsText id="GiteValAzunPage-text-027" scope={[]}>{". Vous êtes au cœur d'une zone protégée où la faune et la flore sont exceptionnelles : marmottes, isards, vautours, aigles royaux, et une flore alpine remarquable."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Compass className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-028" scope={[]}>{"Cols Mythiques"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-029" scope={[]}>{"Le "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-030" scope={[]}>{"Col du Soulor"}</CmsText></strong><CmsText id="GiteValAzunPage-text-031" scope={[]}>{" (1474m) et le "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-032" scope={[]}>{"Col d'Aubisque"}</CmsText></strong><CmsText id="GiteValAzunPage-text-033" scope={[]}>{" (1709m) sont accessibles en voiture, vélo ou à pied. Ces cols offrent des panoramas à 360° sur la chaîne des Pyrénées, du Pic du Midi au Pic d'Anie."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Sun className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-034" scope={[]}>{"Randonnées Exceptionnelles"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-035" scope={[]}>{"Le Val d'Azun est le paradis des randonneurs : "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-036" scope={[]}>{"Lac d'Estaing"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteValAzunPage-text-037" scope={[]}>{"Lac d'Ilhéou"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteValAzunPage-text-038" scope={[]}>{"Lacs d'Arrémoulit"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteValAzunPage-text-039" scope={[]}>{"Cirque du Litor"}</CmsText></strong><CmsText id="GiteValAzunPage-text-040" scope={[]}>{"... Des dizaines de sentiers balisés pour tous les niveaux."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Snowflake className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-041" scope={[]}>{"Ski en Hiver"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-042" scope={[]}>{"En hiver, le Val d'Azun donne accès aux "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-043" scope={[]}>{"stations de ski d'Hautacam"}</CmsText></strong><CmsText id="GiteValAzunPage-text-044" scope={[]}>{" (15 min), "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-045" scope={[]}>{"Cauterets"}</CmsText></strong><CmsText id="GiteValAzunPage-text-046" scope={[]}>{" (35 min), et le "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-047" scope={[]}>{"Grand Tourmalet"}</CmsText></strong><CmsText id="GiteValAzunPage-text-048" scope={[]}>{" (La Mongie / Barèges, 40 min). Ski alpin, ski de fond, raquettes..."}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Nos gîtes dans le Val d'Azun */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-049" scope={[]}>{"Nos Gîtes 3 Personnes dans le Val d'Azun"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6"><CmsText id="GiteValAzunPage-text-050" scope={[]}>{"Les Gîtes du Soulor vous proposent "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteValAzunPage-text-051" scope={[]}>{"4 hébergements indépendants"}</CmsText></strong><CmsText id="GiteValAzunPage-text-052" scope={[]}>{" pour 3 personnes, situés au pied du Col du Soulor à Arrens-Marsous. Chaque gîte porte le nom d'un sommet emblématique du Val d'Azun :"}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-053" scope={[]}>{"🏔️ Le Suyen"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-054" scope={[]}>{"Du nom du pic de Suyen (2341m), sommet panoramique accessible depuis le col du Soulor."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-055" scope={[]}>{"🏔️ Le Tech"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-056" scope={[]}>{"En référence au gave de Tech, affluent du gave d'Azun qui arrose la vallée."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-057" scope={[]}>{"🏔️ L'Estaing"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-058" scope={[]}>{"Du nom du magnifique lac d'Estaing, joyau du Val d'Azun accessible en 2h de marche."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-059" scope={[]}>{"🏔️ Le Soum"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-060" scope={[]}>{"\"Soum\" signifie \"sommet\" en gascon. Ce gîte célèbre les nombreux sommets du Val d'Azun."}</CmsText></p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#5a7a9f]/10 to-transparent border border-[#5a7a9f]/20">
                    <h3 className="text-xl text-white mb-4"><CmsText id="GiteValAzunPage-text-061" scope={[]}>{"Équipements de nos gîtes Val d'Azun"}</CmsText></h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-062" scope={[]}>{"Cuisine entièrement équipée (lave-vaisselle, four, plaques, réfrigérateur)"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-063" scope={[]}>{"Salle de bain moderne avec douche italienne"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-064" scope={[]}>{"Literie haut de gamme (160x200 ou 2x80x200)"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-065" scope={[]}>{"Salon cosy avec TV écran plat"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-066" scope={[]}>{"Wi-Fi gratuit haut débit"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-067" scope={[]}>{"Parking privé gratuit"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-068" scope={[]}>{"Accès bain nordique chauffé au feu de bois"}</CmsText></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><CmsText id="GiteValAzunPage-text-069" scope={[]}>{"Accès sauna traditionnel"}</CmsText></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Activités dans le Val d'Azun */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-070" scope={[]}>{"Que faire dans le Val d'Azun ?"}</CmsText></h2>
                  
                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-071" scope={[]}>{"🥾 Randonnée Pédestre"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-2"><CmsText id="GiteValAzunPage-text-072" scope={[]}>{"Le Val d'Azun compte plus de "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-073" scope={[]}>{"100 km de sentiers balisés"}</CmsText></strong><CmsText id="GiteValAzunPage-text-074" scope={[]}>{". Randonnées incontournables :"}</CmsText></p>
                      <ul className="text-white/70 text-sm space-y-1 ml-4">
                        <li><CmsText id="GiteValAzunPage-text-075" scope={[]}>{"• Lac d'Estaing (2h, facile) : lac glaciaire magnifique"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-076" scope={[]}>{"• Lac d'Ilhéou (3h, moyen) : panorama exceptionnel"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-077" scope={[]}>{"• Cirque du Litor (4h, moyen) : cirque glaciaire sauvage"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-078" scope={[]}>{"• Col d'Ilhéou (5h, difficile) : haute montagne à 2716m"}</CmsText></li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-079" scope={[]}>{"🚴 Cyclisme et Cols"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-080" scope={[]}>{"Les "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-081" scope={[]}>{"cyclistes"}</CmsText></strong><CmsText id="GiteValAzunPage-text-082" scope={[]}>{" adorent le Val d'Azun : montées du "}</CmsText><strong><CmsText id="GiteValAzunPage-text-083" scope={[]}>{"Col du Soulor"}</CmsText></strong><CmsText id="GiteValAzunPage-text-084" scope={[]}>{" et "}</CmsText><strong><CmsText id="GiteValAzunPage-text-085" scope={[]}>{"Col d'Aubisque"}</CmsText></strong><CmsText id="GiteValAzunPage-text-086" scope={[]}>{" (étapes mythiques du Tour de France), routes panoramiques, circuits VTT et VTT électrique."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-087" scope={[]}>{"⛷️ Ski et Sports d'Hiver"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-088" scope={[]}>{"En hiver : ski alpin à "}</CmsText><strong className="text-white"><CmsText id="GiteValAzunPage-text-089" scope={[]}>{"Hautacam"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteValAzunPage-text-090" scope={[]}>{"Cauterets"}</CmsText></strong>, <strong className="text-white"><CmsText id="GiteValAzunPage-text-091" scope={[]}>{"Barèges-La Mongie"}</CmsText></strong><CmsText id="GiteValAzunPage-text-092" scope={[]}>{". Ski de fond et raquettes sur les plateaux du Val d'Azun."}</CmsText></p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-2"><CmsText id="GiteValAzunPage-text-093" scope={[]}>{"🧗 Via Ferrata et Escalade"}</CmsText></h3>
                      <p className="text-white/80 text-sm leading-relaxed"><CmsText id="GiteValAzunPage-text-094" scope={[]}>{"Via ferrata de Bious (parcours sportif), nombreuses voies d'escalade dans la vallée."}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Villages du Val d'Azun */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-095" scope={[]}>{"Villages et Patrimoine du Val d'Azun"}</CmsText></h2>
                  
                  <p className="text-white/90 leading-relaxed mb-4"><CmsText id="GiteValAzunPage-text-096" scope={[]}>{"Le Val d'Azun est composé de "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteValAzunPage-text-097" scope={[]}>{"5 villages"}</CmsText></strong><CmsText id="GiteValAzunPage-text-098" scope={[]}>{" authentiques :"}</CmsText></p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5">
                      <h3 className="text-white mb-2"><CmsText id="GiteValAzunPage-text-099" scope={[]}>{"📍 Arrens-Marsous"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-100" scope={[]}>{"Village principal, cœur du Val d'Azun. Commerces, services, départ de randonnées."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                      <h3 className="text-white mb-2"><CmsText id="GiteValAzunPage-text-101" scope={[]}>{"📍 Artalens-Souin"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-102" scope={[]}>{"Village pittoresque avec son église romane classée."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                      <h3 className="text-white mb-2"><CmsText id="GiteValAzunPage-text-103" scope={[]}>{"📍 Aucun"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-104" scope={[]}>{"Village thermal, station verte, accès au lac de Gaube."}</CmsText></p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                      <h3 className="text-white mb-2"><CmsText id="GiteValAzunPage-text-105" scope={[]}>{"📍 Bun"}</CmsText></h3>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-106" scope={[]}>{"Petit village de montagne authentique."}</CmsText></p>
                    </div>
                  </div>
                </div>

                {/* Infos pratiques */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteValAzunPage-text-107" scope={[]}>{"Infos Pratiques - Accès au Val d'Azun"}</CmsText></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Car className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-108" scope={[]}>{"En Voiture"}</CmsText></h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li><CmsText id="GiteValAzunPage-text-109" scope={[]}>{"• Depuis "}</CmsText><strong><CmsText id="GiteValAzunPage-text-110" scope={[]}>{"Lourdes"}</CmsText></strong><CmsText id="GiteValAzunPage-text-111" scope={[]}>{" : 30 min (25 km via D821)"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-112" scope={[]}>{"• Depuis "}</CmsText><strong><CmsText id="GiteValAzunPage-text-113" scope={[]}>{"Pau"}</CmsText></strong><CmsText id="GiteValAzunPage-text-114" scope={[]}>{" : 1h (60 km via A64 puis D821)"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-115" scope={[]}>{"• Depuis "}</CmsText><strong><CmsText id="GiteValAzunPage-text-116" scope={[]}>{"Tarbes"}</CmsText></strong><CmsText id="GiteValAzunPage-text-117" scope={[]}>{" : 45 min (50 km)"}</CmsText></li>
                        <li><CmsText id="GiteValAzunPage-text-118" scope={[]}>{"• Depuis "}</CmsText><strong><CmsText id="GiteValAzunPage-text-119" scope={[]}>{"Toulouse"}</CmsText></strong><CmsText id="GiteValAzunPage-text-120" scope={[]}>{" : 2h15 (185 km via A64)"}</CmsText></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-121" scope={[]}>{"Adresse"}</CmsText></h3>
                      <p className="text-white/80 text-sm mb-3">
                        <strong className="text-white"><CmsText id="GiteValAzunPage-text-122" scope={[]}>{"Les Gîtes du Soulor"}</CmsText></strong><br /><CmsText id="GiteValAzunPage-text-123" scope={[]}>{"42 route du Soulor"}</CmsText><br /><CmsText id="GiteValAzunPage-text-124" scope={[]}>{"65400 Arrens-Marsous"}</CmsText><br /><CmsText id="GiteValAzunPage-text-125" scope={[]}>{"Val d'Azun, Hautes-Pyrénées"}</CmsText></p>
                      <p className="text-white/70 text-sm"><CmsText id="GiteValAzunPage-text-126" scope={[]}>{"GPS : 42.9653° N, 0.1892° O"}</CmsText></p>
                    </div>
                  </div>
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
                      <Calendar className="w-5 h-5" /><CmsText id="GiteValAzunPage-text-127" scope={[]}>{"Réserver votre gîte dans le Val d'Azun"}</CmsText></Link>
                  </motion.div>
                  <p className="text-white/60 text-sm mt-4"><PriceSummary /></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
