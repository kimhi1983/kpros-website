import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const Hero: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="hero" className="container-page pt-14 md:pt-24 pb-14 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div
          initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}
          className="lg:col-span-7 flex flex-col gap-6 md:gap-7"
        >
          <motion.span variants={fade} className="self-start inline-flex px-3 py-1.5 rounded-full bg-forest-light text-forest text-[12px] md:text-[13px] font-semibold tracking-[0.04em] font-inter">
            {t.hero.badge}
          </motion.span>
          <motion.h1 variants={fade} className="text-[34px] md:text-[52px] xl:text-[60px] font-black leading-[1.15] tracking-[-0.02em]">
            {t.hero.title[0]}<br />{t.hero.title[1]}
          </motion.h1>
          <motion.p variants={fade} className="text-[16px] md:text-[19px] leading-[1.65] text-muted max-w-[620px]">
            {t.hero.body}
          </motion.p>
          <motion.div variants={fade} className="flex flex-col sm:flex-row gap-3">
            <a href="#products" className="btn-primary">{t.hero.cta1}</a>
            <a href="#finished" className="btn-outline">{t.hero.cta2}</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          <img src={SITE.images.heroBotanical} alt={t.hero.imgAlt1} loading="eager" className="col-span-2 h-[200px] md:h-[260px] w-full object-cover rounded-[20px] bg-forest-light" />
          <img src={SITE.images.finishedBottle} alt={t.hero.imgAlt2} loading="lazy" className="h-[150px] md:h-[180px] w-full object-cover rounded-[20px] bg-sand" />
          <img src={SITE.images.oilDrop} alt={t.hero.imgAlt3} loading="lazy" className="h-[150px] md:h-[180px] w-full object-cover rounded-[20px] bg-sand" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
