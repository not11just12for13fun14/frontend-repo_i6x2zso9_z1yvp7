import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c76d9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518481852163-3b2dab9b46f4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1459539235056-8abe28eaa291?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery({ t }) {
  return (
    <section id="gallery" className="py-24 bg-[#F5EBDD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-8">{t.gallery.title}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i+1}`} className="w-full h-56 object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </section>
  )
}
