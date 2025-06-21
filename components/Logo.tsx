"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32, textSize: "text-lg" },
    md: { width: 48, height: 48, textSize: "text-xl" },
    lg: { width: 64, height: 64, textSize: "text-2xl" },
  }

  const { width, height, textSize } = sizeMap[size]

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="logo-3d">
        <Image src="/logo.png" alt="言语同城 Logo" width={width} height={height} className="object-contain" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-800 ${textSize}`}>言语·同城</span>
          <span className="text-xs text-gray-500">智慧生活服务平台</span>
        </div>
      )}
    </Link>
  )
}
