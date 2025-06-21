"use client"

import { Car, BarChart3, Route, Clock, Leaf } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const travelServices = [
  {
    id: "shared-bike",
    title: "共享单车",
    description: "随时随地，扫码即骑",
    features: ["无桩停放", "手机扫码解锁", "骑行导航", "智能寻车", "骑行数据统计"],
    icon: "🚲",
    color: "from-green-400 to-green-600",
  },
  {
    id: "shared-car",
    title: "共享汽车",
    description: "按需用车，省心省力",
    features: ["手机预约", "无钥匙开锁", "分时租赁", "智能导航", "自动计费"],
    icon: "🚗",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "smart-bus",
    title: "智能公交",
    description: "实时查询，精准出行",
    features: ["实时到站信息", "线路规划", "拥挤度预测", "站点周边服务", "一键投诉建议"],
    icon: "🚌",
    color: "from-purple-400 to-purple-600",
  },
]

const routeOptions = [
  {
    title: "最快路线",
    description: "优先考虑时间因素",
    icon: <Clock className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "最省钱路线",
    description: "优先考虑成本因素",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "最舒适路线",
    description: "优先考虑舒适度因素",
    icon: <Car className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600",
  },
]

const travelInsights = [
  {
    title: "出行方式分布",
    description: "本月各种出行方式的使用比例",
    chart: "饼图",
  },
  {
    title: "每周出行趋势",
    description: "一周内出行频次的变化趋势",
    chart: "折线图",
  },
]

const suggestions = [
  "周一至周五早高峰期间建议提前15分钟出门",
  "您常用的3号线地铁周末将进行维修，建议选择替代路线",
  "根据您的出行习惯，建议购买月票可节省30%费用",
]

export default function SmartTravelPage() {
  const tabs = [
    {
      id: "services",
      label: "出行服务",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelServices.map((service) => (
            <ModernCard key={service.id} className="text-center group">
              <ModernCardContent>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm">主要功能</h4>
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </ModernCardContent>
              <ModernCardFooter>
                <ModernButton className="w-full">立即使用</ModernButton>
              </ModernCardFooter>
            </ModernCard>
          ))}
        </div>
      ),
    },
    {
      id: "route-planning",
      label: "路线规划",
      content: (
        <div className="space-y-6">
          <div className="cube-card p-4 bg-blue-50 border border-blue-200">
            <p className="text-blue-700">智能路线规划可以帮您找到最优出行方案，节省时间和精力。</p>
          </div>

          <ModernCard>
            <ModernCardHeader
              title="多方式联合出行"
              description="结合多种交通方式，规划最优出行路线"
              icon={<Route className="h-5 w-5" />}
            />
            <ModernCardContent>
              <p className="mb-4 text-gray-700">
                系统会根据您的出行需求，智能组合公交、地铁、共享单车等多种交通方式，为您提供时间最短、成本最低或舒适度最高的出行方案。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {routeOptions.map((option, index) => (
                  <div key={index} className={`p-4 rounded-lg ${option.color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {option.icon}
                      <h4 className="font-medium">{option.title}</h4>
                    </div>
                    <p className="text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </ModernCardContent>
            <ModernCardFooter>
              <ModernButton className="w-full">开始规划路线</ModernButton>
            </ModernCardFooter>
          </ModernCard>
        </div>
      ),
    },
    {
      id: "travel-data",
      label: "出行数据",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">个人出行数据分析</h3>
          <p className="text-gray-600">基于您的出行记录，我们为您提供个性化的出行分析和建议。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelInsights.map((insight, index) => (
              <ModernCard key={index}>
                <ModernCardHeader title={insight.title} />
                <ModernCardContent>
                  <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">{insight.chart}加载中...</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{insight.description}</p>
                </ModernCardContent>
              </ModernCard>
            ))}

            <ModernCard>
              <ModernCardHeader title="碳排放节约" icon={<Leaf className="h-5 w-5" />} />
              <ModernCardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12.5 kg</div>
                  <p className="text-gray-600">本月通过绿色出行节约的碳排放量</p>
                </div>
              </ModernCardContent>
            </ModernCard>

            <ModernCard>
              <ModernCardHeader title="出行建议" />
              <ModernCardContent>
                <div className="space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                      <span className="text-sm text-gray-700">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </ModernCardContent>
            </ModernCard>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            智能出行
          </h1>
          <p className="text-gray-600 text-xl">让城市出行更加便捷、高效、环保</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
