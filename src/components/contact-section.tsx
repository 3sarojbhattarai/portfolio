"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter-apple mb-8">Let's build something.</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-xl mx-auto">
          Currently available for new opportunities and collaborations. Get in touch via any of the platforms below.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Mail, label: "Email", href: "mailto:hello@saroj.me" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border/50 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground">
          <p>© 2026 Saroj Bhattarai. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}
