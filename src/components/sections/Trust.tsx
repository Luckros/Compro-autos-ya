export default function Trust() {
  const stats = [
    { value: "+500", label: "Autos comprados", sub: "en los últimos 3 años" },
    { value: "24 hs", label: "Tiempo de respuesta", sub: "promedio para cotizar" },
    { value: "100%", label: "Pago garantizado", sub: "transferencia o efectivo" },
    { value: "0$",   label: "Costo para vos", sub: "los trámites van por nuestra cuenta" },
  ];

  const reasons = [
    { icon: "🔒", title: "Operación 100% segura",   desc: "Trabajamos con escribanía certificada y contratos formales en cada operación." },
    { icon: "💸", title: "Mejor precio del mercado", desc: "Comparamos con los valores reales de Kavak, MercadoAutos e InfoAutos para ofrecerte lo justo." },
    { icon: "📄", title: "Nos ocupamos del papeleo", desc: "Transferencia, deudas de patente, informes de dominio. Todo queda a nuestro cargo." },
    { icon: "🚗", title: "Vamos donde estés",        desc: "No necesitás mover el auto. Coordinamos la visita en tu domicilio o trabajo en todo el AMBA." },
  ];

  return (
    <section id="confianza" className="py-20 bg-gray-50" aria-labelledby="trust-title">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-black text-brand-red mb-1">{s.value}</div>
              <div className="font-bold text-gray-900 text-sm mb-1">{s.label}</div>
              <div className="text-gray-400 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 id="trust-title" className="text-3xl sm:text-4xl font-black text-gray-900">
            Seriedad y transparencia en cada operación
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <div className="text-4xl flex-shrink-0">{r.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
