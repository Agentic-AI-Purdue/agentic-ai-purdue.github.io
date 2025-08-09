
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ProjectsClient } from "./projects-client"

export const metadata: Metadata = {
  title: "Projects – Agentic AI Club",
  description: "Real solutions built by students, for real impact.",
}

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <ProjectsClient />
      <Footer />
    </main>
  )
}
