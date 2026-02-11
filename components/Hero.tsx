import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F3]">
      
      {/* 3D Background Layer - Spline */}
      {/* Overflow hidden container to crop the extended iframe */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe 
          src='https://my.spline.design/play-XGUg1VC7sA0V6E8eOZESSuI0/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-[140%] -translate-y-[10%]" // Aggressive crop: Height 140%, shift up 10% (relative to element). Bottom extends ~26% past container.
          title="Spline 3D Animation"
        ></iframe>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center max-w-4xl px-6 pointer-events-none h-full flex flex-col justify-end pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg hover:bg-slate-800 transition-colors tracking-widest uppercase"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Materials
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;