import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Dynamic portfolio powered by Next.js + Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b sticky top-0 backdrop-blur bg-white/70 dark:bg-gray-950/70 z-10">
          <nav className="container max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
            <Link href="/" className="font-semibold">Linn Bhone Ent</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/projects">Projects</Link>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>
        <main className="container max-w-5xl mx-auto px-4 py-10">{children}</main>
        <footer className="container max-w-5xl mx-auto px-4 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Linn Bhone Ent
        </footer>
      </body>
    </html>
  )
}
