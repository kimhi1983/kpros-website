import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Footer: React.FC = () => {
  const { t, lang } = useLang();
  const company = lang === 'ko' ? SITE.companyKo : lang === 'zh' ? SITE.companyZh : SITE.companyEn;
  const meta = [company, SITE.bizNo, SITE.address].filter(Boolean).join(' · ');
  return (
    <footer className="bg-ink text-[#BFC7C1]">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[13px]">
        <div className="flex flex-col gap-1.5">
          <span className="font-inter font-bold text-[18px] tracking-[0.18em] text-white">KPROS</span>
          <span>{meta}</span>
          <span>© {new Date().getFullYear()} KPROS CORP. {t.footer.rights}</span>
        </div>
        <nav className="flex gap-6">
          <a href={SITE.links.kpros} className="text-white hover:text-forest-mint" target="_blank" rel="noopener">kpros.kr</a>
          <a href={SITE.links.coching} className="text-white hover:text-forest-mint" target="_blank" rel="noopener">coching.club</a>
          <a href="#contact" className="text-white hover:text-forest-mint">{t.footer.privacy}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
