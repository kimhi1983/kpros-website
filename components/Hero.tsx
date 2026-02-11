import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F3]">
      
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-slate-100 to-[#F5F5F3]">
        <iframe 
          src='https://my.spline.design/play-XGUg1VC7sA0V6E8eOZESSuI0/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          loading="lazy"
          className="w-full h-[140%] -translate-y-[10%] pointer-events-none sm:pointer-events-auto"
          title="Spline 3D Animation"
          aria-hidden="true"
        ></iframe>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 pointer-events-none h-full flex flex-col justify-end pb-20 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg hover:bg-slate-800 active:bg-slate-700 transition-colors tracking-widest uppercase"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Materials
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
