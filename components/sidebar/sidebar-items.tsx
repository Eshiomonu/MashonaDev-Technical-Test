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
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <Button
        variant="ghost"
        className={`w-full justify-start gap-3 py-6 font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
          active ? "bg-accent text-accent-foreground" : ""
        }`}
        asChild
      >
        <a href={href}>
          <Icon size={18} />
          <span>{label}</span>
        </a>
      </Button>
    </motion.div>
  )
}
