import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async (context) => {
  const { name, email, message } = await context.request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await resend.emails.send({
      from: 'noreply@cuidalink.com',
      to: 'cuidalink92@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error enviando email:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
