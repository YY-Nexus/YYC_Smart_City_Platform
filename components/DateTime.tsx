"use client"

import { useState, useEffect } from "react"
import { Calendar, X, Gift, Star, Settings } from "lucide-react"
import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ModernCard"
import { ModernButton } from "@/components/ModernButton"

const chineseMonths = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"]
const chineseDays = [
  "初一",
  "初二",
  "初三",
  "初四",
  "初五",
  "初六",
  "初七",
  "初八",
  "初九",
  "初十",
  "十一",
  "十二",
  "十三",
  "十四",
  "十五",
  "十六",
  "十七",
  "十八",
  "十九",
  "二十",
  "廿一",
  "廿二",
  "廿三",
  "廿四",
  "廿五",
  "廿六",
  "廿七",
  "廿八",
  "廿九",
  "三十",
]
const weekDays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]

// 节日数据（2025年）
const festivals = {
  "2025-01-01": "元旦",
  "2025-01-29": "春节",
  "2025-02-12": "元宵节",
  "2025-04-05": "清明节",
  "2025-05-01": "劳动节",
  "2025-06-02": "端午节",
  "2025-06-21": "夏至",
  "2025-08-17": "七夕节",
  "2025-09-07": "中秋节",
  "2025-10-01": "国庆节",
  "2025-10-11": "重阳节",
  "2025-12-22": "冬至",
  "2025-12-25": "圣诞节",
}

// 用户生日提醒（示例数据）
const userBirthdays = [
  { date: "2025-06-21", name: "张三", relation: "朋友" },
  { date: "2025-06-25", name: "李四", relation: "同事" },
  { date: "2025-07-01", name: "王五", relation: "家人" },
  { date: "2025-08-15", name: "小语", relation: "智能管家生日" },
]

const getSimpleLunarDate = (date: Date) => {
  const month = date.getMonth()
  const day = date.getDate()
  const lunarMonth = (month + 1) % 12
  const lunarDay = day % 30
  return {
    month: chineseMonths[lunarMonth],
    day: chineseDays[lunarDay],
  }
}

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

export function DateTime() {
  const [date, setDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [is24Hour, setIs24Hour] = useState(true)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 从localStorage读取时间格式设置
  useEffect(() => {
    const saved24Hour = localStorage.getItem("timeFormat24Hour")
    if (saved24Hour !== null) {
      setIs24Hour(JSON.parse(saved24Hour))
    }
  }, [])

  const lunar = getSimpleLunarDate(date)
  const weekDay = weekDays[date.getDay()]

  const formatTime = (date: Date) => {
    if (is24Hour) {
      return date.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    } else {
      return date.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    }
  }

  const toggleTimeFormat = () => {
    const newFormat = !is24Hour
    setIs24Hour(newFormat)
    localStorage.setItem("timeFormat24Hour", JSON.stringify(newFormat))
  }

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
  const today = new Date()
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear()

  const calendarDays = []
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const getFestival = (year: number, month: number, day: number) => {
    const dateKey = formatDateKey(year, month, day)
    return festivals[dateKey as keyof typeof festivals]
  }

  const getBirthday = (month: number, day: number) => {
    const dateKey = formatDateKey(2025, month, day)
    return userBirthdays.find((birthday) => birthday.date === dateKey)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  return (
    <>
      <div className="text-right cursor-pointer relative" onClick={() => setShowCalendar(true)}>
        <div className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors">
          {date.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" })}
        </div>
        <div className="text-sm text-gray-600">{formatTime(date)}</div>
        <div className="text-xs text-gray-500">
          {lunar.month}
          {lunar.day} {weekDay}
        </div>

        {/* 设置按钮 */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowSettings(!showSettings)
          }}
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
        >
          <Settings className="h-3 w-3 text-blue-600" />
        </button>

        {/* 设置下拉菜单 */}
        {showSettings && (
          <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg border p-3 z-50 min-w-[160px]">
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">时间格式</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleTimeFormat()
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    is24Hour ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  24小时制
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleTimeFormat()
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    !is24Hour ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  12小时制
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 日历弹窗 */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <ModernCard className="w-full max-w-md">
            <ModernCardHeader title="智能日历" icon={<Calendar className="h-5 w-5" />} />
            <ModernCardContent>
              {/* 当前时间显示 */}
              <div className="text-center mb-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-800">{formatTime(date)}</div>
                <div className="text-sm text-blue-600">
                  {date.toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  {weekDay}
                </div>
                <div className="text-xs text-blue-500">
                  {lunar.month}
                  {lunar.day}
                </div>
              </div>

              {/* 月份导航 */}
              <div className="flex items-center justify-between mb-4">
                <ModernButton variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
                  ‹
                </ModernButton>
                <h3 className="text-lg font-semibold">
                  {currentYear}年{currentMonth + 1}月
                </h3>
                <ModernButton variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                  ›
                </ModernButton>
              </div>

              {/* 星期标题 */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* 日历网格 */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="p-2"></div>
                  }

                  const isToday = isCurrentMonth && day === today.getDate()
                  const festival = getFestival(currentYear, currentMonth, day)
                  const birthday = getBirthday(currentMonth, day)

                  return (
                    <div
                      key={index}
                      className={`relative p-2 text-center text-sm rounded-lg transition-colors ${
                        isToday ? "bg-blue-500 text-white font-bold" : "hover:bg-gray-100"
                      }`}
                    >
                      <div>{day}</div>
                      {festival && (
                        <div className="absolute -top-1 -right-1">
                          <Star className="h-3 w-3 text-red-500 fill-red-500" />
                        </div>
                      )}
                      {birthday && (
                        <div className="absolute -top-1 -left-1">
                          <Gift className="h-3 w-3 text-pink-500 fill-pink-500" />
                        </div>
                      )}
                      {festival && <div className="text-xs text-red-600 font-medium truncate">{festival}</div>}
                      {birthday && <div className="text-xs text-pink-600 font-medium truncate">{birthday.name}</div>}
                    </div>
                  )
                })}
              </div>

              {/* 节日和生日提醒 */}
              <div className="mt-4 space-y-2">
                <div className="text-sm font-medium text-gray-700">本月提醒</div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {Object.entries(festivals)
                    .filter(([dateKey]) => {
                      const [year, month] = dateKey.split("-").map(Number)
                      return year === currentYear && month === currentMonth + 1
                    })
                    .map(([dateKey, festival]) => {
                      const day = dateKey.split("-")[2]
                      return (
                        <div key={dateKey} className="flex items-center gap-2 text-xs">
                          <Star className="h-3 w-3 text-red-500" />
                          <span>
                            {day}日 {festival}
                          </span>
                        </div>
                      )
                    })}

                  {userBirthdays
                    .filter((birthday) => {
                      const [year, month] = birthday.date.split("-").map(Number)
                      return year === currentYear && month === currentMonth + 1
                    })
                    .map((birthday) => {
                      const day = birthday.date.split("-")[2]
                      return (
                        <div key={birthday.date} className="flex items-center gap-2 text-xs">
                          <Gift className="h-3 w-3 text-pink-500" />
                          <span>
                            {day}日 {birthday.name}生日 ({birthday.relation})
                          </span>
                        </div>
                      )
                    })}
                </div>
              </div>
            </ModernCardContent>
            <div className="p-4 border-t">
              <ModernButton
                variant="outline"
                className="w-full"
                onClick={() => {
                  setShowCalendar(false)
                  setShowSettings(false)
                }}
              >
                <X className="h-4 w-4 mr-2" />
                关闭
              </ModernButton>
            </div>
          </ModernCard>
        </div>
      )}
    </>
  )
}
