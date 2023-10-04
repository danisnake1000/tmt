import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { nombre, apellido, nroCompra, email, telefono, fechaCompra, mensaje } = await request.json();

        // Configura el transporter para Gmail
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: 'tigerteamdn@gmail.com',
            to: 'nahuelastudillo@gmail.com',
            subject: "F.A." + nombre + ", " + email,
            html: `
                <h3>Hola Tmt</h3>
                <li> Nombre: ${nombre}</li>
                <li> Apellido: ${apellido}</li>
                <li> NRO Compra: ${nroCompra}</li>
                <li> Email: ${email}</li>
                <li> Telefono: ${telefono}</li>
                <li> Fecha de Compra: ${fechaCompra}</li>
                <hr/>
                <li> Mensaje: ${mensaje}</li> 
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}
