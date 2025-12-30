import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { EditableText } from './admin/EditableText';
import { useAdmin } from '../contexts/AdminContext';

interface NavigationProps {
  scrollY: number;
}

export function Navigation({ scrollY }: NavigationProps) {
  const { content } = useAdmin();
  const location = useLocation();

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Nos Gîtes', href: '/gites' },
    { label: 'Bien-être', href: '/bien-etre' },
    { label: 'Contact', href: '/contact' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#3a4a5a]/98 backdrop-blur-lg shadow-lg' : 'bg-[#3a4a5a]/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <EditableText
                path="texts.navLogo"
                value={content?.texts?.navLogo || "LES GÎTES DU SOULOR"}
                as="span"
                className="text-[#c4a574] tracking-[0.15em] text-sm font-semibold"
              />
            </motion.div>
          </Link>

          {/* Navigation Links - En haut à droite */}
          <div className="flex items-center gap-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link key={link.href} to={link.href}>
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-sm px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? 'bg-[#c4a574]/20 text-[#c4a574] border border-[#c4a574]/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
