import Image from "next/image"

type ProjectCardProps = {
  title?: string
  description?: string
  tech?: string[]
  status?: "Planning Phase" | "In Development" | "Coming Soon"
}

export function ProjectCard({
  title = "Project Title",
  description = "Short description of the project goes here.",
  tech = ["React", "LangChain", "FastAPI"],
  status = "Coming Soon",
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-900/60">
      <div className="relative h-40 w-full">
        <Image
          src="/gradient-thumbnail.png"
          alt={`${title} thumbnail`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-2 top-2 rounded-full border border-neutral-200/70 bg-white/80 px-2 py-0.5 text-xs text-neutral-700 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/70 dark:text-neutral-300">
          {status}
        </span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-neutral-200/70 px-2.5 py-1 text-xs text-neutral-700 dark:border-neutral-800/70 dark:text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
