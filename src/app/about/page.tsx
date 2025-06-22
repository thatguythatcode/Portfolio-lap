// import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-green-300 px-6 py-16 font-mono">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/profile.jpg" // Replace with your real image path
            alt="Oluwadamilare Alonge"
            width={150}
            height={150}
            className="rounded-full border border-green-700 shadow-lg"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-green-100">
              👋 Hey, I’m Oluwadamilare
            </h1>
            <p className="mt-4 text-green-400 leading-relaxed max-w-xl">
              A full-stack developer and product builder passionate about building usable, scalable, and efficient software — from dynamic UIs to robust backends and automation.
            </p>

            <a
              href="./Resume.pdf" 
              download
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 border border-green-700 text-green-300 hover:bg-green-800/20 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* What I Do */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-200">🧪 What I Do</h2>
          <ul className="list-disc list-inside text-green-400 space-y-2">
            <li>Cross-platform mobile apps with Flutter & React Native</li>
            <li>Full-stack web apps using Next.js, Node.js & Laravel</li>
            <li>Automation & internal tools with Python</li>
            <li>Mentorship, teaching, and curriculum design</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-200">💼 Experience Snapshot</h2>
          <div className="text-green-400 space-y-2">
            <p>
              <strong className="text-green-100">RN Connected</strong> — Software Engineer<br />
              Built a high-impact app adopted by 300+ users, improving UI and boosting performance by 30%.
            </p>
            <p>
              <strong className="text-green-100">Pencit Digital</strong> — Product Manager & Web Developer<br />
              Led the development of responsive web projects and reduced delivery costs by 15%.
            </p>
            <p>
              <strong className="text-green-100">Dthes-Tekh Institute</strong> — Lead Facilitator<br />
              Mentored 200+ students; designed technical curricula in web, mobile, and Python.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-green-200">🛠️ My Toolbox</h2>
          <p className="text-green-400">Languages, frameworks, and stacks I work with regularly:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-green-400">
            <span>JavaScript / TypeScript</span>
            <span>Next.js / React / React Native</span>
            <span>Flutter (Dart)</span>
            <span>Node.js / Express</span>
            <span>PHP / Laravel</span>
            <span>Python / Automation</span>
            <span>MySQL / MongoDB / Firebase</span>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-green-200">📫 Let’s Connect</h2>
          <p className="text-green-400">
            Whether you want to collaborate, chat tech, or just say hi —
            feel free to reach out via:
          </p>
          <ul className="text-green-400 list-inside list-disc space-y-1">
            <li>
              <a
                href="mailto:oluwadamilare.alonge@gmail.com"
                className="underline hover:text-green-100"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Maphorbs"
                className="underline hover:text-green-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oluwadamilarealonge"
                className="underline hover:text-green-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <footer className="pt-10 text-green-700 text-sm border-t border-green-800">
          <p>© {new Date().getFullYear()} Oluwadamilare Alonge — Built in public.</p>
        </footer>
      </div>
    </main>
  );
}
