import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/contact.js
var contact_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
async function POST(context) {
	console.log("=== CONTACT API CALLED ===");
	try {
		console.log("1. Verificando API KEY...");
		const apiKey = "re_iv392Ryi_4RWTNExoTLYjWBaHBMvQTAMW";
		console.log("API KEY presente:", true);
		console.log("API KEY length:", 36);
		console.log("2. Parseando datos del formulario...");
		const body = await context.request.json();
		console.log("Body recibido:", {
			name: body.name,
			email: body.email,
			messageLength: body.message?.length
		});
		const { name, email, message } = body;
		if (!name || !email || !message) {
			console.error("❌ Faltan campos:", {
				name: !!name,
				email: !!email,
				message: !!message
			});
			return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
		}
		console.log("3. Inicializando cliente Resend...");
		const resend = new Resend(apiKey);
		console.log("Cliente Resend creado");
		console.log("4. Enviando email...");
		const result = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "cuidalink92@gmail.com",
			replyTo: email,
			subject: `Nuevo mensaje de contacto de ${name}`,
			html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
		});
		console.log("5. Respuesta de Resend:", {
			hasError: !!result.error,
			hasData: !!result.data
		});
		if (result.error) {
			console.error("❌ Error de Resend:", result.error);
			return new Response(JSON.stringify({
				error: "Error al enviar el email",
				details: result.error
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		console.log("✅ Email enviado exitosamente:", result.data?.id);
		return new Response(JSON.stringify({
			success: true,
			id: result.data?.id
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("❌ ERROR EN /api/contact:", error);
		console.error("Error type:", error instanceof Error ? error.name : typeof error);
		console.error("Error message:", error instanceof Error ? error.message : String(error));
		console.error("Error stack:", error instanceof Error ? error.stack : "No stack");
		return new Response(JSON.stringify({
			error: "Error interno del servidor",
			details: error instanceof Error ? error.message : String(error)
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@js
var page = () => contact_exports;
//#endregion
export { page };
