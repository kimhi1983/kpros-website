import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LANGS, useLang } from '../i18n';
import { SITE } from '../site.config';

const Navbar: React.FC = () => {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#business', label: t.nav.business },
    { href: '#products', label: t.nav.products },
    { href: '#finished', label: t.nav.finished },
    { href: '#support', label: t.nav.infra },
    { href: '#coching', label: t.nav.coching },
    { href: '#contact', label: t.nav.contact },
  ];

  const company = lang === 'ko' ? SITE.companyKo : lang === 'zh' ? SITE.companyZh : SITE.companyEn;

  return (
    <header className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b ${scrolled ? 'border-line' : 'border-transparent'} transition-colors`}>
      <div className="container-page flex items-center justify-between gap-6 h-16 md:h-20">
        <a href="#hero" className="flex items-baseline gap-2.5 text-ink">
          <span className="font-inter font-bold text-[20px] md:text-[22px] tracking-[0.18em]">KPROS</span>
          <span className="hidden xl:inline text-[12px] text-soft tracking-[0.06em] whitespace-nowrap">{company}</span>
        </a>

        <nav className="hidden lg:flex gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-medium whitespace-nowrap">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink hover:text-forest transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div role="group" aria-label="Language" className="flex h-10 md:h-11 items-center rounded-full border border-[#C9C4B8] p-1 bg-transparent">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`h-full px-2.5 md:px-3 rounded-full text-[12px] md:text-[13px] font-semibold transition ${lang === l.code ? 'bg-ink text-white' : 'text-ink hover:bg-line'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex btn-primary !h-11 !px-5 !text-[14px] whitespace-nowrap">{t.nav.cta}</a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full hover:bg-line"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-ivory">
          <div className="container-page py-3 flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3.5 text-[16px] font-medium border-b border-line last:border-0">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">{t.nav.cta}</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
