"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface SidebarNavItemProps {
  icon: LucideIcon
  label: string
  href: string
  active?: boolean
}

export function SidebarNavItem({ icon: Icon, label, href, active = false }: SidebarNavItemProps) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} >
      <Button
        variant="ghost"
        className={`w-[180px] h-[36px] text-secondary justify-start gap-4 p-8 transition-all duration-200 ${
          active ? "bg-btnActive text-primary" : ""
        }`}
        asChild
      >
        <a href={href}>
          <Icon  size={24} />
          <span className="font-semibold text-[16px] ">{label}</span>
        </a>
      </Button>
    </motion.div>
  )
}
