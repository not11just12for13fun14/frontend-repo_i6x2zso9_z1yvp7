import React from 'react'

export default function Flavor({ t }) {
  return (
    <section id="flavor" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.flavor.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">{t.flavor.notesTitle}</h3>
            <p className="text-slate-300">{t.flavor.notes}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">{t.flavor.aromaTitle}</h3>
            <p className="text-slate-300">{t.flavor.aroma}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">{t.flavor.characterTitle}</h3>
            <p className="text-slate-300">{t.flavor.character}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
