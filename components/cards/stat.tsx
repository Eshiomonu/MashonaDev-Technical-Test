"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, type LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  change: {
    value: string
    positive: boolean
  }
  iconColor?: string
  iconAnimation?: "rotate" | "moveUp" | "moveDown"
}

export function StatCard({ title, value, icon: Icon, change, iconColor, iconAnimation }: StatCardProps) {
  const getIconAnimation = () => {
    switch (iconAnimation) {
      case "rotate":
        return { rotate: [0, -10, 0, 10, 0] }
      case "moveUp":
        return { y: [0, -5, 0] }
      case "moveDown":
        return { y: [0, 5, 0] }
      default:
        return {}
    }
  }

  return (
    <Card className="transition-all duration-300 w-[212px] h-[163px] gap-2 bg-white rounded-lg">
      <CardContent className="w-[181px] h-[97px] p-4 md:p-6">
        <div className="w-[181px] h-[40px] flex items-center gap-2 mb-2">
          <motion.div animate={getIconAnimation()} transition={{ delay: 0.5, duration: 1, repeat: 0 }}>
            <Icon size={20} />
          </motion.div>
          <span className="text-xs font-normal font-[#525252] md:text-sm">{title}</span>
        </div>
        <div className="flex items-center justify-between">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl font-[#353535] md:text-2xl font-medium"
          >
            {value}
          </motion.h3>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className={`flex items-center ${
              change.positive ? "text-[#0A7D00]" : "text-[#D7FDFF]"
            } text-xs md:text-sm`}
          >
            {change.positive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span>{change.value}</span>
          </motion.div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground mt-2 transition-colors duration-500">
          <span>vs last month</span>
          {change.positive ? <ArrowUp size={12} className="ml-1" /> : <ArrowDown size={12} className="ml-1" />}
        </div>
      </CardContent>
    </Card>
  )
}
