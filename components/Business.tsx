import React from 'react';
import { useLang } from '../i18n';

const Business: React.FC = () => {
  const { t } = useLang();
  return (
    <section id="business" className="container-page pb-20 md:pb-24 scroll-mt-24">
      <div className="flex flex-col gap-3 mb-8 md:mb-10">
        <span className="eyebrow">{t.business.eyebrow}</span>
        <h2 className="h2">{t.business.title}</h2>
        <p className="text-[15px] md:text-[17px] leading-[1.6] text-muted">{t.business.body}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {t.business.items.map((item, i) => {
          const dark = i === 2;
          return (
            <article key={item.title} className={`flex flex-col gap-4 p-7 md:p-9 rounded-3xl ${dark ? 'bg-ink text-white' : 'bg-white border border-line'}`}>
              <span className={`font-inter text-[13px] font-bold ${dark ? 'text-forest-mint' : 'text-forest'}`}>0{i + 1}</span>
              <h3 className="text-[22px] md:text-[24px] font-bold">{item.title}</h3>
              <p className={`text-[15px] leading-[1.65] ${dark ? 'text-[#BFC7C1]' : 'text-muted'}`}>{item.body}</p>
              <ul className="flex flex-col gap-2 text-[14px]">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className={dark ? 'text-forest-mint' : 'text-forest'}>—</span>{b}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Business;
