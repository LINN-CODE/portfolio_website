'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('success')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setError(err?.message ?? 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border p-4 grid gap-3 max-w-xl" id="contact">
      <h2 className="text-xl font-semibold">Contact me</h2>
      <input name="name" placeholder="Your name" className="border rounded-xl px-3 py-2 bg-transparent" required />
      <input name="email" type="email" placeholder="Your email" className="border rounded-xl px-3 py-2 bg-transparent" required />
      <textarea name="message" placeholder="Your message" rows={5} className="border rounded-xl px-3 py-2 bg-transparent" required />
      <button disabled={status==='loading'} className="rounded-xl px-4 py-2 border w-fit">
        {status==='loading' ? 'Sending…' : 'Send'}
      </button>
      {status==='success' && <p className="text-green-600">Thanks! I will get back to you soon.</p>}
      {status==='error' && <p className="text-red-600">{error}</p>}
    </form>
  )
}
