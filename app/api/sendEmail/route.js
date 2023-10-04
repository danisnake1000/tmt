import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        // Configura el transporter para Gmail
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: 'tigerteamdn@gmail.com',
            to: 'nahuelastudillo@gmail.com',
            subject: subject,
            html: `
                <h3>Hello Augustine</h3>
                <li> title: ${subject}</li>
                <li> message: ${message}</li> 
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}
