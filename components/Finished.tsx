import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';
import BgSlides from './BgSlides';

const Finished: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="finished" className="relative bg-ink text-white py-20 md:py-28 scroll-mt-24">
      <BgSlides photos={SITE.images.finishedBg} intervalMs={8000} overlay="bg-gradient-to-b from-ink/80 via-ink/65 to-ink/85" />
      <div className="container-page relative flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3 max-w-[820px]">
          <span className="font-inter text-[13px] font-bold tracking-[0.14em] text-forest-mint">{t.finished.eyebrow}</span>
          <h2 className="text-[28px] md:text-[40px] font-black leading-[1.2] tracking-[-0.02em]">{t.finished.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-white/80">{t.finished.body}</p>
          <a href="#contact" className="btn-primary self-start mt-2 !h-12">{t.finished.cta}</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.finished.steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-2 p-5 md:p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="font-inter font-bold text-forest-mint">0{i + 1}</span>
              <strong className="text-[16px] md:text-[17px]">{s.title}</strong>
              <span className="text-[14px] leading-[1.5] text-white/75">{s.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Finished;
