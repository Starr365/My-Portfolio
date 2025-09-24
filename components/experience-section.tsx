import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
  role: "Frontend Developer — Team Obodofarm",
  organization: "Hackathon Winner",
  period: "August 2025",
  location: "Nigeria",
  description:
    "Collaborated with a team to design and implement a farm-to-market solution, developing the frontend interface that won first place in a competitive hackathon.",
  skills: ["Team Collaboration", "Frontend Development", "UI/UX Implementation"],
},
{
  role: "Frontend Developer",
  organization: "Freelance & Open Source",
  period: "2023 - Present",
  location: "Remote",
  description:
    "Built and deployed responsive, user-friendly web applications using React, TypeScript, and Tailwind CSS, translating designs into scalable digital experiences.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
{
role: "TechUp Mentee",
organization: "TechUp Africa",
period: "2025",
location: "Remote",
description:
  "Selected as a mentee for the TechUp program, gaining hands-on experience in frontend development through mentorship, collaborative projects, and industry guidance through Scrimba platform.",
skills: ["Frontend Development", "Mentorship", "Collaboration", "Continuous Learning"],
}
]
export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            My journey in technology and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-4 lg:pr-8" : "md:pl-4 lg:pl-8"} ml-8 sm:ml-12 md:ml-0`}>
                  <Card className="p-4 sm:p-5 lg:p-6 glass-card hover-glow transition-all duration-300">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.period}
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                      {exp.location}
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">{exp.organization}</p>
                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2 sm:px-3 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
