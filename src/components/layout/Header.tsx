"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/projects", label: "Experiments" },
    { href: "/labnote", label: "Lab Notes" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="border-b border-green-700 bg-black text-green-300 font-mono px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-green-300 text-lg font-bold hover:text-green-100 transition-colors">
          💻 O.A Digital Lab
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-green-100 transition-colors ${
                isActive(href) ? "text-green-100 underline underline-offset-4" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-300 hover:text-green-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-2 rounded hover:bg-green-900/10 transition-colors ${
                isActive(href) ? "bg-green-900/20 text-green-100 font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)} // close on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
