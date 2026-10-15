import Image from "next/image"
import { SITE_URL } from "../lib/seo"

const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "Go", "Rust"] },
  { title: "Frameworks", items: ["Flask", "FastAPI", "React"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { title: "Deployment", items: ["Docker", "Kubernetes", "Nginx", "AWS"] },
]

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saroj Bhattarai",
    "jobTitle": "Software Engineer",
    "url": SITE_URL,
    "sameAs": [
      "https://github.com/3sarojbhattarai",
      "https://twitter.com/3sarojbhattarai",
      "https://sarojbhattarai.substack.com/"
    ],
    "description": "Software Engineer with 8+ years of experience in Python, JS, Go, and Rust.",
    "knowsAbout": ["Python", "JavaScript", "Go", "Rust", "React", "AWS", "Kubernetes"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row px-6 md:px-12 pt-28 pb-16 gap-10 md:gap-20 items-center justify-center">
        {/* Profile Image */}
        <section className="relative shrink-0 animate-in fade-in zoom-in-95 duration-700">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-black/10 via-transparent to-black/5 blur-2xl" />
          <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden ring-1 ring-black/5 ring-offset-8 ring-offset-white shadow-2xl">
            <Image
              src="/profile.jpeg"
              alt="Saroj Bhattarai - Software Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Content */}
        <div className="max-w-xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          <header className="space-y-5">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Saroj Bhattarai
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-black/60">
              I’m a software engineer based in Nepal with 8+ years of experience designing and
              shipping products for startups and enterprises. I specialize in turning complex
              requirements into simple, reliable systems, from backend services to production
              infrastructure.
            </p>
          </header>

          <article className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div key={skill.title} className="space-y-2.5">
                <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">{skill.title}</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-md border border-black/5 bg-black/[0.03] px-2 py-1 text-xs font-medium text-black/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </main>
    </>
  )
}
