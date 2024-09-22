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

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: asunto,
    text: `Mensaje de: ${email}\n\n\n${mensaje}`,
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
