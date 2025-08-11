import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Pillars } from "@/components/pillars"
import { Stats } from "@/components/stats"
import { JoinCTA } from "@/components/join-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Agentic AI @ Purdue – Building the Future of AI Agents",
  description: "Purdue’s premier student organization for agentic AI development.",
}

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Pillars />
      <Stats />
      <JoinCTA />
      <Footer />
    </main>
  )
}
