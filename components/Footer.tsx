import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-8 sm:py-12 text-slate-400 text-xs sm:text-sm font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <span className="text-white font-semibold tracking-wider text-base sm:text-lg">KPROS CORP</span>
          <p className="mt-1 sm:mt-2 text-slate-500 text-xs sm:text-sm">Digital Purity & Raw Perfection</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white active:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white active:text-slate-300 transition-colors">Terms of Service</a>
        </div>
        <div className="text-slate-600 text-[10px] sm:text-sm">
          &copy; {new Date().getFullYear()} KPROS CORP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
