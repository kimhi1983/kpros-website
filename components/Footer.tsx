import React from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const Footer: React.FC = () => {
  const { t, lang } = useLang();
  const company = lang === 'ko' ? SITE.companyKo : lang === 'zh' ? SITE.companyZh : SITE.companyEn;
  const address = lang === 'en' ? SITE.addressEn : lang === 'zh' ? SITE.addressZh : SITE.address;
  const ceo = lang === 'ko' ? `대표 ${SITE.ceo}` : lang === 'zh' ? `代表 ${SITE.ceo}` : `CEO ${SITE.ceoEn}`;
  const biz = lang === 'ko' ? `사업자등록번호 ${SITE.bizNo}` : lang === 'zh' ? `营业执照号 ${SITE.bizNo}` : `Business Reg. No. ${SITE.bizNo}`;
  const meta = [company, ceo, biz].join(' · ');
  const contact = [SITE.phone && `Tel ${SITE.phone}`, SITE.fax && `Fax ${SITE.fax}`, SITE.email].filter(Boolean).join(' · ');
  return (
    <footer className="bg-ink text-[#BFC7C1]">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[13px]">
        <div className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2.5 mb-1"><img src="/logo/mark-white.png" alt="" className="h-8 w-auto" /><img src="/logo/wordmark-white.png" alt="KPROS" className="h-[18px] w-auto" /></span>
          <span>{meta}</span>
          <span>{address}</span>
          <span>{contact}</span>
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
