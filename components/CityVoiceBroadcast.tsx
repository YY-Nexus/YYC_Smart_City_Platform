"use client"

import { useState, useEffect } from "react"

const broadcastMessages = [
  "📢 市政府发布：本周末将在市中心举办文化艺术节，欢迎市民朋友们参与",
  "📢 交通提醒：由于道路施工，建设路段将实行交通管制，请注意绕行",
  "📢 便民服务：社区健康体检活动正在进行中，65岁以上老人可免费参加",
  "📢 天气预报：明天多云转晴，气温18-25℃，适宜户外活动",
  "📢 公共服务：图书馆新增数字阅览区，提供免费WiFi和电子书籍服务",
  "📢 安全提醒：近期电信诈骗案件增多，请市民提高警惕，保护个人信息",
]

export function CityVoiceBroadcast() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % broadcastMessages.length)
    }, 8000) // 每8秒切换一条消息

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
      <div className="relative overflow-hidden h-10">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap text-sm font-medium">
            {broadcastMessages[currentMessage]}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
