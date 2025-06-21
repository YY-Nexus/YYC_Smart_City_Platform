"use client"

import { useState, useEffect } from "react"
import { Search, TrendingUp, Users, Star, Clock, ArrowRight, Zap, Heart, Home } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { ModernInput } from "@/components/ModernInput"
import { PageLoader } from "@/components/PageLoader"
import { Breadcrumb } from "@/components/Breadcrumb"
import { DateTime } from "@/components/DateTime"
import { CityVoiceBroadcast } from "@/components/CityVoiceBroadcast"
import { XiaoYuAssistant } from "@/components/XiaoYuAssistant"

const statsData = [
  {
    title: "活跃用户",
    value: "12,847",
    change: "+12.5%",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "今日订单",
    value: "1,234",
    change: "+8.2%",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "服务满意度",
    value: "98.5%",
    change: "+0.8%",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "响应时间",
    value: "< 5分钟",
    change: "-15%",
    icon: <Clock className="h-5 w-5" />,
  },
]

const serviceCategories = [
  {
    id: "home-services",
    title: "居家服务",
    description: "专业家政，品质生活",
    icon: <Home className="h-6 w-6" />,
    services: ["家居保洁", "家电维修", "上门烹饪", "管道疏通"],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "elderly-care",
    title: "关爱老人",
    description: "贴心照护，温暖陪伴",
    icon: <Heart className="h-6 w-6" />,
    services: ["陪护服务", "健康监测", "就医陪护", "生活照料"],
    color: "from-red-400 to-red-600",
  },
  {
    id: "smart-living",
    title: "智能生活",
    description: "科技赋能，智慧便民",
    icon: <Zap className="h-6 w-6" />,
    services: ["智能家居", "AI助手", "物联设备", "自动化服务"],
    color: "from-purple-400 to-purple-600",
  },
]

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PageLoader isLoading={loading} />
  }

  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <CityVoiceBroadcast />
      <XiaoYuAssistant />

      <div className="container mx-auto px-4 py-8 mt-10">
        <Breadcrumb />

        {/* 头部区域 */}
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              言语·智慧同城
            </h1>
            <p className="text-gray-600 text-xl">AI驱动的现代化同城服务平台 · 让生活更智能更便捷</p>
            <p className="text-sm text-purple-600 mt-2">💜 小语智能管家为您提供24小时贴心服务</p>
          </div>
          <DateTime />
        </div>

        {/* 搜索区域 */}
        <div className="mb-8">
          <ModernCard className="max-w-2xl mx-auto">
            <ModernInput
              placeholder="智能搜索：告诉我您需要什么服务..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-5 w-5" />}
              rightIcon={
                <ModernButton size="sm" className="!p-2">
                  搜索
                </ModernButton>
              }
              className="text-lg py-4"
            />
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500">💡 试试问小语："附近有什么好吃的？" 或 "今天天气怎么样？"</span>
            </div>
          </ModernCard>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <ModernCard key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
              <div className="flex items-center justify-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.change}
              </div>
            </ModernCard>
          ))}
        </div>

        {/* 服务分类 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">热门服务分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <ModernCard key={category.id} className="text-center group">
                <ModernCardHeader
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  className="justify-center text-center"
                />
                <ModernCardContent>
                  <div className="space-y-2">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                      >
                        <span className="text-sm text-gray-700">{service}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton className="w-full">
                    查看更多
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>

        {/* 快捷操作 */}
        <ModernCard>
          <ModernCardHeader title="快捷操作" description="一键访问常用功能" icon={<Zap className="h-5 w-5" />} />
          <ModernCardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "紧急服务", icon: "🚨", urgent: true },
                { label: "预约服务", icon: "📅" },
                { label: "我的订单", icon: "📋" },
                { label: "服务反馈", icon: "💬" },
              ].map((action, index) => (
                <ModernButton
                  key={index}
                  variant={action.urgent ? "primary" : "outline"}
                  className="h-20 flex-col gap-2"
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-sm">{action.label}</span>
                </ModernButton>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>
      </div>
    </div>
  )
}
