// Vercel serverless function — /api/contact
// Sends email to site owner + copy to sender via Nodemailer / SMTP

const nodemailer = require('nodemailer')

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body || {}

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // SMTP transport (configure via ENV vars)
  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER

  // Email to site owner
  const ownerMail = {
    from:    `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to:      ownerEmail,
    subject: `New message from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
    `,
  }

  // Confirmation to sender
  const senderMail = {
    from:    `"Asilbek" <${process.env.SMTP_USER}>`,
    to:      email,
    subject: `Got your message — Asilbek will reply soon`,
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out! I'll get back to you within 24 hours.</p>
      <p>Here's a copy of your message:</p>
      <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
      <p>Best regards,<br>Asilbek</p>
    `,
  }

  try {
    await Promise.all([
      transporter.sendMail(ownerMail),
      transporter.sendMail(senderMail),
    ])
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
