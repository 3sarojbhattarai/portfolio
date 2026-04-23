"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-semibold text-primary hover:text-accent transition-colors">Saroj Bhattarai</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/work"
              className={`text-sm font-medium transition-colors ${
                pathname === "/work" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Work
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services/web-development" className="cursor-pointer">
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/api-development" className="cursor-pointer">
                    API Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/consulting" className="cursor-pointer">
                    Technical Consulting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <Link
              href="/"
              className={`block py-2 text-sm font-medium ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/work"
              className={`block py-2 text-sm font-medium ${
                pathname === "/work" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <div className="py-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Services</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/web-development"
                  className="block py-1 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/api-development"
                  className="block py-1 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  API Development
                </Link>
                <Link
                  href="/services/consulting"
                  className="block py-1 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technical Consulting
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className={`block py-2 text-sm font-medium ${
                pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
