"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative flex items-center cursor-pointer"
      >
        {/* Slider track */}
        <div
          className={`w-14 h-7 rounded-full border-2 transition-all duration-300 ${
            isDark ? "bg-primary/20 border-primary/30" : "bg-secondary/20 border-secondary/30"
          }`}
        >
          {/* Slider thumb */}
          <motion.div
            className={`w-5 h-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isDark ? "bg-primary border border-primary/50" : "bg-secondary border border-secondary/50"
            }`}
            animate={{
              x: isDark ? 26 : 2,
              y: 2,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {/* Icon inside thumb */}
            <motion.div animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
              {isDark ? <Moon className="h-3 w-3 text-white" /> : <Sun className="h-3 w-3 text-white" />}
            </motion.div>
          </motion.div>
        </div>

        {/* Labels */}
        <div className="ml-3 flex flex-col text-xs">
          <span
            className={`transition-colors duration-300 ${
              isDark ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            Dark
          </span>
          <span
            className={`transition-colors duration-300 ${
              !isDark ? "text-secondary font-medium" : "text-muted-foreground"
            }`}
          >
            Light
          </span>
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </motion.div>
  )
}
