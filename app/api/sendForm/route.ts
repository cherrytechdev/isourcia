import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ReactElement } from 'react';
import EmailTemplate from '@/common/EmailTemplateProps';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = await render(EmailTemplate(data) as ReactElement);
    
    await transporter.sendMail({
      // from: process.env.GMAIL_USER,
      from: data.mail,
      to: process.env.GMAIL_USER, 
      subject: 'Confirmation de votre demande de contact',
      html: emailHtml,
      replyTo: data.mail,
    });

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    console.log(data);
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ message: 'Erreur envoi email', error }, { status: 500 });
  }
}
