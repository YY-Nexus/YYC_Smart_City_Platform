"use client"

import { Users, MessageSquare, Calendar, Settings, Bell, MapPin } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const communityServices = [
  {
    id: "notice",
    title: "社区公告",
    description: "查看最新社区通知和公告",
    icon: <Bell className="h-5 w-5" />,
    status: "最新",
    color: "bg-blue-500",
  },
  {
    id: "help",
    title: "邻里互助",
    description: "发布或响应邻里互助需求",
    icon: <Users className="h-5 w-5" />,
    status: "热门",
    color: "bg-green-500",
  },
  {
    id: "property",
    title: "物业服务",
    description: "在线报修、缴费等物业服务",
    icon: <Settings className="h-5 w-5" />,
    status: "常用",
    color: "bg-orange-500",
  },
  {
    id: "activity",
    title: "社区活动",
    description: "查看和报名参加社区活动",
    icon: <Calendar className="h-5 w-5" />,
    status: "推荐",
    color: "bg-purple-500",
  },
]

const facilities = [
  {
    name: "社区活动中心",
    time: "每日 9:00-21:00",
    location: "社区中心一楼",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "健身区",
    time: "每日 6:00-22:00",
    location: "社区公园东侧",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    name: "图书阅览室",
    time: "每日 9:00-18:00",
    location: "社区中心二楼",
    icon: <MessageSquare className="h-5 w-5" />,
  },
]

const news = [
  {
    title: "社区环境提升计划即将启动",
    date: "2024-01-15",
    content: "为提升社区居住环境，我们将于下月启动社区环境提升计划，包括绿化改造、休闲设施更新等多项工作...",
  },
  {
    title: "春节期间服务安排通知",
    date: "2024-01-10",
    content: "春节期间，社区各项服务将按照节日安排进行调整，请居民朋友们提前了解相关安排...",
  },
  {
    title: "新年社区联欢活动报名开始",
    date: "2024-01-05",
    content: "为丰富居民文化生活，社区将举办新年联欢活动，欢迎大家积极参与报名...",
  },
]

export default function SmartCommunityPage() {
  const tabs = [
    {
      id: "services",
      label: "服务项目",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityServices.map((service) => (
            <ModernCard key={service.id} className="text-center group">
              <ModernCardContent>
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-white mx-auto mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{service.status}</span>
                  <ModernButton size="sm">查看详情</ModernButton>
                </div>
              </ModernCardContent>
            </ModernCard>
          ))}
        </div>
      ),
    },
    {
      id: "facilities",
      label: "社区设施",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">社区公共设施</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <ModernCard key={index}>
                <ModernCardHeader title={facility.name} icon={facility.icon} />
                <ModernCardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">开放时间:</span> {facility.time}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">位置:</span> {facility.location}
                    </p>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton variant="outline" className="w-full">
                    预约使用
                  </ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "news",
      label: "社区动态",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">最新动态</h3>
          <div className="space-y-4">
            {news.map((item, index) => (
              <ModernCard key={index}>
                <ModernCardHeader title={item.title} description={`发布时间: ${item.date}`} />
                <ModernCardContent>
                  <p className="text-gray-700">{item.content}</p>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton variant="ghost" size="sm">
                    阅读更多
                  </ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <ModernNavigation />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            智慧社区
          </h1>
          <p className="text-gray-600 text-xl">打造智能化、便捷化的社区生活环境</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
