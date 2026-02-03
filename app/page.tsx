import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Available for new projects</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                  Saroj
                  <br />
                  Bhattarai
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Terminal className="w-5 h-5 text-primary" />
                  <p className="text-xl font-medium">Software Engineer</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building accessible, pixel-perfect digital experiences for the web. Passionate about crafting elegant
                solutions to complex problems with modern technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Get in touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" size="lg">
                    View my work
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="px-3 py-1">
                  React
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Python
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <img
                  src="/software-engineer-headshot.png"
                  alt="Saroj Bhattarai"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <Code2 className="w-4 h-4" />
                <span>About me</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Crafting interfaces. Building polished software and web experiences.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software engineer with 5+ years of experience building web applications that solve
                real-world problems. I specialize in creating intuitive user experiences backed by robust engineering.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a Senior Software Engineer, I've led development of microservices architecture
                  serving 100K+ daily active users. Previously developed and maintained 15+ web applications across
                  various industries.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that understanding the technical foundations leads to more thoughtful designs. I focus on
                  performance, accessibility, and creating experiences that not only look great but are meticulously
                  built for scale.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me contributing to open source projects, writing technical articles,
                  or exploring the latest developments in AI and machine learning.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Daily Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
