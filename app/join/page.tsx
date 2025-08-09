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
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight">Join AAI@Purdue</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Be part of Purdue&apos;s most innovative AI community.
        </p>
      </section>

      <Benefits />

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Requirements</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          <li>Basic programming knowledge</li>
          <li>Time commitment: Whatever you can give</li>
          <li>Collaboration mindset and growth mindset</li>
        </ul>
      </section>

      <ApplicationForm />
      <FAQ />
      <Footer />
    </main>
  )
}
