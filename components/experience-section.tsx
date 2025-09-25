"use client"

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
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 neon-text">Experience & Education</h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            My journey in technology and continuous learning
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8 sm:space-y-6 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex items-center border border-bg-secondary/15 p-4 sm:p-6 lg:p-8 rounded-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-4 sm:p-6 lg:p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-300 relative overflow-hidden animate-fade-in">
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {exp.period}
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    {exp.location}
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
