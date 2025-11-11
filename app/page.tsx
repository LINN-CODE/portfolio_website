export const dynamic = 'force-dynamic'
export const revalidate = 0
import ContactForm from '@/components/ContactForm'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="grid gap-16">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-gray-500">Computer Engineering • Singapore Polytechnic</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">LINN BHONE ENT— Aspiring System Engineer</h1>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            I’m a Computer Engineering student at Singapore Polytechnic, passionate about technology and systems design. I’m
            growing toward a System Engineer role, with hands‑on learning in AWS, DevOps practices, and modern
            web development.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border px-3 py-1">AWS (cloud fundamentals)</span>
            <span className="rounded-full border px-3 py-1">DevOps (CI/CD basics)</span>
            <span className="rounded-full border px-3 py-1">Web (React/Next.js)</span>
            <span className="rounded-full border px-3 py-1">IoT & Embedded</span>
          </div>
          <div className="mt-8 flex gap-4">
            <Link href="#experience" className="rounded-full border px-5 py-2">Experience</Link>
            <a href="#contact" className="rounded-full border px-5 py-2">Contact</a>
          </div>
        </div>
       
        <img src="/me.JPEG" alt="Portrait of Linn Bhone" className="w-full rounded-2xl object-cover shadow-xl" />
      </section>

      <section id="experience" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <article className="rounded-2xl border p-6 grid gap-3">
          <header className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold">Junior Application Engineer — Efunity Pte Ltd</h3>
              <p className="text-sm text-gray-500">Internship • Mar 2025 – Aug 2025 • Singapore (On‑site)</p>
            </div>
          </header>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Contributed to engineering solutions for energy efficiency and management. Assisted in design, integration,
            testing and deployment of monitoring & automation systems (SCADA/HMI, Energy Management Systems,
            Power Quality Monitoring). Prepared documentation and drawings, debugged hardware/software, and
            collaborated with cross‑functional teams to ensure successful commissioning.
          </p>
          <ul className="text-sm list-disc pl-5 grid gap-1">
            <li>SCADA/HMI configuration & graphical interface design</li>
            <li>Energy/Power Quality monitoring fundamentals</li>
            <li>Hardware–software integration for industrial monitoring</li>
            <li>Testing & commissioning; real‑time data acquisition & alert logic</li>
            <li>Project coordination, scheduling, and technical documentation</li>
            <li>Troubleshooting mindset; clear communication with engineers & clients</li>
          </ul>
        </article>
      </section>     
      <section id="contact" className="rounded-2xl border p-6 grid gap-4">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">Open to system engineering and full‑stack opportunities, internships, and collaborations.</p>
        <ContactForm />

        
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="rounded-xl border px-4 py-2" href="mailto:LINNENT.23@ICHAT.SP.EDU.SG">Email</a>
          <a className="rounded-xl border px-4 py-2" href="https://sg.linkedin.com/in/linn-bhone-ent-6bb7bb277" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-xl border px-4 py-2" href="https://github.com/LINN-CODE" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  )
}