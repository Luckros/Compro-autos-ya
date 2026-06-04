import Link from "next/link";
import { WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden pt-16"
      aria-label="Propuesta de valor principal"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-gray-900 to-red-950 opacity-90" />
      
      {/* Patrón sutil */}
      <div className="absolute inset-0 opacity-5"
           style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-red-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Compramos hoy en todo el AMBA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
            Vendé tu auto{" "}
            <span className="text-brand-red">rápido</span>,{" "}
            seguro y al{" "}
            <span className="text-brand-yellow">mejor precio</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            Cotización <strong className="text-white">gratis en 24 hs</strong>, pago inmediato y nosotros nos encargamos de todo el papeleo. Sin vueltas, sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero mi cotización gratis
            </a>
            <Link
              href="#tasacion"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 transition-all duration-200"
            >
              Completar formulario
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: "⚡", label: "Respuesta en 24 hs" },
              { icon: "💰", label: "Pago inmediato" },
              { icon: "📋", label: "Trámites incluidos" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-lg">{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card flotante */}
        <div className="hidden lg:block">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-6">Compramos estas marcas</p>
            <div className="grid grid-cols-3 gap-3">
              {["Toyota","Volkswagen","Ford","Chevrolet","Renault","Peugeot","Honda","Nissan","Fiat","Audi","BMW","Mercedes"].map((brand) => (
                <div key={brand} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-center text-white text-xs font-semibold transition-colors">
                  {brand}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-xs">Y muchas marcas más. Consultanos sin compromiso.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
