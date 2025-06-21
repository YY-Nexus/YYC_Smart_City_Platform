"use client"

import type React from "react"

import { useState } from "react"
import { User, Lock, Eye, EyeOff } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { ModernInput } from "@/components/ModernInput"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里处理登录逻辑
    console.log("登录信息:", formData)
  }

  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="flex flex-col items-center justify-center py-12">
          <ModernCard className="w-full max-w-md">
            <ModernCardHeader title="用户登录" description="欢迎回到言语·智慧同城" />
            <ModernCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <ModernInput
                  label="用户名"
                  type="text"
                  placeholder="请输入用户名"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  icon={<User className="h-5 w-5" />}
                  required
                />

                <ModernInput
                  label="密码"
                  type={showPassword ? "text" : "password"}
                  placeholder="请输入密码"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  icon={<Lock className="h-5 w-5" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  }
                  required
                />

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">记住我</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    忘记密码？
                  </a>
                </div>

                <ModernButton type="submit" className="w-full">
                  登录
                </ModernButton>
              </form>
            </ModernCardContent>
            <ModernCardFooter>
              <div className="text-center text-sm text-gray-600">
                还没有账户？{" "}
                <a href="/register" className="text-blue-600 hover:text-blue-700">
                  立即注册
                </a>
              </div>
            </ModernCardFooter>
          </ModernCard>
        </div>
      </div>
    </div>
  )
}
