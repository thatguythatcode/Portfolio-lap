import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: string
  title: string
  tagline: string
  tools: string[]
  description: string
  github: string
  demo: string
  playground?: boolean
}

export default function ExperimentCard({ project }: { project: Project }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl shadow-lg border border-green-700 hover:scale-[1.01] transition-all">
      <h3 className="text-green-400 text-xl font-bold mb-1">{project.tagline}</h3>
      <p className="text-lg font-semibold text-white">{project.title}</p>
      <p className="text-zinc-300 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3 text-sm">
        {project.tools.map(tool => (
          <span key={tool} className="bg-green-900 text-green-300 px-2 py-1 rounded">
            {tool}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <a href={project.github} target="_blank" className="flex items-center gap-1 text-green-400 hover:underline">
          <Github size={16} />
          GitHub
        </a>
        <a href={project.demo} target="_blank" className="flex items-center gap-1 text-green-400 hover:underline">
          <ExternalLink size={16} />
          Demo
        </a>
        {project.playground && (
          <span className="ml-auto bg-yellow-500 text-black px-2 py-0.5 text-xs rounded">
            LIVE PLAYGROUND
          </span>
        )}
      </div>
    </div>
  )
}
