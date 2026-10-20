import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import type { Category } from '../types';
import { useLang } from '../i18n';

const INITIAL = 9;

const Products: React.FC = () => {
  const { t } = useLang();
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onPick = (e: Event) => { setCategory((e as CustomEvent<Category>).detail); setExpanded(false); setQuery(''); };
    window.addEventListener('kpros:category', onPick);
    return () => window.removeEventListener('kpros:category', onPick);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!q) return true;
      return [p.item, p.inciName, p.brand ?? '', p.description].some((s) => s.toLowerCase().includes(q));
    });
  }, [category, query]);

  const visible = expanded || query ? filtered : filtered.slice(0, INITIAL);
  const label = (c: Category) => (c === 'All' ? t.products.all : t.products.categories[c]);

  return (
    <section id="products" className="bg-white border-y border-line py-16 md:py-24 scroll-mt-24">
      <div className="container-page flex flex-col gap-7 md:gap-9">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2 className="h2">{t.products.title}</h2>
            <p className="text-[15px] md:text-[17px] leading-[1.6] text-muted">{t.products.body}</p>
          </div>
          <label className="flex items-center gap-2.5 h-12 px-4 rounded-xl border border-[#C9C4B8] bg-ivory lg:min-w-[340px]">
            <Search size={18} className="text-soft shrink-0" aria-hidden="true" />
            <span className="sr-only">{t.products.search}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.products.search}
              className="w-full bg-transparent outline-none text-[15px] placeholder:text-soft"
            />
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap">
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => { setCategory(c); setExpanded(false); }}
                aria-pressed={active}
                className={`shrink-0 h-10 px-4 rounded-full text-[14px] border transition ${active ? 'bg-ink border-ink text-white font-semibold' : 'border-[#C9C4B8] text-ink hover:bg-ivory'}`}
              >
                {label(c)}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="text-soft py-10 text-center">{t.products.empty}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((p) => (
              <article key={p.id} className="flex flex-col gap-2.5 p-6 rounded-2xl border border-line bg-ivory">
                <span className="text-[12px] font-semibold text-forest">
                  {t.products.categories[p.category as Exclude<Category, 'All'>]}{p.brand ? ` · ${p.brand}` : ''}
                </span>
                <h3 className="text-[18px] md:text-[19px] font-bold">{p.item}</h3>
                <p className="font-inter text-[13px] text-soft">{p.inciName}</p>
                <p className="text-[14px] leading-[1.55] text-muted">{p.description}</p>
              </article>
            ))}
          </div>
        )}

        {!query && filtered.length > INITIAL && (
          <div className="flex justify-center">
            <button type="button" onClick={() => setExpanded((v) => !v)} className="btn-outline !h-12">
              {expanded ? t.products.showLess : `${filtered.length} ${t.products.viewAll}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
