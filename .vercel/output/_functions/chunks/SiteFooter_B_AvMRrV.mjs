import { C as createComponent, S as createAstro, _ as addAttribute, a as renderComponent, b as unescapeHTML, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, m as generateCspDigest, n as renderScript, t as spreadAttributes } from "./server_BoVuA2Pq.mjs";
import { n as $$Image } from "./_astro_assets_qRTLEgEc.mjs";
//#region node_modules/astro/components/ClientRouter.astro
createAstro("https://astro.build");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/domin/Desktop/landing-page-CuidaLink/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/domin/Desktop/landing-page-CuidaLink/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Bienvenida a CuidaLink" } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead($$result)}</head><body class="bg-background-light font-display text-slate-900"><div class="scroll-progress" aria-hidden="true"><div class="scroll-progress__fill timeline-scroll" data-scroll-progress-fill></div></div>${renderSlot($$result, $$slots["default"])}<script>
			
			if ('scrollRestoration' in history) {
				history.scrollRestoration = 'manual';
			}

			const scrollToTop = () => {
				window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
			};

			const ensureJsClass = () => {
				document.documentElement.classList.add('js');
			};

			const resetGradualReveal = () => {
				document
					.querySelectorAll('.reveal.is-visible')
					.forEach((node) => node.classList.remove('is-visible'));
			};

			const activateGradualReveal = () => {
				ensureJsClass();

				const nodes = document.querySelectorAll('.reveal:not(.is-visible)');
				if (!nodes.length) return;

				if (!('IntersectionObserver' in window)) {
					nodes.forEach((node) => node.classList.add('is-visible'));
					return;
				}

				const observer = new IntersectionObserver(
					(entries, obs) => {
						for (const entry of entries) {
							if (!entry.isIntersecting) continue;
							entry.target.classList.add('is-visible');
							obs.unobserve(entry.target);
						}
					},
					{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
				);

				nodes.forEach((node) => observer.observe(node));
			};

			const rerunGradualReveal = () => {
				scrollToTop();
				resetGradualReveal();
				requestAnimationFrame(() => activateGradualReveal());
			};

			if (document.readyState === 'loading') {
				document.addEventListener(
					'DOMContentLoaded',
					() => {
						scrollToTop();
						activateGradualReveal();
					},
					{ once: true }
				);
			} else {
				scrollToTop();
				activateGradualReveal();
			}

			document.addEventListener('astro:after-swap', ensureJsClass);
			document.addEventListener('astro:page-load', rerunGradualReveal);
		<\/script></body></html>`;
}, "C:/Users/domin/Desktop/landing-page-CuidaLink/src/layouts/Layout.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
//#region src/assets/CuidaLink.svg
var CuidaLink_default = createSvgComponent({
	"meta": {
		"src": "/_astro/CuidaLink.CK71ilYj.svg",
		"width": 870,
		"height": 191,
		"format": "svg"
	},
	"attributes": {
		"id": "Capa_1",
		"data-name": "Capa 1",
		"viewBox": "0 0 870.36 191.25"
	},
	"children": "\r\n  <defs>\r\n    <style>\r\n      .cls-1 {\r\n        fill: #fffeff;\r\n      }\r\n\r\n      .cls-2 {\r\n        fill: #0b0b0d;\r\n      }\r\n\r\n      .cls-3 {\r\n        fill: #347140;\r\n      }\r\n    </style>\r\n  </defs>\r\n  <path class=\"cls-3\" d=\"M170.68,191.25H36.61C15.73,191.24-.02,172.46,0,153.79L.14,36.91C.17,14.98,18.74-.04,40.43,0l129.38.26c19.85,2.85,33.69,18.2,33.68,37.85l-.05,115.87c0,18.93-13.54,34.06-32.75,37.27ZM151.05,163.2c4.82.55,8.18.61,12.17-.13l.33-70.96c4.58,1.94,6.28,4.56,9.85,5.4s7.18-.66,8.61-3.43c1.7-3.3.43-6.54-2.58-8.79l-26.75-20-.17-32.58c-5.86-.33-11.54-.52-17.37.03l-.78,19.51-29.87-22.35c-1.72-1.29-3.53-1.25-5.15-.02l-14.6,11.13-62.04,46.02c-2.56,1.9-1.25,6.31,0,7.96,4.65,6.18,11.76.93,17.44-3l.31,71.01c4.33.77,7.95.84,12.21-.03l.17-79.97,49.05-36.78,48.99,36.86.18,80.09ZM111.51,154.18l.34-24.61,21.81-.51-.08-18.61-21.85-.33-.57-23.52-18.75.14-.29,23.37-22.05.49.38,18.66,21.72.43.34,25.01c6.57-.1,12.8.76,19-.51Z\" />\r\n  <path class=\"cls-1\" d=\"M151.05,163.2l-.18-80.09-48.99-36.86-49.05,36.78-.17,79.97c-4.26.87-7.88.79-12.21.03l-.31-71.01c-5.68,3.93-12.78,9.18-17.44,3-1.24-1.65-2.55-6.07,0-7.96l62.04-46.02,14.6-11.13c1.61-1.23,3.43-1.27,5.15.02l29.87,22.35.78-19.51c5.83-.55,11.51-.36,17.37-.03l.17,32.58,26.75,20c3.01,2.25,4.28,5.5,2.58,8.79-1.43,2.77-4.95,4.29-8.61,3.43s-5.28-3.46-9.85-5.4l-.33,70.96c-3.99.73-7.34.68-12.17.13Z\" />\r\n  <path class=\"cls-1\" d=\"M111.51,154.18c-6.2,1.27-12.43.4-19,.51l-.34-25.01-21.72-.43-.38-18.66,22.05-.49.29-23.37,18.75-.14.57,23.52,21.85.33.08,18.61-21.81.51-.34,24.61Z\" />\r\n  <path class=\"cls-2\" d=\"M494.9,149.38c-15.34,4.87-30.81-2.62-36.78-17.04-5.63-13.6-5.81-29.34-.44-42.96,4.95-12.56,16.42-19.7,29.86-19.41,7.24.16,12.92,2.61,17.97,8.74l.52-40.15,20.92.18.02,110.49c-6.83.14-13.09.49-19.42-.18-.77-3.03-.14-5.69-1.61-8.61-3.4,3.8-6.04,7.36-11.04,8.95ZM505.49,99.98c-.68-7.13-6.25-12.11-12.69-12.61-7.12-.55-13.32,3.29-15.41,10.31-2.47,8.3-2.31,17.4.43,25.61,2.2,6.6,8.32,10.15,15.02,9.66,14.9-1.08,13.66-22.39,12.65-32.97Z\" />\r\n  <path class=\"cls-2\" d=\"M290.87,131.03c10.45-.24,17.23-6.58,18.9-16.28,7.89-.39,15.1-.46,22.95-.06-3.47,24.68-21.82,37.58-46.58,35.98-18.57-1.2-33.55-12.03-39.9-29.27-5.69-15.46-5.79-32.44,0-47.91,6.8-18.19,23.4-29.38,43.22-29.58,24.62-.25,41.35,13.95,42.86,37.26l-22.4-.13c-1.25-6.04-3.15-11.99-8.76-15.19-12.3-7.02-27.55-1.22-32.62,11.95-4.8,12.47-4.75,26.74.1,39.07,3.65,9.28,11.83,14.41,22.24,14.17Z\" />\r\n  <path class=\"cls-2\" d=\"M408.29,71.47l.29,77.71-20.3.14-1.11-9.6c-5.47,8.5-14.29,11.91-24.33,10.99-11.81-1.09-21.46-9.36-21.55-21.67l-.4-57.59,21.46-.11.27,50.63c.02,3.42,1.76,6.6,3.83,8.31,2.79,2.3,6.43,2.85,10.25,1.97,5.64-1.3,9.54-6.59,9.6-12.51l.48-48.42,21.51.12Z\" />\r\n  <rect class=\"cls-2\" x=\"421.93\" y=\"71.2\" width=\"21.42\" height=\"78.21\" />\r\n  <ellipse class=\"cls-2\" cx=\"432.62\" cy=\"49.71\" rx=\"12.97\" ry=\"12.63\" />\r\n  <path class=\"cls-1\" d=\"M505.49,99.98c1.01,10.59,2.25,31.89-12.65,32.97-6.7.49-12.81-3.06-15.02-9.66-2.74-8.21-2.9-17.32-.43-25.61,2.09-7.02,8.28-10.86,15.41-10.31,6.44.5,12.01,5.47,12.69,12.61Z\" />\r\n  <polygon class=\"cls-3\" points=\"839.55 106.07 870.36 149.06 844.21 149.45 819.43 113.57 819.18 149.36 797.69 149.38 797.67 38.58 819.11 38.48 819.37 101.9 842.59 71.25 867.34 71.6 839.55 106.07\" />\r\n  <path class=\"cls-3\" d=\"M743.02,92.62c-2.59,3.59-3.38,7.88-3.4,11.87l-.2,44.85-21.37-.02.09-78.1,19.71.13c1.34,3.46.17,6.64,2.16,10.03,4.77-8.08,12.69-11.32,21.57-11.44,10.74-.14,19.73,6.06,22.25,16.33,1.08,4.39,1.62,8.85,1.63,13.56l.03,49.5h-21.9s-.11-49.51-.11-49.51c0-3.23-.73-6.87-3.17-9.14-4.78-4.46-13.25-3.67-17.31,1.95Z\" />\r\n  <polygon class=\"cls-3\" points=\"675.78 129.86 675.88 149.41 617.43 149.42 617.45 45.59 639.47 45.57 639.5 129.78 675.78 129.86\" />\r\n  <rect class=\"cls-3\" x=\"683.98\" y=\"71.16\" width=\"21.74\" height=\"78.29\" />\r\n  <ellipse class=\"cls-3\" cx=\"694.91\" cy=\"49.71\" rx=\"13.04\" ry=\"12.7\" />\r\n  <path class=\"cls-2\" d=\"M558.69,150.67c-12.51-1.41-20.67-10.02-21.13-21.85-.9-23.19,25.11-27.83,44.71-26.88,1.47-3.43,1.45-9.1-1.76-12.25-4.62-4.55-13.03-4.09-17.81-.2-2.39,1.94-2.43,4.7-3.28,7.37l-20.62-.06c.68-10.28,6.47-19.69,16.42-23.52,9.96-3.83,21.03-4.17,31.2-1.19,10.44,3.06,17.71,11.71,17.78,22.34l.28,38.13c.04,5.79.27,11.05,1.3,16.7h-20.27c-1.49-2.22-.65-4.58-2.2-7.55-5.56,7.67-14.91,10.07-24.64,8.97ZM583.01,114.81c-8.15.25-21.71-.13-23.88,8.49-.95,3.79-.25,7.97,3.23,10.31,3.8,2.56,8.93,2.53,13.49.35,7.04-3.36,8.23-12.46,7.16-19.15Z\" />\r\n  <path class=\"cls-1\" d=\"M583.01,114.81c1.07,6.7-.13,15.79-7.16,19.15-4.55,2.18-9.69,2.21-13.49-.35-3.48-2.34-4.18-6.52-3.23-10.31,2.17-8.63,15.73-8.25,23.88-8.49Z\" />\r\n",
	"styles": []
});
//#endregion
//#region src/components/index/SiteHeader.astro
createAstro("https://astro.build");
var $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SiteHeader;
	new URL(Astro.url).pathname.slice(1);
	return renderTemplate`${maybeRenderHead($$result)}<header class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md md:px-10"><div class="flex items-center gap-4"><a href="/" class="block">${renderComponent($$result, "Image", $$Image, {
		"alt": "Logo de CuidaLink",
		"class": "h-8 w-auto",
		"src": CuidaLink_default,
		"loading": "eager"
	})}</a></div><div class="hidden flex-1 justify-end gap-8 md:flex"><div class="flex items-center gap-9"><a class="nav-link text-sm font-medium text-slate-600 hover:text-primary" href="/about">Sobre Nosotros</a><a class="nav-link text-sm font-medium text-slate-600 hover:text-primary" href="/ayuda">Ayuda</a><a class="nav-link text-sm font-medium text-slate-600 hover:text-primary" href="/contacto">Contacto</a></div><button class="btn-shine soft-glow flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-hover"><span class="truncate">Acceder</span></button></div><button class="text-slate-900 md:hidden" aria-label="Abrir menu"><span class="material-symbols-outlined">menu</span></button></header>`;
}, "C:/Users/domin/Desktop/landing-page-CuidaLink/src/components/index/SiteHeader.astro", void 0);
//#endregion
//#region src/components/index/SiteFooter.astro
var $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="reveal border-t border-slate-200 bg-white px-5 py-6 text-center"><div class="mx-auto max-w-[1200px]"><div class="reveal delay-1 flex flex-col items-center justify-between gap-8 md:flex-row"><div class="flex items-center gap-4"><a href="/" class="block">${renderComponent($$result, "Image", $$Image, {
		"alt": "Logo de CuidaLink",
		"class": "h-8 w-auto",
		"src": CuidaLink_default,
		"loading": "lazy"
	})}</a></div><div class="reveal delay-1 flex flex-wrap items-center justify-center gap-8"><a class="nav-link text-sm font-medium text-slate-500 hover:text-primary" href="/about">Sobre Nosotros</a><a class="nav-link text-sm font-medium text-slate-500 hover:text-primary" href="#">Ayuda</a><a class="nav-link text-sm font-medium text-slate-500 hover:text-primary" href="#">Contacto</a></div><div class="reveal reveal-right delay-2 flex gap-4"><a class="btn-shine hover-lift flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-primary hover:text-white" href="#" aria-label="Facebook"><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg></a><a class="btn-shine hover-lift flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-primary hover:text-white" href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 
            3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg></a></div></div><div class=" mt-4 border-t border-slate-100 pt-5"><p class="text-sm font-normal text-slate-400">© 2026 CuidaLink. Todos los derechos reservados.</p></div></div></footer>`;
}, "C:/Users/domin/Desktop/landing-page-CuidaLink/src/components/index/SiteFooter.astro", void 0);
//#endregion
export { $$SiteHeader as n, $$Layout as r, $$SiteFooter as t };
