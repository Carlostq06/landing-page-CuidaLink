import { Resend } from 'resend';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY no está configurada');
      return new Response(
        JSON.stringify({ error: 'Configuración del servidor incompleta' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, message } = await context.request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
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

    if (result.error) {
      console.error('Error de Resend:', result.error);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: result.data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error en /api/contact:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor', details: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
