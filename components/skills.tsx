import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn", "PyTorch"],
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Looker Studio", "Matplotlib", "Seaborn", "Highcharts"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Google Analytics 4", "Git", "Excel"],
    },
    {
      title: "Languages",
      skills: ["English - Native/Fluent", "German - A2 Intermediate"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
