import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ModernCardProps {
  children: ReactNode
  className?: string
}

interface ModernCardHeaderProps {
  title: string
  description?: string
  icon?: ReactNode
  className?: string
}

interface ModernCardContentProps {
  children: ReactNode
  className?: string
}

interface ModernCardFooterProps {
  children: ReactNode
  className?: string
}

export function ModernCard({ children, className }: ModernCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ModernCardHeader({ title, description, icon, className }: ModernCardHeaderProps) {
  return (
    <div className={cn("px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white", className)}>
      <div className="flex items-center gap-3">
        {icon && <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
      </div>
    </div>
  )
}

export function ModernCardContent({ children, className }: ModernCardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>
}

export function ModernCardFooter({ children, className }: ModernCardFooterProps) {
  return <div className={cn("px-6 py-4 border-t border-gray-100 bg-gray-50", className)}>{children}</div>
}
