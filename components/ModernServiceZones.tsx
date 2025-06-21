"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Heart, Lightbulb, Building2, Clock, Star, ArrowRight, Filter, Search, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// 现代化服务分区数据
const serviceZones = {
  categories: [
    {
      id: "home-services",
      title: "居家服务",
      icon: <Home className="h-6 w-6" />,
      color: "bg-blue-500",
      description: "专业家政，品质生活",
      services: [
        {
          id: "cleaning",
          name: "家居保洁",
          description: "深度清洁，焕然一新",
          price: "¥99起",
          rating: 4.8,
          orders: "10k+",
          features: ["专业设备", "环保用品", "保险保障"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "repair",
          name: "家电维修",
          description: "快速上门，专业维修",
          price: "¥50起",
          rating: 4.7,
          orders: "8k+",
          features: ["原厂配件", "质保服务", "24h响应"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "cooking",
          name: "上门烹饪",
          description: "私人厨师，定制美食",
          price: "¥200起",
          rating: 4.9,
          orders: "5k+",
          features: ["营养搭配", "食材新鲜", "个性定制"],
          image: "/placeholder.svg?height=100&width=150",
          available: false,
        },
      ],
    },
    {
      id: "elderly-care",
      title: "关爱老人",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-500",
      description: "贴心照护，温暖陪伴",
      services: [
        {
          id: "companion",
          name: "陪护服务",
          description: "专业护理，贴心陪伴",
          price: "¥150/天",
          rating: 4.9,
          orders: "6k+",
          features: ["持证上岗", "医疗背景", "24h服务"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "health-monitor",
          name: "健康监测",
          description: "智能设备，实时监护",
          price: "¥99/月",
          rating: 4.8,
          orders: "3k+",
          features: ["远程监测", "异常预警", "家属同步"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "medical-assist",
          name: "就医陪护",
          description: "陪同就医，专业协助",
          price: "¥120/次",
          rating: 4.7,
          orders: "4k+",
          features: ["医院熟悉", "流程协助", "药品管理"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
      ],
    },
    {
      id: "smart-living",
      title: "智能生活",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-purple-500",
      description: "科技赋能，智慧便民",
      services: [
        {
          id: "smart-home",
          name: "智能家居",
          description: "一键控制，智慧生活",
          price: "¥299起",
          rating: 4.8,
          orders: "7k+",
          features: ["语音控制", "远程操作", "场景联动"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "ai-assistant",
          name: "AI助手",
          description: "智能问答，生活助理",
          price: "¥29/月",
          rating: 4.6,
          orders: "12k+",
          features: ["24h在线", "多语言", "个性化"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "iot-devices",
          name: "物联设备",
          description: "设备互联，数据同步",
          price: "¥199起",
          rating: 4.7,
          orders: "5k+",
          features: ["云端同步", "数据分析", "安全加密"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
      ],
    },
    {
      id: "city-services",
      title: "城市服务",
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-green-500",
      description: "便民服务，城市赋能",
      services: [
        {
          id: "community",
          name: "社区服务",
          description: "邻里互助，和谐社区",
          price: "免费",
          rating: 4.8,
          orders: "15k+",
          features: ["信息发布", "活动组织", "邻里互助"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "public-transport",
          name: "智慧出行",
          description: "绿色出行，智能导航",
          price: "¥2起",
          rating: 4.5,
          orders: "50k+",
          features: ["实时路况", "多种方式", "环保出行"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
        {
          id: "government",
          name: "政务服务",
          description: "在线办事，便民高效",
          price: "免费",
          rating: 4.6,
          orders: "20k+",
          features: ["在线申请", "进度查询", "电子证照"],
          image: "/placeholder.svg?height=100&width=150",
          available: true,
        },
      ],
    },
  ],
}

export function ModernServiceZones() {
  const [activeCategory, setActiveCategory] = useState("home-services")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterAvailable, setFilterAvailable] = useState(false)

  const activeServices = serviceZones.categories.find((cat) => cat.id === activeCategory)?.services || []

  const filteredServices = activeServices.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = !filterAvailable || service.available
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* 服务分类导航 */}
      <Card className="card-translucent">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceZones.categories.map((category) => (
              <motion.div key={category.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`h-auto p-4 flex flex-col items-center gap-3 w-full ${
                    activeCategory === category.id ? "bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className={`p-2 rounded-lg text-white ${category.color}`}>{category.icon}</div>
                  <div className="text-center">
                    <p className="font-medium text-sm">{category.title}</p>
                    <p className="text-xs opacity-80 mt-1">{category.description}</p>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 搜索和筛选 */}
      <Card className="card-translucent">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="搜索服务..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterAvailable ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterAvailable(!filterAvailable)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                仅显示可用
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MapPin size={16} />
                附近优先
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 服务列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`card-translucent hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  !service.available ? "opacity-60" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {service.available ? (
                      <Badge className="bg-green-500 text-white">可预约</Badge>
                    ) : (
                      <Badge variant="secondary">暂不可用</Badge>
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="bg-white/80">
                      {service.orders} 订单
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-blue-600">{service.price}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>快速响应</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={!service.available} size="sm">
                      {service.available ? "立即预约" : "暂不可用"}
                      {service.available && <ArrowRight className="h-4 w-4 ml-1" />}
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredServices.length === 0 && (
        <Card className="card-translucent">
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">未找到相关服务</h3>
            <p className="text-gray-500">请尝试调整搜索条件或筛选选项</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
