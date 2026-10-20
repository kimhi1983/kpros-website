import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Finished: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="finished" className="container-page py-16 md:py-24 flex flex-col gap-10 md:gap-12 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="eyebrow">{t.finished.eyebrow}</span>
          <h2 className="h2">{t.finished.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-muted">{t.finished.body}</p>
          <a href="#contact" className="btn-primary self-start mt-2 !h-12">{t.finished.cta}</a>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.finished.steps.map((s, i) => (
            <div key={s.title} className="flex sm:flex-col gap-3 sm:gap-2 p-5 md:p-6 rounded-2xl bg-white border border-line">
              <span className="font-inter font-bold text-forest">0{i + 1}</span>
              <div className="flex flex-col gap-1">
                <strong className="text-[16px] md:text-[17px]">{s.title}</strong>
                <span className="text-[14px] leading-[1.5] text-muted">{s.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={SITE.images.productionLine} alt={t.finished.imgAlt} loading="lazy" className="w-full h-[220px] md:h-[360px] object-cover rounded-3xl bg-forest-light" />
    </section>
  );
};

export default Finished;
