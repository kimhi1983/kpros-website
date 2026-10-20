import React from 'react';
import { useLang } from '../i18n';
import { PRODUCTS } from '../constants';
import { SITE } from '../site.config';

const Stats: React.FC = () => {
  const { t } = useLang();
  const items = [
    { value: String(SITE.foundedYear), label: t.stats.founded },
    { value: String(PRODUCTS.length), label: t.stats.items },
    { value: SITE.partnerCount, label: t.stats.partners },
    { value: 'RSPO', label: t.stats.rspo },
  ];
  return (
    <section className="container-page pb-16 md:pb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 border-y border-line py-6 lg:py-7">
        {items.map((it, i) => (
          <div key={it.label} className={`flex flex-col gap-1 px-3 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-line' : 'lg:pl-2'}`}>
            <span className="font-inter text-[26px] md:text-[32px] font-bold leading-tight">{it.value}</span>
            <span className="text-[13px] md:text-[14px] text-soft">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
