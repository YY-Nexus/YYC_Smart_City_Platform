"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, PieChart, Activity, Users, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// 模拟数据
const analyticsData = {
  overview: {
    totalUsers: 45678,
    activeUsers: 12847,
    totalOrders: 89234,
    revenue: 1234567,
    growth: {
      users: 12.5,
      orders: 8.3,
      revenue: 15.7,
    },
  },
  serviceDistribution: [
    { name: "家居服务", value: 35, color: "bg-blue-500" },
    { name: "关爱老人", value: 28, color: "bg-red-500" },
    { name: "智能生活", value: 22, color: "bg-purple-500" },
    { name: "城市服务", value: 15, color: "bg-green-500" },
  ],
  regionData: [
    { region: "市中心", orders: 2340, growth: 12.5 },
    { region: "高新区", orders: 1890, growth: 18.2 },
    { region: "老城区", orders: 1567, growth: 8.7 },
    { region: "新区", orders: 1234, growth: 25.3 },
  ],
  timeData: [
    { hour: "08:00", orders: 45 },
    { hour: "10:00", orders: 78 },
    { hour: "12:00", orders: 123 },
    { hour: "14:00", orders: 156 },
    { hour: "16:00", orders: 134 },
    { hour: "18:00", orders: 189 },
    { hour: "20:00", orders: 167 },
    { hour: "22:00", orders: 89 },
  ],
}

export function DataVisualization() {
  const [animatedValues, setAnimatedValues] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    revenue: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(analyticsData.overview)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="space-y-6">
      {/* 核心指标概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="card-translucent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">总用户数</p>
                  <motion.p
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {formatNumber(animatedValues.totalUsers)}
                  </motion.p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+{analyticsData.overview.growth.users}%</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="card-translucent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">活跃用户</p>
                  <motion.p
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {formatNumber(animatedValues.activeUsers)}
                  </motion.p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+{analyticsData.overview.growth.users}%</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-green-100">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-translucent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">总订单数</p>
                  <motion.p
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    {formatNumber(animatedValues.totalOrders)}
                  </motion.p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+{analyticsData.overview.growth.orders}%</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-purple-100">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="card-translucent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">平台收入</p>
                  <motion.p
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    ¥{formatNumber(animatedValues.revenue)}
                  </motion.p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+{analyticsData.overview.growth.revenue}%</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-yellow-100">
                  <PieChart className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 服务分布和区域数据 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-translucent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-blue-600" />
              服务类型分布
            </CardTitle>
            <CardDescription>各类服务的订单占比情况</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.serviceDistribution.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${service.color}`} />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={service.value} className="w-20" />
                    <span className="text-sm font-medium w-12 text-right">{service.value}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-translucent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              区域订单分布
            </CardTitle>
            <CardDescription>各区域的订单量和增长情况</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.regionData.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50/80"
                >
                  <div>
                    <p className="font-medium">{region.region}</p>
                    <p className="text-sm text-gray-600">{region.orders} 订单</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={region.growth > 15 ? "default" : "secondary"}
                      className={region.growth > 15 ? "bg-green-500" : ""}
                    >
                      +{region.growth}%
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 时间分布图 */}
      <Card className="card-translucent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-600" />
            订单时间分布
          </CardTitle>
          <CardDescription>24小时内订单量变化趋势</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-40 gap-2">
            {analyticsData.timeData.map((data, index) => (
              <motion.div
                key={data.hour}
                initial={{ height: 0 }}
                animate={{ height: `${(data.orders / 200) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <div className="bg-blue-500 w-full rounded-t-md min-h-[4px] relative group">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.orders}
                  </div>
                </div>
                <span className="text-xs text-gray-600 transform -rotate-45 origin-center">{data.hour}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
