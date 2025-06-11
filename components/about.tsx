export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a passionate data analyst with a Master's in Web & Data Science from University of Koblenz. With
                over 4 years of experience in data analysis, I specialize in transforming complex datasets into
                actionable insights that drive business decisions.
              </p>

              <p className="text-lg text-muted-foreground">
                My expertise spans from automated reporting workflows and interactive dashboards to statistical analysis
                and machine learning. I've worked across diverse industries including chemical trading and retail,
                helping organizations optimize their strategies through data-driven approaches.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">4+ Years</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">Master's Degree</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Specialization</h3>
                  <p className="text-muted-foreground">Data Analysis</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
