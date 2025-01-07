import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { email, asunto, mensaje } = await req.json()

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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        body {
          font-family: 'Poppins', Arial, sans-serif;
          line-height: 1.6;
          color: #f8fafc;
          background-color: #0f172a;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
        }
        .card {
          background-color: #1e293b;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(90deg, #a78bfa, #ec4899);
          color: white;
          padding: 20px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          display: block;
          font-weight: 600;
          margin-bottom: 5px;
          color: #a78bfa;
        }
        .field-value {
          background-color: #2d3748;
          padding: 10px;
          border-radius: 6px;
          color: #f8fafc;
        }
        .message {
          white-space: pre-wrap;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #cbd5e0;
        }
        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          vertical-align: middle;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <div class="header">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            Nuevo mensaje de contacto
          </div>
          <div class="content">
            <div class="field">
              <span class="field-label">De:</span>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <span class="field-label">Asunto:</span>
              <div class="field-value">${asunto}</div>
            </div>
            <div class="field">
              <span class="field-label">Mensaje:</span>
              <div class="field-value message">${mensaje}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          Este correo fue enviado desde el formulario de contacto de tu sitio web.
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: asunto,
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