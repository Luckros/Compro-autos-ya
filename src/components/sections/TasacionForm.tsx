"use client";
import { useState } from "react";
import { WA_URL, SITE } from "@/lib/constants";

type FormData = {
  marca: string; modelo: string; anio: string;
  km: string; nombre: string; telefono: string;
};

const MARCAS = ["Toyota","Volkswagen","Ford","Chevrolet","Renault","Peugeot","Honda","Nissan","Fiat","Citroën","Hyundai","Kia","Audi","BMW","Mercedes-Benz","Jeep","Otra"];
const AÑOS  = Array.from({ length: 25 }, (_, i) => String(2024 - i));

export default function TasacionForm() {
  const [form, setForm] = useState<FormData>({ marca:"", modelo:"", anio:"", km:"", nombre:"", telefono:"" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.marca)   e.marca   = "Seleccioná la marca";
    if (!form.modelo || form.modelo.length < 2) e.modelo = "Ingresá el modelo";
    if (!form.anio)    e.anio    = "Seleccioná el año";
    if (!form.km)      e.km      = "Seleccioná el kilometraje";
    if (!form.nombre || form.nombre.length < 2) e.nombre = "Ingresá tu nombre";
    if (!form.telefono || form.telefono.replace(/\D/g,"").length < 8) e.telefono = "Teléfono inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(
      `Hola! Quiero tasar mi auto:\n🚗 ${form.marca} ${form.modelo} (${form.anio})\n📍 Km: ${form.km}\n👤 ${form.nombre}\n📞 ${form.telefono}`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field = (id: keyof FormData, label: string, node: React.ReactNode) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-bold text-gray-700 uppercase tracking-wide">
        {label} <span className="text-brand-red">*</span>
      </label>
      {node}
      {errors[id] && <span className="text-xs text-brand-red font-semibold">{errors[id]}</span>}
    </div>
  );

  const inputCls = (id: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red/30 ${
      errors[id] ? "border-brand-red bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  if (sent) return (
    <section id="tasacion" className="py-20 bg-brand-dark">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-white mb-4">¡Listo! Te abrimos WhatsApp</h2>
        <p className="text-gray-400 mb-8">Si no se abrió automáticamente, escribinos al {SITE.phoneLabel}</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">
          Abrir WhatsApp manualmente
        </a>
      </div>
    </section>
  );

  return (
    <section id="tasacion" className="py-20 bg-brand-dark" aria-labelledby="form-title">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left copy */}
        <div className="text-white">
          <span className="inline-block bg-brand-red/20 text-red-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Tasación gratuita
          </span>
          <h2 id="form-title" className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
            Completá los datos y<br />
            <span className="text-brand-red">cotizamos en 24 hs</span>
          </h2>
          <ul className="space-y-4">
            {[
              "Sin obligación de vender",
              "Cotización basada en precios reales de mercado",
              "Te contactamos por WhatsApp con la oferta",
              "Sin visitas previas necesarias",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit} noValidate
              className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/40">
          <p className="text-xl font-black text-gray-900 mb-6">Datos de tu vehículo</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {field("marca", "Marca",
              <select id="marca" value={form.marca} onChange={e => setForm({...form, marca:e.target.value})} className={inputCls("marca")}>
                <option value="">Seleccioná</option>
                {MARCAS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            )}
            {field("modelo", "Modelo",
              <input id="modelo" type="text" placeholder="ej. Corolla XEI" value={form.modelo}
                     onChange={e => setForm({...form, modelo:e.target.value})} className={inputCls("modelo")} />
            )}
            {field("anio", "Año",
              <select id="anio" value={form.anio} onChange={e => setForm({...form, anio:e.target.value})} className={inputCls("anio")}>
                <option value="">Seleccioná</option>
                {AÑOS.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            )}
            {field("km", "Kilometraje",
              <select id="km" value={form.km} onChange={e => setForm({...form, km:e.target.value})} className={inputCls("km")}>
                <option value="">Seleccioná</option>
                {["Hasta 30.000 km","30.000 – 70.000 km","70.000 – 120.000 km","120.000 – 180.000 km","Más de 180.000 km"].map(k =>
                  <option key={k} value={k}>{k}</option>)}
              </select>
            )}
          </div>

          <div className="border-t border-gray-100 my-6" />
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-5">Tus datos de contacto</p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {field("nombre", "Nombre",
              <input id="nombre" type="text" placeholder="Tu nombre" value={form.nombre}
                     onChange={e => setForm({...form, nombre:e.target.value})} className={inputCls("nombre")} />
            )}
            {field("telefono", "Teléfono / WhatsApp",
              <input id="telefono" type="tel" placeholder="11 2345-6789" value={form.telefono}
                     onChange={e => setForm({...form, telefono:e.target.value})} className={inputCls("telefono")} />
            )}
          </div>

          <button type="submit"
                  className="w-full bg-green-500 hover:bg-green-400 active:scale-95 text-white font-black text-lg py-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-3 shadow-lg shadow-green-500/30">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar y recibir cotización por WhatsApp
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            🔒 Tus datos son confidenciales. No los compartimos con terceros.
          </p>
        </form>
      </div>
    </section>
  );
}
