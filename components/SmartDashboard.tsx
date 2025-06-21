"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Activity,
  Calendar,
  MessageSquare,
  Bell,
  Zap,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// 智能数据看板数据
const dashboardData = {
  stats: [
    {
      id: "active-users",
      title: "活跃用户",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      color: "text-blue-600",
    },
    {
      id: "orders-today",
      title: "今日订单",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: <Activity className="h-5 w-5" />,
      color: "text-green-600",
    },
    {
      id: "service-areas",
      title: "服务区域",
      value: "156",
      change: "+3.1%",
      trend: "up",
      icon: <MapPin className="h-5 w-5" />,
      color: "text-purple-600",
    },
    {
      id: "satisfaction",
      title: "满意度",
      value: "98.5%",
      change: "+0.8%",
      trend: "up",
      icon: <Star className="h-5 w-5" />,
      color: "text-yellow-600",
    },
  ],
  quickActions: [
    {
      id: "emergency",
      title: "紧急服务",
      description: "24小时应急响应",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-red-500",
      urgent: true,
    },
    {
      id: "smart-match",
      title: "智能匹配",
      description: "AI推荐最佳服务",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      id: "schedule",
      title: "预约服务",
      description: "灵活时间安排",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      id: "feedback",
      title: "服务反馈",
      description: "提升服务质量",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-purple-500",
    },
  ],
  recentActivities: [
    {
      id: 1,
      type: "order",
      title: "家居保洁服务已完成",
      time: "2分钟前",
      status: "completed",
    },
    {
      id: 2,
      type: "notification",
      title: "新的服务人员加入您的区域",
      time: "15分钟前",
      status: "info",
    },
    {
      id: 3,
      type: "review",
      title: "收到5星好评",
      time: "1小时前",
      status: "positive",
    },
    {
      id: 4,
      type: "system",
      title: "系统维护完成",
      time: "2小时前",
      status: "system",
    },
  ],
}

export function SmartDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      {/* 智能概览卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardData.stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="card-translucent hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 快捷操作区 */}
      <Card className="card-translucent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            智能快捷操作
          </CardTitle>
          <CardDescription>一键访问常用功能，提升操作效率</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dashboardData.quickActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className={`h-auto p-4 flex flex-col items-center gap-3 w-full relative ${
                    action.urgent ? "border-red-200 bg-red-50" : ""
                  }`}
                >
                  {action.urgent && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">紧急</Badge>
                  )}
                  <div className={`p-2 rounded-lg text-white ${action.color}`}>{action.icon}</div>
                  <div className="text-center">
                    <p className="font-medium text-sm">{action.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 实时活动和通知 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-translucent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              实时活动
            </CardTitle>
            <CardDescription>最新的系统活动和服务动态</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/80 hover:bg-gray-100/80 transition-colors"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "completed"
                        ? "bg-green-500"
                        : activity.status === "positive"
                          ? "bg-yellow-500"
                          : activity.status === "info"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-translucent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-600" />
              智能提醒
            </CardTitle>
            <CardDescription>基于AI分析的个性化建议</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-50/80 border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">智能推荐</p>
                    <p className="text-sm text-blue-700 mt-1">
                      根据您的使用习惯，建议在下午2-4点预约家居保洁服务，此时段服务人员较多且价格优惠。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-green-50/80 border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900">服务提醒</p>
                    <p className="text-sm text-green-700 mt-1">
                      您预约的老人陪护服务将在明天上午10点开始，请确保家中有人接待。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-purple-50/80 border border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-900">数据洞察</p>
                    <p className="text-sm text-purple-700 mt-1">
                      本月您的服务使用频率比上月增加了25%，建议考虑升级到VIP会员享受更多优惠。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
