import React, { useEffect, useState } from 'react';

type Props = { photos: string[]; intervalMs?: number; className?: string; overlay?: string };

// Full-bleed crossfading background. Two layers are kept mounted so the switch is a true crossfade.
const BgSlides: React.FC<Props> = ({ photos, intervalMs = 7000, className = '', overlay }) => {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * photos.length));
  useEffect(() => {
    if (photos.length < 2) return;
    const id = window.setInterval(() => setIdx((i) => (i + 1) % photos.length), intervalMs);
    return () => window.clearInterval(id);
  }, [photos.length, intervalMs]);
  const next = (idx + 1) % photos.length;
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      {photos.map((p, i) => (
        <img
          key={p}
          src={p}
          alt=""
          loading={i === idx || i === next ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
};

export default BgSlides;
