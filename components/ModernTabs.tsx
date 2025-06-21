"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface TabItem {
  id: string
  label: string
  content: ReactNode
}

interface ModernTabsProps {
  tabs: TabItem[]
  defaultTab?: string
}

export function ModernTabs({ tabs, defaultTab }: ModernTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "")

  return (
    <div className="w-full">
      {/* 标签页导航 */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-3d ${activeTab === tab.id ? "active" : ""} whitespace-nowrap min-w-0 flex-shrink-0`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 标签页内容 */}
      <div className="cube-card p-6">
        {tabs.map((tab) => (
          <div key={tab.id} className={`transition-opacity duration-300 ${activeTab === tab.id ? "block" : "hidden"}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
