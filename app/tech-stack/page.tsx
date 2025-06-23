import { TechStackReport } from "@/docs/tech-stack-report"
import { Breadcrumb } from "@/components/Breadcrumb"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "技术栈报告", href: "/tech-stack" },
          ]}
        />
        <TechStackReport />
      </div>
    </div>
  )
}
