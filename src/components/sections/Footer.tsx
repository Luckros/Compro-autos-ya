import { WA_URL, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-red text-white font-black text-sm px-2 py-1 rounded">CAY</span>
            <span className="font-bold text-white">ComproAutosYa</span>
          </div>
          <p className="text-sm leading-relaxed">
            Compramos autos usados en todo el AMBA. Cotización gratis, pago inmediato y trámites sin vueltas.
          </p>
        </div>
        <div>
          <p className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phoneLabel}</a></li>
            <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp directo</a></li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white text-sm uppercase tracking-wider mb-4">Horario</p>
          <ul className="space-y-2 text-sm">
            <li>Lunes a Viernes: 9:00 – 19:00</li>
            <li>Sábados: 9:00 – 14:00</li>
            <li className="text-green-400 font-semibold">WhatsApp: 24/7</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} ComproAutosYa. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="/terminos" className="hover:text-white transition-colors">Términos y condiciones</a>
          <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
