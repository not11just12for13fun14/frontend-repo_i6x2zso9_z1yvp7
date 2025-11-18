import React from 'react'

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-900 to-slate-950 opacity-95" />
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c76d9?q=80&w=2060&auto=format&fit=crop"
          alt="Galicia coastal vineyards"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 leading-relaxed">
            {t.hero.tagline}
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#about" className="inline-flex items-center px-5 py-3 rounded-md bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors shadow">
              {t.cta.learnMore}
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/20">
              {t.cta.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
