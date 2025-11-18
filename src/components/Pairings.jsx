import React from 'react'

export default function Pairings({ t }) {
  const items = t.pairings.items
  return (
    <section id="pairings" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.pairings.title}</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <li key={i} className="bg-white/5 border border-white/10 rounded-lg p-5 text-slate-200">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
