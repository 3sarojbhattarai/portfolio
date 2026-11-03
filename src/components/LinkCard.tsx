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
    ? <img src={icon} alt="" className="h-9 w-9 rounded-lg shadow-sm shadow-black/10" />
    : (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg [&_svg]:h-4 [&_svg]:w-4 bg-black/[0.04] text-black/60 group-hover:bg-green-600 group-hover:text-white transition-colors">
        {icon}
      </div>
    )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-black/5 bg-white/80 backdrop-blur p-4 shadow-sm hover:-translate-y-0.5 hover:border-green-600/30 hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        {iconBox}
        <span className="text-black/20 group-hover:text-green-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          ↗
        </span>
      </div>
      <div className="space-y-0.5">
        <h3 className="text-sm font-semibold tracking-tight group-hover:text-green-700 transition-colors">{name}</h3>
        {description && <p className="text-xs text-black/50 leading-relaxed">{description}</p>}
        <p className="text-[11px] font-mono text-black/35 truncate">{label}</p>
      </div>
    </a>
  )
}
