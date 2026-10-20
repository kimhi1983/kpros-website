import React, { useState } from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const field = 'h-[46px] px-3.5 rounded-[10px] border border-[#C9C4B8] bg-white text-[15px] outline-none focus:border-forest';

const Contact: React.FC = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ company: '', name: '', email: '', type: t.contact.types[0], message: '' });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!SITE.email) {
      alert(t.contact.noEmail);
      return;
    }
    const subject = `[${form.type}] ${form.company} - ${form.name}`;
    const body = `${t.contact.company}: ${form.company}\n${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.type}: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const hasInfo = SITE.phone || SITE.email || SITE.address;

  return (
    <section id="contact" className="bg-white border-t border-line py-16 md:py-24 scroll-mt-24">
      <div className="container-page flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-muted">{t.contact.body}</p>
          {hasInfo && (
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[15px] mt-1">
              {SITE.phone && <li className="flex gap-3"><span className="text-soft">Tel</span><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>}
              {SITE.email && <li className="flex gap-3"><span className="text-soft">Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              {SITE.address && <li className="flex gap-3"><span className="text-soft">Address</span><span>{SITE.address}</span></li>}
            </ul>
          )}
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3.5 p-6 md:p-8 rounded-3xl bg-ivory border border-line">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.company}</span><input required className={field} value={form.company} onChange={set('company')} /></label>
            <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.name}</span><input required className={field} value={form.name} onChange={set('name')} /></label>
            <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.email}</span><input required type="email" className={field} value={form.email} onChange={set('email')} /></label>
          </div>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.type}</span>
            <select className={field} value={form.type} onChange={set('type')}>
              {t.contact.types.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.message}</span><textarea required rows={5} className={`${field} !h-auto py-3 resize-y`} value={form.message} onChange={set('message')} /></label>
          <button type="submit" className="btn-primary mt-1 self-start !px-10">{t.contact.send}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
