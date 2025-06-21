"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Search } from "lucide-react"
import { ModernInput } from "@/components/ModernInput"
import { ModernButton } from "@/components/ModernButton"
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardFooter } from "@/components/ModernCard"
import { ModernTabs } from "@/components/ModernTabs"

// 简化的数据结构
interface DataItem {
  id: string
  scene: string
  component: string
  subComponent: string
  functions: string[]
  icon: string
}

// 示例数据
const sampleData: DataItem[] = [
  {
    id: "user-orders-all",
    scene: "用户端",
    component: "我的订单",
    subComponent: "全部订单",
    functions: ["查看订单", "订单详情", "取消订单", "评价服务"],
    icon: "📋",
  },
  {
    id: "user-home-cleaning",
    scene: "用户端",
    component: "居家服务",
    subComponent: "家居保洁",
    functions: ["预约服务", "选择时间", "支付订单", "服务评价"],
    icon: "🏠",
  },
  {
    id: "admin-users",
    scene: "管理端",
    component: "用户管理",
    subComponent: "用户列表",
    functions: ["用户列表", "用户详情", "用户编辑", "权限管理"],
    icon: "🧑‍💼",
  },
  {
    id: "admin-orders",
    scene: "管理端",
    component: "订单管理",
    subComponent: "订单监控",
    functions: ["订单统计", "订单分析", "异常处理", "数据导出"],
    icon: "📊",
  },
  {
    id: "housekeeper-order-hall",
    scene: "阿姨端",
    component: "抢单大厅",
    subComponent: "订单展示",
    functions: ["订单信息", "立即抢单", "刷新页面", "抢单统计"],
    icon: "🏃",
  },
  {
    id: "housekeeper-my-orders",
    scene: "阿姨端",
    component: "我的订单",
    subComponent: "服务订单",
    functions: ["订单列表", "服务详情", "完成服务", "收入统计"],
    icon: "💼",
  },
]

export default function InteractiveCardsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCards, setExpandedCards] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("用户端")

  const toggleCard = (id: string) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id))
    } else {
      setExpandedCards([...expandedCards, id])
    }
  }

  // 按场景过滤数据
  const filteredData = sampleData.filter((item) => item.scene === activeTab)

  // 按搜索词过滤
  const searchFilteredData = filteredData.filter(
    (item) =>
      searchTerm === "" ||
      item.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subComponent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.functions.some((func) => func.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // 按组件名称分组
  const groupedData = searchFilteredData.reduce(
    (acc, item) => {
      if (!acc[item.component]) {
        acc[item.component] = []
      }
      acc[item.component].push(item)
      return acc
    },
    {} as Record<string, DataItem[]>,
  )

  const tabs = [
    {
      id: "user",
      label: "用户端",
      content: <div>用户端功能模块</div>,
    },
    {
      id: "admin",
      label: "管理端",
      content: <div>管理端功能模块</div>,
    },
    {
      id: "service",
      label: "阿姨端",
      content: <div>阿姨端功能模块</div>,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          言语·同城信息交互中心
        </h1>
        <p className="text-gray-500">探索各个功能模块及其详细信息</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <ModernInput
            placeholder="搜索功能模块..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-5 w-5" />}
          />
        </div>
        <ModernButton
          onClick={() =>
            setExpandedCards(expandedCards.length === sampleData.length ? [] : sampleData.map((item) => item.id))
          }
          variant="outline"
        >
          {expandedCards.length === sampleData.length ? "全部收起" : "全部展开"}
        </ModernButton>
      </div>

      <ModernTabs
        tabs={[
          {
            id: "用户端",
            label: "用户端",
            content: (
              <div className="grid gap-6">
                {Object.entries(groupedData).map(([component, items]) => (
                  <div key={component} className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <span className="bg-blue-600 w-1 h-6 rounded-full inline-block"></span>
                      {component}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <ModernCard key={item.id} className="group">
                          <ModernCardHeader
                            title={item.component}
                            description={item.subComponent !== "-" ? item.subComponent : undefined}
                            icon={<span className="text-xl">{item.icon}</span>}
                          />
                          <ModernCardContent>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {item.scene}
                              </span>
                              <ModernButton
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleCard(item.id)}
                                className="p-1"
                              >
                                {expandedCards.includes(item.id) ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </ModernButton>
                            </div>

                            {expandedCards.includes(item.id) && (
                              <div className="mt-4 pt-4 border-t">
                                <h4 className="text-sm font-medium text-gray-500 mb-2">功能列表</h4>
                                <div className="space-y-2">
                                  {item.functions.map((func, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                                      <span className="text-sm">{func}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </ModernCardContent>
                          <ModernCardFooter>
                            {!expandedCards.includes(item.id) && item.functions.length > 0 && (
                              <span className="text-xs text-gray-500">{item.functions.length} 项功能</span>
                            )}
                          </ModernCardFooter>
                        </ModernCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ),
          },
          {
            id: "管理端",
            label: "管理端",
            content: <div className="text-center py-8 text-gray-500">管理端功能模块开发中...</div>,
          },
          {
            id: "阿姨端",
            label: "阿姨端",
            content: <div className="text-center py-8 text-gray-500">阿姨端功能模块开发中...</div>,
          },
        ]}
      />
    </div>
  )
}
