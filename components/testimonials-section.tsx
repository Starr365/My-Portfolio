import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Praise",
    role: "Senior Frontend Developer",
    company: "Borderless",
    content:
      "Mmesoma consistently delivers high-quality work with attention to detail. Her frontend development skills and creative problem-solving approach make her a valuable team member.",
    rating: 5,
  },
  {
    name: "Sarah Ogbonna",
    role: "Senior Developer",
    company: "Digital Innovations",
    content:
      "Working with Mmesoma has been a great experience. She brings fresh perspectives to projects and has a strong grasp of modern web technologies.",
    rating: 4,
  },
  {
    name: "Ademide Emmanuel",
    role: "Full-Stack Developer",
    company: "The Engineering Network",
    content:
      "Mmesoma has excellent collaboration skills and translates design concepts into beautiful, functional interfaces. Her work ethic and dedication are impressive.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What People Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Feedback from colleagues and collaborators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-6 glass-card hover-glow transition-all duration-300 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
