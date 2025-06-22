'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BootAnimation() {
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setBooted(true), 2500)
    return () => clearTimeout(timeout)
  }, [])

  if (booted) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-green-400 font-mono terminal-glow text-sm sm:text-base px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-md w-full space-y-2 leading-snug">
        <TerminalLine text="> Initializing Digital Lab Environment..." delay={0} />
        <TerminalLine text="> Loading modules [██▒▒▒▒▒▒▒▒]" delay={500} />
        <TerminalLine text="> Synthesizing interfaces..." delay={1000} />
      </div>
    </motion.div>
  )
}

function TerminalLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 0.4 }}
      className="whitespace-pre"
    >
      {text}
    </motion.p>
  )
}
