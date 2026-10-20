import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Coching: React.FC = () => {
  const { t } = useLang();
  return (
    <section className="container-page pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-7 md:p-12 rounded-[28px] bg-ink text-white">
        <div className="lg:col-span-8 flex flex-col gap-3">
          <span className="font-inter text-[13px] font-bold tracking-[0.14em] text-forest-mint">{t.coching.eyebrow}</span>
          <h2 className="text-[24px] md:text-[30px] font-bold leading-[1.3] max-w-[640px]">{t.coching.title}</h2>
          <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#BFC7C1]">{t.coching.body}</p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <a href={SITE.links.coching} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 h-[52px] px-6 rounded-full bg-white text-ink text-[16px] font-semibold hover:bg-ivory transition">
            {t.coching.cta} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coching;
