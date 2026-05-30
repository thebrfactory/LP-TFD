'use client'

import { useState } from 'react'

const TARJA = "M563.32,298.4l-.13-.58-.63-1.98.21-.59c.21-.2.42-.59.42-.79l.2-1.25-.2-.86-.23-.71c-.35-.62-1.09-1.2-2.72-1.43-.42-.1-.84-.1-1.26-.1l-1.05-.1c-1.05-.1-1.47-.1-2.52-.1h-2.73l-2.94.1-4.41.1-3.15-.1h-4.83l-2.1.1-5.66-.2h-2.31l-1.16.04c-.62-.04-1.06-.04-1.86-.04h-2.73l-2.94.1-4.41.1-3.15-.1h-3.7l-1.68-.2c-.63-.1-1.68,0-2.31,0h-3.36l-2.31.1h-1.54l-5.25.2-2.73.2-4.83-.1-1.89.1-5.25-.3-1.68-.2c-.63-.1-1.68,0-2.31,0h-3.36l-2.31.1-4.62.3-2.35.18-.45-.02c-.25-.07-.51-.12-.82-.17-.42-.1-.84-.1-1.26-.1l-1.05-.1c-1.05-.1-1.47-.1-2.52-.1h-2.73l-2.94.1-4.41.1-3.15-.1h-4.83l-2.1.1-1.91-.07-.69-.03h-.24l-2.82-.1h-2.31l-1.16.04c-.31-.02-.59-.03-.87-.04h-.15s-.05,0-.05,0c-.23,0-.47,0-.78,0h-2.73l-2.94.1-4.41.1-3.15-.1h-3.7l-1.68-.2c-.63-.1-1.68,0-2.31,0h-3.36l-2.31.1h-1.54l-1.21.05-.97-.05-5.04.3c-.34.02-.7.05-1.06.09l-4.52-.09-1.89.1-5.25-.3-1.68-.2c-.63-.1-1.68,0-2.31,0h-3.36l-2.31.1-4.62.3-2.35.18-4.71-.18h-2.1l-4.2-.2c-.84,0-1.26.1-2.1.1h-.63l-2.86.24-3,.06-1.9-.19h-.64c-.32-.05-.68-.05-1.03-.03l-3.57-.07-2.1-.1h-5.46l-2.1-.1-3.48.2-2.26-.11c-.84,0-1.26.1-2.1.1h-.63l-4.83.4-2.94-.3-5.25-.1-2.1-.1h-5.46l-2.1-.1-5.04.3c-1.47.1-3.15.3-4.61,1.09-.36.23-.64.45-.83.68l.19,1.06-.21.99-.21,1.58.21.89v.87l.21,1.15-.21.99-.21,1.58.21.89v1.21c.11.12.24.23.42.34,1.26.79,3.57,1.58,3.57,1.58l5.67.1,2.52.1,5.46.1,2.31-.3h5.88l1.89-.3,5.25.2,1.48-.16c.41.15.69.25.69.25l5.67.1,2.52.1,5.46.1,1.37-.18c1.18.07,2.33.05,3.38-.02l.95-.1h2.49l1.24-.19,4.77.19,1.89.2c.42,0,1.05.1,1.47.1l4.62.1,2.31-.2,5.88-.1,5.46.3h2.52c.42,0,1.26-.1,1.68-.1l3.99-.3h1.33l1.89.2c.42,0,1.05.1,1.47.1l4.62.1,2.31-.2,1.43-.02,1.23.02h2.1l1.38-.09,5.2.28h2.52c.42,0,1.26-.1,1.68-.1l3.99-.3h2.52l3.87.09h.05c1.05.21,2.52.21,3.57.21h2.31l1.47.1c1.26.1,1.89.2,3.15.1l2.94-.1h2.52c.67.05,1.28-.02,1.84-.15l2.56.05,1.37-.18c1.18.07,2.33.05,3.38-.02l.95-.1h2.49l.63-.1h.72l1.26.2c1.05.2,2.52.2,3.57.2h2.31l1.47.1c1.26.1,1.89.2,3.15.1l2.94-.1h2.52c.88.07,1.66-.06,2.34-.28l1.28-.02,5.46.3h2.52c.42,0,1.26-.1,1.68-.1l3.99-.3h1.33l1.89.2c.42,0,1.05.1,1.47.1l4.62.1,2.31-.2,1.43-.02,1.22.02h2.1l1.38-.09,5.2.28h2.52c.42,0,1.26-.1,1.68-.1l3.99-.3h2.52l3.87.09h.05c1.05.21,2.52.21,3.57.21h2.31l1.47.1c1.26.1,1.89.2,3.15.1l2.94-.1h2.52c1.03.08,1.92-.11,2.66-.4h.14l4.83-.1h6.3l1.26.2c1.05.2,2.52.2,3.57.2h2.31l1.47.1c1.26.1,1.89.2,3.15.1l2.94-.1h2.52c1.26.1,2.31-.2,3.15-.59.63-.4,1.05-1.09.84-1.88l-.42-2.37.42-.89.35-1.36Z"

type FormState  = { name: string; email: string }
type FormErrors = { name?: string; email?: string; server?: string }

function TarjaSvg({ fill, stroke = 'none' }: { fill: string; stroke?: string }) {
  return (
    <svg
      viewBox="275 284 292 30"
      preserveAspectRatio="none"
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    >
      <path
        d={TARJA}
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export default function WaitlistForm() {
  const [form, setForm]           = useState<FormState>({ name: '', email: '' })
  const [errors, setErrors]       = useState<FormErrors>({})
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused]     = useState<'name' | 'email' | null>(null)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim())                                    e.name  = 'Por favor, insira seu nome.'
    if (!form.email.trim())                                   e.email = 'Por favor, insira seu e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido.'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    try {
      const res  = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else setErrors({ server: data.message || 'Algo deu errado. Tente novamente.' })
    } catch {
      setErrors({ server: 'Sem conexão. Tente novamente em instantes.' })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4 anim-fade-up">
        <p
          className="text-2xl font-black tracking-tight headline-glow"
          style={{ letterSpacing: '-0.02em' }}
        >
          Você está dentro.
        </p>
        <p className="mt-3 text-sm font-light" style={{ color: '#CC2020', lineHeight: 1.6 }}>
          Fique de olho no seu e-mail.<br />Em breve, tudo fará sentido.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-[12px]">

      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <div className="tarja-field">
          <TarjaSvg
            fill={loading ? '#030000' : '#0a0000'}
            stroke={errors.name ? '#FF4444' : focused === 'name' ? '#CC2020' : '#2a1212'}
          />
          <input
            type="text"
            id="waitlist-name"
            aria-label="Seu nome"
            placeholder="amor, fala seu nome?"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className="tarja-input font-brand"
            autoComplete="name"
            disabled={loading}
          />
        </div>
        {errors.name && (
          <span className="text-xs font-light text-brand-error pl-1">{errors.name}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <div className="tarja-field">
          <TarjaSvg
            fill={loading ? '#030000' : '#0a0000'}
            stroke={errors.email ? '#FF4444' : focused === 'email' ? '#CC2020' : '#2a1212'}
          />
          <input
            type="email"
            id="waitlist-email"
            aria-label="Seu e-mail"
            placeholder="vida, fala seu e-mail?"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            className="tarja-input font-brand"
            autoComplete="email"
            inputMode="email"
            disabled={loading}
          />
        </div>
        {errors.email && (
          <span className="text-xs font-light text-brand-error pl-1">{errors.email}</span>
        )}
      </div>

      {/* Server error */}
      {errors.server && (
        <span className="text-xs font-light text-brand-error text-center">{errors.server}</span>
      )}

      {/* CTA */}
      <div
        className={`tarja-field${!loading ? ' tarja-btn-glow' : ''}`}
      >
        <TarjaSvg fill={loading ? '#8B1515' : '#CC2020'} />
        <button
          type="submit"
          disabled={loading}
          className="font-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            color: 'white',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            opacity: loading ? 0.6 : 1,
            transition: 'opacity 0.2s',
            zIndex: 1,
          }}
        >
          {loading ? 'aguarde...' : 'cadastrar'}
        </button>
      </div>

      {/* Who is MELFIORE */}
      <a
        href="https://instagram.com/thefioredaily"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center block"
        style={{
          color: '#FFD700',
          fontSize: '13px',
          fontWeight: 200,
          letterSpacing: '0.10em',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          textShadow: '0 0 12px rgba(255,215,0,0.6)',
        }}
      >
        quem é MELFIORE?
      </a>

      {/* Microcopy */}
      <p
        className="text-center mt-1"
        style={{ color: '#7A4848', fontSize: '13px', fontWeight: 200, letterSpacing: '0.06em', lineHeight: 1.75 }}
      >
        seus dados são criptografados e protegidos.<br />
        no spam, ever.
      </p>
    </form>
  )
}
