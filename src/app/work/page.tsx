import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Calendar, Briefcase } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Building</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Work & Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A comprehensive overview of my professional journey, technical expertise, and featured projects that
              showcase my commitment to quality and innovation.
            </p>
          </div>

          {/* Work Experience */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-primary">01</span>
              <span>Experience</span>
            </h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">Senior Software Engineer</CardTitle>
                      <CardDescription className="text-base font-medium">Tech Solutions Inc.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">2021 — Present</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-4">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Led development of microservices architecture serving 100K+ daily active users</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Implemented CI/CD pipelines reducing deployment time by 60%</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Mentored junior developers and conducted code reviews</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Architected and deployed scalable cloud infrastructure on AWS</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">Full Stack Developer</CardTitle>
                      <CardDescription className="text-base font-medium">Digital Innovations Ltd.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">2019 — 2021</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-4">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Developed and maintained 15+ web applications using modern JavaScript frameworks</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Collaborated with design team to implement responsive UI/UX</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Optimized database queries resulting in 40% performance improvement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Integrated third-party APIs and payment gateways</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redis</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">Junior Developer</CardTitle>
                      <CardDescription className="text-base font-medium">StartUp Ventures</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">2017 — 2019</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground mb-4">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Built responsive web pages and interactive features</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Fixed bugs and implemented feature requests</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Participated in agile development processes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span>Learned full-stack development practices</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">jQuery</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-primary">02</span>
              <span>Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/modern-ecommerce-dashboard.png"
                      alt="E-commerce Platform"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl">E-commerce Platform</CardTitle>
                    <div className="flex gap-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <CardDescription className="mb-4 leading-relaxed">
                    Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Stripe
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PostgreSQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/project2.png"
                      alt="Task Management App"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl">Task Management</CardTitle>
                    <div className="flex gap-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <CardDescription className="mb-4 leading-relaxed">
                    Collaborative project management tool with real-time updates and team collaboration features.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Socket.io
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src="/weather-app-interface.png"
                      alt="Weather Analytics Dashboard"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl">Weather Analytics</CardTitle>
                    <div className="flex gap-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <CardDescription className="mb-4 leading-relaxed">
                    Data visualization dashboard for weather patterns with interactive charts and predictive analytics.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Vue.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      D3.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      FastAPI
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-primary">03</span>
              <span>Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-l-4 border-primary pl-3">Frontend</h3>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    React
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Vue.js
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Tailwind CSS
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-l-4 border-primary pl-3">Backend</h3>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Express.js
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    FastAPI
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    GraphQL
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-l-4 border-primary pl-3">Database</h3>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Redis
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Supabase
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Prisma
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Tools & Cloud
                </h3>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Vercel
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start text-sm py-2">
                    CI/CD
                  </Badge>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
