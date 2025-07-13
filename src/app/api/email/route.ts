import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  // Configuración del transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Plantilla HTML para el correo 
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nuevo mensaje de contacto</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
        }
        .container {
          max-width: 640px;
          margin: 30px auto;
          padding: 24px;
        }
        .card {
          background-color: #1e293b;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.25);
          border: 1px solid #334155;
        }
        .header {
          background: linear-gradient(to right, #a78bfa, #ec4899);
          padding: 24px;
          color: #ffffff;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
          color: #a78bfa;
          font-size: 14px;
        }
        .field-value {
          background-color: #2d3748;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          color: #f8fafc;
          white-space: pre-wrap;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
        }
        svg.icon {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-right: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <div class="header">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            Nuevo mensaje de contacto
          </div>
          <div class="content">
            <div class="field">
              <span class="field-label">Nombre:</span>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <span class="field-label">Correo Electrónico:</span>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <span class="field-label">Asunto:</span>
              <div class="field-value">${subject}</div>
            </div>
            <div class="field">
              <span class="field-label">Mensaje:</span>
              <div class="field-value">${message}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          Este correo fue enviado desde el formulario de contacto de tu sitio web.
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject,
    html: htmlTemplate,
    replyTo: email,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Correo enviado exitosamente' }, { status: 200 })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 })
  }
}