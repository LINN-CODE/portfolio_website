import { getSupabaseAdmin } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'

export default async function HomePage() {
  const supabase = getSupabaseAdmin()
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  return (
    <div className="grid gap-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Your Name</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            I build IoT, AI, and full-stack apps. Here are some of my recent projects and how to reach me.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80" alt="hero" className="rounded-2xl" />
      </section>

      <section className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(projects ?? []).map((p) => <ProjectCard key={p.id} project={p as any} />)}
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
