"use client"

import { Home, Lightbulb, Thermometer, Shield, Smartphone } from "lucide-react"
import { ModernNavigation } from "@/components/ModernNavigation"
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ModernTabs } from "@/components/ModernTabs"

const smartDevices = [
  {
    id: "lighting",
    title: "智能照明",
    description: "语音控制，自动调节亮度和色温",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["语音控制", "定时开关", "亮度调节", "色温调节"],
    price: "¥299起",
    status: "热销",
  },
  {
    id: "climate",
    title: "智能空调",
    description: "远程控制，智能温度调节",
    icon: <Thermometer className="h-6 w-6" />,
    features: ["远程控制", "定时开关", "温度感应", "节能模式"],
    price: "¥2999起",
    status: "推荐",
  },
  {
    id: "security",
    title: "智能安防",
    description: "24小时监控，异常自动报警",
    icon: <Shield className="h-6 w-6" />,
    features: ["视频监控", "入侵检测", "烟雾报警", "远程查看"],
    price: "¥599起",
    status: "新品",
  },
]

const scenes = [
  {
    name: "回家模式",
    description: "自动开启玄关灯，调节室内温度，播放轻音乐",
    devices: ["智能门锁", "玄关灯", "空调", "音响"],
    trigger: "开门感应",
  },
  {
    name: "睡眠模式",
    description: "关闭所有灯光，调低空调温度，启动安防系统",
    devices: ["所有灯光", "空调", "安防系统", "窗帘"],
    trigger: "语音指令或定时",
  },
  {
    name: "离家模式",
    description: "关闭所有电器，启动安防监控，调节节能模式",
    devices: ["所有电器", "安防系统", "智能插座"],
    trigger: "手机GPS或手动",
  },
]

const controlMethods = [
  {
    method: "语音控制",
    description: "通过智能音箱或手机语音助手控制设备",
    icon: "🎤",
    examples: ["小爱同学，打开客厅灯", "天猫精灵，调节空调温度到26度"],
  },
  {
    method: "手机APP",
    description: "随时随地通过手机应用远程控制家中设备",
    icon: "📱",
    examples: ["远程开启空调", "查看家中监控", "设置定时任务"],
  },
  {
    method: "自动化场景",
    description: "根据时间、环境等条件自动执行预设场景",
    icon: "⚡",
    examples: ["日落时自动开灯", "检测到人体时开启照明", "温度过高时开启空调"],
  },
]

export default function SmartHomePage() {
  const tabs = [
    {
      id: "devices",
      label: "智能设备",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="text-purple-700 text-sm">🏠 智能家居让生活更便捷，通过手机或语音就能控制家中的各种设备。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smartDevices.map((device) => (
              <ModernCard key={device.id} className="group">
                <ModernCardHeader title={device.title} description={device.description} icon={device.icon} />
                <ModernCardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-purple-600">{device.price}</span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                        {device.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">主要功能</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {device.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCardContent>
                <ModernCardFooter>
                  <ModernButton className="w-full">了解详情</ModernButton>
                </ModernCardFooter>
              </ModernCard>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "scenes",
      label: "智能场景",
      content: (
        <div className="space-y-6">
          <ModernCard>
            <ModernCardHeader title="智能场景模式" icon={<Home className="h-5 w-5" />} />
            <ModernCardContent>
              <p className="text-gray-700 mb-4">
                智能场景可以让多个设备协同工作，一键实现复杂的家居控制，让生活更加便捷舒适。
              </p>
              <div className="space-y-4">
                {scenes.map((scene, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{scene.name}</h4>
                      <span className="text-sm text-purple-600">触发：{scene.trigger}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{scene.description}</p>
                    <div>
                      <span className="text-sm font-medium text-gray-600">涉及设备：</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {scene.devices.map((device, idx) => (
                          <span key={idx} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            {device}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCardContent>
            <ModernCardFooter>
              <ModernButton className="w-full">自定义场景</ModernButton>
            </ModernCardFooter>
          </ModernCard>
        </div>
      ),
    },
    {
      id: "control",
      label: "控制方式",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {controlMethods.map((method, index) => (
              <ModernCard key={index} className="group">
                <ModernCardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{method.icon}</div>
                    <h3 className="font-semibold text-lg">{method.method}</h3>
                    <p className="text-sm text-gray-600 mt-2">{method.description}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">使用示例</h4>
                    <div className="space-y-1">
                      {method.examples.map((example, idx) => (
                        <div key={idx} className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                          "{example}"
                        </div>
                      ))}
                    </div>
                  </div>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>

          <ModernCard>
            <ModernCardHeader title="安装与配置" icon={<Smartphone className="h-5 w-5" />} />
            <ModernCardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">设备安装</h4>
                    <p className="text-sm text-gray-600">专业技师上门安装，确保设备正常运行</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">网络配置</h4>
                    <p className="text-sm text-gray-600">连接家庭WiFi，配置设备网络参数</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">APP绑定</h4>
                    <p className="text-sm text-gray-600">下载专用APP，绑定设备到您的账户</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">使用培训</h4>
                    <p className="text-sm text-gray-600">提供使用指导，确保您能熟练操作</p>
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
            智能家居
          </h1>
          <p className="text-gray-600 text-xl">打造智能化家居环境，让科技为生活服务</p>
        </div>

        <ModernTabs tabs={tabs} />
      </div>
    </div>
  )
}
