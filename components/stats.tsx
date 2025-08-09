const stats = [
  { label: "Members", value: "50+" },
  { label: "Projects", value: "5+" },
  { label: "Open Source", value: "100%" },
  { label: "Founded", value: "2025" },
]

export function Stats() {
  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-neutral-200/70 bg-white/70 p-6 text-center backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60"
          >
            <div className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
