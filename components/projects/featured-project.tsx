import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function FeaturedProject() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative h-56 w-full md:h-full">
          <Image
            src="/featured-project.png"
            alt="Featured project screenshot"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="p-6">
          <Badge className="mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">Featured</Badge>
          <h3 className="text-2xl font-semibold">AI Resume Reviewer</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Automated resume feedback system for Purdue students. Provides actionable suggestions on structure, clarity, and impact statements.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "Python", "OpenAI API", "FastAPI"].map((t) => (
              <span key={t} className="rounded-full border border-neutral-200/70 px-2.5 py-1 text-xs text-neutral-700 dark:border-neutral-800/70 dark:text-neutral-300">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex -space-x-2">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/team-member-one.png" alt="Team member" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/team-member-2.png" alt="Team member" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/diverse-team-member-3.png" alt="Team member" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
            </div>
            <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <Link href="https://github.com/Agentic-AI-Purdue" target="_blank">View Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
