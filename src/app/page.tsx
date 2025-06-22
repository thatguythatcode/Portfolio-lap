import HeroTerminal from "@/components/hero/HeroTerminal"
import BootAnimation from "@/components/hero/BootAnimation"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center p-6 font-mono">
      <BootAnimation />
      <HeroTerminal />
    </main>
  )
}
