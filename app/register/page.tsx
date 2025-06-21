"use client"

import type React from "react"

import { useState } from "react"
import { User, Lock, Mail, Phone, Eye, EyeOff } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { ModernInput } from "@/components/ModernInput"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里处理注册逻辑
    console.log("注册信息:", formData)
  }

  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="flex flex-col items-center justify-center py-12">
          <ModernCard className="w-full max-w-md">
            <ModernCardHeader title="用户注册" description="加入言语·智慧同城大家庭" />
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
                  label="邮箱"
                  type="email"
                  placeholder="请输入邮箱地址"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  icon={<Mail className="h-5 w-5" />}
                  required
                />

                <ModernInput
                  label="手机号"
                  type="tel"
                  placeholder="请输入手机号"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  icon={<Phone className="h-5 w-5" />}
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

                <ModernInput
                  label="确认密码"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="请再次输入密码"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  icon={<Lock className="h-5 w-5" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  }
                  required
                />

                <div className="text-sm">
                  <label className="flex items-start">
                    <input type="checkbox" className="mr-2 mt-1" required />
                    <span className="text-gray-600">
                      我已阅读并同意{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        用户协议
                      </a>{" "}
                      和{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        隐私政策
                      </a>
                    </span>
                  </label>
                </div>

                <ModernButton type="submit" className="w-full">
                  注册
                </ModernButton>
              </form>
            </ModernCardContent>
            <ModernCardFooter>
              <div className="text-center text-sm text-gray-600">
                已有账户？{" "}
                <a href="/login" className="text-blue-600 hover:text-blue-700">
                  立即登录
                </a>
              </div>
            </ModernCardFooter>
          </ModernCard>
        </div>
      </div>
    </div>
  )
}
