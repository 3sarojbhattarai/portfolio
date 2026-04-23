import Image from "next/image"

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saroj Bhattarai",
    "jobTitle": "Software Engineer",
    "url": "https://sarojbhattarai.me",
    "sameAs": [
      "https://github.com/3sarojbhattarai",
      "https://twitter.com/3sarojbhattarai",
      "https://sarojbhattarai.substack.com/"
    ],
    "description": "Software Engineer with 7+ years of experience in Python, JS, Go, and Rust.",
    "knowsAbout": ["Python", "JavaScript", "Go", "Rust", "React", "AWS", "Kubernetes"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="h-screen w-full flex flex-col md:flex-row bg-white text-black overflow-hidden p-6 md:p-12 gap-8 md:gap-16 items-center justify-center">
        {/* Profile Image Section */}
        <section className="relative w-48 h-48 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden border border-black/5 shadow-2xl">
          <Image
            src="/profile.jpeg"
            alt="Saroj Bhattarai - Software Engineer"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Content Section */}
        <div className="max-w-xl space-y-6 md:space-y-8">
          <header className="space-y-2">
            <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40">
              saroj bhattarai
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-black/80">
              Software Engineer with more than 7 years of professional experience. 
              Worked for an innovative startup to large enterprise products. 
              Familiar with both remote and in-office roles.
            </p>
          </header>

          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Programming Language</h2>
              <p className="text-sm font-medium">Python, JS, Go, Rust</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Framework</h2>
              <p className="text-sm font-medium">Flask, FastAPI, React</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Database</h2>
              <p className="text-sm font-medium">PostgreSQL, MongoDB</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Deployment</h2>
              <p className="text-sm font-medium">Docker, Kubernetes, Nginx, AWS</p>
            </div>
          </article>

          {/* Social Links */}
          <footer className="flex gap-6 pt-4">
            <a href="https://github.com/3sarojbhattarai" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="GitHub Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://twitter.com/3sarojbhattarai" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="Twitter Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://sarojbhattarai.substack.com/" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="Substack Blog">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4.5v15l-7-4.5-7 4.5v-15a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </a>
          </footer>
        </div>
      </main>
    </>
  )
}


