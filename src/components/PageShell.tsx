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
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24">
      <header className="max-w-2xl space-y-4 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-black/60">{intro}</p>
      </header>
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">{children}</div>
    </main>
  )
}
