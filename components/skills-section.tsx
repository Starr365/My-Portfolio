"use client"

import { Card } from "@/components/ui/card"
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Zap,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    icon: Code,
    name: "HTML & CSS",
    description: "Semantic markup and modern styling with advanced animations",
    level: 95,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    name: "JavaScript",
    description: "ES6+ and modern JavaScript features with Web3 integration",
    level: 90,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    name: "React & Next.js",
    description: "Component-based UI development with hooks and context",
    level: 88,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    level: 92,
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Database,
    name: "TypeScript",
    description: "Type-safe JavaScript development for scalable applications",
    level: 85,
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description: "Version control and collaborative development workflows",
    level: 87,
    color: "from-gray-600 to-gray-800",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-15 bg-muted/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{
            y: [0, -60, 40, 0],
            x: [0, 30, -20, 0],
            scale: [1, 1.4, 0.8, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, -30, 0],
            x: [0, -40, 25, 0],
            scale: [1, 0.7, 1.3, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-40 h-40">
            {[Cpu, Layers, Terminal, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 text-primary/30"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: [0, -360],
                  x: [0, Math.cos((index * Math.PI) / 2) * 60],
                  y: [0, Math.sin((index * Math.PI) / 2) * 60],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary) / 0.4)" }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>
            <span>My expertise</span>
            <motion.div
              animate={{
                y: [0, -3, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cutting-edge tools and technologies I leverage to bring innovative ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Card className="p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-500 group cursor-pointer relative overflow-hidden h-full">
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="absolute top-0 left-0 right-0 h-1 bg-muted/20 rounded-t-lg overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  />
                </div>

                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className="relative">
                    <motion.div
                      className="p-6 rounded-2xl web3-gradient group-hover:scale-110 transition-all duration-300 shadow-lg relative"
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-10 h-10 text-primary relative z-10" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        rotate: [0, 360],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-secondary" />
                    </motion.div>
                  </div>
                  <div>
                    <motion.h3
                      className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{skill.description}</p>
                    <motion.div
                      className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgb(var(--primary) / 0.2)" }}
                    >
                      {skill.level}% Proficiency
                    </motion.div>
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
