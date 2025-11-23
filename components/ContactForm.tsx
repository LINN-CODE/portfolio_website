'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
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
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to send message')
      setStatus('success')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setError(err?.message ?? 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <input
        name="name"
        placeholder="Your name"
        className="border rounded-xl px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        className="border rounded-xl px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <textarea
        name="message"
        placeholder="Enter a message"
        className="w-full min-h-[130px] rounded-xl border px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`rounded-xl px-6 py-2 font-medium transition w-fit border 
          ${status === 'loading' ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}
        `}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {/* SUCCESS MESSAGE */}
      {status === 'success' && (
        <p className="text-green-600 font-medium bg-green-100 px-4 py-2 rounded-xl">
          Your message has been sent successfully!
        </p>
      )}

      {/* ERROR MESSAGE */}
      {status === 'error' && (
        <p className="text-red-600 font-medium bg-red-100 px-4 py-2 rounded-xl">
          {error}
        </p>
      )}
    </form>
  )
}
