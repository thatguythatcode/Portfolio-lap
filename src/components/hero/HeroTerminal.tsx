"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import CommandPrompt from "../ui/CommandPrompt";

export default function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-zinc-950/90 backdrop-blur-sm text-green-400 p-6 sm:p-8 rounded-xl shadow-[0_0_10px_rgba(34,197,94,0.5)] w-full max-w-xl border border-green-700 font-mono terminal-glow"
    >
      <div className="flex items-center mb-4 text-lg font-bold text-green-300">
        <Terminal className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
        <span className="leading-none">O.A@portfolio:~$</span>
      </div>

      <div className="text-green-300 space-y-2 text-sm sm:text-base">
        <p>
          Welcome to <span className="text-green-100 font-semibold">O.A Digital</span> Lab.
        </p>
        <p>
          Try typing{" "}
          <code className="bg-green-800/40 px-1 py-0.5 rounded">explore-projects</code>,{" "}
          <code className="bg-green-800/40 px-1 py-0.5 rounded">view-notes</code>, or{" "}
          <code className="bg-green-800/40 px-1 py-0.5 rounded">list-commands</code> to see all commands.
        </p>
      </div>

      <CommandPrompt />
    </motion.div>
  );
}
