import { useState, useEffect } from 'react';
import { ShieldAlert, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Command Center', href: '#command-center' },
    { name: 'Technology', href: '#technology' },
    { name: 'Investors', href: '#investors' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <ShieldAlert className="w-8 h-8 text-accent-cyan" />
            <div className="absolute inset-0 bg-accent-cyan blur-md opacity-40"></div>
          </div>
          <span className="font-bold text-xl tracking-wider text-white">DRC</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-sm font-semibold hover:bg-accent-blue/20 hover:border-accent-cyan transition-all duration-300 shadow-[0_0_15px_rgba(0,107,255,0.2)]">
            Request Private Demo
          </button>
        </nav>

        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-white/10 flex flex-col p-6 gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-semibold mt-4">
            Request Private Demo
          </button>
        </motion.div>
      )}
    </header>
  );
}
