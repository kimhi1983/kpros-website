import React from 'react';
import { PRODUCTS } from '../constants';
import { useLang } from '../i18n';

const Partners: React.FC = () => {
  const { t } = useLang();
  const brands = [...new Set(PRODUCTS.map((p) => p.brand).filter((b) => !/^k-?pros/i.test(b)))]
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  return (
    <section className="bg-white border-y border-line py-14 md:py-20">
      <div className="container-page flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <span className="eyebrow">{t.partners.eyebrow}</span>
          <h2 className="text-[24px] md:text-[28px] font-bold">{t.partners.title}</h2>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {brands.map((b) => (
            <li key={b} className="h-[64px] px-3 flex items-center justify-center text-center border border-line rounded-xl font-inter font-semibold text-[14px] text-soft">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
