import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Chemondis",
      position: "Data Analyst Work Student",
      location: "Cologne, Germany",
      duration: "04/2023 – 02/2025",
      website: "https://chemondis.com",
      achievements: [
        "Automated reporting workflows using Looker, Postgres, and Python, reducing reporting time by 10%",
        "Created interactive dashboards supporting chemical pricing strategy development",
        "Developed pricing index visualizations enabling 5% improvement in pricing accuracy",
        "Identified market trends and seasonal patterns in global chemical trade data",
        "Collaborated with product managers to define data-driven pricing strategies",
      ],
      technologies: ["Looker", "PostgreSQL", "Python", "Statistical Analysis"],
    },
    {
      company: "Hansa Cequity",
      position: "Data Analyst",
      location: "Mumbai, India",
      duration: "06/2019 – 04/2021",
      website: "https://www.hansacequity.com",
      achievements: [
        "Designed interactive dashboards using Power BI and Tableau, improving decision-making efficiency by 20%",
        "Visualized KPIs including sales trends, footfall conversion, and inventory turnover",
        "Optimized Postgres database schema improving data retrieval speed by 30%",
        "Automated ETL pipelines saving over 10 hours weekly",
        "Delivered insights on underperforming SKUs and peak sales periods",
      ],
      technologies: ["Power BI", "Tableau", "PostgreSQL", "Python", "SQL", "ETL"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
