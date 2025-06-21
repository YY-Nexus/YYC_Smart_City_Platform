"use client"

import { UserPlus, MessageCircle, Heart, Clock, Star, Phone } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const companionServices = [
  {
    id: "chat",
    title: "聊天陪伴",
    description: "专业陪护员提供温暖的聊天陪伴",
    icon: <MessageCircle className="h-6 w-6" />,
    features: ["倾听交流", "情感支持", "生活分享", "心理疏导"],
    price: "¥80/小时",
    rating: 4.9,
    bookings: "1200+",
  },
  {
    id: "walk",
    title: "散步陪同",
    description: "陪同老人户外散步，享受阳光时光",
    icon: <UserPlus className="h-6 w-6" />,
    features: ["安全陪护", "路线规划", "健康监测", "紧急处理"],
    price: "¥60/小时",
    rating: 4.8,
    bookings: "800+",
  },
  {
    id: "activity",
    title: "社交活动",
    description: "参与社区活动，扩展社交圈子",
    icon: <Heart className="h-6 w-6" />,
    features: ["活动陪同", "社交引导", "兴趣培养", "团体互动"],
    price: "¥100/次",
    rating: 4.7,
    bookings: "600+",
  },
]

const caregivers = [
  {
    id: "zhang",
    name: "张阿姨",
    age: 45,
    experience: "8年",
    specialty: "心理疏导",
    rating: 4.9,
    reviews: 156,
    description: "温和耐心，擅长倾听，有丰富的老年心理护理经验",
    certifications: ["护理员证", "心理咨询师", "急救证"],
  },
  {
    id: "li",
    name: "李师傅",
    age: 52,
    experience: "10年",
    specialty: "户外陪护",
    rating: 4.8,
    reviews: 203,
    description: "身体健康，熟悉本地环境，户外陪护经验丰富",
    certifications: ["护理员证", "急救证", "健康管理师"],
  },
  {
    id: "wang",
    name: "王大姐",
    age: 48,
    experience: "6年",
    specialty: "生活照料",
    rating: 4.9,
    reviews: 134,
    description: "细心周到，生活照料专业，深受老人喜爱",
    certifications: ["护理员证", "营养师", "急救证"],
  },
]

export default function CompanionServicesPage() {
  const tabs = [
    {
      id: "services",
      label: "陪伴服务",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-red-700 text-sm">
              💝 我们的陪伴服务旨在为老年人提供情感支持和社交互动，让他们感受到温暖和关爱。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companionServices.map((service) => (
              <ModernCard key={service.id} className="group">
                <ModernCardHeader title={service.title} description={service.description} icon={service.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-red-600">{service.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.bookings})</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">服务内容</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></div>
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
      id: "caregivers",
      label: "陪护人员",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caregivers.map((caregiver) => (
              <ModernCard key={caregiver.id} className="group">
                <ModernCardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center">
                      <UserPlus className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-lg">{caregiver.name}</h3>
                    <p className="text-sm text-gray-600">
                      {caregiver.age}岁 · {caregiver.experience}经验
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">专业特长</span>
                      <span className="text-sm font-medium">{caregiver.specialty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">服务评分</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{caregiver.rating}</span>
                        <span className="text-xs text-gray-500">({caregiver.reviews}评价)</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2">{caregiver.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">资质证书</h4>
                      <div className="flex flex-wrap gap-1">
                        {caregiver.certifications.map((cert, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {cert}
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
                      联系
                    </ModernButton>
                    <ModernButton className="flex-1">选择TA</ModernButton>
                  </div>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "booking",
      label: "预约流程",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="预约陪伴服务" icon={<Clock className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">选择服务类型</h4>
                    <p className="text-sm text-gray-600">根据老人需求选择合适的陪伴服务</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">选择陪护人员</h4>
                    <p className="text-sm text-gray-600">查看陪护人员资料，选择合适的服务人员</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">预约时间</h4>
                    <p className="text-sm text-gray-600">选择服务时间，填写详细需求</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">确认服务</h4>
                    <p className="text-sm text-gray-600">陪护人员按时到达，提供专业服务</p>
                  </div>
                </div>
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader title="服务保障" />
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">专业认证</h4>
                  <p className="text-sm text-green-700">所有陪护人员均经过专业培训和资质认证</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">安全保障</h4>
                  <p className="text-sm text-blue-700">提供意外保险，确保服务过程安全可靠</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">服务监督</h4>
                  <p className="text-sm text-purple-700">建立服务监督机制，确保服务质量</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">满意保证</h4>
                  <p className="text-sm text-yellow-700">不满意可申请更换服务人员或退款</p>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
            陪伴服务
          </h1>
          <p className="text-gray-600 text-xl">专业的陪伴服务，让老年人感受温暖关爱，不再孤单</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
