import type React from "react"
import Image from "next/image"
import LinkCard from "../components/LinkCard"
import { SITE_URL } from "../lib/seo"
import { GitHubIcon, SubstackIcon, TwitterIcon } from "../components/icons"

const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "Go", "Rust"] },
  { title: "Frameworks", items: ["Flask", "FastAPI", "React"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { title: "Deployment", items: ["Docker", "Kubernetes", "Nginx", "AWS"] },
]

const channels = [
  { name: "Twitter / X", href: "https://twitter.com/3sarojbhattarai", icon: <TwitterIcon /> },
  { name: "GitHub", href: "https://github.com/3sarojbhattarai", icon: <GitHubIcon /> },
  { name: "Substack", href: "https://sarojbhattarai.substack.com/", icon: <SubstackIcon /> },
]

const products = [
  { name: "fileworks", href: "https://fileworks.saroj3.com.np/", label: "fileworks.saroj3.com.np", icon: "/products/fileworks.svg" },
  { name: "Nepal Income Tax Calculator", href: "https://taxcalculator.saroj3.com.np/", label: "taxcalculator.saroj3.com.np", icon: "/products/taxcalculator.svg" },
  { name: "Dev Tools", href: "https://devtools.saroj3.com.np/", label: "devtools.saroj3.com.np", icon: "/products/devtools.svg" },
]

const repos = [
  { name: "gantry", description: "A Docker tool for inspecting and managing a local Docker daemon." },
  { name: "treefile", description: "Generate copyable directory tree structures in multiple formats." },
  { name: "applytics", description: "A lightweight, open-source Google Analytics alternative with more features." },
  { name: "sarhash", description: "Bindings for sarhash-core, a modular Rust library for secure password operations." },
  { name: "sarhash-core", description: "A modular Rust library designed for secure password operations." },
]

function Section({ id, title, count, intro, grid = "sm:grid-cols-2 xl:grid-cols-3", children }: { id: string; title: string; count?: number; intro: string; grid?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-12 space-y-3">
      <h2 className="flex items-center gap-2 px-1 text-[10px] font-bold tracking-[0.2em] uppercase text-green-600">
        {title}
        {count !== undefined && <span className="rounded-full bg-green-600/10 px-1.5 py-0.5 tracking-normal">{count}</span>}
      </h2>
      <p className="px-1 text-sm text-black/50">{intro}</p>
      <div className={`grid grid-cols-1 gap-3 ${grid}`}>{children}</div>
    </section>
  )
}

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saroj Bhattarai",
    "jobTitle": "Software Engineer",
    "url": SITE_URL,
    "sameAs": channels.map((channel) => channel.href),
    "description": "Software Engineer with 8+ years of experience in Python, JS, Go, and Rust.",
    "knowsAbout": ["Python", "JavaScript", "Go", "Rust", "React", "AWS", "Kubernetes"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-12 lg:gap-16 px-6 md:px-10">
        {/* Left: home + contact, pinned while the right side scrolls */}
        <aside id="home" className="pt-14 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-green-600/20 ring-offset-4 ring-offset-white shadow-lg">
            <Image
              src="/profile.jpeg"
              alt="Saroj Bhattarai - Software Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Saroj <span className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 bg-clip-text text-transparent">Bhattarai</span>
            </h1>
            <p className="text-sm leading-relaxed text-black/60">
              I’m a software engineer based in Nepal with 8+ years of experience designing and
              shipping products for startups and enterprises. I specialize in turning complex
              requirements into simple, reliable systems, from backend services to production
              infrastructure.
            </p>
          </header>

          <div id="contact" className="scroll-mt-12 space-y-3">
            <p className="text-sm text-black/50">Hiring, or have a project in mind? I’d love to hear about it. Reach out on any of these and I’ll get back to you.</p>
            <div className="flex flex-wrap gap-2">
              {channels.map((channel) => (
                <a
                  key={channel.href}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-black/70 hover:border-green-600 hover:bg-green-600 hover:text-white transition-colors [&_svg]:h-4 [&_svg]:w-4"
                >
                  {channel.icon}
                  {channel.name}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Right: products, skills + open source */}
        <div className="pb-14 lg:py-24 space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 fill-mode-both">
          <Section id="products" title="Products" count={products.length} intro="Live products I’ve designed, built and maintain end to end.">
            {products.map((product) => <LinkCard key={product.href} {...product} />)}
          </Section>

          <Section id="skills" title="Skills" intro="Languages, frameworks and tools I use to build and ship." grid="">
            <div className="rounded-xl border border-black/5 bg-white/80 backdrop-blur shadow-sm divide-y divide-black/5">
              {skills.map((skill) => (
                <div key={skill.title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3">
                  <h3 className="sm:w-28 shrink-0 text-sm font-semibold tracking-tight">{skill.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-md border border-black/5 bg-black/[0.03] px-2 py-1 text-xs font-medium text-black/70 hover:border-green-600/30 hover:bg-green-50 hover:text-green-800 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="oss" title="Open Source" count={repos.length} intro="Projects I’ve created and maintain on GitHub. Contributions, issues and stars are always welcome.">
            {repos.map(({ name, description }) => (
              <LinkCard
                key={name}
                name={name}
                description={description}
                href={`https://github.com/3sarojbhattarai/${name}`}
                label={`github.com/3sarojbhattarai/${name}`}
                icon={<GitHubIcon />}
              />
            ))}
          </Section>
        </div>
      </main>
    </>
  )
}
