import type React from "react"

export default function LinkCard({
  name,
  href,
  label,
  description,
  icon,
}: {
  name: string
  href: string
  label: string
  description?: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-6 rounded-2xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:border-black/15 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-black text-white shadow-lg shadow-black/20">
          {icon}
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 text-black/30 group-hover:bg-black group-hover:text-white group-hover:rotate-45 transition-all duration-300">
          ↗
        </span>
      </div>
      <div className="space-y-1.5">
        <h2 className="text-lg font-semibold tracking-tight">{name}</h2>
        {description && <p className="text-sm text-black/60 leading-relaxed">{description}</p>}
        <p className="text-xs font-mono text-black/40 truncate">{label}</p>
      </div>
    </a>
  )
}
