'use server'

import nodemailer from 'nodemailer'

/* =======================
   TYPES
======================= */
export type FormState = {
  success: boolean
  message: string
}

/* =======================
   UTILS
======================= */
function getValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]!))
}

/* =======================
   MAILER (REUSED)
======================= */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
})

/* =======================
   SERVER ACTION
======================= */
export async function sendContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {

  /* --------- Extract --------- */
  const firstName = getValue(formData, 'firstName')
  const lastName  = getValue(formData, 'lastName')
  const email     = getValue(formData, 'email')
  const phone     = getValue(formData, 'phone')
  const message   = getValue(formData, 'message')

  /* --------- Validation --------- */
  if (!firstName || !lastName || !email || !phone) {
    return {
      success: false,
      message: 'Будь ласка, заповніть всі обовʼязкові поля.',
    }
  }

  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Введіть коректну електронну пошту.',
    }
  }

  try {
    /* --------- Send mail --------- */
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Нова заявка: ${firstName} ${lastName}`,
      html: `
        <h2>Новий запит з сайту</h2>
        <p><strong>Імʼя:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Повідомлення:</strong><br/>
          ${escapeHtml(message || '-')}
        </p>
      `,
    })

    return {
      success: true,
      message: 'Дякуємо! Ваше повідомлення надіслано.',
    }

  } catch (error) {
    console.error('Email send error:', error)
    return {
      success: false,
      message: 'Помилка сервера. Спробуйте пізніше.',
    }
  }
}
