"use client"

import { ModernNavigation } from "@/components/ModernNavigation"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ProjectPlan } from "@/docs/project-plan"

export default function ProjectPlanPage() {
  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        <ProjectPlan />
      </div>
    </div>
  )
}
