"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export const MyLogo = "<StarrCodes/>";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // To Handle Scrolling to Sections
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
    setIsMobileMenuOpen(false) // Close mobile menu after clicking
  }

  // Navigation Items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-border/50 backdrop-blur-xl" : "bg-transparent backdrop-blur-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <div className="relative flex items-center justify-center w-relative h-12 px-2 rounded-2xl bg-gradient-to-br from-background/60 via-background/40 to-background/20 shadow-lg border border-primary/20 transition-all duration-300 dark:from-primary/60 dark:via-primary/40 dark:to-accent/60">
              {/* Logo with inverted theme styling */}
              <span className="text-lg font-black bg-gradient-to-br from-primary/80 via-primary/60 to-accent/60 bg-clip-text text-transparent drop-shadow-sm dark:from-background/80 dark:via-background/60 dark:to-background/40">
                {MyLogo}
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="glass-card hover:glass-card-hover"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dropdown menu */}
            <div className="relative z-50 mt-2 w-full">
              {/* Backdrop for dropdown */}
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm -z-10" />

              <div className="relative glass-card border border-border/50 overflow-hidden">
                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium"
                      >
                        {item.name}
                      </button>
                      {index < navItems.length - 1 && (
                        <hr className="border-border/30" />
                      )}
                    </div>
                  ))}
                  <hr className="border-border/30" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
