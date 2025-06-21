"use client"

import { Bot, MessageCircle, Calendar, Bell, Search, Zap } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const assistantFeatures = [
  {
    id: "voice",
    title: "语音交互",
    description: "自然语言对话，智能理解用户需求",
    icon: <MessageCircle className="h-6 w-6" />,
    features: ["语音识别", "自然对话", "多轮交互", "情感理解"],
    examples: ["今天天气怎么样？", "帮我设置明天8点的闹钟", "附近有什么好吃的餐厅？"],
  },
  {
    id: "schedule",
    title: "日程管理",
    description: "智能安排日程，提醒重要事项",
    icon: <Calendar className="h-6 w-6" />,
    features: ["日程安排", "智能提醒", "冲突检测", "自动优化"],
    examples: ["明天下午2点提醒我开会", "这周有什么安排？", "帮我安排一个空闲时间"],
  },
  {
    id: "information",
    title: "信息查询",
    description: "快速获取各类生活信息",
    icon: <Search className="h-6 w-6" />,
    features: ["天气查询", "路况信息", "新闻资讯", "生活服务"],
    examples: ["明天会下雨吗？", "去机场的路况如何？", "今天有什么重要新闻？"],
  },
]

const smartReminders = [
  {
    type: "健康提醒",
    title: "按时吃药",
    time: "每日 8:00",
    description: "提醒您按时服用降压药",
    status: "已设置",
  },
  {
    type: "生活提醒",
    title: "垃圾分类",
    time: "周二、周五 19:00",
    description: "提醒您准备垃圾分类投放",
    status: "已设置",
  },
  {
    type: "工作提醒",
    title: "重要会议",
    time: "明天 14:00",
    description: "参加项目进度讨论会议",
    status: "待确认",
  },
]

const aiCapabilities = [
  {
    capability: "学习能力",
    description: "根据用户习惯不断学习和优化服务",
    icon: "🧠",
  },
  {
    capability: "多语言支持",
    description: "支持普通话、方言、英语等多种语言",
    icon: "🌍",
  },
  {
    capability: "情境感知",
    description: "理解当前环境和情境，提供合适的建议",
    icon: "👁️",
  },
  {
    capability: "隐私保护",
    description: "本地处理敏感信息，保护用户隐私",
    icon: "🔒",
  },
]

export default function DigitalAssistantPage() {
  const tabs = [
    {
      id: "features",
      label: "功能特色",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-purple-700 text-sm">
              🤖 数字助手采用先进的AI技术，为您提供24小时智能服务，让生活更加便捷高效。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assistantFeatures.map((feature) => (
              <ModernCard key={feature.id} className="group">
                <ModernCardHeader title={feature.title} description={feature.description} icon={feature.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">核心功能</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {feature.features.map((func, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                            {func}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">使用示例</h4>
                      <div className="space-y-1">
                        {feature.examples.map((example, index) => (
                          <div key={index} className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                            "{example}"
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton className="w-full">体验功能</ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "reminders",
      label: "智能提醒",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="我的提醒事项" icon={<Bell className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                {smartReminders.map((reminder, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {reminder.type}
                        </span>
                        <h4 className="font-medium">{reminder.title}</h4>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          reminder.status === "已设置" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {reminder.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">时间：</span>
                      {reminder.time}
                    </div>
                    <div className="text-sm text-gray-700">{reminder.description}</div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
            <ModernCardFooter>
              <ModernButton className="w-full">添加新提醒</ModernButton>
            </ModernCardFooter>
          </ModernCard>
        </div>
      ),
    },
    {
      id: "ai",
      label: "AI能力",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="人工智能核心能力" icon={<Bot className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{capability.icon}</span>
                      <h4 className="font-medium">{capability.capability}</h4>
                    </div>
                    <p className="text-sm text-gray-700">{capability.description}</p>
                  </div>
                ))}
              </div>
            </ModernCardContent>
          </ModernCard>

          <ModernCard>
            <ModernCardHeader title="使用指南" icon={<Zap className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">激活助手</h4>
                    <p className="text-sm text-gray-600">说出唤醒词"小助手"或点击麦克风图标</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">清晰表达</h4>
                    <p className="text-sm text-gray-600">用自然语言清晰表达您的需求</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">确认执行</h4>
                    <p className="text-sm text-gray-600">确认助手理解正确后，执行相应操作</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">反馈优化</h4>
                    <p className="text-sm text-gray-600">对服务结果进行反馈，帮助助手不断改进</p>
                  </div>
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            数字助手
          </h1>
          <p className="text-gray-600 text-xl">AI驱动的智能生活助理，让科技更懂您的需求</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
