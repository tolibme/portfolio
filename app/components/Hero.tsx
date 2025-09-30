"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Yo, I’m <span className="text-primary">Tolibjon Olimjonov</span>
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Full Stack Dev & Builder, creating sleek digital products from backend to frontend with modern tech stacks.
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="#projects">
          <Button>My Work</Button>
        </a>
        <a href="/contact">
          <Button variant="outline">Contact Me</Button>
        </a>
      </motion.div>
    </section>
  )
}
