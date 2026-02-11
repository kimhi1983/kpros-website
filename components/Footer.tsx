import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400 text-sm font-light">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-semibold tracking-wider text-lg">KPROS CORP</span>
          <p className="mt-2 text-slate-500">Digital Purity & Raw Perfection</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <div className="mt-4 md:mt-0 text-slate-600">
          &copy; {new Date().getFullYear()} KPROS CORP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;