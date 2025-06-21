"use client"

import { Building2, FileText, CreditCard, Phone, MapPin, Clock } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const governmentServices = [
  {
    id: "certificate",
    title: "证件办理",
    description: "身份证、护照、驾驶证等证件办理",
    icon: <FileText className="h-6 w-6" />,
    features: ["在线预约", "材料清单", "进度查询", "快递送达"],
    status: "可办理",
    time: "3-5个工作日",
  },
  {
    id: "tax",
    title: "税务服务",
    description: "个人所得税、企业税务申报",
    icon: <CreditCard className="h-6 w-6" />,
    features: ["在线申报", "税务咨询", "发票管理", "退税申请"],
    status: "可办理",
    time: "即时办理",
  },
  {
    id: "social-security",
    title: "社保服务",
    description: "社保查询、医保报销、养老保险",
    icon: <Building2 className="h-6 w-6" />,
    features: ["缴费查询", "待遇申领", "转移接续", "政策咨询"],
    status: "可办理",
    time: "1-3个工作日",
  },
]

const publicServices = [
  {
    id: "transport",
    title: "公共交通",
    description: "公交、地铁、出租车信息查询",
    icon: <MapPin className="h-6 w-6" />,
    features: ["实时查询", "路线规划", "票价查询", "站点信息"],
  },
  {
    id: "utilities",
    title: "公用事业",
    description: "水电气缴费、报修、查询",
    icon: <Building2 className="h-6 w-6" />,
    features: ["在线缴费", "故障报修", "用量查询", "服务预约"],
  },
  {
    id: "emergency",
    title: "应急服务",
    description: "紧急救援、灾害预警、安全提醒",
    icon: <Phone className="h-6 w-6" />,
    features: ["一键报警", "灾害预警", "避难指南", "应急联系"],
  },
]

export default function CityServicesPage() {
  const tabs = [
    {
      id: "government",
      label: "政务服务",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-700 text-sm">
              💡 提示：大部分政务服务已实现在线办理，您可以通过手机或电脑随时随地办事。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentServices.map((service) => (
              <ModernCard key={service.id} className="group">
                <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">办理状态</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        {service.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">办理时长</span>
                      <span className="text-sm font-medium">{service.time}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">服务特色</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton className="w-full">立即办理</ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "public",
      label: "公共服务",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publicServices.map((service) => (
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
                <ModernButton className="w-full">查看详情</ModernButton>
              </ModernCardFooter>
            </ModernCard>
          ))}
        </div>
      ),
    },
    {
      id: "hours",
      label: "服务时间",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="服务时间安排" icon={<Clock className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">在线服务</h4>
                    <p className="text-sm text-blue-700">24小时全天候服务</p>
                    <p className="text-xs text-blue-600 mt-1">随时随地，便民高效</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">窗口服务</h4>
                    <p className="text-sm text-green-700">周一至周五 9:00-17:00</p>
                    <p className="text-xs text-green-600 mt-1">节假日正常休息</p>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">紧急服务</h4>
                  <p className="text-sm text-yellow-700">24小时应急响应热线：12345</p>
                  <p className="text-xs text-yellow-600 mt-1">突发事件、紧急求助</p>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            城市服务
          </h1>
          <p className="text-gray-600 text-xl">提供便捷高效的城市生活服务，让办事更简单</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
