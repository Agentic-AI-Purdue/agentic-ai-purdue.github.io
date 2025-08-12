import { supabase, type Application } from './supabase'

export async function submitApplication(application: Omit<Application, 'id' | 'created_at' | 'status'>) {
  try {
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          name: application.name,
          email: application.email,
          purdue_id: application.purdue_id,
          year_major: application.year_major,
          programming_level: application.programming_level,
          ai_level: application.ai_level,
          why_join: application.why_join,
          portfolio_url: application.portfolio_url || null,
          resume_url: application.resume_url || null,
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting application:', error)
      throw new Error(error.message)
    }

    return { success: true, data: data?.[0] }
  } catch (error) {
    console.error('Error submitting application:', error)
    throw error
  }
}

export async function getApplications() {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching applications:', error)
      throw new Error(error.message)
    }

    return data
  } catch (error) {
    console.error('Error fetching applications:', error)
    throw error
  }
} 