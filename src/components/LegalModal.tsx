import { CmsText } from './admin/CmsFields';
import { motion, AnimatePresence } from 'motion/react';
import { X, ScrollText, Shield, Cookie } from 'lucide-react';
import { Button } from './ui/button';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'mentions' | 'privacy' | 'cookies';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    mentions: {
      title: 'Mentions Légales',
      icon: ScrollText,
      sections: [
        {
          title: 'Éditeur du site',
          content: (
            <>
              <p><strong><CmsText id="LegalModal-text-001" scope={[type]}>{"Dénomination sociale :"}</CmsText></strong><CmsText id="LegalModal-text-002" scope={[type]}>{" SARL Les Artigaux"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-003" scope={[type]}>{"Forme juridique :"}</CmsText></strong><CmsText id="LegalModal-text-004" scope={[type]}>{" Société à Responsabilité Limitée (SARL)"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-005" scope={[type]}>{"Capital social :"}</CmsText></strong><CmsText id="LegalModal-text-006" scope={[type]}>{" 15 000 €"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-007" scope={[type]}>{"SIRET :"}</CmsText></strong><CmsText id="LegalModal-text-008" scope={[type]}>{" 851 041 590 00015"}</CmsText></p>
              <p className="mt-3"><strong><CmsText id="LegalModal-text-009" scope={[type]}>{"Gérant :"}</CmsText></strong><CmsText id="LegalModal-text-010" scope={[type]}>{" Panazol Sylvain"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-011" scope={[type]}>{"Adresse :"}</CmsText></strong><CmsText id="LegalModal-text-012" scope={[type]}>{" 42 route du Soulor, 65400 Arrens-Marsous, France"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-013" scope={[type]}>{"Téléphone :"}</CmsText></strong><CmsText id="LegalModal-text-014" scope={[type]}>{" 06 45 79 59 39"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-015" scope={[type]}>{"Email :"}</CmsText></strong><CmsText id="LegalModal-text-016" scope={[type]}>{" spanazol@wanadoo.fr"}</CmsText></p>
            </>
          ),
        },
        {
          title: 'Responsable de publication',
          content: <p><CmsText id="LegalModal-text-017" scope={[type]}>{"Sylvain Panazol"}</CmsText></p>,
        },
        {
          title: 'Conception et réalisation',
          content: (
            <>
              <p><strong><CmsText id="LegalModal-text-018" scope={[type]}>{"Designer & Développeur :"}</CmsText></strong><CmsText id="LegalModal-text-019" scope={[type]}>{" Camille Panazol"}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-020" scope={[type]}>{"Agence :"}</CmsText></strong><CmsText id="LegalModal-text-021" scope={[type]}>{" PixelBoost"}</CmsText></p>
            </>
          ),
        },
        {
          title: 'Hébergement',
          content: (
            <>
              <p><strong><CmsText id="LegalModal-text-022" scope={[type]}>{"Hébergeur :"}</CmsText></strong><CmsText id="LegalModal-text-023" scope={[type]}>{" Netlify, Inc."}</CmsText></p>
              <p><strong><CmsText id="LegalModal-text-024" scope={[type]}>{"Adresse :"}</CmsText></strong><CmsText id="LegalModal-text-025" scope={[type]}>{" 2325 3rd Street, Suite 296"}</CmsText></p>
              <p><CmsText id="LegalModal-text-026" scope={[type]}>{"San Francisco, California 94107"}</CmsText></p>
              <p><CmsText id="LegalModal-text-027" scope={[type]}>{"États-Unis"}</CmsText></p>
              <p className="mt-2">
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4a574] hover:underline"
                ><CmsText id="LegalModal-text-028" scope={[type]}>{"www.netlify.com"}</CmsText></a>
              </p>
            </>
          ),
        },
        {
          title: 'Propriété intellectuelle',
          content: (
            <>
              <p><CmsText id="LegalModal-text-029" scope={[type]}>{"L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."}</CmsText></p>
              <p className="mt-3"><CmsText id="LegalModal-text-030" scope={[type]}>{"La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication."}</CmsText></p>
            </>
          ),
        },
        {
          title: 'Crédits photos',
          content: (
            <>
              <p><CmsText id="LegalModal-text-031" scope={[type]}>{"Toutes les photographies utilisées sur ce site sont issues de la collection personnelle de Panazol Sylvain, gérant des Gîtes du Soulor."}</CmsText></p>
              <p className="mt-2"><CmsText id="LegalModal-text-032" scope={[type]}>{"Ces images sont protégées par le droit d'auteur et ne peuvent être utilisées sans autorisation préalable écrite."}</CmsText></p>
            </>
          ),
        },
      ],
    },
    privacy: {
      title: 'Politique de Confidentialité',
      icon: Shield,
      sections: [
        {
          title: 'Collecte des données personnelles',
          content: (
            <>
              <p><CmsText id="LegalModal-text-033" scope={[type]}>{"Dans le cadre de l'utilisation de notre site et de nos services de réservation, nous sommes amenés à collecter les données personnelles suivantes :"}</CmsText></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong><CmsText id="LegalModal-text-034" scope={[type]}>{"Nom et prénom"}</CmsText></strong></li>
                <li><strong><CmsText id="LegalModal-text-035" scope={[type]}>{"Adresse email"}</CmsText></strong></li>
                <li><strong><CmsText id="LegalModal-text-036" scope={[type]}>{"Numéro de téléphone"}</CmsText></strong></li>
                <li><strong><CmsText id="LegalModal-text-037" scope={[type]}>{"Informations de réservation"}</CmsText></strong><CmsText id="LegalModal-text-038" scope={[type]}>{" (dates, nombre de personnes, gîte choisi)"}</CmsText></li>
              </ul>
            </>
          ),
        },
        {
          title: 'Finalité de la collecte',
          content: (
            <>
              <p><CmsText id="LegalModal-text-039" scope={[type]}>{"Les données collectées sont utilisées pour :"}</CmsText></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><CmsText id="LegalModal-text-040" scope={[type]}>{"Gérer vos réservations et confirmations"}</CmsText></li>
                <li><CmsText id="LegalModal-text-041" scope={[type]}>{"Vous contacter concernant votre séjour"}</CmsText></li>
                <li><CmsText id="LegalModal-text-042" scope={[type]}>{"Répondre à vos demandes d'information"}</CmsText></li>
                <li><CmsText id="LegalModal-text-043" scope={[type]}>{"Améliorer nos services"}</CmsText></li>
              </ul>
            </>
          ),
        },
        {
          title: 'Base légale du traitement',
          content: (
            <p><CmsText id="LegalModal-text-044" scope={[type]}>{"Le traitement de vos données personnelles est fondé sur l'exécution du contrat de réservation et votre consentement explicite lors de la soumission du formulaire de contact."}</CmsText></p>
          ),
        },
        {
          title: 'Durée de conservation',
          content: (
            <>
              <p><CmsText id="LegalModal-text-045" scope={[type]}>{"Vos données sont conservées pendant :"}</CmsText></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong><CmsText id="LegalModal-text-046" scope={[type]}>{"3 ans"}</CmsText></strong><CmsText id="LegalModal-text-047" scope={[type]}>{" à compter de votre dernière interaction avec nos services"}</CmsText></li>
                <li><CmsText id="LegalModal-text-048" scope={[type]}>{"Les données de réservation sont archivées conformément aux obligations comptables et fiscales"}</CmsText></li>
              </ul>
            </>
          ),
        },
        {
          title: 'Vos droits',
          content: (
            <>
              <p><CmsText id="LegalModal-text-049" scope={[type]}>{"Conformément au RGPD, vous disposez des droits suivants :"}</CmsText></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong><CmsText id="LegalModal-text-050" scope={[type]}>{"Droit d'accès :"}</CmsText></strong><CmsText id="LegalModal-text-051" scope={[type]}>{" Vous pouvez demander une copie de vos données"}</CmsText></li>
                <li><strong><CmsText id="LegalModal-text-052" scope={[type]}>{"Droit de rectification :"}</CmsText></strong><CmsText id="LegalModal-text-053" scope={[type]}>{" Vous pouvez corriger vos données inexactes"}</CmsText></li>
                <li><strong><CmsText id="LegalModal-text-054" scope={[type]}>{"Droit à l'effacement :"}</CmsText></strong><CmsText id="LegalModal-text-055" scope={[type]}>{" Vous pouvez demander la suppression de vos données"}</CmsText></li>
                <li><strong><CmsText id="LegalModal-text-056" scope={[type]}>{"Droit d'opposition :"}</CmsText></strong><CmsText id="LegalModal-text-057" scope={[type]}>{" Vous pouvez vous opposer au traitement de vos données"}</CmsText></li>
                <li><strong><CmsText id="LegalModal-text-058" scope={[type]}>{"Droit à la portabilité :"}</CmsText></strong><CmsText id="LegalModal-text-059" scope={[type]}>{" Vous pouvez récupérer vos données dans un format structuré"}</CmsText></li>
              </ul>
              <p className="mt-3"><CmsText id="LegalModal-text-060" scope={[type]}>{"Pour exercer ces droits, veuillez nous envoyer un email à :"}</CmsText><CmsText id="LegalModal-text-061" scope={[type]}>{' '}</CmsText>
                <a href="mailto:spanazol@wanadoo.fr" className="text-[#c4a574] hover:underline"><CmsText id="LegalModal-text-062" scope={[type]}>{"spanazol@wanadoo.fr"}</CmsText></a>
              </p>
            </>
          ),
        },
        {
          title: 'Sécurité des données',
          content: (
            <p><CmsText id="LegalModal-text-063" scope={[type]}>{"Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et empêcher leur altération, leur perte ou l'accès par des tiers non autorisés."}</CmsText></p>
          ),
        },
        {
          title: 'Transmission des données',
          content: (
            <p><CmsText id="LegalModal-text-064" scope={[type]}>{"Vos données personnelles ne sont ni vendues, ni louées, ni transmises à des tiers, sauf obligation légale ou réglementaire."}</CmsText></p>
          ),
        },
        {
          title: 'Contact',
          content: (
            <>
              <p><CmsText id="LegalModal-text-065" scope={[type]}>{"Pour toute question concernant la protection de vos données personnelles :"}</CmsText></p>
              <p className="mt-2">
                <strong><CmsText id="LegalModal-text-066" scope={[type]}>{"Email :"}</CmsText></strong><CmsText id="LegalModal-text-067" scope={[type]}>{' '}</CmsText>
                <a href="mailto:spanazol@wanadoo.fr" className="text-[#c4a574] hover:underline"><CmsText id="LegalModal-text-068" scope={[type]}>{"spanazol@wanadoo.fr"}</CmsText></a>
              </p>
              <p><strong><CmsText id="LegalModal-text-069" scope={[type]}>{"Téléphone :"}</CmsText></strong><CmsText id="LegalModal-text-070" scope={[type]}>{" 06 45 79 59 39"}</CmsText></p>
            </>
          ),
        },
      ],
    },
    cookies: {
      title: 'Politique des Cookies',
      icon: Cookie,
      sections: [
        {
          title: 'Qu\'est-ce qu\'un cookie ?',
          content: (
            <p><CmsText id="LegalModal-text-071" scope={[type]}>{"Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site web. Il permet de mémoriser des informations relatives à votre navigation et de reconnaître votre navigateur lors de votre prochaine visite."}</CmsText></p>
          ),
        },
        {
          title: 'Les cookies que nous utilisons',
          content: (
            <>
              <p><strong><CmsText id="LegalModal-text-072" scope={[type]}>{"1. Cookies nécessaires (obligatoires)"}</CmsText></strong></p>
              <p className="mt-2 ml-4"><CmsText id="LegalModal-text-073" scope={[type]}>{"Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités essentielles. Sans ces cookies, certains services ne peuvent pas être fournis."}</CmsText></p>
              <p className="mt-4"><strong><CmsText id="LegalModal-text-074" scope={[type]}>{"2. Cookies analytiques (optionnels)"}</CmsText></strong></p>
              <p className="mt-2 ml-4"><CmsText id="LegalModal-text-075" scope={[type]}>{"Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site, de détecter les erreurs et d'améliorer les performances. Toutes les informations collectées sont anonymes."}</CmsText></p>
              <p className="mt-4"><strong><CmsText id="LegalModal-text-076" scope={[type]}>{"3. Cookies marketing (optionnels)"}</CmsText></strong></p>
              <p className="mt-2 ml-4"><CmsText id="LegalModal-text-077" scope={[type]}>{"Ces cookies peuvent être utilisés pour vous proposer des contenus personnalisés et adaptés à vos centres d'intérêt."}</CmsText></p>
            </>
          ),
        },
        {
          title: 'Gestion des cookies',
          content: (
            <>
              <p><CmsText id="LegalModal-text-078" scope={[type]}>{"Vous pouvez à tout moment :"}</CmsText></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><CmsText id="LegalModal-text-079" scope={[type]}>{"Accepter ou refuser les cookies via la bannière de consentement"}</CmsText></li>
                <li><CmsText id="LegalModal-text-080" scope={[type]}>{"Modifier vos préférences dans les paramètres de votre navigateur"}</CmsText></li>
                <li><CmsText id="LegalModal-text-081" scope={[type]}>{"Supprimer les cookies déjà déposés sur votre appareil"}</CmsText></li>
              </ul>
              <p className="mt-3"><CmsText id="LegalModal-text-082" scope={[type]}>{"Attention : La désactivation de certains cookies peut affecter votre expérience de navigation et limiter l'accès à certaines fonctionnalités du site."}</CmsText></p>
            </>
          ),
        },
        {
          title: 'Durée de conservation',
          content: (
            <p><CmsText id="LegalModal-text-083" scope={[type]}>{"Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur premier dépôt sur votre terminal. Votre consentement est valable pour cette même durée."}</CmsText></p>
          ),
        },
        {
          title: 'Pour plus d\'informations',
          content: (
            <>
              <p><CmsText id="LegalModal-text-084" scope={[type]}>{"Pour en savoir plus sur les cookies et leur utilisation, vous pouvez consulter le site de la CNIL :"}</CmsText></p>
              <p className="mt-2">
                <a
                  href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4a574] hover:underline"
                ><CmsText id="LegalModal-text-085" scope={[type]}>{"www.cnil.fr/fr/cookies-et-autres-traceurs"}</CmsText></a>
              </p>
            </>
          ),
        },
      ],
    },
  };

  const currentContent = content[type];
  const Icon = currentContent.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#1a252f] border border-[#c4a574]/30 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#1a252f] border-b border-[#c4a574]/20 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c4a574]/20 to-[#b89560]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#c4a574]" />
                  </div>
                  <h2 className="text-white"><CmsText id="LegalModal-text-086" scope={[type]}>{currentContent.title}</CmsText></h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-6 py-6">
                <div className="space-y-8">
                  {currentContent.sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="space-y-3"
                    >
                      <h3 className="text-[#c4a574] flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-[#c4a574] to-[#b89560] rounded-full" />
                        <CmsText id="LegalModal-text-087" scope={[type, index]}>{section.title}</CmsText>
                      </h3>
                      <div className="text-white/80 space-y-3 ml-4">
                        {section.content}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm text-center"><CmsText id="LegalModal-text-088" scope={[type]}>{"Dernière mise à jour : "}</CmsText>{new Date().toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="sticky bottom-0 bg-gradient-to-t from-[#1a252f] via-[#1a252f] to-transparent px-6 py-4 flex justify-center">
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-[#c4a574] to-[#b89560] hover:from-[#b89560] hover:to-[#c4a574] text-white shadow-lg"
                ><CmsText id="LegalModal-text-089" scope={[type]}>{"Fermer"}</CmsText></Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
