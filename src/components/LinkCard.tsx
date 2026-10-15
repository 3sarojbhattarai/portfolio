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
  const iconBox = typeof icon === "string"
    ? <img src={icon} alt="" className="h-12 w-12 rounded-xl shadow-lg shadow-black/20" />
    : (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-700 to-emerald-500 text-white shadow-lg shadow-green-700/25">
        {icon}
      </div>
    )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-6 rounded-2xl border border-black/5 bg-white/80 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:border-green-600/30 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        {iconBox}
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/5 text-black/30 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
          ↗
        </span>
      </div>
      <div className="space-y-1.5">
        <h2 className="text-lg font-semibold tracking-tight group-hover:text-green-700 transition-colors">{name}</h2>
        {description && <p className="text-sm text-black/60 leading-relaxed">{description}</p>}
        <p className="text-xs font-mono text-black/40 truncate">{label}</p>
      </div>
    </a>
  )
}
