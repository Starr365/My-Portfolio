"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Code2 } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

// Smooth scroll function
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navHeight = 64 // Height of the fixed navigation
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}

function TypewriterText({ text }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return (
    <span className="neon-text">
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-primary ml-2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

export function HeroSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)
  const prefersReducedMotion = useReducedMotion()
  const shouldAnimate = isInView && !prefersReducedMotion

  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 flex items-center justify-center gradient-bg overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        {shouldAnimate && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
              animate={{
                y: [0, -20, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
              animate={{
                y: [0, 15, -10, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-3xl"
              animate={{
                y: [0, -25, 15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-28 h-28 bg-secondary/25 rounded-full blur-2xl"
              animate={{
                y: [0, 20, -15, 0],
                rotate: [0, -4, 4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 3,
              }}
            />

            <motion.div
              className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 px-3 sm:px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row px-2 sm:px-3 items-center min-h-[80vh] gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content Div - comes first on desktop, second on mobile */}
          <div className="w-full lg:w-auto lg:flex-1 text-center lg:text-left pt-8 sm:pt-12 lg:pt-20 max-w-2xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-2 sm:mb-3 text-balance leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypewriterText text="Nzeribe Mmesoma" delay={800} />
              <motion.span
                className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl web3-gradient bg-clip-text text-transparent mt-1 sm:mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.5 }}
              >
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex items-center mb-4 sm:mb-6 relative gap-2 px-4 sm:px-6 py-2 sm:py-3 border rounded-full max-w-sm sm:max-w-md mx-auto lg:mx-0 justify-center text-foreground text-base sm:text-lg lg:text-xl font-medium transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </motion.div>
                <span className="text-sm sm:text-base lg:text-lg">Frontend-Focused Software Engineer</span>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I build functional, scalable, and user-friendly web applications from concept to code; combining modern frontend engineering with backend systems integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-6 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  aria-label="View my projects and portfolio work"
                  className="gradient-blue-500 text-white opacity-95 shadow-xl transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg border-0 w-full sm:w-auto tracking-tight"
                >
                  Explore My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  aria-label="Go to contact section to connect"
                  className="bg-background/80 backdrop-blur-sm border-2 border-primary/40 text-foreground hover:bg-background hover:border-primary/80 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg dark:bg-background/20 dark:border-primary/50 dark:hover:bg-background/40 dark:hover:border-primary/90 w-full sm:w-auto tracking-tight"
                >
                  Let&apos;s Connect
                </Button>
              </motion.div>
            </motion.div>
          </div>
          {/* Image Content Div - comes first on desktop, second on mobile */}
          <div className="flex-1 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Ethereal Aura Background */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                {shouldAnimate && (
                  <>
                    {/* Main soft glow behind the image */}
                    <motion.div
                      className="absolute w-[120%] h-[120%] rounded-full bg-primary/20 blur-[120px]"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    {/* Subtle floating glass orbs */}
                    <motion.div
                      className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl border border-white/20"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                      }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-0 -right-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl border border-white/10"
                      animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                      }}
                      transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                    />

                    {/* Delicate particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -40, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 5 + Math.random() * 5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 5,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />

              {/* Main photo frame */}
              <motion.div
                className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full glass-card p-2 hover:scale-105 transition-all duration-500"
                whileHover={{
                  boxShadow: "0 0 50px rgba(147, 51, 234, 0.3), 0 0 100px rgba(59, 130, 246, 0.2)",
                }}
              >
                {/* Refined Frame with Soft Outer Glow */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/30 p-[2px] shadow-xl shadow-primary/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background/5 backdrop-blur-[2px] relative">
                    {/* Subtle overlay to blend the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10 pointer-events-none" />
                    {/* My Professional Photo */}
                    <Image
                      src="/main-upscale2.png"
                      alt="Nzeribe Mmesoma Stella - Professional profile photo"
                      fill
                      priority
                      sizes="(max-width: 640px) 288px, (max-width: 1024px) 400px, 500px"
                      className="object-cover translate-y-14 scale-108"
                    />
                  </div>
                </div>

                {/* Floating tech icons around the photo */}
                {shouldAnimate && (
                  <>
                    <motion.div
                      className="absolute -top-2 -right-2 w-12 h-12 rounded-full glass-card flex items-center justify-center"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full glass-card flex items-center justify-center"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    >
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </motion.div>

                    <motion.div
                      className="absolute top-1/4 -left-4 w-10 h-10 rounded-full glass-card flex items-center justify-center"
                      animate={{
                        x: [0, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
