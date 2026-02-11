import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <span className="text-base sm:text-lg font-semibold tracking-widest text-slate-800">KPROS</span>
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-slate-800 p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-40" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white/98 backdrop-blur-xl z-50 p-6 pt-16 flex flex-col space-y-5 shadow-2xl">
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-4 right-4 p-2 text-slate-500"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
