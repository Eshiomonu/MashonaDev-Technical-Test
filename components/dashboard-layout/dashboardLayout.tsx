"use client"

import type { ReactNode } from "react"
import { useIsMobile } from "@/hooks/useMobile"
import { Sidebar } from "@/components/sidebar/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { MobileHeader } from "@/components/dashboard-layout/mobileHeader"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background transition-colors duration-500">
      {/* Sidebar - Hidden on mobile */}
      {!isMobile && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1 pb-16 md:pb-0">
        {/* Mobile Header */}
        {isMobile && <MobileHeader />}

        {/* Content */}
        {children}
      </div>

      {/* Mobile Navigation */}
      {isMobile && <MobileNav />}
    </div>
  )
}
