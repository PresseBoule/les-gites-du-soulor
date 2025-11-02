import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Mountain, Heart } from 'lucide-react';
import { LegalModal } from './LegalModal';
import { TikTokIcon } from './TikTokIcon';

export function Footer() {
  const [legalModal, setLegalModal] = useState<'mentions' | 'privacy' | 'cookies' | null>(null);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Nos Gîtes', href: '#gites' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Bien-être', href: '#wellness' },
    { label: 'Localisation', href: '#location-map' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#1a252f] to-[#0f1419] overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a574]/50 to-transparent" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 165, 116, 0.1) 35px, rgba(196, 165, 116, 0.1) 70px)`
          }} />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#c4a574]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#5a7a9f]/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="w-6 h-6 text-[#c4a574]" />
                <h3 className="text-white">Les Gîtes du Soulor</h3>
              </div>
              <p className="text-white/60 mb-4 leading-relaxed">
                Vivez une expérience authentique au cœur des Pyrénées. 
                Quatre gîtes de charme pour des moments inoubliables en montagne.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.instagram.com/les_gites_du_soulor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] flex items-center justify-center text-white/60 hover:text-white transition-all border border-white/10 hover:border-transparent shadow-lg hover:shadow-[#dd2a7b]/50"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@les_gites_du_soulor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-[#00f2ea] hover:via-[#ff0050] hover:to-[#000000] flex items-center justify-center text-white/60 hover:text-white transition-all border border-white/10 hover:border-transparent shadow-lg hover:shadow-[#00f2ea]/50"
                  aria-label="Suivez-nous sur TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-white/60 hover:text-[#c4a574] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#c4a574] transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-[#c4a574] flex-shrink-0 mt-0.5" />
                  <span>42 route du Soulor<br />65400 Arrens-Marsous<br />France</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-[#c4a574] flex-shrink-0" />
                  <a href="tel:+33645795939" className="hover:text-[#c4a574] transition-colors">
                    06 45 79 59 39
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-[#c4a574] flex-shrink-0" />
                  <a href="mailto:spanazol@wanadoo.fr" className="hover:text-[#c4a574] transition-colors">
                    spanazol@wanadoo.fr
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white mb-4">Informations Légales</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setLegalModal('mentions')}
                    className="text-white/60 hover:text-[#c4a574] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#c4a574] transition-colors" />
                    Mentions Légales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('privacy')}
                    className="text-white/60 hover:text-[#c4a574] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#c4a574] transition-colors" />
                    Politique de Confidentialité
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal('cookies')}
                    className="text-white/60 hover:text-[#c4a574] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#c4a574] transition-colors" />
                    Politique des Cookies
                  </button>
                </li>
                <li>
                  <a
                    href="https://gite-soulor-reservation.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#c4a574] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-[#c4a574] transition-colors" />
                    Réservation
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                © {currentYear} Les Gîtes du Soulor. Tous droits réservés.
              </p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>Conçu avec</span>
                <Heart className="w-4 h-4 text-[#c4a574] fill-[#c4a574]" />
                <span>par</span>
                <a 
                  href="#" 
                  className="text-[#c4a574] hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Camille Panazol - PixelBoost
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4a574]/30 to-transparent" />
      </footer>

      {/* Legal Modal */}
      {legalModal && (
        <LegalModal
          isOpen={!!legalModal}
          onClose={() => setLegalModal(null)}
          type={legalModal}
        />
      )}
    </>
  );
}
