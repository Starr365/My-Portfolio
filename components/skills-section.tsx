"use client"

import { Card } from "@/components/ui/card"
import { Zap, Sparkles } from "lucide-react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaDatabase,
  FaCubes,
  FaCode
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiVite,
  SiFirebase,
  SiVercel,
  SiRedux,
  SiReactquery,
} from 'react-icons/si';
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-foreground" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: SiReactquery, name: "TanStack Query", color: "text-rose-500" },
  { icon: FaCubes, name: "Zustand", color: "text-amber-700" },
  { icon: SiRedux, name: "Redux", color: "text-purple-600" },
  { icon: SiSupabase, name: "Supabase", color: "text-emerald-500" },
  { icon: SiFirebase, name: "Firebase", color: "text-orange-400" },
  { icon: FaDatabase, name: "REST APIs", color: "text-blue-400" },
  { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
  { icon: FaGithub, name: "GitHub", color: "text-foreground" },
  { icon: SiVercel, name: "Vercel", color: "text-foreground" },
  { icon: FaFigma, name: "Figma", color: "text-rose-400" },
  { icon: SiVite, name: "Vite", color: "text-yellow-500" },
  { icon: FaCode, name: "Playwright", color: "text-green-500" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = isInView && !prefersReducedMotion

  return (
    <section id="skills" className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 px-3 sm:px-4 bg-muted/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shouldAnimate && (
          <>
            <motion.div
              className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{
                y: [0, -60, 40, 0],
                x: [0, 30, -20, 0],
                scale: [1, 1.4, 0.8, 1],
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
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-0">
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/20"
            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary) / 0.4)" }}
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span>My tech stack</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 neon-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The modern toolkit I use to build performant, accessible, and stunning digital experiences
          </motion.p>
        </motion.div>

        <div className="relative group px-4 sm:px-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="pb-16"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="flex flex-col items-center justify-center p-6 sm:p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-500 group aspect-square">
                    <div className="relative mb-2">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className={`text-4xl sm:text-5xl ${skill.color} transition-colors duration-300`}
                      >
                        <skill.icon />
                      </motion.div>

                      {/* Subtle glow behind icon */}
                      <motion.div
                        className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"
                        style={{ backgroundColor: 'currentColor' }}
                      />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-foreground/80 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </span>


                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  )
}
