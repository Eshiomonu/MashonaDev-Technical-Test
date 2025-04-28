"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileHeader() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-10 bg-background border-b px-4 py-3 flex justify-between items-center md:hidden"
    >
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>FN</AvatarFallback>
        </Avatar>
        <h1 className="font-bold">Shipping Dashboard</h1>
      </div>
      <ThemeToggle />
    </motion.div>
  )
}
