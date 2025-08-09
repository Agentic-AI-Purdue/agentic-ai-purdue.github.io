import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ValuesGrid } from "@/components/values-grid"
import { JoinCTA } from "@/components/join-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About – Agentic AI Club",
  description: "Mission, vision, values, and structure of the Agentic AI Club.",
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">{"Our Mission & Vision"}</h1>
          <p className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300">
            We cultivate the next generation of AI-native builders by mastering state-of-the-art agentic frameworks,
            shipping real solutions, and sharing our work openly with the community.
          </p>
          <div className="mt-6 rounded-xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              A world where students design, deploy, and improve AI agents that deliver measurable value for real users and organizations.
            </p>
          </div>
        </div>
      </section>

      <ValuesGrid />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">How We&apos;re Organized</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
            <h3 className="font-semibold">Pod System</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Small pods of 5–7 members ship features weekly. Pods own end-to-end delivery and demos.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
            <h3 className="font-semibold">Leadership</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-300">
              <li>President/Co-founders</li>
              <li>CTO (Technical Leadership)</li>
              <li>Project Leads</li>
              <li>Sales Lead</li>
              <li>Pod Leaders</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Our Vision for 2025</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          <li>50 active members by December 2025</li>
          <li>Inter-university expansion</li>
          <li>Quarterly open-source releases and demos</li>
        </ul>
      </section>

      <JoinCTA />
      <Footer />
    </main>
  )
}
