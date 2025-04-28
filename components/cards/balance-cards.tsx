"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BalanceCardProps {
  balance: string
}

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card className="bg-indigo-600 dark:bg-indigo-700 text-white transition-all duration-300 h-full">
      <CardContent className="p-4 md:p-6">
        <p className="text-sm mb-1">Your Balance</p>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-bold mb-4"
        >
          {balance}
        </motion.h3>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-slate-200 dark:text-indigo-700 dark:hover:bg-slate-300 transition-all duration-200"
          >
            Fund Wallet
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}
