"use client";
import { useState } from "react";
import Image from "next/image";

// ─── Datos de los autos ───────────────────────────────────────
// Para marcar un auto como vendido: agregá vendido: true en su objeto.
// Para agregar un auto nuevo: copiá un objeto y editá los datos.
const AUTOS = [
  {
    id: "a2m",
    marca: "Chevrolet",
    modelo: "Corsa Classic",
    version: "1.4 LS",
    año: 2016,
    puertas: 4,
    color: "Gris",
    transmision: "Manual",
    combustible: "Nafta",
    vendido: true,
    fotos: [
      "/autos/a2m/1.jpg",
      "/autos/a2m/2.jpg",
      "/autos/a2m/3.jpg",
      "/autos/a2m/4.jpg",
    ],
    waMsg: "Hola! Me interesa el Chevrolet Corsa Classic 1.4 LS 2016 (gris) que vi en la web. ¿Podría darme más información?",
  },
  {
    id: "p5",
    marca: "Chevrolet",
    modelo: "Corsa Classic",
    version: "1.4 LS",
    año: 2015,
    puertas: 4,
    color: "Gris",
    transmision: "Manual",
    combustible: "Nafta",
    vendido: false,
    fotos: [
      "/autos/p5/1.jpg",
      "/autos/p5/2.jpg",
      "/autos/p5/3.jpg",
      "/autos/p5/4.jpg",
    ],
    waMsg: "Hola! Me interesa el Chevrolet Corsa Classic 1.4 LS 2015 (gris) que vi en la web. ¿Podría darme más información?",
  },
  {
    id: "aa",
    marca: "Chevrolet",
    modelo: "Corsa Classic",
    version: "1.4 LS",
    año: 2016,
    puertas: 4,
    color: "Plata",
    transmision: "Manual",
    combustible: "Nafta",
    vendido: false,   // ← VENDIDO
    fotos: [
      "/autos/aa/1.jpg",
      "/autos/aa/2.jpg",
      "/autos/aa/3.jpg",
      "/autos/aa/4.jpg",
    ],
    waMsg: "Hola! Me interesa el Chevrolet Corsa Classic 1.4 LS 2016 (plata) que vi en la web. ¿Podría darme más información?",
  },
  {
    id: "p03",
    marca: "Chevrolet",
    modelo: "Corsa Classic",
    version: "1.4 LS",
    año: 2015,
    puertas: 4,
    color: "Blanco",
    transmision: "Manual",
    combustible: "Nafta",
    vendido: false,
    fotos: [
      "/autos/p03/1.jpg",
      "/autos/p03/2.jpg",
      "/autos/p03/3.jpg",
      "/autos/p03/4.jpg",
    ],
    waMsg: "Hola! Me interesa el Chevrolet Corsa Classic 1.4 LS 2015 (blanco) que vi en la web. ¿Podría darme más información?",
  },
];

const WA_NUMBER = "5491171576353";

// ─── Tarjeta individual ───────────────────────────────────────
type Auto = typeof AUTOS[0];

function AutoCard({ auto }: { auto: Auto }) {
  const [fotoActiva, setFotoActiva] = useState(0);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(auto.waMsg)}`;

  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border flex flex-col transition-shadow duration-300 ${
        auto.vendido ? "border-gray-200 opacity-75" : "border-gray-100 hover:shadow-lg"
      }`}
    >
      {/* Galería */}
      <div className="relative bg-gray-100 aspect-[4/3] overflow-hidden">
        <Image
          src={auto.fotos[fotoActiva]}
          alt={`${auto.marca} ${auto.modelo} ${auto.año} - foto ${fotoActiva + 1}`}
          fill
          className={`object-cover transition-opacity duration-300 ${auto.vendido ? "grayscale" : ""}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Sello VENDIDO */}
        {auto.vendido && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 text-white font-black text-2xl px-8 py-3 rounded-xl -rotate-12 shadow-2xl tracking-widest uppercase">
              Vendido
            </div>
          </div>
        )}

        {/* Badge color */}
        {!auto.vendido && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
            {auto.color}
          </div>
        )}

        {/* Badge año */}
        <div
          className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full ${
            auto.vendido ? "bg-gray-500" : "bg-brand-red"
          }`}
        >
          {auto.año}
        </div>

        {/* Miniaturas */}
        {!auto.vendido && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {auto.fotos.map((foto, i) => (
              <button
                key={i}
                onClick={() => setFotoActiva(i)}
                className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  fotoActiva === i
                    ? "border-white scale-110 shadow-lg"
                    : "border-white/40 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Ver foto ${i + 1}`}
              >
                <Image
                  src={foto}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Datos */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-1">
          {auto.marca}
        </p>
        <h3 className="text-xl font-black text-gray-900 mb-1">{auto.modelo}</h3>
        <p className="text-sm font-semibold text-gray-500 mb-4">{auto.version}</p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {[
            { label: "Año",         value: auto.año },
            { label: "Puertas",     value: auto.puertas },
            { label: "Transmisión", value: auto.transmision },
            { label: "Combustible", value: auto.combustible },
          ].map((spec) => (
            <div key={spec.label} className="bg-gray-50 rounded-lg px-3 py-2">
              <p className="text-xs text-gray-400 font-semibold">{spec.label}</p>
              <p className="text-sm font-bold text-gray-800">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Botón */}
        {auto.vendido ? (
          <div className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-400 font-bold text-sm py-3 px-4 rounded-xl cursor-not-allowed select-none">
            ✓ Este auto ya fue vendido
          </div>
        ) : (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all duration-150"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}

// ─── Sección principal ────────────────────────────────────────
export default function StockAutos() {
  return (
    <section id="stock" className="py-20 bg-gray-50" aria-labelledby="stock-title">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Stock disponible
          </span>
          <h2 id="stock-title" className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Autos en venta
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            También compramos el tuyo. Consultá sin compromiso y recibí una oferta en 24 hs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {AUTOS.map((auto) => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            ¿Tenés un auto para vender? Te compramos hoy.
          </p>
          <a
            href="#tasacion"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Quiero vender mi auto →
          </a>
        </div>
      </div>
    </section>
  );
}
