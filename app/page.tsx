import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

// Lazy load sections that are below the fold
const ExperienceSection = dynamic(() => import("@/components/experience-section").then(mod => mod.ExperienceSection))
const SkillsSection = dynamic(() => import("@/components/skills-section").then(mod => mod.SkillsSection))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => mod.ProjectsSection))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => mod.ContactSection))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
