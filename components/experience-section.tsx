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
organization: "TechUp",
period: "2025",
location: "Remote",
description:
  "Selected as a mentee for the TechUp program, gaining hands-on experience in frontend development through mentorship, collaborative projects, and industry guidance.",
skills: ["Frontend Development", "Mentorship", "Collaboration", "Continuous Learning"],
}
]
export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="p-6 glass-card hover-glow transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                      <MapPin className="w-4 h-4 ml-2" />
                      {exp.location}
                    </div>

                    <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-3">{exp.organization}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
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
