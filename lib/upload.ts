import { supabase } from './supabase'

export async function uploadResume(file: File): Promise<string> {
  try {
    // Validate file type
    if (file.type !== 'application/pdf') {
      throw new Error('Only PDF files are allowed')
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size must be less than 5MB')
    }

    // Generate unique filename
    const timestamp = Date.now()
    const fileName = `resumes/${timestamp}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('applications')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Upload error:', error)
      throw new Error(error.message)
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('applications')
      .getPublicUrl(fileName)

    return urlData.publicUrl
  } catch (error) {
    console.error('Resume upload error:', error)
    throw error
  }
}

export async function deleteResume(fileUrl: string): Promise<void> {
  try {
    // Extract filename from URL
    const url = new URL(fileUrl)
    const pathParts = url.pathname.split('/')
    const fileName = pathParts.slice(-2).join('/') // Get 'resumes/filename.pdf'

    const { error } = await supabase.storage
      .from('applications')
      .remove([fileName])

    if (error) {
      console.error('Delete error:', error)
      throw new Error(error.message)
    }
  } catch (error) {
    console.error('Resume deletion error:', error)
    throw error
  }
} 