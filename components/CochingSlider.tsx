import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n';

export const COCHING_SLIDES = [
  { key: 'market', src: '/coching/market.jpg' },
  { key: 'briefs', src: '/coching/briefs.jpg' },
  { key: 'search', src: '/coching/search.jpg' },
  { key: 'ingredients', src: '/coching/ingredients.jpg' },
  { key: 'products', src: '/coching/products.jpg' },
  { key: 'hlb', src: '/coching/hlb.jpg' },
  { key: 'formula', src: '/coching/formula.jpg' },
  { key: 'crews', src: '/coching/crews.jpg' },
  { key: 'orders', src: '/coching/orders.jpg' },
  { key: 'materials', src: '/coching/materials.jpg' },
] as const;

const AUTO_MS = 6000;

const CochingSlider: React.FC = () => {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = COCHING_SLIDES.length;
  const go = (i: number) => setIdx(((i % n) + n) % n);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % n), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, n]);

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
      onTouchEnd={(e) => {
        const x0 = touchX.current; touchX.current = null; setPaused(false);
        if (x0 == null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      }}
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E1612] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {COCHING_SLIDES.map((s, i) => (
            <figure key={s.key} className="w-full shrink-0" aria-hidden={i !== idx}>
              <img src={s.src} alt={t.coching.slides[s.key]} width={1904} height={941} loading={i === 0 ? 'eager' : 'lazy'} className="w-full h-auto block" />
            </figure>
          ))}
        </div>
        <button type="button" onClick={() => go(idx - 1)} aria-label={t.coching.prev} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 px-4 rounded-full bg-ink/80 text-white text-[13px] font-semibold hover:bg-ink transition backdrop-blur">
          {t.coching.prev}
        </button>
        <button type="button" onClick={() => go(idx + 1)} aria-label={t.coching.next} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 px-4 rounded-full bg-ink/80 text-white text-[13px] font-semibold hover:bg-ink transition backdrop-blur">
          {t.coching.next}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {COCHING_SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => go(i)}
            aria-current={i === idx}
            className={`h-9 px-4 rounded-full text-[13px] font-semibold border transition ${i === idx ? 'bg-white text-ink border-white' : 'border-white/20 text-[#BFC7C1] hover:border-white/50 hover:text-white'}`}
          >
            {t.coching.slides[s.key]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CochingSlider;
