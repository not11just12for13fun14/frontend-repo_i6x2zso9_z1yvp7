import React, { useEffect, useRef, useState } from 'react'

const languages = {
  es: { label: 'ES', name: 'Español' },
  en: { label: 'EN', name: 'English' },
  ru: { label: 'RU', name: 'Русский' },
  ar: { label: 'AR', name: 'العربية' },
}

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#7A1C1C] ring-2 ring-[#7A1C1C]/10 shadow-sm" />
          <span className="text-neutral-900 font-semibold tracking-wide group-hover:text-[#7A1C1C] transition-colors">
            {t.brand}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-neutral-700">
          <a href="#about" className="hover:text-[#7A1C1C] transition-colors">{t.nav.about}</a>
          <a href="#gallery" className="hover:text-[#7A1C1C] transition-colors">{t.nav.gallery}</a>
          <a href="#evolution" className="hover:text-[#7A1C1C] transition-colors">{t.nav.evolution}</a>
          <a href="#flavor" className="hover:text-[#7A1C1C] transition-colors">{t.nav.flavor}</a>
          <a href="#pairings" className="hover:text-[#7A1C1C] transition-colors">{t.nav.pairings}</a>
          <a href="#process" className="hover:text-[#7A1C1C] transition-colors">{t.nav.process}</a>
          <a href="#contact" className="hover:text-[#7A1C1C] transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 px-2.5 py-1.5 text-sm rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Language selector"
          >
            <span className="font-medium">{languages[lang].label}</span>
            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.105l3.71-3.874a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/></svg>
          </button>
          {open && (
            <ul className="absolute right-0 mt-2 w-36 rounded-md border border-neutral-200 bg-white shadow-lg overflow-hidden" role="listbox">
              {Object.entries(languages).map(([code, meta]) => (
                <li key={code}>
                  <button
                    onClick={() => { setLang(code); setOpen(false) }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 ${lang === code ? 'text-[#7A1C1C] font-medium' : 'text-neutral-800'}`}
                    role="option"
                    aria-selected={lang === code}
                  >
                    {meta.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
