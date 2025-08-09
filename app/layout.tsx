import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
title: "Agentic AI Club",
description: "Purdue’s premier student organization for agentic AI development.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
  <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-white text-neutral-900 antialiased transition-colors dark:bg-neutral-950 dark:text-neutral-50">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </body>
  </html>
)
}
