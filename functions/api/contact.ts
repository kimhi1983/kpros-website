// Cloudflare Pages Function: POST /api/contact
// 하이웍스 SMTP로 문의 메일 발송. 비밀번호는 Cloudflare 환경변수(SMTP_PASS)에만 저장.
import { WorkerMailer } from 'worker-mailer';

interface Env {
  SMTP_USER: string;        // 예: web@kpros.kr (발신 계정)
  SMTP_PASS: string;        // 해당 계정 비밀번호 (Secret)
  SMTP_HOST?: string;       // 기본 smtp.hiworks.com
  SMTP_PORT?: string;       // 기본 465
  CONTACT_TO?: string;      // 수신 주소, 기본 kpros@kpros.kr
}

type Body = { company?: string; name?: string; email?: string; type?: string; message?: string; website?: string; t?: number };

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let b: Body;
  try { b = (await request.json()) as Body; } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  // 스팸 방지: 허니팟 필드가 채워졌거나 폼을 3초 안에 제출하면 조용히 성공 처리
  if (b.website) return json({ ok: true });
  if (typeof b.t === 'number' && Date.now() - b.t < 3000) return json({ ok: true });

  const company = (b.company || '').trim().slice(0, 200);
  const name = (b.name || '').trim().slice(0, 100);
  const email = (b.email || '').trim().slice(0, 200);
  const type = (b.type || '').trim().slice(0, 100);
  const message = (b.message || '').trim().slice(0, 5000);
  if (!company || !name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'invalid' }, 400);
  if (!env.SMTP_USER || !env.SMTP_PASS) return json({ ok: false, error: 'not_configured' }, 500);

  const to = env.CONTACT_TO || 'kpros@kpros.kr';
  const ip = request.headers.get('cf-connecting-ip') || '';
  const when = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  const subject = `[홈페이지 문의] ${type} — ${company} / ${name}`;
  const text = `회사명: ${company}\n담당자: ${name}\n이메일: ${email}\n문의 유형: ${type}\n접수: ${when}\nIP: ${ip}\n\n${message}`;
  const html = `<div style="font:14px/1.6 -apple-system,'Noto Sans KR',sans-serif;color:#111">
<table style="border-collapse:collapse" cellpadding="6">
<tr><td style="color:#666">회사명</td><td><b>${esc(company)}</b></td></tr>
<tr><td style="color:#666">담당자</td><td>${esc(name)}</td></tr>
<tr><td style="color:#666">이메일</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
<tr><td style="color:#666">문의 유형</td><td>${esc(type)}</td></tr>
<tr><td style="color:#666">접수</td><td>${esc(when)} · ${esc(ip)}</td></tr>
</table>
<hr style="border:0;border-top:1px solid #ddd;margin:14px 0">
<pre style="white-space:pre-wrap;font:inherit">${esc(message)}</pre>
<p style="color:#999;font-size:12px;margin-top:20px">kproscorp.com 문의 폼에서 발송된 메일입니다. 이 메일에 답장하면 문의자에게 전달됩니다.</p>
</div>`;

  try {
    const mailer = await WorkerMailer.connect({
      host: env.SMTP_HOST || 'smtp.hiworks.com',
      port: Number(env.SMTP_PORT || 465),
      secure: (env.SMTP_PORT || '465') === '465',
      startTls: true,
      authType: ['plain', 'login'],
      credentials: { username: env.SMTP_USER, password: env.SMTP_PASS },
    });
    await mailer.send({
      from: { name: 'KPROS 홈페이지', email: env.SMTP_USER },
      to: { email: to },
      reply: { name, email },
      subject, text, html,
    });
    await mailer.close();
    return json({ ok: true });
  } catch (e) {
    console.error('smtp error', e);
    return json({ ok: false, error: 'smtp_failed' }, 502);
  }
};
