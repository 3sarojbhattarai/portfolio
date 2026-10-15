import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar"
import { SITE_NAME, SITE_URL, pageMetadata } from "../lib/seo"
import "./globals.css"

const homeTitle = "Saroj Bhattarai | Software Engineer"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: homeTitle,
    description: "Senior Software Engineer with 8+ years of experience in Python, JS, Go, and Rust. Expert in building scalable web applications and distributed systems.",
    path: "/",
  }),
  title: { default: homeTitle, template: `%s | ${SITE_NAME}` },
  keywords: ["Saroj Bhattarai", "Software Engineer", "Full Stack Developer", "Nepal", "Python", "JavaScript", "Go", "Rust", "AWS", "Kubernetes"],
  authors: [{ name: "Saroj Bhattarai" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div aria-hidden className="bg-grid pointer-events-none fixed inset-0 -z-10" />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

