"use client"

import { Heart, Activity, UserPlus, Stethoscope, Utensils, Music, ArrowRight } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"

const elderlyServices = [
  {
    id: "home-care",
    title: "居家照护",
    description: "提供专业的居家照护服务",
    icon: <Heart className="h-6 w-6" />,
    features: ["日常照料", "个人护理", "康复训练", "安全监护"],
    href: "/elderly-care/home-care",
  },
  {
    id: "health-monitoring",
    title: "健康监测",
    description: "实时监测老年人健康状况",
    icon: <Activity className="h-6 w-6" />,
    features: ["生命体征", "健康档案", "异常预警", "数据分析"],
    href: "/elderly-care/health-monitoring",
  },
  {
    id: "companion-services",
    title: "陪伴服务",
    description: "解决老年人精神孤独问题",
    icon: <UserPlus className="h-6 w-6" />,
    features: ["聊天陪伴", "散步陪同", "社交活动", "心理疏导"],
    href: "/elderly-care/companion",
  },
  {
    id: "medical-assistance",
    title: "医疗协助",
    description: "提供医疗就诊全程协助",
    icon: <Stethoscope className="h-6 w-6" />,
    features: ["就医陪同", "取药服务", "预约挂号", "用药提醒"],
    href: "/elderly-care/medical",
  },
  {
    id: "elderly-meals",
    title: "老年餐饮",
    description: "提供适合老年人的营养餐食",
    icon: <Utensils className="h-6 w-6" />,
    features: ["营养配餐", "送餐服务", "特殊饮食", "健康指导"],
    href: "/elderly-care/meals",
  },
  {
    id: "activity-centers",
    title: "活动中心",
    description: "组织丰富多彩的老年活动",
    icon: <Music className="h-6 w-6" />,
    features: ["文化娱乐", "健身锻炼", "技能学习", "社交聚会"],
    href: "/elderly-care/activities",
  },
]

export default function ElderlyCare() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
            关爱老人
          </h1>
          <p className="text-gray-600 text-xl">为老年人提供全方位的关怀与服务，提升晚年生活品质</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elderlyServices.map((service) => (
            <ModernCard key={service.id} className="group">
              <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
              <ModernCardContent>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{feature}</span>
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
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
