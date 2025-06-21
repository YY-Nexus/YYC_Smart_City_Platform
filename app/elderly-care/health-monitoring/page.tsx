"use client"

import { Activity, Heart, Smartphone, AlertTriangle, TrendingUp } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const monitoringDevices = [
  {
    id: "watch",
    title: "智能手表",
    description: "实时监测心率、血压、睡眠质量",
    features: ["心率监测", "血压监测", "睡眠分析", "SOS紧急呼叫", "跌倒检测"],
    price: "¥899",
    image: "/placeholder.svg?height=100&width=100&text=智能手表",
  },
  {
    id: "bracelet",
    title: "健康手环",
    description: "轻便佩戴，长效续航，基础健康监测",
    features: ["活动追踪", "心率监测", "睡眠分析", "久坐提醒", "防水设计"],
    price: "¥299",
    image: "/placeholder.svg?height=100&width=100&text=健康手环",
  },
  {
    id: "pendant",
    title: "智能挂坠",
    description: "一键呼叫，定位追踪，适合高龄老人",
    features: ["一键求助", "GPS定位", "地理围栏", "电话通话", "长效电池"],
    price: "¥199",
    image: "/placeholder.svg?height=100&width=100&text=智能挂坠",
  },
]

const healthReports = [
  {
    title: "每日健康概览",
    description: "查看每日活动量、心率变化、睡眠质量等健康指标的汇总报告",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "月度健康趋势",
    description: "分析月度健康数据变化趋势，提供个性化健康建议和改善方案",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

const alertSettings = [
  {
    title: "心率异常提醒",
    description: "当心率超出设定范围时发送提醒",
    enabled: true,
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "血压异常提醒",
    description: "当血压超出设定范围时发送提醒",
    enabled: true,
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "跌倒检测提醒",
    description: "当检测到可能的跌倒情况时发送紧急提醒",
    enabled: true,
    icon: <AlertTriangle className="h-5 w-5" />,
  },
]

export default function HealthMonitoringPage() {
  const tabs = [
    {
      id: "devices",
      label: "监测设备",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monitoringDevices.map((device) => (
            <ModernCard key={device.id} className="text-center group">
              <ModernCardContent>
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{device.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{device.description}</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm">主要功能</h4>
                  <div className="space-y-1">
                    {device.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-600 mb-4">{device.price}</div>
              </ModernCardContent>
              <ModernCardFooter>
                <ModernButton className="w-full">了解详情</ModernButton>
              </ModernCardFooter>
            </ModernCard>
          ))}
        </div>
      ),
    },
    {
      id: "reports",
      label: "健康报告",
      content: (
        <div className="space-y-6">
          <div className="cube-card p-4 bg-blue-50 border border-blue-200">
            <p className="text-blue-700 text-sm">健康报告功能需要绑定智能设备并授权数据访问。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthReports.map((report, index) => (
              <ModernCard key={index}>
                <ModernCardHeader title={report.title} icon={report.icon} />
                <ModernCardContent>
                  <p className="text-gray-700">{report.description}</p>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton variant="outline" className="w-full">
                    查看示例
                  </ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "alerts",
      label: "异常提醒",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">异常提醒设置</h3>
          <p className="text-gray-600">
            您可以为老年人设置健康指标异常提醒，当监测到异常数据时，系统将通知您和其他紧急联系人。
          </p>

          <div className="space-y-4">
            {alertSettings.map((setting, index) => (
              <ModernCard key={index}>
                <ModernCardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                        {setting.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{setting.title}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          setting.enabled ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {setting.enabled ? "已启用" : "已禁用"}
                      </span>
                    </div>
                  </div>
                </ModernCardContent>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
            健康监测
          </h1>
          <p className="text-gray-600 text-xl">通过智能设备实时监测老年人健康状况，及时发现健康隐患</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
