import React, { useState } from 'react';
import { useLang } from '../i18n';
import { SITE } from '../site.config';

const field = 'h-[46px] px-3.5 rounded-[10px] border border-[#C9C4B8] bg-white text-[15px] outline-none focus:border-forest';

const Contact: React.FC = () => {
  const { t, lang } = useLang();
  const address = lang === 'en' ? SITE.addressEn : lang === 'zh' ? SITE.addressZh : SITE.address;
  const [form, setForm] = useState({ company: '', name: '', email: '', type: t.contact.types[0], message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [opened] = useState(() => Date.now());
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailtoFallback = () => {
    const subject = `[${form.type}] ${form.company} - ${form.name}`;
    const body = `${t.contact.company}: ${form.company}\n${t.contact.name}: ${form.name}\n${t.contact.email}: ${form.email}\n${t.contact.type}: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, t: opened }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus('sent');
        setForm((f) => ({ ...f, company: '', name: '', email: '', message: '' }));
        return;
      }
      throw new Error(data.error || 'failed');
    } catch {
      setStatus('error');
    }
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
              {SITE.fax && <li className="flex gap-3"><span className="text-soft">Fax</span><span>{SITE.fax}</span></li>}
              {SITE.email && <li className="flex gap-3"><span className="text-soft">Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              {address && <li className="flex gap-3"><span className="text-soft">Address</span><span>{address}</span></li>}
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
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} className="hidden" aria-hidden />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1">
            <button type="submit" disabled={status === 'sending'} className="btn-primary self-start !px-10 disabled:opacity-60">{status === 'sending' ? t.contact.sending : t.contact.send}</button>
            {status === 'sent' && <span className="text-[14px] text-forest font-semibold">{t.contact.sent}</span>}
            {status === 'error' && (
              <span className="text-[14px] text-[#B4341E]">
                {t.contact.error}{' '}
                <button type="button" onClick={mailtoFallback} className="underline font-semibold">{t.contact.errorMailto}</button>
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
