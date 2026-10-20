import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Infra: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="infra" className="container-page py-16 md:py-24 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="eyebrow">{t.infra.eyebrow}</span>
          <h2 className="h2">{t.infra.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-muted">{t.infra.body}</p>
          <div className="flex flex-col gap-3 mt-2">
            {[{ n: t.infra.hazardous, a: t.infra.hazardousAddr }, { n: t.infra.general, a: t.infra.generalAddr }].map((w) => (
              <div key={w.n} className="flex flex-col gap-0.5 px-5 py-4 border-l-[3px] border-forest bg-white">
                <strong className="text-[15px]">{w.n}</strong>
                <span className="text-[14px] text-muted">{w.a}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={SITE.images.warehouse} alt={t.infra.imgAlt} loading="lazy" className="lg:col-span-6 lg:col-start-7 w-full h-[240px] md:h-[400px] object-cover rounded-3xl bg-sand" />
      </div>
    </section>
  );
};

export default Infra;
