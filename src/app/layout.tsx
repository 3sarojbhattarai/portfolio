import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saroj Bhattarai",
  description: "Full-stack software engineer with 7+ years of experience in Python, JS, Go, and Rust.",
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

