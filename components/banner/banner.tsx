"use client"

import { motion } from "framer-motion"

export function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-slate-900 dark:bg-slate-800 text-white p-6 md:p-10 h-[150px] md:h-[180px] flex items-center overflow-hidden transition-colors duration-500"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl font-bold">KEEP UP WITH YOUR</h1>
        <h1 className="text-xl md:text-3xl font-bold">BUSINESS NEEDS</h1>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2"
      >
        <img
          src="/placeholder.svg?height=120&width=200"
          alt="Shipping boxes and globe"
          className="h-[80px] md:h-[120px]"
        />
      </motion.div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="h-2 w-2 rounded-full bg-white opacity-50 cursor-pointer"
        ></motion.div>
        <motion.div whileHover={{ scale: 1.2 }} className="h-2 w-2 rounded-full bg-white cursor-pointer"></motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="h-2 w-2 rounded-full bg-white opacity-50 cursor-pointer"
        ></motion.div>
      </div>
    </motion.div>
  )
}
