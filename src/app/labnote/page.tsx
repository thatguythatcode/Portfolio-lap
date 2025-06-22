import { getAllNotes } from "@/lib/mdx";
import Link from "next/link";
import PageTitle from "@/components/shared/PageTitle";
import { FlaskConical } from "lucide-react"; // Optional icon library (lucide-react)

export default function LabnotePage() {
  const notes = getAllNotes();

  return (
    <main className="min-h-screen bg-black text-green-300 px-6 py-12 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <PageTitle
          title="🧪 Lab Notes"
          subtitle="A living archive of experiments, errors, and epiphanies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/labnote/${note.slug}`}
              className="group border border-green-800 hover:border-green-400 hover:shadow-md hover:shadow-green-400/10 rounded-xl p-6 transition-all duration-300 bg-gradient-to-b from-green-900/10 to-transparent"
            >
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-5 h-5 text-green-400 group-hover:rotate-6 transition-transform" />
                <h2 className="text-lg font-semibold text-green-100 group-hover:text-green-200">
                  {note.meta.title}
                </h2>
              </div>
              <p className="text-green-400 text-sm leading-relaxed">
                {note.meta.excerpt}
              </p>
              <p className="text-green-600 text-xs mt-4 italic">
                {new Date(note.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
