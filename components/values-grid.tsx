import { Hammer, Target, Unlock, ShieldCheck, Users } from 'lucide-react'

const values = [
  {
    title: "Build to Learn",
    desc: "We grow by shipping, not just studying.",
    more: "We prioritize building functional prototypes, learning through iteration, and sharing demos every cycle.",
    icon: Hammer,
  },
  {
    title: "Clarity over Complexity",
    desc: "Clean, minimal solutions over bloated systems.",
    more: "We value straightforward architecture and readable code with clear boundaries.",
    icon: Target,
  },
  {
    title: "Open by Default",
    desc: "Share knowledge, code, and learnings openly.",
    more: "We publish write-ups, contribute to OSS, and default to permissive licenses for internal tools.",
    icon: Unlock,
  },
  {
    title: "High Ownership",
    desc: "If you see a problem, you own it.",
    more: "Members propose, lead, and deliver. Initiative is recognized and rewarded.",
    icon: ShieldCheck,
  },
  {
    title: "User-Centered Design",
    desc: "Every agent should serve a real human or organization.",
    more: "We interview users, validate needs, and measure outcomes—not just model metrics.",
    icon: Users,
  },
]

export function ValuesGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Core Values</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => {
          const Icon = v.icon
          return (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-900/60"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{v.desc}</p>
              <p className="mt-3 max-h-0 text-sm text-neutral-600 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100 dark:text-neutral-300">
                {v.more}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
