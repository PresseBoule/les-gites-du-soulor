import { PriceRange, PriceSummary, priceRange } from '../components/SitePrices';
import { CmsText, CmsImage } from '../components/admin/CmsFields';
import { useAdmin } from '../contexts/AdminContext';
import { EditableImage } from '../components/admin/EditableImage';
import { EditableText } from '../components/admin/EditableText';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Home, Mountain, Waves, Flame, Star, ArrowRight, Check } from 'lucide-react';

export function GiteArrensMarsousPage() {
  const { content } = useAdmin();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fallbackGites = [
    { nom: 'Le Suyen', surface: '50m²', image: '/images/postimg/FFcpb6LX/7588570501155327596.jpg' },
    { nom: 'Le Tech', surface: '50m²', image: '/images/postimg/sfQJLy0X/2856943310074011028.jpg' },
    { nom: "L'Estaing", surface: '65m²', image: '/images/postimg/x12r0yfD/IMG-3567.jpg' },
    { nom: 'Le Soum', surface: '50m²', image: '/images/postimg/SKksq5yk/unnamed.jpg' },
  ];
  const gites = fallbackGites.map((fallback, index) => ({ ...fallback, ...content.gites?.[index], surface: content.gites?.[index]?.superficie || fallback.surface }));

  const proximite = [
    { lieu: "Village d'Arrens-Marsous", distance: '5 min à pied', icon: Home },
    { lieu: 'Stations de ski', distance: '15-30 min en voiture', icon: Mountain },
    { lieu: 'Lacs de montagne', distance: 'Accessible en randonnée', icon: Waves },
    { lieu: 'Lourdes', distance: '25 km (35 min)', icon: MapPin },
  ];

  const activites = [
    'Randonnées tous niveaux (GR10, lacs)',
    'VTT et cyclotourisme (Col du Soulor)',
    'Ski alpin et raquettes en hiver',
    'Pêche en rivière et lacs',
    'Parapente et sports aériens',
    'Thermalisme à Cauterets (30 min)',
    'Visite du Parc National des Pyrénées',
    'Gastronomie et marchés locaux',
  ];

  const equipements = [
    'Chambre avec lit double',
    'Salle de bain privative',
    'Cuisine équipée complète',
    'Salon cosy',
    'Wi-Fi gratuit',
    'Chauffage',
    'Linge de maison fourni',
    'Vue sur montagnes',
  ];

  return (
    <>
      <Helmet>
        <title>Gîte à Arrens-Marsous - Location 3 Personnes Val d'Azun Pyrénées</title>
        <meta name="description" content="Location de gîte à Arrens-Marsous dans le Val d'Azun. 4 hébergements tout confort pour 3 personnes avec bain nordique et sauna. À 5 min du village à pied." />
        <link rel="canonical" href="https://lesgitesdusoulor.fr/gite-arrens-marsous" />
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <MapPin className="w-16 h-16 text-[#c4a574] mx-auto" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-001" scope={[]}>{"Gîte à Arrens-Marsous"}</CmsText></h1>
              <p className="text-white/70 text-xl max-w-3xl mx-auto"><CmsText id="GiteArrensMarsousPage-text-002" scope={[]}>{"Votre hébergement de charme au cœur du Val d'Azun dans les Hautes-Pyrénées"}</CmsText></p>
            </motion.div>
          </div>
        </section>

        {/* Introduction SEO */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <p className="text-white/80 leading-relaxed mb-6"><CmsText id="GiteArrensMarsousPage-text-003" scope={[]}>{"Vous recherchez un "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteArrensMarsousPage-text-004" scope={[]}>{"gîte à Arrens-Marsous"}</CmsText></strong><CmsText id="GiteArrensMarsousPage-text-005" scope={[]}>{" pour vos prochaines vacances dans les Pyrénées ? Les Gîtes du Soulor vous accueillent dans un cadre exceptionnel au cœur du "}</CmsText><strong className="text-[#c4a574]"><CmsText id="GiteArrensMarsousPage-text-006" scope={[]}>{"Val d'Azun"}</CmsText></strong><CmsText id="GiteArrensMarsousPage-text-007" scope={[]}>{", à seulement 5 minutes à pied du charmant village d'Arrens-Marsous."}</CmsText></p>
                
                <h2 className="text-2xl text-white mb-4 mt-8" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-008" scope={[]}>{"Pourquoi choisir nos gîtes à Arrens-Marsous"}</CmsText></h2>
                <p className="text-white/80 leading-relaxed mb-4"><CmsText id="GiteArrensMarsousPage-text-009" scope={[]}>{"Arrens-Marsous est un village de montagne authentique situé à 885 mètres d'altitude dans les Hautes-Pyrénées (65). Porte d'entrée du Parc National des Pyrénées, ce village de caractère offre un cadre idéal pour un séjour nature, que vous veniez pour randonner en été, skier en hiver ou simplement vous ressourcer au calme."}</CmsText></p>
                <p className="text-white/80 leading-relaxed"><CmsText id="GiteArrensMarsousPage-text-010" scope={[]}>{"Nos 4 gîtes se situent au Col du Soulor, position stratégique qui combine tranquillité absolue et proximité immédiate des commerces et services du village. Vous profitez ainsi du meilleur des deux mondes : le calme de la montagne et la commodité d'un village vivant."}</CmsText></p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nos 4 Gîtes */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-011" scope={[]}>{"Nos 4 gîtes de charme pour 3 personnes"}</CmsText></h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto"><CmsText id="GiteArrensMarsousPage-text-012" scope={[]}>{"Le Suyen, Le Tech, L'Estaing et Le Soum : quatre hébergements tout confort avec bain nordique et sauna"}</CmsText></p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {gites.map((gite, index) => (
                <motion.div
                  key={gite.nom}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#c4a574]/30 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <EditableImage path={`gites.${index}.image`}
                        src={gite.image} 
                        alt={gite.nom}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl text-white font-semibold"><EditableText path={`gites.${index}.nom`} value={gite.nom} as="span" /></h3>
                        <Star className="w-5 h-5 text-[#c4a574]" />
                      </div>
                      <p className="text-white/60 text-sm mb-4">
                        <CmsText id="GiteArrensMarsousPage-text-015" scope={[index]}>{gite.surface}</CmsText><CmsText id="GiteArrensMarsousPage-text-016" scope={[index]}>{" • 3 personnes"}</CmsText></p>
                      <Link 
                        to="/gites" 
                        className="inline-flex items-center gap-2 text-[#c4a574] hover:text-[#d4b584] transition-colors text-sm"
                      >
                        <span><CmsText id="GiteArrensMarsousPage-text-017" scope={[index]}>{"Découvrir"}</CmsText></span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Équipements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h3 className="text-2xl text-white mb-6 text-center" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-018" scope={[]}>{"Équipements inclus dans chaque gîte"}</CmsText></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipements.map((equip, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/80">
                      <Check className="w-5 h-5 text-[#c4a574] flex-shrink-0" />
                      <span><CmsText id="Arrens-equipment" scope={[idx]}>{equip}</CmsText></span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[#c4a574] font-semibold text-center flex items-center justify-center gap-2">
                    <Flame className="w-5 h-5" /><CmsText id="GiteArrensMarsousPage-text-019" scope={[]}>{"Bain nordique chauffé au feu de bois et sauna inclus"}</CmsText></p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Arrens-Marsous Village */}
        <section className="py-16 bg-gradient-to-b from-transparent via-[#2d3843]/30 to-transparent relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-020" scope={[]}>{"Arrens-Marsous : un village de montagne authentique"}</CmsText></h2>
              </motion.div>

              <div className="prose prose-invert prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                >
                  <p className="text-white/80 leading-relaxed mb-6"><CmsText id="GiteArrensMarsousPage-text-021" scope={[]}>{"Arrens-Marsous (1 200 habitants) est l'un des plus beaux villages du Val d'Azun. Ce village pyrénéen authentique a su préserver son caractère traditionnel tout en offrant tous les services nécessaires à un séjour confortable."}</CmsText></p>
                  
                  <h3 className="text-xl text-white mb-4"><CmsText id="GiteArrensMarsousPage-text-022" scope={[]}>{"Ce que vous trouverez au village :"}</CmsText></h3>
                  <ul className="space-y-2 text-white/70">
                    <li><CmsText id="GiteArrensMarsousPage-text-023" scope={[]}>{"Commerces de proximité (boulangerie, épicerie, boucherie)"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-024" scope={[]}>{"Restaurants typiques proposant cuisine pyrénéenne"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-025" scope={[]}>{"Office de Tourisme avec conseils randonnées"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-026" scope={[]}>{"Départ de nombreux sentiers balisés"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-027" scope={[]}>{"Architecture pyrénéenne traditionnelle préservée"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-028" scope={[]}>{"Église Saint-Félix du XIIe siècle"}</CmsText></li>
                    <li><CmsText id="GiteArrensMarsousPage-text-029" scope={[]}>{"Marchés locaux en saison"}</CmsText></li>
                  </ul>
                  
                  <p className="text-white/80 leading-relaxed mt-6"><CmsText id="GiteArrensMarsousPage-text-030" scope={[]}>{"Le village est particulièrement apprécié des amoureux de la montagne pour son authenticité préservée et son accès direct au Parc National des Pyrénées."}</CmsText></p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* À proximité */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-031" scope={[]}>{"À proximité de nos gîtes"}</CmsText></h2>
              <p className="text-white/70 text-lg"><CmsText id="GiteArrensMarsousPage-text-032" scope={[]}>{"Distances depuis Les Gîtes du Soulor"}</CmsText></p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {proximite.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.lieu}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#c4a574]/30 transition-all duration-300 text-center"
                  >
                    <Icon className="w-10 h-10 text-[#c4a574] mx-auto mb-4" />
                    <h3 className="text-white mb-2 font-semibold"><CmsText id="Arrens-nearby-place" scope={[index]}>{item.lieu}</CmsText></h3>
                    <p className="text-white/60 text-sm"><CmsText id="Arrens-nearby-distance" scope={[index]}>{item.distance}</CmsText></p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Activités */}
        <section className="py-16 bg-gradient-to-b from-transparent via-[#2d3843]/30 to-transparent relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-033" scope={[]}>{"Activités et découvertes autour d'Arrens-Marsous"}</CmsText></h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activites.map((activite, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Check className="w-5 h-5 text-[#c4a574] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80"><CmsText id="Arrens-activity" scope={[index]}>{activite}</CmsText></span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <h3 className="text-xl text-white mb-4"><CmsText id="GiteArrensMarsousPage-text-034" scope={[]}>{"Saisons et activités"}</CmsText></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70">
                  <div>
                    <h4 className="text-[#c4a574] font-semibold mb-2"><CmsText id="GiteArrensMarsousPage-text-035" scope={[]}>{"En été"}</CmsText></h4>
                    <p className="text-sm"><CmsText id="GiteArrensMarsousPage-text-036" scope={[]}>{"Randonnées tous niveaux, VTT, pêche, parapente, baignades en lacs de montagne"}</CmsText></p>
                  </div>
                  <div>
                    <h4 className="text-[#c4a574] font-semibold mb-2"><CmsText id="GiteArrensMarsousPage-text-037" scope={[]}>{"En hiver"}</CmsText></h4>
                    <p className="text-sm"><CmsText id="GiteArrensMarsousPage-text-038" scope={[]}>{"Ski alpin, ski de fond, raquettes, chiens de traîneau, ski de randonnée"}</CmsText></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Réservation */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c4a574]/20 to-[#5a7a9f]/20 rounded-3xl blur-2xl" />
              <div className="relative p-10 rounded-3xl border border-[#c4a574]/30 bg-gradient-to-br from-[#2d3843]/90 to-[#3a4a5a]/90 backdrop-blur-sm text-center">
                <h3 className="text-3xl text-white mb-4" style={{ fontFamily: 'serif' }}><CmsText id="GiteArrensMarsousPage-text-039" scope={[]}>{"Réservez votre gîte à Arrens-Marsous"}</CmsText></h3>
                <p className="text-white/70 leading-relaxed mb-8"><CmsText id="GiteArrensMarsousPage-text-040" scope={[]}>{"Disponible dès une nuit, pour plusieurs nuits ou une semaine complète. Acompte de 20% à la réservation, solde à l'arrivée. Chèques-vacances non acceptés."}</CmsText></p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1"><CmsText id="GiteArrensMarsousPage-text-041" scope={[]}>{"Une nuit"}</CmsText></p>
                    <p className="text-[#c4a574] text-xl font-semibold"><PriceRange option={0} /></p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1"><CmsText id="GiteArrensMarsousPage-text-043" scope={[]}>{"Semaine"}</CmsText></p>
                    <p className="text-[#c4a574] text-xl font-semibold"><PriceRange option={2} /></p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1"><CmsText id="GiteArrensMarsousPage-text-045" scope={[]}>{"Dès 2 nuits"}</CmsText></p>
                    <p className="text-[#c4a574] text-xl font-semibold"><PriceRange option={1} suffix="/nuit" /></p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/tarifs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-[#c4a574] to-[#d4b584] text-white font-semibold hover:from-[#d4b584] hover:to-[#c4a574] transition-all shadow-lg"
                    ><CmsText id="GiteArrensMarsousPage-text-047" scope={[]}>{"Voir tous les tarifs"}</CmsText></motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full border-2 border-[#c4a574] text-[#c4a574] font-semibold hover:bg-[#c4a574]/10 transition-all"
                    ><CmsText id="GiteArrensMarsousPage-text-048" scope={[]}>{"Nous contacter"}</CmsText></motion.button>
                  </Link>
                </div>

                <p className="text-white/50 text-sm mt-6"><CmsText id="GiteArrensMarsousPage-text-049" scope={[]}>{"Téléphone : +33 6 45 79 59 39 | Email : spanazol@wanadoo.fr"}</CmsText></p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Liens internes SEO */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <h3 className="text-xl text-white mb-6 text-center"><CmsText id="GiteArrensMarsousPage-text-050" scope={[]}>{"Découvrez aussi"}</CmsText></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/gite-val-azun" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c4a574]/30 transition-all group">
                    <h4 className="text-white group-hover:text-[#c4a574] transition-colors mb-1 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /><CmsText id="GiteArrensMarsousPage-text-051" scope={[]}>{"Gîte dans le Val d'Azun"}</CmsText></h4>
                    <p className="text-white/60 text-sm"><CmsText id="GiteArrensMarsousPage-text-052" scope={[]}>{"Découvrez la vallée"}</CmsText></p>
                  </Link>
                  <Link to="/gite-bain-nordique-pyrenees" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c4a574]/30 transition-all group">
                    <h4 className="text-white group-hover:text-[#c4a574] transition-colors mb-1 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /><CmsText id="GiteArrensMarsousPage-text-053" scope={[]}>{"Gîte avec bain nordique"}</CmsText></h4>
                    <p className="text-white/60 text-sm"><CmsText id="GiteArrensMarsousPage-text-054" scope={[]}>{"Expérience unique"}</CmsText></p>
                  </Link>
                  <Link to="/bien-etre" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c4a574]/30 transition-all group">
                    <h4 className="text-white group-hover:text-[#c4a574] transition-colors mb-1 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /><CmsText id="GiteArrensMarsousPage-text-055" scope={[]}>{"Bien-être & Détente"}</CmsText></h4>
                    <p className="text-white/60 text-sm"><CmsText id="GiteArrensMarsousPage-text-056" scope={[]}>{"Sauna et bain nordique"}</CmsText></p>
                  </Link>
                  <Link to="/sejour-bien-etre-pyrenees" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c4a574]/30 transition-all group">
                    <h4 className="text-white group-hover:text-[#c4a574] transition-colors mb-1 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /><CmsText id="GiteArrensMarsousPage-text-057" scope={[]}>{"Séjour bien-être"}</CmsText></h4>
                    <p className="text-white/60 text-sm"><CmsText id="GiteArrensMarsousPage-text-058" scope={[]}>{"Ressourcement total"}</CmsText></p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
