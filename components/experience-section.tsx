"use client"

import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase, BookOpen, ChevronRight, Award, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"

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
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Nigeria, Nsukka",
    period: "2020 - 2024",
    location: "Nsukka, Enugu",
    description:
      "Studied core computer science concepts including data structures, algorithms, software engineering, and web development.",
    skills: ["Data Structures", "Algorithms", "Web Development", "Software Engineering"],
  },
  {
    degree: "Frontend Development  ",
    institution: "Scrimba Learning Platform",
    period: "2022 - 2023",
    location: "Remote",
    description:
      "Completed comprehensive bootcamp covering frontend technologies, building production-ready applications.",
    skills: ["Frontend development","API Integration", "Version Control" ,"Responsive Design", ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
}

const ExperienceCard = ({ item, isExperience }: { item: (typeof experiences)[0] | (typeof education)[0]; index: number; isExperience: boolean }) => {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className="group relative"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isExperience
            ? "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
            : "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      />

      <Card className="relative p-6 sm:p-8 glass-card overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
        {/* Animated inner glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 80%)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Timeline dot */}
        <motion.div
          className="absolute -left-4 top-8 w-8 h-8 rounded-full border-2 border-primary/50 bg-background hidden sm:flex items-center justify-center group-hover:border-primary transition-colors duration-300"
          whileHover={{ scale: 1.3, borderColor: "rgb(139, 92, 246)" }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and period */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <motion.div
                className="flex items-center gap-2 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {isExperience ? (
                    <Award className="w-4 h-4 text-primary" />
                  ) : (
                    <Star className="w-4 h-4 text-blue-400" />
                  )}
                </motion.div>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground/80 bg-white/5 px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>
              </motion.div>

              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {"role" in item ? item.role : item.degree}
              </h3>
              <motion.div
                className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base mb-3"
                whileHover={{ x: 5 }}
              >
                {"organization" in item ? item.organization : item.institution}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            {/* Location badge */}
            <motion.div
              className="flex items-center gap-1 text-xs text-muted-foreground bg-white/5 px-3 py-2 rounded-lg whitespace-nowrap ml-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-3 h-3" />
              <span>{item.location}</span>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {item.description}
          </p>

          {/* Skills with staggered animation */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: skillIndex * 0.05 + 0.2 }}
                className="px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 cursor-pointer"
                style={{
                  background: isExperience
                    ? "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)"
                    : "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)",
                  color: isExperience ? "rgb(196, 181, 253)" : "rgb(147, 197, 253)",
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{
            background: isExperience
              ? "linear-gradient(90deg, rgba(139, 92, 246, 0.8) 0%, rgba(236, 72, 153, 0.3) 100%)"
              : "linear-gradient(90deg, rgba(59, 130, 246, 0.8) 0%, rgba(34, 197, 94, 0.3) 100%)",
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </Card>
    </motion.div>
  )
}

const SectionDivider = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-0.5 transform -translate-x-1/2"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-full h-full">
        {/* Gradient line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        {/* Animated dots */}
        {[0.2, 0.5, 0.8].map((position, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background transform -translate-x-1/2"
            style={{ top: `${position * 100}%` }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(139, 92, 246, 0.4)",
                "0 0 0 8px rgba(139, 92, 246, 0.2)",
                "0 0 0 0 rgba(139, 92, 246, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  }

  const tabTransition = { duration: 0.3 }

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 bg-background relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/20 mb-6 hover:border-primary/40 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Briefcase className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Career Timeline</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 neon-text">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            My journey in technology and continuous learning growth
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-0 relative min-h-96">
          <SectionDivider isInView={isInView} />

          {/* Experience Section - Desktop */}
          <motion.div
            className="pr-0 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center gap-3 mb-8 sm:mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h3>
            </motion.div>
            <motion.div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={`exp-${index}`} item={exp} index={index} isExperience={true} />
              ))}
            </motion.div>
          </motion.div>

          {/* Education Section - Desktop */}
          <motion.div
            className="pl-0 lg:pl-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex items-center gap-3 mb-8 sm:mb-10"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-green-500/10"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Education</h3>
            </motion.div>
            <motion.div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <ExperienceCard key={`edu-${index}`} item={edu} index={index} isExperience={false} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Tab View */}
        <div className="lg:hidden">
          {/* Tab Buttons */}
          <div className="flex gap-4 mb-8">
            {[
              { key: "experience" as const, label: "Experience", icon: Briefcase },
              { key: "education" as const, label: "Education", icon: BookOpen },
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 relative py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === key
                    ? "bg-gradient-to-br from-primary/40 to-primary/20 text-primary border border-primary/50"
                    : "bg-white/5 text-muted-foreground border border-white/10 hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm sm:text-base">{label}</span>

                {/* Active indicator */}
                {activeTab === key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience-tab"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={tabTransition}
                className="space-y-6"
              >
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Briefcase className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">Experience</h3>
                </motion.div>
                {experiences.map((exp, index) => (
                  <ExperienceCard key={`exp-mobile-${index}`} item={exp} index={index} isExperience={true} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-tab"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={tabTransition}
                className="space-y-6"
              >
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-green-500/10"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </motion.div>
                {education.map((edu, index) => (
                  <ExperienceCard key={`edu-mobile-${index}`} item={edu} index={index} isExperience={false} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* End Mobile Tab View */}
      </div>
    </section>
  )
}
