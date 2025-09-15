import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    { title: "ScanDrip", desc: "Fashion + QR authentication platform." },
    { title: "AI SaaS", desc: "AI powered SaaS demo app." },
  ]

  return (
    <section id="projects" className="max-w-4xl w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>{p.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
