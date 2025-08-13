import { Code2, Rocket, Github } from 'lucide-react'

const pillars = [
  {
    title: "Learn & Build",
    icon: Code2,
    lines: [
      "Master cutting-edge AI frameworks through hands-on projects",
      "1-week onboarding bootcamp covering LangChain, CrewAI, and more",
    ],
  },
  {
    title: "Real Impact",
    icon: Rocket,
    lines: [
      "Deploy working AI solutions for real clients and organizations",
      "3+ client projects planned for 2025",
    ],
  },
  {
    title: "Open Source",
    icon: Github,
    lines: [
      "Contribute to the future of agentic AI development",
      "All internal tools and frameworks shared with the community",
    ],
  },
]

export function Pillars() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">{"What We Do"}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon
          return (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/60 bg-white/60 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-900/50"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
              <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                {p.lines.map((line) => (
                  <li key={line} className="leading-relaxed">{line}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
