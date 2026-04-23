"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function NepalSection() {
  return (
    <section id="nepal" className="relative py-32 px-6 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/nepal_landscape_bw.png"
          alt="Himalayan mountains in black and white"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter-apple mb-8">
            Engineered in the Himalayas.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            I bring a unique perspective from the heart of Nepal to the global tech landscape, merging traditional resilience with modern innovation.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium tracking-tight">Proudly Nepal Based</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
