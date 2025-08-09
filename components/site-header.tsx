"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Bot, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/join", label: "Join" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-full border-b border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-900/40">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Agentic AI Club home">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow">
              <Bot className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">Agentic AI@Purdue</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                    active
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-neutral-700 dark:text-neutral-300"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu" className="backdrop-blur bg-white/70 dark:bg-neutral-800/50">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white/90 backdrop-blur dark:bg-neutral-900/80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                        <Bot className="h-5 w-5" />
                      </span>
                      Agentic AI Club
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-2">
                    {navItems.map((item) => {
                      const active = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "rounded-md px-3 py-2 text-base transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                            active
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-neutral-800 dark:text-neutral-200"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                    <div className="mt-4">
                      <Button onClick={() => setOpen(false)} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        Close <X className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
