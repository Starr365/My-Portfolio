"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, Sparkles, Code2, Layers } from "lucide-react"
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
    {
    title: "Dishcovery - Recipe Finder",
    description:
      "A recipe finder for searching recipes by name or ingredient, mark favorites, and filter to see your favorites only.",
    image: "/dishcovery.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript", "Local Storage", "Framer Motion"],
    liveUrl: "https://dishcovery-lilac.vercel.app/",
    githubUrl: "https://github.com/Starr365/Dishcovery",
    gradient: "from-indigo-500 to-purple-500",
  },
    {
    title: "Obodofarm - AgriTech",
    description:
      "A hackathon-winning agri platform that connects farmers to buyers and provides modern farming insights.",
    image: "/obodo.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Payment Integration"],
    liveUrl: "https://www.obodofarm.site/",
    githubUrl: "https://github.com/Starr365",
    gradient: "from-indigo-500 to-purple-500",
  },
 
    {
    title: "Daily Muse - Mood Journaling Web App",
    description:
      "A personal mental health tracker where users log daily moods, visualize trends, and get motivational quotes.",
    image: "/daily-muse.jpg",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Chart.js", "AI Model Integration"],
    liveUrl: "https://daily-muse-eight.vercel.app/",
    githubUrl: "https://github.com/Starr365/Daily-Muse",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "EcoPay - Fintech",
    description:
      "A hacakthon-winning web application that automatically calculates and offsets carbon emissions from your financial transactions.",
    image: "/ecopay.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Wallet Connection", "API Integration", "Chart.js"],
    liveUrl: "https://ecopay-eight.vercel.app/",
    githubUrl: "https://github.com/Starr365/Ecopay",
    gradient: "from-indigo-500 to-purple-500",
  },
    {
    title: "Impact Now - Social Impact Platform",
    description:
      "A mobile-responsive platform connecting donors, volunteers, and organizations for social impact projects.",
    image: "/impact.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion", "Supabase",  "Chart.js"],
    liveUrl: "https://impact-now-it.vercel.app/",
    githubUrl: "https://github.com/Starr365/Impact-Now--IT",
    gradient: "from-indigo-500 to-purple-500",
  },
    {
    title: "Bill-Ease - Landing Page",
    description:
      "a modern, user-friendly web application designed to simplify group bill splitting and expense management",
    image: "/billease.jpg",
    tags: ["HTML", "Vanilla CSS", "JavaScript"],
    liveUrl: "https://starr365.github.io/Bill-Ease/",
    githubUrl: "https://github.com/Starr365/Bill-Ease",
    gradient: "from-indigo-500 to-purple-500",
  },

];

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.5, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 90, -30, 0],
            scale: [1, 0.6, 1.4, 1],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="relative w-60 h-60">
            {[Code2, Layers, Zap, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 text-primary/20"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: [0, -360],
                  x: [0, Math.cos((index * Math.PI) / 2) * 80],
                  y: [0, Math.sin((index * Math.PI) / 2) * 80],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: index * 1,
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-2 sm:px-0">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/20"
            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary) / 0.4)" }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            </motion.div>
            <span>My work</span>
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my recent work and creative solutions that push the boundaries of web development
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 60, rotateY: -15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="overflow-hidden glass-card hover:glass-card-hover hover-glow transition-all duration-500 group relative h-full mx-2 sm:mx-0">
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-all duration-500 group-hover:scale-110"
                    style={{
                      filter: 'blur(1px)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      filter: 'blur(0px)',
                    }}
                  />

                  {/* Enhanced glass overlay on image */}
                  <motion.div
                    className="absolute inset-0 glass-card opacity-20 group-hover:opacity-40 transition-all duration-500"
                    initial={{ opacity: 0.2 }}
                    whileHover={{ opacity: 0.4 }}
                    style={{
                      backdropFilter: 'blur(10px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  />

                  {/* Glass corner accent with enhanced effect */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg opacity-60 group-hover:opacity-90 transition-all duration-500"
                    initial={{ opacity: 0.6, scale: 0.8 }}
                    whileHover={{ opacity: 0.9, scale: 1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px) saturate(200%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(200%)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg"></div>
                  </motion.div>

                  {/* Additional glass accent elements */}
                  <motion.div
                    className="absolute top-4 left-4 w-8 h-8 rounded-full opacity-40 group-hover:opacity-70 transition-all duration-500"
                    initial={{ opacity: 0.4, scale: 0.8 }}
                    whileHover={{ opacity: 0.7, scale: 1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  />

                  <motion.div
                    className="absolute bottom-4 left-4 w-16 h-1 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.6 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/60 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-100 transition-all duration-300"
                    initial={{ y: 0, opacity: 1 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== "@components/HeroSection.tsx") {
                              window.open(project.liveUrl, '_blank');
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.githubUrl) {
                              window.open(project.githubUrl, '_blank');
                            }
                          }}
                        >
                          <FaGithub className="w-4 h-4 mr-2" />
                          Source
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6 relative">
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage:
                        'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>\')',
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10">
                    <motion.h3
                      className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-all duration-300 text-xs sm:text-sm px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
