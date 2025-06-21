"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: "首页", href: "/" }]

    if (pathname === "/") return breadcrumbs

    const paths = pathname.split("/").filter(Boolean)
    let currentPath = ""

    // 路径映射
    const pathMap: Record<string, string> = {
      "city-empowerment": "城市赋能",
      "elderly-care": "关爱老人",
      "smart-living": "智能生活",
      "smart-community": "智慧社区",
      "health-monitoring": "健康监测",
      "smart-travel": "智能出行",
      services: "服务项目",
      facilities: "社区设施",
      news: "社区动态",
    }

    for (let i = 0; i < paths.length; i++) {
      currentPath += `/${paths[i]}`
      const label = pathMap[paths[i]] || paths[i].charAt(0).toUpperCase() + paths[i].slice(1).replace(/-/g, " ")

      breadcrumbs.push({
        label,
        href: currentPath,
      })
    }

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <nav className="breadcrumb-3d mb-6">
      <div className="flex items-center text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.href} className="flex items-center">
            {index === 0 ? (
              <Link href={breadcrumb.href} className="breadcrumb-item flex items-center">
                <Home size={14} className="mr-1" />
                <span>{breadcrumb.label}</span>
              </Link>
            ) : index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-item active">{breadcrumb.label}</span>
            ) : (
              <Link href={breadcrumb.href} className="breadcrumb-item">
                {breadcrumb.label}
              </Link>
            )}

            {index < breadcrumbs.length - 1 && <ChevronRight size={14} className="breadcrumb-separator" />}
          </div>
        ))}
      </div>
    </nav>
  )
}
