"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface PageLoaderProps {
  isLoading?: boolean
  onLoadComplete?: () => void
}

export function PageLoader({ isLoading = true, onLoadComplete }: PageLoaderProps) {
  const [loading, setLoading] = useState(isLoading)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(false)
        onLoadComplete?.()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading, onLoadComplete])

  if (!loading) return null

  return (
    <div className="page-loader">
      <div className="flex flex-col items-center gap-6">
        <div className="logo-spinner">
          <Image src="/logo.png" alt="言语同城 Logo" width={120} height={120} className="logo-3d" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">言语·智慧同城</h2>
          <p className="text-gray-500">正在为您加载精彩内容...</p>
        </div>
        <div className="progress-3d w-64 h-2">
          <div className="progress-bar-3d w-full"></div>
        </div>
      </div>
    </div>
  )
}
