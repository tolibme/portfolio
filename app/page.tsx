import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/navbar"
import { ThemeToggle } from "./components/theme-toggle"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>

      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </main>
  )
}
<main className="flex flex-col items-center space-y-32 px-6 py-12">
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>