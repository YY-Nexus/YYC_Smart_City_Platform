"use client"

import { Building2, Users, Recycle, Landmark, Leaf, ArrowRight } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"

const cityServices = [
  {
    id: "smart-community",
    title: "智慧社区",
    description: "打造智能化、便捷化的社区生活环境",
    icon: <Users className="h-6 w-6" />,
    features: ["社区公告", "邻里互助", "物业服务", "活动组织"],
    href: "/city-empowerment/smart-community",
  },
  {
    id: "city-services",
    title: "城市服务",
    description: "提供便捷高效的城市生活服务",
    icon: <Building2 className="h-6 w-6" />,
    features: ["政务服务", "公共交通", "便民服务", "信息查询"],
    href: "/city-empowerment/services",
  },
  {
    id: "urban-renewal",
    title: "城市更新",
    description: "推动城市有机更新与可持续发展",
    icon: <Recycle className="h-6 w-6" />,
    features: ["旧城改造", "基础设施", "环境提升", "文化保护"],
    href: "/city-empowerment/urban-renewal",
  },
  {
    id: "public-resources",
    title: "公共资源",
    description: "优化公共资源配置与共享利用",
    icon: <Landmark className="h-6 w-6" />,
    features: ["资源共享", "设施预约", "场地租赁", "设备管理"],
    href: "/city-empowerment/public-resources",
  },
  {
    id: "city-governance",
    title: "城市治理",
    description: "创新城市治理模式与手段",
    icon: <Building2 className="h-6 w-6" />,
    features: ["数字治理", "民意收集", "决策参与", "监督反馈"],
    href: "/city-empowerment/governance",
  },
  {
    id: "environmental-protection",
    title: "环境保护",
    description: "推动城市绿色低碳发展",
    icon: <Leaf className="h-6 w-6" />,
    features: ["环境监测", "绿色出行", "垃圾分类", "节能减排"],
    href: "/city-empowerment/environment",
  },
]

export default function CityEmpowermentPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            城市赋能
          </h1>
          <p className="text-gray-600 text-xl">通过科技与服务，提升城市生活品质，促进城市可持续发展</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityServices.map((service) => (
            <ModernCard key={service.id} className="group">
              <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
              <ModernCardContent>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{feature}</span>
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
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
