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
    <section id="process" className="py-24 bg-[#F5EBDD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-10">{t.process.title}</h2>
        <ol className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7A1C1C] text-white font-medium">{i+1}</span>
              </div>
              <h3 className="text-neutral-900 font-medium">{s.title}</h3>
              <p className="text-neutral-700 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
