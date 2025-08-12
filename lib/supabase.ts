import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types for applications
export interface Application {
  id?: string
  name: string
  email: string
  major: string
  year: string
  programming_level: 'beginner' | 'intermediate' | 'advanced'
  ai_level: 'beginner' | 'intermediate' | 'advanced'
  why_join: string
  portfolio_url?: string
  resume_url?: string
  created_at?: string
  status?: 'pending' | 'reviewed' | 'accepted' | 'rejected'
} 