"use client"

import type { ReactNode } from "react"

interface ModernCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

export function ModernCard({ children, className = "", hover = true, padding = "md" }: ModernCardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  return (
    <div className={`cube-card ${paddingMap[padding]} ${hover ? "cursor-pointer" : ""} ${className}`}>{children}</div>
  )
}

interface ModernCardHeaderProps {
  title: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function ModernCardHeader({ title, description, icon, className = "" }: ModernCardHeaderProps) {
  return (
    <div className={`flex items-start gap-3 mb-4 ${className}`}>
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  )
}

export function ModernCardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-gray-700 ${className}`}>{children}</div>
}

export function ModernCardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mt-4 pt-4 border-t border-blue-100 ${className}`}>{children}</div>
}
