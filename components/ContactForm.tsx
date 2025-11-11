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
    <form
  onSubmit={async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    alert(res.ok ? 'Message sent!' : 'Failed to send')
    form.reset()
  }}
  className="grid gap-3 max-w-xl"
>
  <input
    name="name"
    placeholder="Your name"
    className="border rounded-xl px-3 py-2 bg-transparent"
    required
  />
  <input
    name="email"
    type="email"
    placeholder="Your email"
    className="border rounded-xl px-3 py-2 bg-transparent"
    required
  />
  <textarea
    name="message"
    placeholder="Enter a message"
    className="w-full min-h-[120px] rounded-xl border px-3 py-2 bg-transparent"
    required
  />
  <button
    type="submit"
    className="rounded-xl border px-6 py-2 font-medium hover:bg-blue-500 hover:text-white transition w-fit"
  >
    Send Message
  </button>
</form>

  )
}
