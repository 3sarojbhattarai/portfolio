import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Let's work together</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              If you would like to discuss a project or just say hi, I'm always down to chat.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base">saroj.bhattarai@email.com</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Send me an email anytime</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Phone</CardTitle>
                <CardDescription className="text-base">+1 (555) 123-4567</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Location</CardTitle>
                <CardDescription className="text-base">San Francisco, CA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Available for remote work</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" className="h-11" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full h-11">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect on Social Media</CardTitle>
                  <CardDescription>Let's stay connected on various platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">Check out my projects</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Let's connect professionally</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">Direct communication</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-primary text-primary-foreground border-primary">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                    I'm currently available for freelance projects and consulting opportunities.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
