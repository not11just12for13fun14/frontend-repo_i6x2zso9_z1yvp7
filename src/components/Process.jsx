import React from 'react'

const stepsDefault = [
  { title: 'Preparación del suelo', desc: 'Selección de parcelas, análisis y enriquecimiento del suelo atlántico.' },
  { title: 'Plantación', desc: 'Plantamos cepas de Albariño con orientación óptima al sol y al mar.' },
  { title: 'Crecimiento', desc: 'Cuidado manual de la vid, poda y control natural de plagas.' },
  { title: 'Vendimia', desc: 'Cosecha a mano en el punto exacto de maduración.' },
  { title: 'Elaboración y embotellado', desc: 'Fermentación controlada, afinado en bodega y embotellado con mimo.' },
]

export default function Process({ t }) {
  const steps = t.process.steps || stepsDefault
  return (
    <section id="process" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.process.title}</h2>
        <ol className="relative border-s border-white/10 ml-4 pl-6">
          {steps.map((s, i) => (
            <li key={i} className="mb-8">
              <span className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-emerald-500 ring-2 ring-emerald-300/40" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
