import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, ExternalLink, GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">Master's in Web & Data Science</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    <a
                      href="https://www.uni-koblenz.de/de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      University of Koblenz
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardDescription>
                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      10/2021 – 10/2024
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Koblenz, Germany
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    Thesis: Collection and Analysis of Technical Requirements for a Data Sharing Platform
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>
                        Defined technical requirements for a secure, scalable, and interoperable data-sharing platform
                        within the TITAN project under the European Open Science Cloud (EOSC) initiative
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>
                        Conducted structured requirements engineering to identify key functional and non-functional
                        specifications for data security, privacy, and interoperability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>
                        Established the foundation for the TITAN platform, enabling trusted confidential data exchange
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>
                        Contributed to advancing EOSC's vision of seamless scientific collaboration and open science
                        innovation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
