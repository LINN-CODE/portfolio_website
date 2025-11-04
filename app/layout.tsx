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
          <nav className="container flex items-center justify-between h-14">
            <Link href="/" className="font-semibold">MyPortfolio</Link>
            <div className="flex gap-6 text-sm">
              <Link href="">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="container py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Linn Bhone
        </footer>
      </body>
    </html>
  )
}
