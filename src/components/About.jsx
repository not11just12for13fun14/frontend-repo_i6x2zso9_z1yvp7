import React from 'react'

export default function About({ t }) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
            <p className="text-slate-300 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-slate-300 leading-relaxed mb-4">{t.about.p2}</p>
            <p className="text-slate-300 leading-relaxed">{t.about.p3}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg shadow-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=2060&auto=format&fit=crop" alt="Vineyard" />
            <img className="rounded-lg shadow-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1515778767554-42d4b373f2b3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmFwZXN8ZW58MHwwfHx8MTc2MzQ1MjM4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Grapes" />
            <img className="rounded-lg shadow-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2060&auto=format&fit=crop" alt="Cellar" />
            <img className="rounded-lg shadow-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1529060532150-a0c935a6d6e5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXJyZWxzfGVufDB8MHx8fDE3NjM0NTIzODJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Barrels" />
          </div>
        </div>
      </div>
    </section>
  )
}
