import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      />
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-800/50 dark:bg-neutral-900/50 dark:text-indigo-300">
          <Users className="h-4 w-4" />
          {/* 50+ Active Members */}
        </span>
        <h1 className="max-w-3xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent dark:from-white dark:to-neutral-300 sm:text-5xl md:text-6xl">
          {"Building the Future of AI Agents"}
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          {"Purdue's premier student organization for agentic AI development"}
        </p>
        <p className="mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
          {"To cultivate the next generation of AI-native builders by mastering state-of-the-art agentic frameworks"}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 sm:w-auto">
            <Link href="/join">Join Our Club</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-neutral-300 bg-white/70 backdrop-blur hover:border-indigo-300 hover:text-indigo-700 dark:border-neutral-700 dark:bg-neutral-900/40 dark:hover:border-indigo-700 dark:hover:text-indigo-300 sm:w-auto">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
