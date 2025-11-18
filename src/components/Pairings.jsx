import React from 'react'

export default function Pairings({ t }) {
  const items = t.pairings.items
  return (
    <section id="pairings" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-6">{t.pairings.title}</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <li key={i} className="bg-[#7A1C1C]/5 border border-[#7A1C1C]/20 rounded-lg p-5 text-neutral-800">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
