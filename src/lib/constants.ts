export const SITE = {
  name:        "ComproAutosYa",
  url:         "https://comproautosya.com.ar",
  phone:       "+5491171576353",
  phoneLabel:  "(11) 7157-6353",
  whatsapp:    "5491171576353",
  address:     "Buenos Aires, Argentina",
  description: "Compramos tu auto usado al mejor precio. Cotización gratis, pago inmediato y trámites sin vueltas en todo el AMBA.",
};

export const WA_MSG = encodeURIComponent(
  "Hola, quiero vender mi auto y me gustaría recibir una cotización gratuita."
);
export const WA_URL = `https://wa.me/${SITE.whatsapp}?text=${WA_MSG}`;

export const STEPS = [
  { n: "01", title: "Nos contactás",      desc: "Envianos los datos de tu auto por WhatsApp o completá el formulario. Es gratis y sin compromiso." },
  { n: "02", title: "Recibís tu oferta",  desc: "En menos de 24 hs te damos una cotización real basada en el mercado actual. Sin sorpresas." },
  { n: "03", title: "Acordamos la cita",  desc: "Si la oferta te convence, coordinamos día y lugar para revisar el vehículo en persona." },
  { n: "04", title: "Cobrás al instante", desc: "Transferencia bancaria o efectivo en el momento. Nos encargamos de toda la documentación." },
];

export const FAQS = [
  { q: "¿Compran autos con deuda o prendas?",          a: "Sí, en muchos casos podemos gestionar la cancelación de la prenda. Consultanos con los datos del vehículo y te informamos sin compromiso." },
  { q: "¿Qué marcas y modelos compran?",               a: "Compramos autos nacionales e importados de gama media y alta: Toyota, Volkswagen, Ford, Chevrolet, Renault, Peugeot, Honda, Nissan, entre otros." },
  { q: "¿Cuánto tarda el proceso completo?",           a: "Desde el primer contacto hasta el cobro puede resolverse en 24 a 72 horas. En casos simples, el mismo día." },
  { q: "¿El auto tiene que estar en perfecto estado?", a: "No. Compramos autos con detalles de chapa y pintura, con alta kilometraje o con reparaciones pendientes. Hacemos una oferta acorde al estado real." },
  { q: "¿Dónde operan geográficamente?",               a: "Trabajamos en todo el AMBA: CABA, GBA Norte, Sur, Oeste y La Plata. También coordinamos para el interior con acuerdo previo." },
];
