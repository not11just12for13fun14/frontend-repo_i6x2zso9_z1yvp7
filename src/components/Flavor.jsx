import React from 'react'

export default function Flavor({ t }) {
  return (
    <section id="flavor" className="py-24 bg-[#F5EBDD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-6">{t.flavor.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium mb-2">{t.flavor.notesTitle}</h3>
            <p className="text-neutral-700">{t.flavor.notes}</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium mb-2">{t.flavor.aromaTitle}</h3>
            <p className="text-neutral-700">{t.flavor.aroma}</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium mb-2">{t.flavor.characterTitle}</h3>
            <p className="text-neutral-700">{t.flavor.character}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
