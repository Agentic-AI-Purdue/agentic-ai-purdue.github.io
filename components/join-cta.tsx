import Link from "next/link"
import { Button } from "@/components/ui/button"

export function JoinCTA() {
  return (
    <section className="relative mx-auto my-16 w-full overflow-hidden">
      <div
        className="container relative mx-auto rounded-2xl border border-neutral-200/70 bg-white/80 p-10 text-center shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/70"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0) 70%), radial-gradient(60% 60% at 50% 100%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0) 70%)",
        }}
      >
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{"Ready to Build the Future?"}</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          {"Join Purdue's most innovative AI community"}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <Link href="/join">Apply Now</Link>
          </Button>
          <Link
            href="/join#contact"
            className="text-sm text-indigo-700 underline underline-offset-4 transition-colors hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Questions? Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
