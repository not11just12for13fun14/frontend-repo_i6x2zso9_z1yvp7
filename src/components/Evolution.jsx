import React from 'react'

const years = [
  { year: '2022', img: 'https://placehold.co/300x500?text=2022', notes: 'Primera edición con etiqueta clásica.' },
  { year: '2023', img: 'https://placehold.co/300x500?text=2023', notes: 'Diseño refinado, tipografía más moderna.' },
  { year: '2024', img: 'https://placehold.co/300x500?text=2024', notes: 'Nueva botella esbelta y detalles en oro.' },
  { year: '2025', img: 'https://placehold.co/300x500?text=2025', notes: 'Edición actual, minimalista y elegante.' },
]

export default function Evolution({ t }) {
  return (
    <section id="evolution" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-8">{t.evolution.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {years.map((y) => (
            <div key={y.year} className="bg-white border border-neutral-200 rounded-lg p-4 text-center shadow-sm">
              <img src={y.img} alt={`Botella ${y.year}`} className="mx-auto h-56 object-contain" />
              <h3 className="mt-4 text-lg font-medium text-neutral-900">{y.year}</h3>
              <p className="text-neutral-600 text-sm">{y.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
