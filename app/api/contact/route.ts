import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = String(body.name || '').slice(0, 200)
    const email = String(body.email || '').slice(0, 200)
    const message = String(body.message || '').slice(0, 5000)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
    from: process.env.RESEND_FROM!,        // e.g., notifications@yourdomain.com
    to: process.env.ALERT_TO!,             // your inbox
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('messages').insert({ name, email, message })
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return new NextResponse(err?.message ?? 'Server error', { status: 500 })
  }
}
