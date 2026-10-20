import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n';
import { SITE } from '../site.config';
import BgSlides from './BgSlides';

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

const Hero: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="hero" className="relative bg-ink text-white min-h-[560px] md:min-h-[680px] flex items-center">
      <BgSlides photos={SITE.images.heroBg} overlay="bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
      <div className="container-page relative py-20 md:py-28 w-full">
        <motion.div
          initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}
          className="max-w-[760px] flex flex-col gap-6 md:gap-7"
        >
          <motion.span variants={fade} className="self-start inline-flex px-3 py-1.5 rounded-full bg-white/15 text-white text-[12px] md:text-[13px] font-semibold tracking-[0.04em] font-inter backdrop-blur">
            {t.hero.badge}
          </motion.span>
          <motion.h1 variants={fade} className="text-[34px] md:text-[48px] xl:text-[54px] font-black leading-[1.15] tracking-[-0.02em]">
            {t.hero.title.map((line, i) => (<React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>))}
          </motion.h1>
          <motion.p variants={fade} className="text-[16px] md:text-[19px] leading-[1.65] text-white/80">
            {t.hero.body}
          </motion.p>
          <motion.div variants={fade} className="flex flex-col sm:flex-row gap-3">
            <a href="#products" className="btn-primary">{t.hero.cta1}</a>
            <a href="#finished" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-ink">{t.hero.cta2}</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
