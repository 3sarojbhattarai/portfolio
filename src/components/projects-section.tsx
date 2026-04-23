"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Quantum Analytics",
    category: "Web Application",
    image: "/project_mockup.png",
    description: "A high-performance analytics dashboard for real-time data visualization and processing.",
  },
  {
    title: "Himalayan Connect",
    category: "Mobile App",
    image: "/project_mockup.png",
    description: "A secure, decentralized communication platform designed for remote mountainous regions.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-apple mb-16">Featured Work.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-background border border-border/50 mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute top-6 right-6 p-3 rounded-full bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-2 px-2">
                <p className="text-[12px] font-bold tracking-widest uppercase text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
