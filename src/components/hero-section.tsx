"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter-apple mb-4">
          Software Engineer.
          <br />
          <span className="text-muted-foreground">Based in Nepal.</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
          Crafting high-performance digital experiences with a focus on minimalism, precision, and global impact.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-border/50"
      >
        <Image
          src="/hero_abstract_nepal.png"
          alt="Abstract tech mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </motion.div>
    </section>
  )
}
