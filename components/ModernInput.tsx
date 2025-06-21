"use client"

import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react"

interface ModernInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
  rightIcon?: ReactNode
}

export const ModernInput = forwardRef<HTMLInputElement, ModernInputProps>(
  ({ label, error, icon, rightIcon, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>}
          <input
            ref={ref}
            className={`cube-input w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 ${
              icon ? "pl-10" : ""
            } ${rightIcon ? "pr-10" : ""} ${error ? "border-red-300" : ""} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">{rightIcon}</div>
          )}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    )
  },
)

ModernInput.displayName = "ModernInput"
