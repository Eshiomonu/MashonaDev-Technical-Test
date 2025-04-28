"use client"

import { useEffect, useState } from "react"

import { HeroBanner } from "@/components/banner/banner"
import { DashboardLayout } from "@/components/dashboard-layout/dashboardLayout"
import { DashboardView } from "@/components/dashboard-body/dashboard"
// import { RecentShipmentsSection } from "@/components/dashboard/recent-shipments-section"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
   <DashboardLayout>
    <HeroBanner/>
    <DashboardView/>
   </DashboardLayout>
  )
}
