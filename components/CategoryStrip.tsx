import React from 'react';
import { CATEGORIES } from '../constants';
import type { Category } from '../types';
import { useLang } from '../i18n';

export const selectCategory = (c: Category) => {
  window.dispatchEvent(new CustomEvent<Category>('kpros:category', { detail: c }));
};

const CategoryStrip: React.FC = () => {
  const { t } = useLang();
  const cats = CATEGORIES.filter((c): c is Exclude<Category, 'All'> => c !== 'All');
  return (
    <section className="container-page pb-16 md:pb-20">
      <div className="border-y border-line py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="text-[13px] font-semibold text-soft shrink-0">{t.strip.label}</span>
        <ul className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <li key={c}>
              <a
                href="#products"
                onClick={() => selectCategory(c)}
                className="inline-flex items-center h-10 px-4 rounded-full border border-[#C9C4B8] text-[14px] font-medium text-ink hover:bg-white transition"
              >
                {t.products.categories[c]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryStrip;
