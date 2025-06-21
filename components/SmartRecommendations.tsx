"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Clock, MapPin, Users, ArrowRight, Heart, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// 智能推荐数据
const recommendationData = {
  personalizedServices: [
    {
      id: "cleaning-premium",
      title: "高端家居深度清洁",
      description: "专业团队，环保用品，360度无死角清洁",
      price: "¥299",
      originalPrice: "¥399",
      rating: 4.9,
      reviews: 1247,
      duration: "3-4小时",
      distance: "1.2km",
      tags: ["热门", "专业认证", "环保"],
      image: "/professional-cleaning-service.png",
      provider: {
        name: "洁净家政",
        avatar: "/partner-logo.png",
        verified: true,
      },
      aiReason: "基于您的历史偏好和当前需求匹配",
    },
    {
      id: "elderly-care-companion",
      title: "专业老人陪护服务",
      description: "持证护理员，24小时贴心照护，医疗背景",
      price: "¥180/天",
      originalPrice: "¥220/天",
      rating: 4.8,
      reviews: 892,
      duration: "全天",
      distance: "0.8km",
      tags: ["专业", "医疗背景", "口碑好"],
      image: "/elderly-care.png",
      provider: {
        name: "爱心护理",
        avatar: "/placeholder-wakyf.png",
        verified: true,
      },
      aiReason: "您关注的老人关爱服务，高评分推荐",
    },
    {
      id: "smart-home-setup",
      title: "智能家居安装配置",
      description: "一站式智能家居解决方案，专业安装调试",
      price: "¥599",
      originalPrice: "¥799",
      rating: 4.7,
      reviews: 634,
      duration: "2-3小时",
      distance: "2.1km",
      tags: ["技术专业", "一站式", "售后保障"],
      image: "/smart-home-installation.png",
      provider: {
        name: "智联科技",
        avatar: "/abstract-tech-logo.png",
        verified: true,
      },
      aiReason: "智能生活爱好者的首选，技术实力强",
    },
  ],
  trendingServices: [
    {
      id: "community-group-buy",
      title: "社区团购配送",
      description: "新鲜蔬果，社区直达",
      participants: 156,
      deadline: "2小时后截止",
      discount: "7.5折",
      image: "/community-group-buying.png",
    },
    {
      id: "shared-kitchen",
      title: "共享厨房预约",
      description: "专业厨房设备，按时计费",
      participants: 89,
      deadline: "今日可预约",
      discount: "首次免费",
      image: "/shared-kitchen.png",
    },
    {
      id: "skill-exchange",
      title: "技能互换平台",
      description: "邻里技能共享，互帮互助",
      participants: 234,
      deadline: "长期有效",
      discount: "免费参与",
      image: "/skill-exchange.png",
    },
  ],
}

export function SmartRecommendations() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="space-y-6">
      {/* AI个性化推荐 */}
      <Card className="card-translucent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            AI智能推荐
          </CardTitle>
          <CardDescription>基于您的偏好和行为分析，为您精选优质服务</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendationData.personalizedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="card-translucent hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-purple-500 text-white">AI推荐</Badge>
                    </div>
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      {service.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-white/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm leading-tight">{service.title}</h3>
                      <Heart className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>

                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{service.description}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {service.distance}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={service.provider.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{service.provider.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">{service.provider.name}</span>
                        {service.provider.verified && (
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            认证
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-blue-600">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{service.originalPrice}</span>
                      </div>
                    </div>

                    <div className="bg-purple-50/80 p-2 rounded-lg mb-3">
                      <p className="text-xs text-purple-700 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        {service.aiReason}
                      </p>
                    </div>

                    <Button className="w-full" size="sm">
                      立即预约
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 热门趋势服务 */}
      <Card className="card-translucent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-orange-600" />
            社区热门
          </CardTitle>
          <CardDescription>社区内最受欢迎的服务和活动</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendationData.trendingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="card-translucent hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{service.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{service.participants}人参与</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {service.discount}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-orange-600 font-medium">{service.deadline}</span>
                          <Button size="sm" variant="outline" className="h-6 text-xs px-2">
                            参与
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
