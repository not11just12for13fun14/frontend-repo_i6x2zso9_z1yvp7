import React, { useState } from 'react'

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return t.contact.errors.name
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return t.contact.errors.email
    if (form.message.trim().length < 10) return t.contact.errors.message
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus({ type: 'error', message: err })
      return
    }
    try {
      const body = {
        to: 'info@paramodelrio.es',
        name: form.name,
        email: form.email,
        message: form.message,
      }
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus({ type: 'success', message: t.contact.success })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: t.contact.fail })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 mb-6">{t.contact.title}</h2>
        <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-xl p-6 space-y-4 shadow-sm">
          <div>
            <label className="block text-neutral-800 text-sm mb-1">{t.contact.name}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-neutral-300 text-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/40"
              placeholder={t.contact.namePH}
            />
          </div>
          <div>
            <label className="block text-neutral-800 text-sm mb-1">{t.contact.email}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-neutral-300 text-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/40"
              placeholder={t.contact.emailPH}
            />
          </div>
          <div>
            <label className="block text-neutral-800 text-sm mb-1">{t.contact.message}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full rounded-md bg-white border border-neutral-300 text-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/40"
              placeholder={t.contact.messagePH}
            />
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-3 rounded-full bg-[#7A1C1C] text-white font-medium hover:bg-[#8D2222] transition-colors">
            {t.contact.submit}
          </button>
          {status && (
            <p className={`${status.type === 'error' ? 'text-rose-600' : 'text-emerald-600'} text-sm`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
