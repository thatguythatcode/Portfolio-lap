"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandPrompt() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  type Command = {
    action: () => void;
    description: string;
  };

  const commands: Record<string, Command> = {
    "explore-projects": {
      action: () => {
        setHistory((prev) => [...prev, "Opening projects..."]);
        setTimeout(() => router.push("/projects"), 800);
      },
      description: "Open the experiments/projects page",
    },
    "view-notes": {
      action: () => {
        setHistory((prev) => [...prev, "Loading lab notes..."]);
        setTimeout(() => router.push("/labnote"), 800);
      },
      description: "View technical lab notes",
    },
    about: {
      action: () => {
        setHistory((prev) => [...prev, "Opening about page..."]);
        setTimeout(() => router.push("/about"), 800);
      },
      description: "See about the lab author",
    },
    contact: {
      action: () => {
        setHistory((prev) => [...prev, "Opening contact page..."]);
        setTimeout(() => router.push("/contact"), 800);
      },
      description: "Contact the developer",
    },
    clear: {
      action: () => setHistory([]),
      description: "Clear the terminal",
    },
    help: {
      action: (): void =>
        setHistory((prev) => [
          ...prev,
          "Type `list-commands` to see all available commands.\nNeed help? Just ask.",
        ]),
      description: "Get general help",
    },
    "list-commands": {
      action: (): void =>
        setHistory((prev) => [
          ...prev,
          "Available commands:\n" +
            Object.entries(commands)
              .map(([cmd, val]) => `- ${cmd} — ${val.description}`)
              .join("\n"),
        ]),
      description: "List all available terminal commands",
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, `lab@portfolio:~$ ${trimmed}`]);

    if (commands[trimmed]) {
      commands[trimmed].action();
    } else {
      setHistory((prev) => [
        ...prev,
        `'${trimmed}' is not a recognized command. Type 'list-commands' to see options.`,
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCommand(input);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  return (
    <div className="w-full mt-6">
      <div
        ref={scrollRef}
        className="h-40 overflow-y-auto pr-2 mb-2 text-green-300 text-sm space-y-1 font-mono max-h-[180px] scrollbar-thin scrollbar-thumb-green-600"
      >
        {history.map((line, idx) => (
          <p key={idx} className="whitespace-pre-wrap">{line}</p>
        ))}
      </div>

      <div className="flex items-center">
        <span className="mr-2 text-green-300 font-bold">lab@portfolio:~$</span>
        <input
          type="text"
          placeholder="type a command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-green-100 w-full caret-green-400 animate-pulse"
          autoFocus
        />
      </div>
    </div>
  );
}
