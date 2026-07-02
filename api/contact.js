import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY no está configurada');
      return res.status(500).json({ error: 'Falta configuración del servidor (API KEY)' });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'carlosbarcelona280@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      console.error('Error de Resend:', result.error);
      return res.status(500).json({ error: 'Error al enviar el email', details: result.error });
    }

    return res.status(200).json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error('Error en /api/contact:', error);
    return res.status(500).json({ error: 'Error interno del servidor', details: String(error) });
  }
}
