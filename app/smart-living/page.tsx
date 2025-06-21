"use client"

import { Lightbulb, Home, Zap, Shield, Smartphone, Car, ArrowRight } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"

const smartServices = [
  {
    id: "smart-home",
    title: "智能家居",
    description: "打造智能化家居环境",
    icon: <Home className="h-6 w-6" />,
    features: ["智能控制", "场景联动", "远程操作", "语音交互"],
    href: "/smart-living/smart-home",
  },
  {
    id: "digital-assistant",
    title: "数字助手",
    description: "提供智能化生活助理服务",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["语音交互", "信息查询", "日程管理", "智能提醒"],
    href: "/smart-living/digital-assistant",
  },
  {
    id: "automated-services",
    title: "自动化服务",
    description: "实现生活场景智能联动",
    icon: <Zap className="h-6 w-6" />,
    features: ["自动执行", "情景模式", "智能推荐", "习惯学习"],
    href: "/smart-living/automated-services",
  },
  {
    id: "smart-security",
    title: "智能安防",
    description: "提供全方位安全保障",
    icon: <Shield className="h-6 w-6" />,
    features: ["智能门锁", "监控摄像", "异常检测", "紧急报警"],
    href: "/smart-living/security",
  },
  {
    id: "connected-devices",
    title: "互联设备",
    description: "打造全屋智能设备互联",
    icon: <Smartphone className="h-6 w-6" />,
    features: ["设备互联", "数据同步", "统一控制", "云端管理"],
    href: "/smart-living/devices",
  },
  {
    id: "smart-travel",
    title: "智能出行",
    description: "让城市出行更加便捷高效",
    icon: <Car className="h-6 w-6" />,
    features: ["路线规划", "实时导航", "共享出行", "绿色出行"],
    href: "/smart-living/smart-travel",
  },
]

export default function SmartLiving() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            智能生活
          </h1>
          <p className="text-gray-600 text-xl">运用智能科技，打造便捷舒适的现代生活方式</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smartServices.map((service) => (
            <ModernCard key={service.id} className="group">
              <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
              <ModernCardContent>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{feature}</span>
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                  ))}
                </div>
              </ModernCardContent>
              <ModernCardFooter>
                <ModernButton className="w-full group-hover:shadow-lg transition-shadow">
                  了解详情
                  <ArrowRight className="h-4 w-4 ml-2" />
                </ModernButton>
              </ModernCardFooter>
            </ModernCard>
          ))}
        </div>
      </div>
    </div>
  )
}
