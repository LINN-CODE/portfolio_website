import { getSupabaseAdmin } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
  // Debug log: will print in the terminal running `npm run dev`
  console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

  const supabase = getSupabaseAdmin()
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <pre className="text-red-600">Error: {error.message}</pre>
  }
  if (!projects || projects.length === 0) {
    return <p>No projects found. (Check Supabase seed + ENV vars.)</p>
  }

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">All Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p: any) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
