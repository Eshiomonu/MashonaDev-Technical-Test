"use client"

import { motion } from "framer-motion"

export function TopNav() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="w-[1200px} h-[96px] bottom-1 p-[12px] gap-8 border border-[#E5E5E5] bg-white"
  >
    <div className="mt-[15px] ml-[29px] gap-4 ">
    <h2 className="text-xl font-bold font-[#171717] leading-5 duration-500">Invite & Earn</h2>
    <p className="text-xs font-normal leading-1 font-[#737373] mt-1 transition-colors duration-500">
      Keep track of your addresses, location updates. Edit, Delete, Update and see all your saved addresses
    </p>
    </div>
    
  </motion.div>
  )
}
