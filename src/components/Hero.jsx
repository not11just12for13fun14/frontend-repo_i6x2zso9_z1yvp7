import React from 'react'

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-[#F5EBDD]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2060&auto=format&fit=crop"
          alt="Albariño vineyards"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F5EBDD]/80 to-[#F5EBDD]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-serif font-semibold tracking-tight text-neutral-900">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed">
            {t.hero.tagline}
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#about" className="inline-flex items-center px-5 py-3 rounded-full bg-[#7A1C1C] text-white font-medium hover:bg-[#8D2222] transition-colors shadow-sm">
              {t.cta.learnMore}
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-neutral-300 text-neutral-900 font-medium hover:bg-white/60 transition-colors">
              {t.cta.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
