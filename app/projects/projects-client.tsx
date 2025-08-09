"use client"

import { FeaturedProject } from "@/components/projects/featured-project"
import { ProjectCard } from "@/components/projects/project-card"
import { FilterTabs } from "@/components/projects/filter-tabs"
import { useMemo, useState } from "react"

const allProjects = [
  {
    title: "AI Resume Reviewer",
    description: "Automated resume feedback system for Purdue students.",
    tech: ["Python", "OpenAI API", "FastAPI"],
    status: "Planning Phase" as const,
    category: "client",
  },
  {
    title: "Campus Event Assistant",
    description: "AI chatbot for answering campus organization questions.",
    tech: ["LangChain", "Pinecone", "React"],
    status: "In Development" as const,
    category: "client",
  },
  {
    title: "Multi-Agent Starter Kit",
    description: "Open-source template for building agent workflows.",
    tech: ["CrewAI", "LangGraph", "FastAPI"],
    status: "Coming Soon" as const,
    category: "oss",
  },
]

export function ProjectsClient() {
  const [filter, setFilter] = useState("all")
  const projects = useMemo(() => {
    if (filter === "all") return allProjects
    return allProjects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Our Projects</h1>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">
        Real solutions built by students, for real impact.
      </p>

      <div className="mt-6">
        <FilterTabs onChange={setFilter} />
      </div>

      <div className="mt-8">
        <FeaturedProject />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
            status={p.status}
          />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-neutral-200/70 bg-white/70 p-6 text-center backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
        <h3 className="text-xl font-semibold">All Projects Are Open Source</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Explore our GitHub organization, read contribution guidelines, and help us build.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-700 underline underline-offset-4 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Visit GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
