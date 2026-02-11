import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pt-24 pb-12 bg-slate-900 overflow-hidden min-h-screen flex flex-col justify-end">
      
      {/* 3D Background Layer - Spline */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <iframe 
           src='https://my.spline.design/particles-oKBO74EdamDaJTQhpr8DdG1R/' 
           frameBorder='0' 
           width='100%' 
           height='100%'
           className="w-full h-[140%] -translate-y-[15%]" 
           title="Spline 3D Particles"
         ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center pointer-events-none h-full flex-1 justify-end">
        
        {/* Contact Info Wrapper - Enable pointer events for content */}
        <div className="w-full max-w-7xl pointer-events-auto mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <motion.div 
               whileHover={{ y: -5 }}
               className="p-10 bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-center"
             >
                <h4 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-3">Office</h4>
                <p className="text-lg md:text-xl text-white font-semibold tracking-tight leading-relaxed">
                  GIDC Building A #2602, 43 Iljik-ro, Gwangmyeong-si, Gyeonggi-do, Republic of Korea
                </p>
             </motion.div>
             <motion.div 
               whileHover={{ y: -5 }}
               className="p-10 bg-white/5 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-center"
             >
                <h4 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-3">Email</h4>
                <a href="mailto:kpros@kpros.co.kr" className="text-2xl md:text-3xl text-white font-semibold hover:text-teal-400 transition-colors tracking-tight break-all">
                  kpros@kpros.co.kr
                </a>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;