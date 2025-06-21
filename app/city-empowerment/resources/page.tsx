"use client"

import { Book, Dumbbell, Music, Users, Calendar } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const publicFacilities = [
  {
    id: "library",
    title: "市图书馆",
    description: "丰富的图书资源，安静的学习环境",
    icon: <Book className="h-6 w-6" />,
    address: "市中心文化路123号",
    hours: "周一至周日 8:00-22:00",
    features: ["免费借阅", "自习室", "电子阅览", "讲座活动"],
    capacity: "可容纳800人",
    status: "开放中",
  },
  {
    id: "sports-center",
    title: "体育中心",
    description: "现代化体育设施，全民健身场所",
    icon: <Dumbbell className="h-6 w-6" />,
    address: "新区体育大道88号",
    hours: "每日 6:00-22:00",
    features: ["游泳池", "健身房", "篮球场", "羽毛球场"],
    capacity: "可容纳1200人",
    status: "开放中",
  },
  {
    id: "cultural-center",
    title: "文化中心",
    description: "艺术展览，文化活动的重要场所",
    icon: <Music className="h-6 w-6" />,
    address: "老城区文化街56号",
    hours: "周二至周日 9:00-17:00",
    features: ["展览厅", "演出厅", "培训室", "创作空间"],
    capacity: "可容纳500人",
    status: "开放中",
  },
]

const reservationRules = [
  {
    title: "预约时间",
    content: "提前1-7天预约，当日不接受预约",
  },
  {
    title: "取消政策",
    content: "提前2小时可免费取消，逾期取消将影响信用",
  },
  {
    title: "使用规则",
    content: "请按时到场，爱护公共设施，遵守场所规定",
  },
  {
    title: "费用说明",
    content: "基础设施免费使用，特殊设备可能收取少量费用",
  },
]

export default function PublicResourcesPage() {
  const tabs = [
    {
      id: "facilities",
      label: "公共设施",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm">
              🏛️ 所有公共设施均可在线预约，部分设施提供免费使用，让市民享受优质的公共服务。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicFacilities.map((facility) => (
              <ModernCard key={facility.id} className="group">
                <ModernCardHeader title={facility.title} description={facility.description} icon={facility.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">地址：</span>
                      <span className="text-sm font-medium">{facility.address}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">开放时间：</span>
                      <span className="text-sm font-medium">{facility.hours}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">容量：</span>
                      <span className="text-sm font-medium">{facility.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">状态</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        {facility.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">设施特色</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {facility.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton className="w-full">立即预约</ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "reservation",
      label: "预约规则",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="预约使用规则" icon={<Calendar className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                {reservationRules.map((rule, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{rule.title}</h4>
                    <p className="text-sm text-gray-700">{rule.content}</p>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader title="预约流程" icon={<Users className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">选择设施</h4>
                    <p className="text-sm text-gray-600">浏览可用的公共设施，查看详细信息</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">选择时间</h4>
                    <p className="text-sm text-gray-600">选择合适的使用时间段</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">确认预约</h4>
                    <p className="text-sm text-gray-600">填写使用信息，确认预约</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">按时使用</h4>
                    <p className="text-sm text-gray-600">按预约时间到场使用，遵守使用规则</p>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            公共资源
          </h1>
          <p className="text-gray-600 text-xl">优化公共资源配置与共享利用，提升市民生活品质</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
