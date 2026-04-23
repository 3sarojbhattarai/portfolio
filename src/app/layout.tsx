import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saroj Bhattarai | Software Engineer",
  description: "Senior Software Engineer with 7+ years of experience in Python, JS, Go, and Rust. Expert in building scalable web applications and distributed systems.",
  keywords: ["Saroj Bhattarai", "Software Engineer", "Full Stack Developer", "Nepal", "Python", "JavaScript", "Go", "Rust", "AWS", "Kubernetes"],
  authors: [{ name: "Saroj Bhattarai" }],
  openGraph: {
    title: "Saroj Bhattarai",
    description: "Senior Software Engineer with 7+ years of experience. Expert in Python, JS, Go, and Rust.",
    url: "https://3saroj.com.np",
    siteName: "Saroj Bhattarai Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Saroj Bhattarai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saroj Bhattarai | Software Engineer",
    description: "Senior Software Engineer with 7+ years of experience in Python, JS, Go, and Rust.",
    images: ["/profile.jpeg"],
    creator: "@3sarojbhattarai",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}

