import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Benefits } from "@/components/join/benefits"
import { ApplicationForm } from "@/components/join/application-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Join – Agentic AI Club",
  description: "Be part of Purdue's most innovative AI community.",
}

export default function JoinPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight">Join AAI@Purdue</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Be part of Purdue&apos;s most innovative AI community.
        </p>
      </section>

      <section className="container mx-auto px-4 py-0">
        <h2 className="text-2xl font-semibold">Requirements</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          <li>Interest in AI agents</li>
          <li>Time commitment: 5-10 hours per week</li>
          <li>Collaboration and growth mindset</li>
          <li>Previous programming experience</li>
        </ul>
      </section>
      
      <Benefits />


      <ApplicationForm />
      <FAQ />
      <Footer />
    </main>
  )
}
