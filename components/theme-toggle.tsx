"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme" className="backdrop-blur bg-white/70 dark:bg-neutral-800/50">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const current = theme === "system" ? systemTheme : theme
  const isDark = current === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative overflow-hidden backdrop-blur bg-white/70 transition-colors hover:border-indigo-300 dark:bg-neutral-800/50 dark:hover:border-indigo-700"
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
      {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
    </Button>
  )
}
