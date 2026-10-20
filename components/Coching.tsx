import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Coching: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="coching" className="bg-ink text-white py-16 md:py-24 scroll-mt-24">
      <div className="container-page flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-4">
          <span className="font-inter text-[13px] font-bold tracking-[0.14em] text-forest-mint">{t.coching.eyebrow}</span>
          <h2 className="text-[28px] md:text-[40px] font-black leading-[1.2] tracking-[-0.02em]">{t.coching.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-[#BFC7C1]">{t.coching.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a href={SITE.links.coching} target="_blank" rel="noopener" className="inline-flex items-center justify-center h-[52px] px-6 rounded-full bg-white text-ink text-[16px] font-semibold hover:bg-ivory transition">
              {t.coching.cta}
            </a>
            <a href={SITE.links.cochingCn} target="_blank" rel="noopener" className="inline-flex items-center justify-center h-[52px] px-6 rounded-full border border-[#5C665F] text-white text-[16px] font-semibold hover:bg-white/10 transition">
              {t.coching.ctaCn}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <figure className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0E1612]">
            <img src="/coching-market.jpg" alt={t.coching.imgAlt1} loading="lazy" className="w-full h-auto block" />
          </figure>
          <figure className="lg:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-[#0E1612]">
            <img src="/coching-search.jpg" alt={t.coching.imgAlt2} loading="lazy" className="w-full h-full object-cover object-left-top block" />
          </figure>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.coching.features.map((f, i) => (
            <article key={f.title} className="flex flex-col gap-3 p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.04]">
              <span className="font-inter text-[13px] font-bold text-forest-mint">0{i + 1}</span>
              <h3 className="text-[18px] font-bold">{f.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#BFC7C1]">{f.body}</p>
            </article>
          ))}
        </div>

        <p className="text-[13px] text-[#8C968F]">{t.coching.note}</p>
      </div>
    </section>
  );
};

export default Coching;
