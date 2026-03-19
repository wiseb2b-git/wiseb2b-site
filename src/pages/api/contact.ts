import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const formName = formData.get('form_name')?.toString() || 'Formularz kontaktowy';
    const botField = formData.get('bot-field')?.toString() || '';

    // Honeypot check
    if (botField) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Nieprawidłowy adres e-mail.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const smtpHost = import.meta.env.SMTP_HOST;
    const smtpPort = Number(import.meta.env.SMTP_PORT) || 587;
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const mailTo = import.meta.env.MAIL_TO || 'office@wiseb2b.eu';
    const mailFrom = import.meta.env.MAIL_FROM || smtpUser || 'noreply@wiseb2b.eu';

    if (!smtpHost) {
      console.error('SMTP not configured. Set SMTP_HOST env var.');
      return new Response(JSON.stringify({ error: 'Konfiguracja serwera e-mail jest niekompletna.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transportConfig: Record<string, unknown> = {
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      tls: { rejectUnauthorized: false },
    };

    if (smtpUser && smtpPass) {
      transportConfig.auth = { user: smtpUser, pass: smtpPass };
    }

    const transporter = nodemailer.createTransport(transportConfig as nodemailer.TransportOptions);

    const subject = `[WiseB2B] ${formName}`;
    const text = [
      `Formularz: ${formName}`,
      `Imię i nazwisko: ${name || '(nie podano)'}`,
      `E-mail: ${email}`,
      `Telefon: ${phone || '(nie podano)'}`,
    ].join('\n');

    const html = `
      <h2>${formName}</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Imię i nazwisko:</td><td>${name || '<em>(nie podano)</em>'}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">E-mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Telefon:</td><td>${phone || '<em>(nie podano)</em>'}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Mail send error:', err);
    return new Response(JSON.stringify({ error: 'Nie udało się wysłać wiadomości.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
