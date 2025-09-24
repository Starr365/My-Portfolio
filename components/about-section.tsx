"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, User, Sparkles, Heart, Zap, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useInView, Variants } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 30, 0],
            x: [0, 20, -10, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"
          animate={{
            y: [0, 40, -25, 0],
            x: [0, -30, 15, 0],
            scale: [1, 0.6, 1.4, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/60 rounded-full"
          animate={{
            y: [0, -100, 50, 0],
            opacity: [0.6, 1, 0.3, 0.6],
            scale: [1, 2, 0.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-primary/40 rounded-full"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
            rotate: [0, 270, 540],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-2 sm:px-0">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary) / 0.4)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            </motion.div>
            <span>Get to know me</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
            </motion.div>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 neon-text" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" variants={itemVariants}>
            I write code that transforms ideas into intuitive, responsive, and scalable web applications
            utilizing modern frameworks like Next.js, React.js, TypeScript, Tailwind CSS, JavaScript, and Vanilla CSS.
          </motion.p>

          {/* Resume Button */}
          <motion.div
            className="flex justify-center mt-6 sm:mt-8"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => window.open("https://docs.google.com/document/d/1OvzWZRpR0_SaOWEt0Xhap9_v6Imgm3a-/edit?usp=sharing&ouid=110351590111310881288&rtpof=true&sd=true", "_blank")}
                className="gradient-blue-500 text-background hover:opacity-90 glow-effect hover-glow shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-0 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-4 sm:p-6 lg:p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-500 group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" strokeWidth="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>\')',
                    backgroundSize: "50px 50px",
                  }}
                />
                <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                  <motion.div
                    className="p-3 sm:p-4 rounded-xl web3-gradient relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      Professional Journey
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      My journey into tech began with a desire to solve real-world business challenges, and it has grown into a mission to create technology 
                      that empowers people and drives efficiency. Beyond writing code, I am an advocate for women in STEM, 
                      committed to breaking barriers and inspiring more women to thrive in technology. I am passionate about using technology to 
                      streamline businesses and create global impact, ensuring that innovation is both inclusive and transformative.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div variants={itemVariants}>
                <Card className="p-4 sm:p-6 lg:p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-500 group relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div
                      className="p-3 rounded-xl bg-secondary/20 border border-secondary/30 relative"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="w-6 h-6 text-secondary" />
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-secondary/50"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">Based in Nigeria</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        Currently based in Enugu, Nigeria. I am continuously expanding my frontend development skills through innovative projects and 
                        cutting-edge learning opportunities. Look forward to exploring new horizons in the Web3 space.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-4 sm:p-6 lg:p-8 glass-card hover:glass-card-hover hover-glow transition-all duration-500 group relative overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full blur-lg"
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -20, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div
                      className="p-3 rounded-xl bg-accent/20 border border-accent/30 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className="w-6 h-6 text-accent" />
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <Sparkles className="w-3 h-3 text-accent" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">Let&apos;s Connect</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        Always excited to collaborate on impactful projects and connect with developers,
                        designers, and innovators who are shaping the future of the tech ecosystem.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
