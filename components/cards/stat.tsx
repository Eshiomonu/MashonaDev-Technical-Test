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
    <Card className="transition-all duration-300 bg-card text-card-foreground h-full">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <motion.div animate={getIconAnimation()} transition={{ delay: 0.5, duration: 1, repeat: 0 }}>
            <Icon className={iconColor || "text-primary"} size={18} />
          </motion.div>
          <span className="text-xs md:text-sm">{title}</span>
        </div>
        <div className="flex items-center justify-between">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl font-bold"
          >
            {value}
          </motion.h3>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className={`flex items-center ${
              change.positive ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"
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
