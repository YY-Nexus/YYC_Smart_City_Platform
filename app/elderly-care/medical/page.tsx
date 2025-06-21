"use client"

import { Stethoscope, Pill, Calendar, Phone, MapPin, Clock } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const medicalServices = [
  {
    id: "appointment",
    title: "预约挂号",
    description: "代为预约各大医院专家号",
    icon: <Calendar className="h-6 w-6" />,
    features: ["专家号预约", "普通号预约", "体检预约", "疫苗预约"],
    price: "¥20/次",
    time: "即时服务",
  },
  {
    id: "accompany",
    title: "就医陪护",
    description: "全程陪同就医，专业医疗协助",
    icon: <Stethoscope className="h-6 w-6" />,
    features: ["陪同就诊", "病情记录", "医嘱解释", "检查陪同"],
    price: "¥150/次",
    time: "2-6小时",
  },
  {
    id: "medicine",
    title: "取药服务",
    description: "代为取药，确保用药安全",
    icon: <Pill className="h-6 w-6" />,
    features: ["处方取药", "药品配送", "用药指导", "药品管理"],
    price: "¥30/次",
    time: "1-2小时",
  },
]

const hospitals = [
  {
    name: "市人民医院",
    level: "三甲",
    distance: "2.1km",
    specialties: ["心内科", "神经科", "骨科", "内分泌科"],
    address: "市中心健康路88号",
    phone: "0371-12345678",
  },
  {
    name: "中医院",
    level: "三甲",
    distance: "1.8km",
    specialties: ["中医内科", "针灸科", "推拿科", "康复科"],
    address: "老城区中医街66号",
    phone: "0371-87654321",
  },
  {
    name: "社区卫生服务中心",
    level: "一级",
    distance: "0.5km",
    specialties: ["全科医学", "预防保健", "康复理疗", "慢病管理"],
    address: "社区服务中心一楼",
    phone: "0371-11223344",
  },
]

const medicationReminders = [
  {
    medicine: "降压药",
    time: "每日 8:00",
    dosage: "1片",
    notes: "饭后服用",
    nextTime: "明天 8:00",
  },
  {
    medicine: "降糖药",
    time: "每日 8:00, 18:00",
    dosage: "1片",
    notes: "饭前30分钟",
    nextTime: "今天 18:00",
  },
  {
    medicine: "钙片",
    time: "每日 21:00",
    dosage: "2片",
    notes: "睡前服用",
    nextTime: "今天 21:00",
  },
]

export default function MedicalAssistancePage() {
  const tabs = [
    {
      id: "services",
      label: "医疗服务",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-700 text-sm">🏥 我们提供全方位的医疗协助服务，让老年人就医更便捷、更安心。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medicalServices.map((service) => (
              <ModernCard key={service.id} className="group">
                <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-600">{service.time}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">服务内容</h4>
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
                  <ModernButton className="w-full">立即预约</ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "hospitals",
      label: "医院信息",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <ModernCard key={index} className="group">
                <ModernCardHeader
                  title={hospital.name}
                  description={`${hospital.level}医院 · 距离${hospital.distance}`}
                  icon={<Stethoscope className="h-5 w-5" />}
                />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">地址：</span>
                      <span className="text-sm font-medium">{hospital.address}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">电话：</span>
                      <span className="text-sm font-medium">{hospital.phone}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">特色科室</h4>
                      <div className="flex flex-wrap gap-1">
                        {hospital.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <div className="flex gap-2">
                    <ModernButton variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      电话
                    </ModernButton>
                    <ModernButton className="flex-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      导航
                    </ModernButton>
                  </div>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "medication",
      label: "用药提醒",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="今日用药计划" icon={<Clock className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                {medicationReminders.map((reminder, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{reminder.medicine}</h4>
                      <span className="text-sm text-blue-600 font-medium">{reminder.nextTime}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">服用时间：</span>
                        {reminder.time}
                      </div>
                      <div>
                        <span className="font-medium">用量：</span>
                        {reminder.dosage}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">注意事项：</span>
                      {reminder.notes}
                    </div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
            <ModernCardFooter>
              <ModernButton className="w-full">设置新的用药提醒</ModernButton>
            </ModernCardFooter>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader title="用药安全提示" />
            <ModernCardContent>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">⚠️ 请严格按照医嘱服药，不要随意增减药量</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 text-sm">🚫 如有不良反应，请立即停药并联系医生</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">💊 药品请存放在阴凉干燥处，避免阳光直射</p>
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
            医疗协助
          </h1>
          <p className="text-gray-600 text-xl">提供全方位医疗协助服务，让老年人就医更便捷更安心</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
