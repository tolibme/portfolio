import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
  const projects = [
    { 
      title: "ScanDrip", 
      desc: "Fashion + QR authentication platform for verified clothing with custom user pages (Backend).", 
      link: "https://scandrip-api.tolib.me/swagger-ui/index.html" 
    },
    { 
      title: "AI SaaS", 
      desc: "AI-powered SaaS demo app showcasing automation and scalability.", 
      link: "https://github.com/tolibme" 
    },
    { 
      title: "HeatBox (Azure CI/CD)", 
      desc: "Deployment experiments with Azure VM, Docker, GitHub Actions, and SSL domain config.", 
      link: "https://github.com/tolibme/scandrip" 
    },
    { 
      title: "Medusa Storefront", 
      desc: "E-commerce storefront (shop.scandrips.com) using Medusa + Printify for print-on-demand fashion.", 
      link: "https://tolib.me" 
    },
    { 
      title: "Canva Integration", 
      desc: "Custom tee design feature inside ScanDrip using Canva Connect API.", 
      link: "https://github.com/tolibme" 
    },
  ]

  return (
    <section id="projects" className="max-w-4xl w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{p.desc}</p>
              <Link href={p.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
