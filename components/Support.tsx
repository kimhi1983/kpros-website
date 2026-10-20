import React from 'react';
import { useLang } from '../i18n';

const Support: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="support" className="container-page py-16 md:py-24 scroll-mt-24">
      <div className="flex flex-col gap-3 max-w-[720px] mb-8 md:mb-10">
        <span className="eyebrow">{t.support.eyebrow}</span>
        <h2 className="h2">{t.support.title}</h2>
        <p className="text-[15px] md:text-[17px] leading-[1.6] text-muted">{t.support.body}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.support.items.map((it, i) => (
          <article key={it.title} className="flex flex-col gap-3 p-6 md:p-7 rounded-2xl bg-white border border-line">
            <span className="font-inter text-[13px] font-bold text-forest">0{i + 1}</span>
            <h3 className="text-[18px] font-bold">{it.title}</h3>
            <p className="text-[14px] leading-[1.6] text-muted">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Support;
