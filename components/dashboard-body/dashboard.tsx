"use client"

import { motion } from "framer-motion"
import { ChevronDown, Package, ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BalanceCard } from "@/components/cards/balance"
import { StatCard } from "@/components/cards/stat"
import { useIsMobile } from "@/hooks/useMobile"

export function DashboardView() {
  const isMobile = useIsMobile()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 80 : 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-[1200px] h-[221px] gap-6 left-8 mt-6 md:p-6">
      <motion.div variants={itemVariants} className="  flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium font-[#171717] left-8 transition-colors duration-500">Overview</h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="font-[#737373] transition-colors duration-300 text-sm md:text-base">
            This Month <ChevronDown size={16} />
          </Button>
        </motion.div>
      </motion.div>

      <div className="flex justify-between">
        {/* Balance Card */}
        <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
          <BalanceCard balance="₦3,000,000.28" />
        </motion.div>

        <div className="flex justify-center flex-row items-center gap-3">
           {/* Total Shipment */}
        <motion.div variants={itemVariants}>
          <StatCard
            title="Total Shipment"
            value="34"
            icon={Package}
            change={{ value: "90%", positive: true }}
            iconAnimation="rotate"
          />
        </motion.div>

        {/* Total Exports */}
        <motion.div variants={itemVariants}>
          <StatCard
            title="Total Exports"
            value="34"
            icon={ArrowUp}
            change={{ value: "90%", positive: true }}
            iconColor="text-green-500 dark:text-green-400"
            iconAnimation="moveUp"
          />
        </motion.div>

        {/* Total Import */}
        <motion.div variants={itemVariants}>
          <StatCard
            title="Total Import"
            value="34"
            icon={ArrowDown}
            change={{ value: "90%", positive: true }}
            iconColor="text-cyan-500 dark:text-cyan-400"
            iconAnimation="moveDown"
          />
        </motion.div>
        </div>
       
      </div>
    </motion.div>
  )
}
