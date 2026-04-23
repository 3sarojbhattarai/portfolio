import Image from "next/image"

export default function PortfolioPage() {
  return (
    <main className="h-screen w-full flex flex-col md:flex-row bg-white text-black overflow-hidden p-6 md:p-12 gap-8 md:gap-16 items-center justify-center">
      {/* Profile Image Section */}
      <div className="relative w-48 h-48 md:w-96 md:h-96 shrink-0 rounded-2xl overflow-hidden border border-black/5 shadow-2xl">
        <Image
          src="/profile.jpg"
          alt="Saroj Bhattarai"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-xl space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40">
            saroj
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-black/80">
            Software Engineer with more than 7 years of professional experience. 
            Worked for an innovative startup to large enterprise products. 
            Familiar with both remote and in-office roles. Comfortable with the following:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Programming Language</h3>
            <p className="text-sm font-medium">Python, JS, Go, Rust</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Framework</h3>
            <p className="text-sm font-medium">Flask, FastAPI, React</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Database</h3>
            <p className="text-sm font-medium">PostgreSQL, MongoDB</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/30">Deployment</h3>
            <p className="text-sm font-medium">Docker, Kubernetes, Nginx, AWS, Bash Scripting</p>
          </div>
        </div>
      </div>
    </main>
  )
}
