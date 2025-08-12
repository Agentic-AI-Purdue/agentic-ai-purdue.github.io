"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/ui/file-upload"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitApplication } from "@/lib/applications"
import { uploadResume } from "@/lib/upload"

type FormState = {
  name: string
  email: string
  major: string
  year: string
  programming: "beginner" | "intermediate" | "advanced"
  aiLevel: "beginner" | "intermediate" | "advanced"
  why: string
  portfolio: string
}

export function ApplicationForm() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedResume, setSelectedResume] = useState<File | null>(null)
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    major: "",
    year: "",
    programming: "beginner",
    aiLevel: "beginner",
    why: "",
    portfolio: "",
  })

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!form.name) e.name = "Name is required"
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required"
    if (!form.major) e.major = "Major is required"
    if (!form.year) e.year = "Please select your year"
    if (!form.programming) e.programming = "Select programming experience"
    if (!form.aiLevel) e.aiLevel = "Select AI/ML experience"
    if (!form.why || form.why.length < 20) e.why = "Tell us more (min 20 characters)"
    if (!selectedResume) e.resume = "Resume is required"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    
    try {
      // Upload resume first
      let resumeUrl: string | undefined
      if (selectedResume) {
        resumeUrl = await uploadResume(selectedResume)
      }
      
      // Submit application with resume URL
      await submitApplication({
        name: form.name,
        email: form.email,
        major: form.major,
        year: form.year,
        programming_level: form.programming,
        ai_level: form.aiLevel,
        why_join: form.why,
        portfolio_url: form.portfolio || undefined,
        resume_url: resumeUrl,
      })
      
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and follow up within 48 hours.",
      })
      
      // Reset form
      setForm({
        name: "",
        email: "",
        major: "",
        year: "",
        programming: "beginner",
        aiLevel: "beginner",
        why: "",
        portfolio: "",
      })
      setSelectedResume(null)
      setErrors({})
      
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "Submission failed",
        description: "Please try again or contact us if the problem persists.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/70">
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="mb-3 block">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                placeholder="Purdue Student"
                disabled={submitting}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="mb-3 block">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                placeholder="student@purdue.edu"
                disabled={submitting}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="major" className="mb-3 block">Major</Label>
              <Input
                id="major"
                value={form.major}
                onChange={(e) => setForm({ ...form, major: e.target.value })}
                placeholder="Computer Science, Engineering, etc."
                disabled={submitting}
              />
              {errors.major && (
                <p id="major-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.major}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="year" className="mb-3 block">Year</Label>
              <Select
                value={form.year}
                onValueChange={(value) => setForm({ ...form, year: value })}
                disabled={submitting}
              >
                <SelectTrigger aria-invalid={!!errors.year} aria-describedby="year-error">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Freshman">Freshman</SelectItem>
                  <SelectItem value="Sophomore">Sophomore</SelectItem>
                  <SelectItem value="Junior">Junior</SelectItem>
                  <SelectItem value="Senior">Senior</SelectItem>
                  <SelectItem value="Graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
              {errors.year && (
                <p id="year-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.year}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="programming" className="mb-3 block">Programming Experience</Label>
              <Select
                value={form.programming}
                onValueChange={(value: "beginner" | "intermediate" | "advanced") => 
                  setForm({ ...form, programming: value })
                }
                disabled={submitting}
              >
                <SelectTrigger aria-invalid={!!errors.programming} aria-describedby="programming-error">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                </SelectContent>
              </Select>
              {errors.programming && (
                <p id="programming-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.programming}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="aiLevel" className="mb-3 block">AI/ML Experience</Label>
              <Select
                value={form.aiLevel}
                onValueChange={(value: "beginner" | "intermediate" | "advanced") => 
                  setForm({ ...form, aiLevel: value })
                }
                disabled={submitting}
              >
                <SelectTrigger aria-invalid={!!errors.aiLevel} aria-describedby="aiLevel-error">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                </SelectContent>
              </Select>
              {errors.aiLevel && (
                <p id="aiLevel-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.aiLevel}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="why" className="mb-3 block">Why do you want to join?</Label>
            <Textarea
              id="why"
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
              aria-invalid={!!errors.why}
              aria-describedby="why-error"
              placeholder="Tell us about your interest in AI agents, what you hope to learn, and any relevant experience..."
              rows={4}
              disabled={submitting}
            />
            {errors.why && (
              <p id="why-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.why}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="portfolio" className="mb-3 block">Portfolio/GitHub URL (optional)</Label>
            <Input
              id="portfolio"
              type="url"
              value={form.portfolio}
              onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
              placeholder="https://github.com/username or portfolio link"
              disabled={submitting}
            />
          </div>

          <FileUpload
            onFileSelect={setSelectedResume}
            selectedFile={selectedResume}
            disabled={submitting}
            error={errors.resume}
          />

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  )
}
