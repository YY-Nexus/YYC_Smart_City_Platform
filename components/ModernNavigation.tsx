"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Bell, User, ChevronDown } from "lucide-react"
import { Logo } from "@/components/Logo"

const navigationItems = [
  {
    id: "home",
    label: "首页",
    href: "/",
  },
  {
    id: "city-empowerment",
    label: "城市赋能",
    href: "/city-empowerment",
    children: [
      { label: "智慧社区", href: "/city-empowerment/smart-community" },
      { label: "城市服务", href: "/city-empowerment/services" },
      { label: "公共资源", href: "/city-empowerment/resources" },
    ],
  },
  {
    id: "elderly-care",
    label: "关爱老人",
    href: "/elderly-care",
    children: [
      { label: "健康监测", href: "/elderly-care/health-monitoring" },
      { label: "陪护服务", href: "/elderly-care/companion" },
      { label: "医疗协助", href: "/elderly-care/medical" },
    ],
  },
  {
    id: "smart-living",
    label: "智能生活",
    href: "/smart-living",
    children: [
      { label: "智能出行", href: "/smart-living/smart-travel" },
      { label: "智能家居", href: "/smart-living/smart-home" },
      { label: "数字助手", href: "/smart-living/assistant" },
    ],
  },
]

export function ModernNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const handleDropdownToggle = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  return (
    <nav className="cube-nav sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* 下拉菜单 */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="cube-card p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            pathname === child.href
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 右侧操作区 */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="cube-button px-4 py-2 text-sm">登录</button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => handleDropdownToggle(item.id)}
                        className="p-2 text-gray-500 hover:text-blue-600"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${activeDropdown === item.id ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* 移动端子菜单 */}
                  {item.children && activeDropdown === item.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            pathname === child.href
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 移动端操作按钮 */}
            <div className="mt-4 pt-4 border-t border-blue-100 flex items-center justify-center space-x-4">
              <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="cube-button px-4 py-2 text-sm">登录</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
