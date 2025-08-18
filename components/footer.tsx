import Link from "next/link"
import { Github, Linkedin, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/70 bg-white/70 py-10 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/70">
      <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold">Agentic AI Club</h4>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Student builders shipping real agentic AI solutions at Purdue.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href="/about">About</Link></li>
            {/* <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href="/projects">Projects</Link></li> */}
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href="/join">Join</Link></li>
            <li><Link className="hover:text-indigo-600 dark:hover:text-indigo-400" href="/join#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Social</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400" href="https://github.com/Agentic-AI-Purdue" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400" href="https://www.linkedin.com/company/agentic-ai-purdue/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400" href="https://join.slack.com/t/agenticaipurdue/shared_invite/zt-3b8vk5tmr-Tt~D_588iw8GwDiX2J6qyw" target="_blank" rel="noreferrer">
                <MessageSquare className="h-4 w-4" /> Slack
              </a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h5 className="text-sm font-semibold">Contact</h5>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Email: contact@agenticai.club
            <br />
            Meetings: Thursdays 6pm, Lawson Hall
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4 text-xs text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Agentic AI Club. All rights reserved.
      </div>
    </footer>
  )
}
