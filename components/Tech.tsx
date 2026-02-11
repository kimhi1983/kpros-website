import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Droplets, Cog } from 'lucide-react';

const Tech: React.FC = () => {
  // 아이템 리스트를 컴포넌트 내부에서 상수로 분리하면 관리가 더 쉽습니다.
  const features = [
    { Icon: FlaskConical, title: "Bespoke Extracts", desc: "1:1 formulation for unique ingredient profiles." },
    { Icon: Droplets, title: "Customized Waters", desc: "Advanced pure water infusion technology." },
    { Icon: Cog, title: "Seamless Integration", desc: "Optimized for stability and efficacy." }
  ];

  return (
    <section id="tech" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-light text-slate-800 mb-6">
              Custom Botanical <span className="font-semibold">Solutions</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-light">
              Tailored extracts and specialized waters, engineered to bring your unique cosmetic visions to life, ensuring purity, potency and perfect compatibility.
            </p>

            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    {/* 변수명을 대문자 Icon으로 사용하면 리액트 컴포넌트로 올바르게 인식됩니다. */}
                    <item.Icon className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual - Static Image with Floating Animation */}
        <div className="order-1 md:order-2 relative h-[500px] w-full flex items-center justify-center bg-slate-50 rounded-3xl overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            <motion.img
              src="/tech-glassware-v2.png"
              alt="Custom Botanical Solutions Laboratory"
              className="w-full h-full object-contain drop-shadow-2xl"
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse", // 애니메이션을 더 부드럽게 연결해줍니다.
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;