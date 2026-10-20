import React, { useEffect, useState } from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const ROTATE_MS = 5000;

const Lab: React.FC = () => {
  const { t } = useLang();
  const photos = SITE.images.lab;
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * photos.length));
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => { setIdx((i) => (i + 1) % photos.length); setFading(false); }, 350);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [photos.length]);

  return (
    <section id="lab" className="container-page py-16 md:py-24 flex flex-col gap-8 md:gap-10 scroll-mt-24">
      <div className="flex flex-col gap-3">
        <span className="eyebrow">{t.lab.eyebrow}</span>
        <h2 className="h2">{t.lab.title}</h2>
        <p className="text-[15px] md:text-[17px] leading-[1.65] text-muted">{t.lab.body}</p>
        <a href="#contact" className="btn-primary self-start mt-2 !h-12">{t.lab.cta}</a>
      </div>
      <div className="w-full h-[220px] md:h-[380px] rounded-3xl overflow-hidden bg-sand">
        <img src={photos[idx]} alt={t.lab.imgAlt} loading="lazy" className={`w-full h-full object-cover transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`} />
        {photos.map((p) => <link key={p} rel="prefetch" href={p} />)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.lab.items.map((it, i) => (
          <article key={it.title} className="flex flex-col gap-2.5 p-6 md:p-7 rounded-2xl bg-white border border-line">
            <span className="font-inter text-[13px] font-bold text-forest">0{i + 1}</span>
            <h3 className="text-[18px] font-bold">{it.title}</h3>
            <p className="text-[14px] leading-[1.6] text-muted">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Lab;
