"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, FileText, X, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  onFileSelect: (file: File | null) => void
  selectedFile: File | null
  disabled?: boolean
  error?: string
  className?: string
}

export function FileUpload({ 
  onFileSelect, 
  selectedFile, 
  disabled = false, 
  error,
  className 
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFile(file)) {
        onFileSelect(file)
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFile(file)) {
        onFileSelect(file)
      }
    }
  }

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file')
      return false
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB
      alert('File size must be less than 5MB')
      return false
    }
    
    return true
  }

  const removeFile = () => {
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor="resume">Resume (PDF)</Label>
      
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          dragActive 
            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" 
            : "border-neutral-300 dark:border-neutral-700",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          id="resume"
          accept=".pdf"
          onChange={handleFileSelect}
          disabled={disabled}
          className="hidden"
        />

        {!selectedFile ? (
          <div className="space-y-2">
            <Upload className="mx-auto h-8 w-8 text-neutral-400" />
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                PDF files only, max 5MB
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled}
            >
              Select PDF
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-indigo-600" />
              <div className="text-left">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={removeFile}
              disabled={disabled}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
} 