import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="text-center space-y-4">
      <h2 className="text-3xl font-bold">Let’s Connect</h2>
      <p className="text-muted-foreground">Hit me up on socials or drop an email.</p>
      <div className="flex justify-center gap-6 mt-4">
        <Button asChild variant="outline">
          <a href="https://github.com/tolibme" target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://www.linkedin.com/in/tolibjon-olimjonov/" target="_blank"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
        </Button>
        <Button asChild variant="outline">
          <a href="mailto:tolibjon0804@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email</a>
        </Button>
      </div>
    </section>
  )
}
