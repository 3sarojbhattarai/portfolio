"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/oss", label: "Open Source" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 inset-x-0 z-20 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 p-1.5">
        <Link
          href="/"
          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
            pathname === "/" ? "bg-green-600 text-white shadow-md shadow-green-700/25" : "text-black/50 hover:text-green-700"
          }`}
        >
          Home
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              pathname === link.href ? "bg-green-600 text-white shadow-md shadow-green-700/25" : "text-black/50 hover:text-green-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
