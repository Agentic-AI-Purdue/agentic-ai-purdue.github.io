import { Code2, Target, Users } from 'lucide-react'

const benefits = [
  {
    title: "Technical Growth",
    lines: ["Framework mastery", "Real projects", "Mentorship"],
    icon: Code2,
  },
  {
    title: "Real Impact",
    lines: ["Client work", "Open source", "Portfolio projects"],
    icon: Target,
  },
  {
    title: "Community",
    lines: ["Networking", "Industry connections", "Leadership"],
    icon: Users,
  },
]

export function Benefits() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div
              key={b.title}
              className="relative overflow-hidden rounded-xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-900/60"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 transition-opacity hover:opacity-100" />
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                {b.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
