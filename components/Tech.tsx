import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Droplets, Cog } from 'lucide-react';

const Tech: React.FC = () => {
  return (
    <section id="tech" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 mb-4 sm:mb-6">
              Custom Botanical <span className="font-semibold">Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 font-light">
              Tailored extracts and specialized waters, engineered to bring your unique cosmetic visions to life, ensuring purity, potency and perfect compatibility.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: FlaskConical, title: "Bespoke Extracts", desc: "1:1 formulation for unique ingredient profiles." },
                { icon: Droplets, title: "Customized Waters", desc: "Advanced pure water infusion technology." },
                { icon: Cog, title: "Seamless Integration", desc: "Optimized for stability and efficacy." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3 bg-slate-50 rounded-xl flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-slate-800">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light mt-0.5 sm:mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative h-[280px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner">
           <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0"></div>
           
           <div className="relative z-10 w-full h-full flex items-center justify-center p-6 sm:p-8">
               <motion.div
                 className="flex flex-col items-center justify-center gap-4 sm:gap-6"
                 initial={{ y: 0 }}
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               >
                 <FlaskConical className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-slate-300" strokeWidth={0.8} />
                 <div className="flex gap-2 sm:gap-3">
                   <Droplets className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-teal-200" strokeWidth={1} />
                   <Cog className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-slate-200" strokeWidth={1} />
                   <Droplets className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-teal-200" strokeWidth={1} />
                 </div>
               </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
