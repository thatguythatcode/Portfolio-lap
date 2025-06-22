import projects from "@/content/projects.json"
import ExperimentCard from "./ExperimentCard"

export default function ProjectGrid() {
  return (
    <section className="p-10 sm:p-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map(project => (
        <ExperimentCard key={project.id} project={project} />
      ))}
    </section>
  );
}

