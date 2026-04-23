import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Technical Consulting</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Strategic technical guidance to help your business make informed technology decisions and accelerate your
              development process.
            </p>
          </div>

          {/* Key Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Architecture Review</CardTitle>
                <CardDescription className="text-base">Evaluate and improve your system design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive analysis of your current architecture with actionable recommendations for scalability
                  and performance improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Team Training</CardTitle>
                <CardDescription className="text-base">Upskill your development team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Hands-on workshops and training sessions on modern development practices, frameworks, and cutting-edge
                  tools.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Technology Strategy</CardTitle>
                <CardDescription className="text-base">Plan your technical roadmap</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic planning for technology adoption, migration strategies, and long-term technical vision
                  alignment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Consulting Services */}
          <Card className="mb-16 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">Consulting Services</CardTitle>
              <CardDescription className="text-base">
                Expert guidance across your entire technology stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Code Reviews</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        In-depth analysis of code quality, maintainability, and best practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Performance Audits</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Identify bottlenecks and uncover optimization opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Migration Planning</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Strategic planning for technology migrations and system upgrades
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Security Assessment</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Thorough evaluation of security practices and potential vulnerabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Technical Documentation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Create clear, comprehensive system documentation for your team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Tech Stack Selection</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Choose the optimal tools and technologies for your specific needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground border-primary">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Technical Guidance?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Schedule a consultation to discuss your technical challenges, explore opportunities, and develop a
                winning strategy
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
