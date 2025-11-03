import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = String(body.name || '').slice(0, 200)
    const email = String(body.email || '').slice(0, 200)
    const message = String(body.message || '').slice(0, 5000)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    const { error } = await supabase.from('messages').insert({ name, email, message })
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return new NextResponse(err?.message ?? 'Server error', { status: 500 })
  }
}
