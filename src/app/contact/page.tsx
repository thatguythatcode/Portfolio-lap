"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate message sending delay
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-green-300 px-6 py-16 font-mono">
      <div className="max-w-2xl mx-auto space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-100">📬 Get in Touch</h1>
        <p className="text-green-400">
          Whether you want to collaborate, have a question, or just want to say hi —
          feel free to drop a message. I’ll get back as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-950/80 backdrop-blur-sm p-6 rounded-xl border border-green-700 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-green-400">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              className="w-full bg-transparent border border-green-700 px-3 py-2 rounded text-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-green-400">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="w-full bg-transparent border border-green-700 px-3 py-2 rounded text-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-green-400">
              Message
            </label>
            <textarea
              required
              id="message"
              rows={5}
              className="w-full bg-transparent border border-green-700 px-3 py-2 rounded text-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex items-center gap-2 bg-green-800/30 hover:bg-green-700/40 text-green-100 px-4 py-2 rounded transition-colors border border-green-600"
          >
            <Send className="w-4 h-4" />
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 mt-2">✅ Your message has been sent successfully!</p>
          )}
        </form>

        <footer className="pt-10 text-green-700 text-sm border-t border-green-800">
          <p>
            You can also reach out directly via{" "}
            <a
              href="mailto:oluwadamilare.alonge@gmail.com"
              className="underline hover:text-green-100"
            >
              email
            </a>{" "}
            or find me on{" "}
            <a
              href="https://github.com/Maphorbs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://linkedin.com/in/oluwadamilarealonge"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
              LinkedIn
            </a>.
          </p>
        </footer>
      </div>
    </main>
  );
}
