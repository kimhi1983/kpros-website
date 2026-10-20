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
    { href: '#lab', label: t.nav.lab },
    { href: '#support', label: t.nav.infra },
    { href: '#coching', label: t.nav.coching },
    { href: '#contact', label: t.nav.contact },
  ];

  const company = lang === 'ko' ? SITE.companyKo : lang === 'zh' ? SITE.companyZh : SITE.companyEn;

  return (
    <header className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b ${scrolled ? 'border-line' : 'border-transparent'} transition-colors`}>
      <div className="container-page flex items-center justify-between gap-4 h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2.5 text-ink shrink-0" aria-label="KPROS">
          <img src="/logo/wordmark.png" alt="KPROS" className="h-[22px] md:h-6 w-auto" />
          <span className="hidden 2xl:inline text-[12px] text-soft tracking-[0.06em] whitespace-nowrap ml-1">{company}</span>
        </a>

        <nav className="hidden lg:flex gap-4 2xl:gap-6 text-[13px] 2xl:text-[14px] font-medium whitespace-nowrap">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink hover:text-forest transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div role="group" aria-label="Language" className="flex h-10 md:h-11 items-center rounded-full border border-[#C9C4B8] p-1 bg-transparent">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`h-full px-2.5 rounded-full text-[12px] md:text-[13px] font-semibold whitespace-nowrap transition ${lang === l.code ? 'bg-ink text-white' : 'text-ink hover:bg-line'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="#contact" className="hidden md:max-lg:inline-flex xl:inline-flex btn-primary !h-11 !px-5 !text-[14px] whitespace-nowrap">{t.nav.cta}</a>
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
