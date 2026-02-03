import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Zap, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Web Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Custom web applications built with modern technologies, optimized for performance and scalability. Let's
              create something exceptional together.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription className="text-base">
                  Complete solutions from database to user interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  End-to-end development using modern frameworks like Next.js, React, Node.js, and cloud infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription className="text-base">
                  Lightning-fast loading times and smooth interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Code splitting, lazy loading, caching strategies, and CDN implementation for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription className="text-base">Beautiful experiences on every device</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Mobile-first approach ensuring your application looks and works perfectly on all screen sizes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <Card className="mb-16 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">What's Included</CardTitle>
              <CardDescription className="text-base">
                Comprehensive services to bring your vision to life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Custom Development</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Tailored solutions built specifically for your unique requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Modern Tech Stack</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        React, Next.js, TypeScript, and the latest web technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">API Integration</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Seamless connection with third-party services and platforms
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Database Design</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Efficient data modeling and optimization for scalability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Authentication & Security</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Secure user management and comprehensive data protection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Deployment Support</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Complete assistance getting your application live and running
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
              <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss your project and create a custom solution that exceeds your expectations
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Get in Touch
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
