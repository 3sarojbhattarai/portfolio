import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function ApiDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">API Development</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Robust, scalable APIs that power your applications and integrate seamlessly with other services. Built
              with security and performance in mind.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>RESTful APIs</CardTitle>
                <CardDescription className="text-base">Industry-standard API design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Well-structured REST APIs following best practices with proper versioning and comprehensive
                  documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>GraphQL Services</CardTitle>
                <CardDescription className="text-base">Flexible data querying</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Efficient GraphQL APIs that allow clients to request exactly the data they need, reducing
                  over-fetching.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>API Security</CardTitle>
                <CardDescription className="text-base">Enterprise-grade protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Authentication, authorization, rate limiting, and comprehensive security best practices
                  implementation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What You Get */}
          <Card className="mb-16 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">What You Get</CardTitle>
              <CardDescription className="text-base">Complete API solutions from design to deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">API Design</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Thoughtful endpoint structure and intuitive data modeling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Comprehensive Documentation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Interactive API docs with clear examples and use cases
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Testing Suite</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automated tests ensuring reliability and stability
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Rate Limiting</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Intelligent protection against abuse and overload
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Monitoring & Logging</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Real-time tracking of performance metrics and errors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Scalable Architecture</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Built to handle growth and increased demand
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
              <h2 className="text-3xl font-bold mb-4">Need an API Solution?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's build a powerful, secure API that meets your specific requirements and scales with your business
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Start Your Project
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
