import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata = {
  title: "Experiments | Digital Lab",
  description: "Explore interactive experiments and projects from my dev lab.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-green-400 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">🧪 Experiments</h1>
        <p className="text-green-300 mt-2">Code. Test. Ship. Repeat.</p>
        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-8">
          Real-world applications and systems I’ve built — using tools like
          Flutter, Firebase, PHP, and more. These projects demonstrate my
          ability to solve real problems, design user-first experiences, and
          deliver production-ready code.
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
}
