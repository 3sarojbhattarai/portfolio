"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovators Nepal",
    period: "2022 — Present",
    description: "Leading development of scalable microservices and high-performance web applications. Mentoring junior developers and architecting complex systems.",
  },
  {
    role: "Full Stack Developer",
    company: "Kathmandu Digital",
    period: "2020 — 2022",
    description: "Built and maintained multiple client projects using React, Next.js, and Node.js. Optimized frontend performance and implemented responsive designs.",
  },
  {
    role: "Junior Web Developer",
    company: "Everest Soft",
    period: "2018 — 2020",
    description: "Started my journey by developing interactive user interfaces and contributing to open-source projects.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-apple mb-16">Work Experience.</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-[1fr_2fr] gap-4 pb-12 border-b border-border/50 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
