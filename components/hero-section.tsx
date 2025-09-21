"use client"

import { Button } from "@/components/ui/button"
import {  Sparkles, Zap, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

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
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="relative z-10 px-2 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row px-2 items-center min-h-[80vh] gap-4 md:gap-8">
          {/* Text Content Div - comes first on desktop, second on mobile */}
          <div className="w-full md:w-auto md:flex-1 text-center md:text-left pt-20 max-w-2xl">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypewriterText text="Hi, I'm Nzeribe Mmesoma" delay={800} />
              <motion.span
                className="block text-4xl md:text-6xl lg:text-7xl web3-gradient bg-clip-text text-transparent mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.5 }}
              >
              </motion.span>
            </motion.h1>

            <motion.div
              className=" flex items-center mb-6 relative gap-2 px-6 py-3 border rounded-full max-w-md mx-auto md:mx-0 justify-center text-foreground text-xl font-lg transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span> Frontend Engineer & Web3 Enthusiast </span>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Code2 className="w-4 h-4 text-secondary" />
                </motion.div>
              </div>

            </motion.div>

            <motion.p
              className="text-lg md:text-xl lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I build functional, scalable, and user-friendly websites from concept to code — transforming ideas into seamless 
              digital experiences using cutting-edge technologies, modern frameworks, and pixel-perfect design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="gradient-blue-500 text-background hover:opacity-90 glow-effect hover-glow shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-lg border-0"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Explore My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="bg-background/80 backdrop-blur-sm border-2 border-primary/30 text-foreground hover:bg-background hover:border-primary/60 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-md dark:bg-background/20 dark:border-primary/40 dark:hover:bg-background/40 dark:hover:border-primary/80"
                >
                  Let&apos;s Connect
                </Button>
              </motion.div>
            </motion.div>
          </div>
          {/* Image Content Div - comes first on desktop, second on mobile */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Crazy Box Collection Background */}
              <div className="absolute inset-0 -z-10">
                {/* Large rotating boxes */}
                <motion.div
                  className="absolute -top-20 -left-20 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-md backdrop-blur-sm"
                  animate={{
                    rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                    scale: [1, 1.2, 1, 0.8, 1],
                    x: [0, 10, -5, 15, 0],
                    y: [0, -15, 10, -8, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -top-10 -right-32 w-12 h-12 bg-gradient-to-tl from-secondary/40 to-primary/40 rounded-md backdrop-blur-sm"
                  animate={{
                    rotate: [360, 270, 180, 90, 0],
                    scale: [0.8, 1.3, 0.9, 1.1, 0.8],
                    x: [0, -20, 10, -15, 0],
                    y: [0, 20, -10, 15, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />

                <motion.div
                  className="absolute -bottom-16 -left-24 w-20 h-20 bg-gradient-to-r from-primary/25 via-secondary/35 to-primary/25 rounded-xl backdrop-blur-sm"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 0.7, 1.4, 0.9, 1],
                    x: [0, 25, -10, 20, 0],
                    y: [0, -20, 15, -12, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.div
                  className="absolute -bottom-8 -right-28 w-14 h-14 bg-gradient-to-bl from-secondary/30 to-primary/30 rounded-lg backdrop-blur-sm"
                  animate={{
                    rotate: [45, 135, 225, 315, 45],
                    scale: [1.1, 0.8, 1.3, 0.9, 1.1],
                    x: [0, -15, 12, -18, 0],
                    y: [0, 18, -8, 22, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />

                {/* Medium floating boxes */}
                <motion.div
                  className="absolute top-1/4 -left-16 w-8 h-8 bg-gradient-to-tr from-primary/50 to-secondary/50 rounded-md backdrop-blur-sm"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.5, 1],
                    x: [0, 8, -5, 12, 0],
                    y: [0, -12, 8, -6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.div
                  className="absolute top-1/3 -right-20 w-10 h-10 bg-gradient-to-br from-secondary/45 to-primary/45 rounded-lg backdrop-blur-sm"
                  animate={{
                    rotate: [90, 270, 450],
                    scale: [0.9, 1.2, 0.9],
                    x: [0, -10, 6, -8, 0],
                    y: [0, 15, -7, 18, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />

                <motion.div
                  className="absolute bottom-1/4 -left-12 w-6 h-6 bg-primary/60 rounded-sm backdrop-blur-sm"
                  animate={{
                    rotate: [180, 0, 180],
                    scale: [1.2, 0.8, 1.2],
                    x: [0, 6, -4, 8, 0],
                    y: [0, -8, 5, -10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                />

                {/* Small accent boxes */}
                <motion.div
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/70 rounded-sm backdrop-blur-sm"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute top-3/4 -right-12 w-5 h-5 bg-secondary/70 rounded-md backdrop-blur-sm"
                  animate={{
                    rotate: [360, 0],
                    scale: [0.8, 1.6, 0.8],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.div
                  className="absolute bottom-1/3 -right-6 w-3 h-3 bg-primary/80 rounded-full backdrop-blur-sm"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 1, 0.8],
                    x: [0, 3, -2, 4, 0],
                    y: [0, -4, 2, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />
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
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full glass-card p-2 hover:scale-105 transition-all duration-500"
                whileHover={{
                  boxShadow: "0 0 50px rgba(147, 51, 234, 0.3), 0 0 100px rgba(59, 130, 246, 0.2)",
                }}
              >
                {/* Inner frame with gradient border */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background/10 backdrop-blur-sm">
                    {/* My Professional Photo */}
                    <Image
                      src="/Animated me.png"
                      alt="Nzeribe Mmesoma Stella - Frontend Developer"
                      layout="fill"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating tech icons around the photo */}
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
                  <Code2 className="w-6 h-6 text-primary" />
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
                  <Sparkles className="w-6 h-6 text-secondary" />
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
                  <Zap className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
