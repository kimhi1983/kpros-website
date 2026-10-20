import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
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

  return (
    <section id="contact" className="bg-white border-t border-line py-16 md:py-24 scroll-mt-24">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="text-[15px] md:text-[17px] leading-[1.65] text-muted">{t.contact.body}</p>
          <ul className="flex flex-col gap-2.5 text-[15px] mt-2">
            {SITE.phone && <li className="flex items-center gap-2.5"><Phone size={18} className="text-forest" aria-hidden="true" /><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>}
            {SITE.email && <li className="flex items-center gap-2.5"><Mail size={18} className="text-forest" aria-hidden="true" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
            {SITE.address && <li className="flex items-center gap-2.5"><MapPin size={18} className="text-forest" aria-hidden="true" />{SITE.address}</li>}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-3.5 p-6 md:p-8 rounded-3xl bg-ivory border border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.company}</span><input required className={field} value={form.company} onChange={set('company')} /></label>
            <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.name}</span><input required className={field} value={form.name} onChange={set('name')} /></label>
          </div>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.email}</span><input required type="email" className={field} value={form.email} onChange={set('email')} /></label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.type}</span>
            <select className={field} value={form.type} onChange={set('type')}>
              {t.contact.types.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold"><span>{t.contact.message}</span><textarea required rows={4} className={`${field} !h-auto py-3 resize-y`} value={form.message} onChange={set('message')} /></label>
          <button type="submit" className="btn-primary mt-1">{t.contact.send}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
