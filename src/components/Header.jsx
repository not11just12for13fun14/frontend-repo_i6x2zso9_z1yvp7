import React from 'react'

const languages = {
  es: { label: 'ES', name: 'Español' },
  en: { label: 'EN', name: 'English' },
  ru: { label: 'RU', name: 'Русский' },
  ar: { label: 'AR', name: 'العربية' },
}

export default function Header({ lang, setLang, t }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 ring-2 ring-white/20 shadow-md" />
          <span className="text-slate-100 font-semibold tracking-tight group-hover:text-white transition-colors">
            {t.brand}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#gallery" className="hover:text-white transition-colors">{t.nav.gallery}</a>
          <a href="#evolution" className="hover:text-white transition-colors">{t.nav.evolution}</a>
          <a href="#flavor" className="hover:text-white transition-colors">{t.nav.flavor}</a>
          <a href="#pairings" className="hover:text-white transition-colors">{t.nav.pairings}</a>
          <a href="#process" className="hover:text-white transition-colors">{t.nav.process}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          {Object.entries(languages).map(([code, meta]) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-2.5 py-1.5 text-sm rounded-md border transition-all ${
                lang === code
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'bg-white/0 border-white/10 text-slate-200 hover:bg-white/10'
              }`}
              aria-label={meta.name}
            >
              {meta.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
