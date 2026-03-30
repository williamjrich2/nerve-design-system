import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          width: '100%',
          maxWidth: '700px',
          backgroundColor: isScrolled ? 'rgba(20, 20, 20, 0.8)' : 'rgba(20, 20, 20, 0.4)',
          backdropFilter: 'blur(16px)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '0.5rem',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between pointer-events-auto border transition-colors"
      >
        <div className="flex items-center gap-3 w-1/3">
          {/* Anova logo mark */}
          <svg viewBox="0 0 120 120" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" className="w-6 h-6">
            <path d="M 60 16 C 52 36, 52 44, 60 60 C 68 44, 68 36, 60 16" />
            <path d="M 104 60 C 84 52, 76 52, 60 60 C 76 68, 84 68, 104 60" />
            <path d="M 60 104 C 68 84, 68 76, 60 60 C 52 76, 52 84, 60 104" />
            <path d="M 16 60 C 36 68, 44 68, 60 60 C 44 52, 36 52, 16 60" />
            <circle cx="60" cy="60" r="4" fill="white" stroke="none" />
          </svg>
          <a href="#" className="text-white font-semibold text-lg tracking-tight">
            Anova
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-sm text-white/80 w-1/3">
          <a href="#" className="hover:text-white transition-colors">Overview</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
        </div>

        <div className="flex items-center justify-end gap-4 md:gap-6 text-sm text-white/80 w-1/3">
          <button className="hidden md:block bg-white/10 border border-white/10 rounded-full px-6 py-2 hover:bg-white/20 text-white transition-all">
            Login
          </button>
          <button className="md:hidden text-white pr-4">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
