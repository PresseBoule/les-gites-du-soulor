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
        <meta name="description" content="Gîte 4 personnes à 30 min de Lourdes, dans les Pyrénées. Hébergement calme à Arrens-Marsous avec bain nordique et sauna. Alternative nature à Lourdes." />
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
              <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'serif' }}>
                Gîte à proximité de Lourdes
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Hébergement calme et nature à 30 minutes de Lourdes, dans les Pyrénées
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
                    Location Gîte près de Lourdes dans les Hautes-Pyrénées
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Vous recherchez un <strong className="text-[#c4a574]">hébergement calme</strong> à proximité de <strong className="text-[#c4a574]">Lourdes</strong> ? Les Gîtes du Soulor, situés à <strong className="text-[#c4a574]">Arrens-Marsous</strong> dans le <strong className="text-[#c4a574]">Val d'Azun</strong>, vous proposent <strong>4 gîtes pour 4 personnes</strong> à seulement <strong className="text-[#c4a574]">30 minutes de Lourdes</strong>. Une alternative parfaite pour profiter du calme de la montagne tout en restant proche de la cité mariale.
                  </p>

                  <p className="text-white/80 leading-relaxed mb-6">
                    Que vous veniez à Lourdes pour un <strong>pèlerinage</strong>, une <strong>visite touristique</strong>, ou simplement pour découvrir les <strong>Pyrénées</strong>, nos gîtes offrent un cadre reposant loin de l'agitation urbaine, tout en restant facilement accessibles depuis Lourdes via la <strong>D821</strong> (route du Val d'Azun).
                  </p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20 mt-6">
                    <h3 className="text-xl text-white mb-4">Pourquoi choisir un gîte près de Lourdes ?</h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Calme et sérénité</strong> : Loin de l'agitation touristique de Lourdes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Nature préservée</strong> : Cadre montagnard authentique dans le Val d'Azun</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Proximité</strong> : Seulement 30 min en voiture de Lourdes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Meilleur rapport qualité/prix</strong> : Tarifs plus attractifs qu'en centre-ville de Lourdes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span><strong>Équipements bien-être</strong> : Bain nordique et sauna inclus</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Accès depuis Lourdes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Comment venir de Lourdes à Arrens-Marsous ?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Car className="w-5 h-5" />
                        En Voiture depuis Lourdes
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        <strong className="text-white">Trajet :</strong> 30 minutes (25 km)<br />
                        <strong className="text-white">Route :</strong> D821 (route du Val d'Azun)<br />
                        <strong className="text-white">Itinéraire :</strong> Lourdes → Argelès-Gazost → Arrens-Marsous
                      </p>
                      <p className="text-white/70 text-sm">
                        Route panoramique avec vue sur les montagnes. Parking privé gratuit à l'arrivée.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Train className="w-5 h-5" />
                        En Train + Transfert
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        <strong className="text-white">Gare :</strong> Lourdes (TGV Paris-Lourdes 4h30)<br />
                        <strong className="text-white">Transfert :</strong> Taxi ou navette (30 min)<br />
                        <strong className="text-white">Distance :</strong> 25 km
                      </p>
                      <p className="text-white/70 text-sm">
                        Nous pouvons vous conseiller des services de taxi locaux.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Distances depuis nos Gîtes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                      <div>• <strong className="text-white">Lourdes :</strong> 30 min (25 km)</div>
                      <div>• <strong className="text-white">Argelès-Gazost :</strong> 15 min (12 km)</div>
                      <div>• <strong className="text-white">Cauterets :</strong> 35 min (30 km)</div>
                      <div>• <strong className="text-white">Pau :</strong> 1h (60 km)</div>
                      <div>• <strong className="text-white">Tarbes :</strong> 45 min (50 km)</div>
                      <div>• <strong className="text-white">Toulouse :</strong> 2h15 (185 km)</div>
                    </div>
                  </div>
                </div>

                {/* Visiter Lourdes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Que visiter à Lourdes depuis nos Gîtes ?
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    <strong className="text-[#c4a574]">Lourdes</strong> est la <strong>2ème ville touristique de France</strong> après Paris, avec plus de 6 millions de visiteurs par an. La ville est mondialement connue pour son <strong>sanctuaire marial</strong>, mais offre également de nombreuses attractions touristiques.
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3 flex items-center gap-2">
                        <Church className="w-5 h-5" />
                        Le Sanctuaire de Lourdes
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white">Grotte de Massabielle</strong>, <strong className="text-white">Basilique de l'Immaculée Conception</strong>, <strong className="text-white">Basilique du Rosaire</strong>, <strong className="text-white">Basilique souterraine Saint-Pie X</strong>... Le sanctuaire s'étend sur 52 hectares et accueille pèlerins et visiteurs toute l'année. Accès gratuit.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3">🏰 Le Château Fort de Lourdes</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Forteresse médiévale perchée sur un piton rocheux, offrant une <strong className="text-white">vue panoramique sur Lourdes et les Pyrénées</strong>. Abrite le <strong className="text-white">Musée Pyrénéen</strong> avec des collections d'art populaire et d'histoire locale.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg text-[#c4a574] mb-3">🎭 Autres Attractions</h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li>• <strong className="text-white">Pic du Jer :</strong> Funiculaire jusqu'au sommet (948m), vue à 360° sur les Pyrénées</li>
                        <li>• <strong className="text-white">Lac de Lourdes :</strong> Plan d'eau aménagé, promenades, activités nautiques</li>
                        <li>• <strong className="text-white">Grottes de Bétharram :</strong> Réseau souterrain spectaculaire (20 min de Lourdes)</li>
                        <li>• <strong className="text-white">Chemin de Croix :</strong> Parcours spirituel dans la forêt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Combiner Lourdes et montagne */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Combiner Visite de Lourdes et Séjour Montagne
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    En séjournant dans nos gîtes à <strong className="text-[#c4a574]">Arrens-Marsous</strong>, vous combinez le meilleur des deux mondes : la <strong>visite de Lourdes</strong> et la <strong>découverte authentique des Pyrénées</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-white mb-3">Exemple : Séjour Week-end</h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li><strong className="text-[#c4a574]">Samedi matin :</strong> Visite du Sanctuaire de Lourdes (2-3h)</li>
                        <li><strong className="text-[#c4a574]">Samedi après-midi :</strong> Randonnée au Lac d'Estaing (Val d'Azun)</li>
                        <li><strong className="text-[#c4a574]">Samedi soir :</strong> Bain nordique au gîte (détente)</li>
                        <li><strong className="text-[#c4a574]">Dimanche :</strong> Château de Lourdes + Pic du Jer</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#5a7a9f]/10 to-transparent border border-[#5a7a9f]/20">
                      <h3 className="text-lg text-white mb-3">Exemple : Séjour Semaine</h3>
                      <ul className="text-white/80 text-sm space-y-2">
                        <li><strong className="text-[#c4a574]">Jour 1-2 :</strong> Visite complète de Lourdes et environs</li>
                        <li><strong className="text-[#c4a574]">Jour 3-5 :</strong> Randonnées dans le Val d'Azun</li>
                        <li><strong className="text-[#c4a574]">Jour 6 :</strong> Cauterets + Pont d'Espagne</li>
                        <li><strong className="text-[#c4a574]">Jour 7 :</strong> Détente au gîte (bain nordique, sauna)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nos gîtes */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Nos Gîtes près de Lourdes
                  </h2>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Les Gîtes du Soulor proposent <strong className="text-[#c4a574]">4 hébergements indépendants pour 4 personnes</strong>, idéaux pour un séjour en couple près de Lourdes. Chaque gîte est entièrement équipé et offre tout le confort moderne.
                  </p>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-[#5a7a9f]/10 border border-[#c4a574]/20 mb-6">
                    <h3 className="text-xl text-white mb-4">Équipements de nos Gîtes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Cuisine entièrement équipée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Salle de bain moderne avec douche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Literie de qualité (160x200)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Salon avec TV écran plat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Wi-Fi gratuit haut débit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Parking privé gratuit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Accès bain nordique chauffé au feu de bois</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Accès sauna traditionnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Linge de maison fourni</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#c4a574] mt-1">✓</span>
                        <span>Ménage de fin de séjour inclus</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Suyen</h3>
                      <p className="text-white/70 text-sm">Gîte 4 personnes avec accès bien-être</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Tech</h3>
                      <p className="text-white/70 text-sm">Gîte tout confort proche de Lourdes</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ L'Estaing</h3>
                      <p className="text-white/70 text-sm">Hébergement moderne à 30 min de Lourdes</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20">
                      <h3 className="text-lg text-[#c4a574] mb-2">🏔️ Le Soum</h3>
                      <p className="text-white/70 text-sm">Gîte équipé avec bain nordique</p>
                    </div>
                  </div>
                </div>

                {/* Tarifs */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mb-8">
                  <h2 className="text-2xl text-white mb-6" style={{ fontFamily: 'serif' }}>
                    Tarifs de nos Gîtes près de Lourdes
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2">Week-end</h3>
                      <p className="text-3xl text-white font-bold mb-2">400-450€</p>
                      <p className="text-white/70 text-sm">Ven 16h → Dim 11h</p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2">Semaine</h3>
                      <p className="text-3xl text-white font-bold mb-2">150-180€</p>
                      <p className="text-white/70 text-sm">La nuit (min 1 nuits)</p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-[#c4a574]/10 to-transparent border border-[#c4a574]/20 text-center">
                      <h3 className="text-lg text-[#c4a574] mb-2">Semaine complète</h3>
                      <p className="text-3xl text-white font-bold mb-2">1150-1350€</p>
                      <p className="text-white/70 text-sm">7 jours / 6 nuits</p>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm text-center mt-4">
                    Tarifs variables selon la saison (basse, moyenne, haute). Tout inclus : linge, ménage, Wi-Fi, parking, accès bain nordique & sauna.
                  </p>
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
                      <Calendar className="w-5 h-5" />
                      Réserver votre gîte près de Lourdes
                    </Link>
                  </motion.div>
                  <p className="text-white/60 text-sm mt-4">
                    À 30 min de Lourdes • 4 gîtes 4 personnes • Bain nordique & sauna inclus
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
