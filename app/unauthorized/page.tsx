"use client"

import { ShieldAlert, Home, LogIn } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardContent } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="flex flex-col items-center justify-center py-12">
          <ModernCard className="max-w-md text-center">
            <ModernCardContent>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="h-8 w-8 text-red-600" />
              </div>

              <h1 className="text-2xl font-bold mb-4 text-gray-800">访问受限</h1>
              <p className="text-gray-600 mb-8">
                您当前的用户角色没有权限访问此页面。请联系管理员或切换到具有适当权限的账户。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <ModernButton className="flex-1" onClick={() => (window.location.href = "/")}>
                  <Home className="h-4 w-4 mr-2" />
                  返回首页
                </ModernButton>
                <ModernButton variant="outline" className="flex-1" onClick={() => (window.location.href = "/login")}>
                  <LogIn className="h-4 w-4 mr-2" />
                  登录其他账户
                </ModernButton>
              </div>
            </ModernCardContent>
          </ModernCard>
        </div>
      </div>
    </div>
  )
}
