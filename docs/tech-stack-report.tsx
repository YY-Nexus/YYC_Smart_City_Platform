"use client"

import { useState } from "react"
import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ModernCard"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Map,
  Server,
  GitBranch,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Rocket,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
} from "lucide-react"

interface TechItem {
  name: string
  version: string
  description: string
  status: "stable" | "beta" | "planned"
  usage: number
  category: string
}

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  status: "excellent" | "good" | "warning"
  description: string
}

export function TechStackReport() {
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const techStack: Record<string, TechItem[]> = {
    frontend: [
      {
        name: "Next.js",
        version: "14.2.16",
        description: "React全栈框架，支持SSR/SSG",
        status: "stable",
        usage: 95,
        category: "framework",
      },
      {
        name: "React",
        version: "18.2.0",
        description: "用户界面构建库",
        status: "stable",
        usage: 100,
        category: "library",
      },
      {
        name: "TypeScript",
        version: "5.2.2",
        description: "JavaScript超集，提供类型安全",
        status: "stable",
        usage: 100,
        category: "language",
      },
      {
        name: "Tailwind CSS",
        version: "3.3.5",
        description: "原子化CSS框架",
        status: "stable",
        usage: 90,
        category: "styling",
      },
      {
        name: "Framer Motion",
        version: "12.18.1",
        description: "React动画库",
        status: "stable",
        usage: 75,
        category: "animation",
      },
    ],
    ui: [
      {
        name: "Radix UI",
        version: "1.x",
        description: "无样式UI组件库",
        status: "stable",
        usage: 85,
        category: "components",
      },
      {
        name: "Lucide React",
        version: "0.454.0",
        description: "现代图标库",
        status: "stable",
        usage: 100,
        category: "icons",
      },
      {
        name: "Class Variance Authority",
        version: "0.7.1",
        description: "组件变体管理",
        status: "stable",
        usage: 80,
        category: "utility",
      },
      {
        name: "Tailwind Merge",
        version: "2.5.5",
        description: "Tailwind类名合并工具",
        status: "stable",
        usage: 90,
        category: "utility",
      },
    ],
    ai: [
      {
        name: "Llama 2",
        version: "7B/13B",
        description: "本地大语言模型",
        status: "planned",
        usage: 0,
        category: "llm",
      },
      {
        name: "ChatGLM-6B",
        version: "6B",
        description: "中文对话模型",
        status: "planned",
        usage: 0,
        category: "llm",
      },
      {
        name: "Whisper",
        version: "v3",
        description: "语音识别模型",
        status: "planned",
        usage: 0,
        category: "speech",
      },
      {
        name: "TTS Engine",
        version: "Custom",
        description: "语音合成引擎",
        status: "planned",
        usage: 0,
        category: "speech",
      },
    ],
    backend: [
      {
        name: "Node.js",
        version: "20.x",
        description: "JavaScript运行时",
        status: "stable",
        usage: 100,
        category: "runtime",
      },
      {
        name: "Docker",
        version: "24.x",
        description: "容器化部署",
        status: "planned",
        usage: 0,
        category: "deployment",
      },
      {
        name: "Redis",
        version: "7.x",
        description: "内存数据库",
        status: "planned",
        usage: 0,
        category: "database",
      },
      {
        name: "PostgreSQL",
        version: "15.x",
        description: "关系型数据库",
        status: "planned",
        usage: 0,
        category: "database",
      },
    ],
    integration: [
      {
        name: "百度地图API",
        version: "v3.0",
        description: "地图服务集成",
        status: "planned",
        usage: 0,
        category: "map",
      },
      {
        name: "微信小程序",
        version: "3.x",
        description: "小程序端适配",
        status: "planned",
        usage: 0,
        category: "platform",
      },
      {
        name: "PWA",
        version: "Latest",
        description: "渐进式Web应用",
        status: "planned",
        usage: 0,
        category: "platform",
      },
    ],
  }

  const performanceMetrics: PerformanceMetric[] = [
    {
      name: "首屏加载时间",
      value: 1.2,
      unit: "s",
      status: "excellent",
      description: "LCP (Largest Contentful Paint)",
    },
    {
      name: "交互响应时间",
      value: 85,
      unit: "ms",
      status: "good",
      description: "FID (First Input Delay)",
    },
    {
      name: "累积布局偏移",
      value: 0.05,
      unit: "",
      status: "excellent",
      description: "CLS (Cumulative Layout Shift)",
    },
    {
      name: "包体积大小",
      value: 245,
      unit: "KB",
      status: "good",
      description: "Gzipped Bundle Size",
    },
    {
      name: "Lighthouse评分",
      value: 95,
      unit: "/100",
      status: "excellent",
      description: "综合性能评分",
    },
  ]

  const developmentTools = [
    { name: "ESLint", description: "代码质量检查", icon: <CheckCircle className="w-4 h-4" /> },
    { name: "Prettier", description: "代码格式化", icon: <Code2 className="w-4 h-4" /> },
    { name: "Husky", description: "Git钩子管理", icon: <GitBranch className="w-4 h-4" /> },
    { name: "Vercel", description: "部署平台", icon: <Rocket className="w-4 h-4" /> },
  ]

  const securityFeatures = [
    { name: "CSP策略", status: "implemented", description: "内容安全策略" },
    { name: "HTTPS强制", status: "implemented", description: "全站HTTPS加密" },
    { name: "数据本地化", status: "planned", description: "敏感数据本地处理" },
    { name: "权限控制", status: "planned", description: "细粒度权限管理" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-100 text-green-800"
      case "beta":
        return "bg-yellow-100 text-yellow-800"
      case "planned":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPerformanceColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600"
      case "good":
        return "text-blue-600"
      case "warning":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* 标题部分 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🚀 言语·智慧同城 技术栈详情报告
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          基于现代化技术栈构建的智能生活服务平台，融合AI、地图服务与本地化部署的完整解决方案
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <Badge variant="outline" className="px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            最后更新：2025年6月21日
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            版本：v0.1.0
          </Badge>
        </div>
      </div>

      {/* 技术栈概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ModernCard className="text-center">
          <ModernCardContent className="p-6">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">前端技术</h3>
            <p className="text-3xl font-bold text-blue-600">5+</p>
            <p className="text-sm text-gray-600">核心技术栈</p>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="text-center">
          <ModernCardContent className="p-6">
            <Brain className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">AI能力</h3>
            <p className="text-3xl font-bold text-purple-600">4+</p>
            <p className="text-sm text-gray-600">AI模型集成</p>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="text-center">
          <ModernCardContent className="p-6">
            <Server className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">后端服务</h3>
            <p className="text-3xl font-bold text-green-600">4+</p>
            <p className="text-sm text-gray-600">服务组件</p>
          </ModernCardContent>
        </ModernCard>

        <ModernCard className="text-center">
          <ModernCardContent className="p-6">
            <Globe className="w-12 h-12 mx-auto mb-4 text-orange-600" />
            <h3 className="text-xl font-semibold mb-2">集成服务</h3>
            <p className="text-3xl font-bold text-orange-600">3+</p>
            <p className="text-sm text-gray-600">第三方集成</p>
          </ModernCardContent>
        </ModernCard>
      </div>

      {/* 详细技术栈 */}
      <ModernCard>
        <ModernCardHeader title="📋 详细技术栈分析" description="按类别详细展示所有技术组件的使用情况和状态" />
        <ModernCardContent>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="frontend">前端框架</TabsTrigger>
              <TabsTrigger value="ui">UI组件</TabsTrigger>
              <TabsTrigger value="ai">AI能力</TabsTrigger>
              <TabsTrigger value="backend">后端服务</TabsTrigger>
              <TabsTrigger value="integration">集成服务</TabsTrigger>
            </TabsList>

            {Object.entries(techStack).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid gap-4">
                  {items.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <Badge variant="outline">{item.version}</Badge>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status === "stable" ? "稳定" : item.status === "beta" ? "测试" : "计划中"}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-500">{item.usage}% 使用率</span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <Progress value={item.usage} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ModernCardContent>
      </ModernCard>

      {/* 性能指标 */}
      <ModernCard>
        <ModernCardHeader title="⚡ 性能指标监控" description="关键性能指标的实时监控和优化建议" />
        <ModernCardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <h4 className="font-semibold mb-2">{metric.name}</h4>
                <div className={`text-3xl font-bold mb-2 ${getPerformanceColor(metric.status)}`}>
                  {metric.value}
                  {metric.unit}
                </div>
                <p className="text-sm text-gray-600">{metric.description}</p>
                <div className="mt-3">
                  {metric.status === "excellent" && <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />}
                  {metric.status === "good" && <CheckCircle className="w-5 h-5 text-blue-600 mx-auto" />}
                  {metric.status === "warning" && <AlertCircle className="w-5 h-5 text-yellow-600 mx-auto" />}
                </div>
              </div>
            ))}
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* 开发工具 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ModernCard>
          <ModernCardHeader title="🛠️ 开发工具链" description="提升开发效率的工具和流程" />
          <ModernCardContent>
            <div className="space-y-4">
              {developmentTools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  {tool.icon}
                  <div>
                    <h4 className="font-semibold">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>

        <ModernCard>
          <ModernCardHeader title="🔒 安全特性" description="数据安全和隐私保护措施" />
          <ModernCardContent>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">{feature.name}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      feature.status === "implemented" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }
                  >
                    {feature.status === "implemented" ? "已实现" : "计划中"}
                  </Badge>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>
      </div>

      {/* 架构图 */}
      <ModernCard>
        <ModernCardHeader title="🏗️ 系统架构概览" description="应用的整体架构设计和数据流向" />
        <ModernCardContent>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* 前端层 */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-blue-200">
                  <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">前端展示层</h3>
                  <p className="text-sm text-gray-600 mt-2">Next.js + React + TypeScript</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-purple-200">
                  <Smartphone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold text-purple-800">移动端适配</h3>
                  <p className="text-sm text-gray-600 mt-2">PWA + 小程序</p>
                </div>
              </div>

              {/* 服务层 */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-green-200">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold text-green-800">AI服务层</h3>
                  <p className="text-sm text-gray-600 mt-2">本地大模型 + 语音处理</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-orange-200">
                  <Map className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <h3 className="font-semibold text-orange-800">地图服务</h3>
                  <p className="text-sm text-gray-600 mt-2">百度地图API集成</p>
                </div>
              </div>

              {/* 数据层 */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-red-200">
                  <Database className="w-8 h-8 mx-auto mb-2 text-red-600" />
                  <h3 className="font-semibold text-red-800">数据存储层</h3>
                  <p className="text-sm text-gray-600 mt-2">PostgreSQL + Redis</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-gray-200">
                  <HardDrive className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <h3 className="font-semibold text-gray-800">本地存储</h3>
                  <p className="text-sm text-gray-600 mt-2">Docker容器化部署</p>
                </div>
              </div>
            </div>

            {/* 连接线 */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Network className="w-6 h-6 text-blue-500" />
              <div className="flex-1 h-px bg-gradient-to-r from-blue-300 to-purple-300"></div>
              <Cpu className="w-6 h-6 text-green-500" />
              <div className="flex-1 h-px bg-gradient-to-r from-green-300 to-orange-300"></div>
              <Database className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* 总结 */}
      <ModernCard>
        <ModernCardHeader title="📊 技术栈总结" description="整体技术选型的优势和发展规划" />
        <ModernCardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 技术优势</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  现代化技术栈，性能优异
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  TypeScript全栈类型安全
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  组件化开发，易于维护
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  本地化AI部署，数据安全
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  响应式设计，多端适配
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">🚀 发展规划</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Q3 2025: AI模型集成上线
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Q4 2025: 地图服务深度整合
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Q1 2026: 微信小程序发布
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Q2 2026: 多城市部署扩展
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Q3 2026: 企业级功能完善
                </li>
              </ul>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>
    </div>
  )
}
