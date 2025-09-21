"use client"

import { ArrowUp, Mail, Code,  } from "lucide-react"
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Button } from "./ui/button"
import { MyLogo } from "./navigation"

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-4 px-6 bg-background  border-t border-border/100 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-6xl sm:7xl md:text-8xl lg:text-9xl font-black text-gray-400/30 dark:text-primary/10 select-none tracking-wider">
          {MyLogo}
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mmesoma Nzeribe
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend Engineer crafting beautiful, functional web applications with modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-row space-x-3 md:flex-col space-y-4 md:space-y-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-left font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col items-center space-y-3">
              <a
                href="mailto:mmesomanzeribe@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                mmesomanzeribe@gmail.com
              </a>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("https://github.com/Starr365", "_blank")}
                  className="p-2 h-auto hover:bg-primary/10 hover:scale-110 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("https://www.linkedin.com/in/mmesoma-nzeribe", "_blank")}
                  className="p-2 h-auto hover:bg-primary/10 hover:scale-110 transition-all"
                >
                  <FaLinkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open("https://x.com/starr_o25?t=nxNCX4BgUDAwLW3J8ihPiA&s=09", "_blank")}
                  className="p-2 h-auto hover:bg-primary/10 hover:scale-110 transition-all"
                >
                  <FaXTwitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-border/90">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center">
                © {currentYear} • Nzeribe Mmesoma Stella
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 h-auto align-self-endhover:bg-primary/10 hover:scale-110 transition-all group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
