import type React from "react"

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
}) {
  // Highlight the last word of the title in the brand green.
  const split = title.lastIndexOf(" ")
  const lead = title.slice(0, split + 1)
  const accent = title.slice(split + 1)

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24">
      <header className="max-w-2xl space-y-4 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-600">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {lead}<span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 bg-clip-text text-transparent">{accent}</span>
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-black/60">{intro}</p>
      </header>
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">{children}</div>
    </main>
  )
}
