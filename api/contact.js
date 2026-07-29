const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body || {}

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email address' })
  }
  if (message.trim().length < 5) {
    return res.status(400).json({ error: 'Message is too short' })
  }

  // Check env vars are set
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP env vars')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST || 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
  })

  const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER
  const safeName    = name.trim().substring(0, 100)
  const safeEmail   = email.trim().substring(0, 200)
  const safePhone   = (phone || '').trim().substring(0, 30)
  const safeMessage = message.trim().substring(0, 5000)

  const ownerMail = {
    from:    `"Portfolio" <${process.env.SMTP_USER}>`,
    to:      ownerEmail,
    subject: `Portfolio contact from ${safeName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#3B82F6">New portfolio contact</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background:#f5f5f5;padding:12px;border-radius:6px;white-space:pre-wrap">${safeMessage}</div>
      </div>
    `,
  }

  const senderMail = {
    from:    `"Asilbek Tashpulatov" <${process.env.SMTP_USER}>`,
    to:      safeEmail,
    subject: `Thanks for reaching out, ${safeName.split(' ')[0]}!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <p>Hi ${safeName.split(' ')[0]},</p>
        <p>Got your message — I'll reply within 24 hours.</p>
        <p style="color:#6B7280;font-size:13px">Your message:</p>
        <div style="background:#f5f5f5;padding:12px;border-radius:6px;font-size:13px;white-space:pre-wrap">${safeMessage}</div>
        <br/>
        <p>Best,<br/><strong>Asilbek Tashpulatov</strong><br/>
        <a href="https://github.com/Asilbek1702">GitHub</a> · 
        <a href="https://t.me/notdead3">Telegram</a></p>
      </div>
    `,
  }

  try {
    await Promise.all([
      transporter.sendMail(ownerMail),
      transporter.sendMail(senderMail),
    ])
    return res.status(200).json({ ok: true, message: 'Emails sent successfully' })
  } catch (err) {
    console.error('Mail error:', err.message)
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' })
  }
}
