const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const RESEND_FROM = import.meta.env.RESEND_FROM || 'CuidaLink <onboarding@resend.dev>';
const RESEND_TO = import.meta.env.RESEND_TO || 'cuidalink92@gmail.com';

function jsonResponse(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export async function GET() {
	return jsonResponse({ error: 'Method not allowed' }, 405);
}

export async function POST({ request }) {
	if (!RESEND_API_KEY) {
		return jsonResponse({ error: 'Falta configurar RESEND_API_KEY en las variables de entorno.' }, 500);
	}

	const formData = await request.formData();
	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const message = String(formData.get('message') ?? '').trim();

	if (!name || !email || !message) {
		return jsonResponse({ error: 'Faltan campos obligatorios.' }, 400);
	}

	const resendResponse = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: RESEND_FROM,
			to: RESEND_TO,
			subject: `Nuevo mensaje de contacto de ${name}`,
			reply_to: email,
			text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
			html: `
				<h2>Nuevo mensaje de contacto</h2>
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Correo:</strong> ${email}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message.replaceAll('\n', '<br />')}</p>
			`,
		}),
	});

	const payload = await resendResponse.json().catch(() => ({}));

	if (!resendResponse.ok) {
		return jsonResponse(
			{
				error: payload?.error?.message || payload?.message || 'No se pudo enviar el correo con Resend.',
			},
			502
		);
	}

	return jsonResponse({ ok: true });
}
