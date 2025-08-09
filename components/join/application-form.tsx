"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FormState = {
  name: string
  email: string
  purdueId: string
  yearMajor: string
  programming: "beginner" | "intermediate" | "advanced" | ""
  aiLevel: "beginner" | "intermediate" | "advanced" | ""
  why: string
  portfolio: string
}

export function ApplicationForm() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    purdueId: "",
    yearMajor: "",
    programming: "",
    aiLevel: "",
    why: "",
    portfolio: "",
  })

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!form.name) e.name = "Name is required"
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required"
    if (!form.yearMajor) e.yearMajor = "Please select your year/major"
    if (!form.programming) e.programming = "Select programming experience"
    if (!form.aiLevel) e.aiLevel = "Select AI/ML experience"
    if (!form.why || form.why.length < 20) e.why = "Tell us more (min 20 characters)"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      // Phase 1: no backend. Simulate submit.
      await new Promise((r) => setTimeout(r, 900))
      toast({
        title: "Application submitted!",
        description: "We’ll follow up within 48 hours.",
      })
      setForm({
        name: "",
        email: "",
        purdueId: "",
        yearMajor: "",
        programming: "",
        aiLevel: "",
        why: "",
        portfolio: "",
      })
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/70">
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                placeholder="Purdue Student"
              />
              {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                placeholder="student@purdue.edu"
              />
              {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="purdueId">Purdue ID (optional)</Label>
              <Input
                id="purdueId"
                value={form.purdueId}
                onChange={(e) => setForm({ ...form, purdueId: e.target.value })}
                placeholder="03592823831"
              />
            </div>
            <div>
              <Label htmlFor="yearMajor">Year/Major</Label>
              <Input
                id="yearMajor"
                value={form.yearMajor}
                onChange={(e) => setForm({ ...form, yearMajor: e.target.value })}
                aria-invalid={!!errors.yearMajor}
                aria-describedby="yearMajor-error"
                placeholder="Sophomore, CS"
              />
              {errors.yearMajor && <p id="yearMajor-error" className="mt-1 text-xs text-red-500">{errors.yearMajor}</p>}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Programming experience</Label>
              <Select
                value={form.programming}
                onValueChange={(v: "beginner" | "intermediate" | "advanced") => setForm({ ...form, programming: v })}
              >
                <SelectTrigger aria-invalid={!!errors.programming}>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              {errors.programming && <p className="mt-1 text-xs text-red-500">{errors.programming}</p>}
            </div>
            <div>
              <Label>AI/ML experience</Label>
              <Select
                value={form.aiLevel}
                onValueChange={(v: "beginner" | "intermediate" | "advanced") => setForm({ ...form, aiLevel: v })}
              >
                <SelectTrigger aria-invalid={!!errors.aiLevel}>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              {errors.aiLevel && <p className="mt-1 text-xs text-red-500">{errors.aiLevel}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="why">Why do you want to join?</Label>
            <Textarea
              id="why"
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
              aria-invalid={!!errors.why}
              aria-describedby="why-error"
              placeholder="Share your motivation, interests, and what you want to build..."
              rows={5}
            />
            {errors.why && <p id="why-error" className="mt-1 text-xs text-red-500">{errors.why}</p>}
          </div>
          <div>
            <Label htmlFor="portfolio">Portfolio/GitHub (optional)</Label>
            <Input
              id="portfolio"
              value={form.portfolio}
              onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
              placeholder="https://github.com/username"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-neutral-500">We’ll follow up within 48 hours.</p>
            <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
