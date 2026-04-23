"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Nepal", href: "#nepal" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm tracking-tighter-apple">
          SAROJ
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu could go here, but keeping it minimal for now */}
          <span className="text-[12px] font-medium">Menu</span>
        </div>
      </div>
    </nav>
  )
}
