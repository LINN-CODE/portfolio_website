import Link from 'next/link'
export type Project = {
  id: string
  title: string
  description: string | null
  url: string | null
  image_url: string | null
  tags: string[] | null
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-md transition">
      {project.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-3" />
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {(project.tags ?? []).map((t) => (
          <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
        ))}
      </div>
      {project.url && (
        <Link href={project.url} className="inline-block mt-4 text-sm underline">View project →</Link>
      )}
    </article>
  )
}
