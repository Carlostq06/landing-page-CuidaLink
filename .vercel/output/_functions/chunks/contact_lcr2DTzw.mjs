import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var resend = new Resend("re_iv392Ryi_4RWTNExoTLYjWBaHBMvQTAMW");
var POST = async (context) => {
	const { name, email, message } = await context.request.json();
	if (!name || !email || !message) return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	try {
		await resend.emails.send({
			from: "noreply@cuidalink.com",
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
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Error enviando email:", error);
		return new Response(JSON.stringify({ error: "Error al enviar el email" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
