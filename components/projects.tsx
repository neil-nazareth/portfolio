import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI & Covid Research Project",
      description:
        "Developed an AI-driven expert system using machine learning and case-based reasoning to aid in pandemic decision-making. Integrated real-time data to generate policy recommendations and enhance public health interventions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Machine Learning", "Case-based Reasoning", "Real-time Data"],
      duration: "10/2022 – 06/2023",
      githubUrl: "https://github.com/neil-nazareth",
    },
    {
      title: "Chemical Trade Data Analytics Platform",
      description:
        "Built comprehensive analytics platform for chemical trade data analysis, featuring automated reporting workflows and interactive dashboards for pricing strategy optimization.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Looker", "PostgreSQL", "Python", "Statistical Analysis"],
      duration: "2023 - 2025",
      githubUrl: "https://github.com/neil-nazareth",
    },
    {
      title: "Retail Performance Dashboard Suite",
      description:
        "Designed and deployed interactive dashboards tracking product and store-level performance for multiple retail clients, improving decision-making efficiency by 20%.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Power BI", "Tableau", "PostgreSQL", "ETL Pipelines"],
      duration: "2019 - 2021",
      githubUrl: "https://github.com/neil-nazareth",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">Duration: {project.duration}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
