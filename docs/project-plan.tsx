"use client"

import { Users, Zap, MapPin, Brain, Shield, Clock, Target } from "lucide-react"
import { ModernCard, ModernCardHeader, ModernCardContent } from "@/components/ModernCard"

export function ProjectPlan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          "小语"多维智慧生活管家 - 项目执行计划
        </h1>
        <p className="text-gray-600 text-xl">拟人化思维便捷服务，畅享智能为核心的全方位生活助手</p>
      </div>

      {/* 项目概述 */}
      <ModernCard className="mb-8">
        <ModernCardHeader title="项目概述" icon={<Target className="h-5 w-5" />} />
        <ModernCardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">核心理念</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 拟人化智能交互，让AI更有温度</li>
                <li>• 多维度生活服务整合</li>
                <li>• 本地化大模型，保护隐私安全</li>
                <li>• 无缝地图服务集成</li>
                <li>• 24/7智慧生活管家服务</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">技术架构</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Next.js 15 + React 19 前端框架</li>
                <li>• 本地大语言模型集成</li>
                <li>• 百度地图API深度集成</li>
                <li>• WebRTC语音交互</li>
                <li>• PWA渐进式Web应用</li>
              </ul>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* 阶段规划 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 第一阶段 */}
        <ModernCard>
          <ModernCardHeader title="第一阶段：基础架构搭建" icon={<Shield className="h-5 w-5" />} />
          <ModernCardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                <Clock className="h-4 w-4" />
                时间：2025年6月21日 - 7月15日（25天）
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">核心功能开发</h4>
                  <ul className="text-sm text-blue-700 mt-1 space-y-1">
                    <li>• 小语AI助手核心对话引擎</li>
                    <li>• 用户界面优化与交互设计</li>
                    <li>• 基础数据管理系统</li>
                    <li>• 语音识别与合成准备</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">技术集成</h4>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• 本地大模型环境搭建</li>
                    <li>• 百度地图SDK集成</li>
                    <li>• 数据库设计与实现</li>
                    <li>• API接口设计</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-3">
                <h4 className="font-medium mb-2">资源分配</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>前端开发：2人</div>
                  <div>后端开发：2人</div>
                  <div>AI工程师：1人</div>
                  <div>UI/UX设计：1人</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* 第二阶段 */}
        <ModernCard>
          <ModernCardHeader title="第二阶段：智能功能实现" icon={<Brain className="h-5 w-5" />} />
          <ModernCardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                <Clock className="h-4 w-4" />
                时间：2025年7月16日 - 8月31日（47天）
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900">AI能力增强</h4>
                  <ul className="text-sm text-purple-700 mt-1 space-y-1">
                    <li>• 本地大模型微调与优化</li>
                    <li>• 多轮对话上下文管理</li>
                    <li>• 情感识别与拟人化响应</li>
                    <li>• 个性化学习算法</li>
                  </ul>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-900">地图服务深度集成</h4>
                  <ul className="text-sm text-orange-700 mt-1 space-y-1">
                    <li>• 实时位置服务</li>
                    <li>• 智能路线规划</li>
                    <li>• 周边服务推荐</li>
                    <li>• 地理围栏功能</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-3">
                <h4 className="font-medium mb-2">关键里程碑</h4>
                <div className="space-y-1 text-sm">
                  <div>• 7月31日：AI对话能力测试完成</div>
                  <div>• 8月15日：地图功能集成完成</div>
                  <div>• 8月31日：内部测试版发布</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* 第三阶段 */}
        <ModernCard>
          <ModernCardHeader title="第三阶段：生活服务整合" icon={<Zap className="h-5 w-5" />} />
          <ModernCardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                <Clock className="h-4 w-4" />
                时间：2025年9月1日 - 10月15日（45天）
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">服务生态建设</h4>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• 家政服务预约系统</li>
                    <li>• 老人关爱服务集成</li>
                    <li>• 智能家居控制接口</li>
                    <li>• 紧急救助快速响应</li>
                  </ul>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900">智能推荐引擎</h4>
                  <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                    <li>• 基于位置的服务推荐</li>
                    <li>• 用户行为分析</li>
                    <li>• 个性化内容推送</li>
                    <li>• 智能日程安排</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-3">
                <h4 className="font-medium mb-2">测试计划</h4>
                <div className="space-y-1 text-sm">
                  <div>• 9月15日：功能测试开始</div>
                  <div>• 10月1日：用户体验测试</div>
                  <div>• 10月15日：性能优化完成</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* 第四阶段 */}
        <ModernCard>
          <ModernCardHeader title="第四阶段：上线与运营" icon={<Users className="h-5 w-5" />} />
          <ModernCardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-red-600">
                <Clock className="h-4 w-4" />
                时间：2025年10月16日 - 12月31日（77天）
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-900">正式发布</h4>
                  <ul className="text-sm text-red-700 mt-1 space-y-1">
                    <li>• 生产环境部署</li>
                    <li>• 用户注册与认证系统</li>
                    <li>• 数据安全与隐私保护</li>
                    <li>• 监控与日志系统</li>
                  </ul>
                </div>

                <div className="p-3 bg-indigo-50 rounded-lg">
                  <h4 className="font-medium text-indigo-900">运营推广</h4>
                  <ul className="text-sm text-indigo-700 mt-1 space-y-1">
                    <li>• 用户反馈收集与处理</li>
                    <li>• 功能迭代与优化</li>
                    <li>• 社区建设与维护</li>
                    <li>• 数据分析与改进</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-3">
                <h4 className="font-medium mb-2">成功指标</h4>
                <div className="space-y-1 text-sm">
                  <div>• 用户满意度 {">"} 90%</div>
                  <div>• 日活跃用户 {">"} 1000人</div>
                  <div>• 响应时间 {"<"} 2秒</div>
                </div>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>
      </div>

      {/* 技术规格 */}
      <ModernCard className="mb-8">
        <ModernCardHeader title="技术规格与集成方案" icon={<MapPin className="h-5 w-5" />} />
        <ModernCardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-purple-600">本地大模型集成</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 模型选择：Llama 2/ChatGLM-6B</li>
                <li>• 部署方案：Docker容器化</li>
                <li>• 硬件要求：16GB RAM + GPU</li>
                <li>• 响应时间：{"<"} 2秒</li>
                <li>• 离线运行：支持断网使用</li>
                <li>• 数据安全：本地处理，不上传</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-blue-600">百度地图深度集成</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• JavaScript API v3.0</li>
                <li>• 实时定位与导航</li>
                <li>• POI搜索与推荐</li>
                <li>• 路况信息实时更新</li>
                <li>• 地理编码与逆编码</li>
                <li>• 个性化地图样式</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-green-600">拟人化交互设计</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 情感状态表达系统</li>
                <li>• 语音合成与识别</li>
                <li>• 个性化对话风格</li>
                <li>• 上下文记忆管理</li>
                <li>• 主动关怀提醒</li>
                <li>• 多模态交互支持</li>
              </ul>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>

      {/* 风险评估与应对 */}
      <ModernCard>
        <ModernCardHeader title="风险评估与应对策略" icon={<Shield className="h-5 w-5" />} />
        <ModernCardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-red-600">技术风险</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-900">本地模型性能</h4>
                  <p className="text-sm text-red-700">应对：模型量化优化，硬件升级方案</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-900">API集成稳定性</h4>
                  <p className="text-sm text-orange-700">应对：多重备份方案，降级策略</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-blue-600">业务风险</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900">用户接受度</h4>
                  <p className="text-sm text-blue-700">应对：用户调研，迭代优化，培训推广</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">数据隐私</h4>
                  <p className="text-sm text-green-700">应对：本地处理，加密存储，合规审计</p>
                </div>
              </div>
            </div>
          </div>
        </ModernCardContent>
      </ModernCard>
    </div>
  )
}
