import { STEPS } from "@/lib/constants";

export default function Steps() {
  return (
    <section id="proceso" className="py-20 bg-white" aria-labelledby="steps-title">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Así funciona
          </span>
          <h2 id="steps-title" className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Vendé tu auto en 4 pasos simples
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Sin burocracia, sin perder tiempo. Del contacto al cobro en menos de 72 horas.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-100 z-0 -translate-y-1/2" />
              )}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red text-white font-black text-xl rounded-2xl mb-5 shadow-lg shadow-red-200">
                  {step.n}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
