"use client"

import { motion } from "framer-motion"

export function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[1200px] h-[245px] top-7 left-8 rounded-md bg-banner mix-blend-overlay[url('/blend.png')] relative text-white p-10 md:p-10  md:h-[180px] flex items-center overflow-hidden transition-colors duration-500"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="pt-11"
      >
        <h1 className="w-[380.21px] h-[74px] top-12] left-5 text-[42.47px] font-black tracking-[-2%] md:text-3xl text-white uppercase">KEEP UP with your business needs</h1>
        
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2"
      >
        <img
          src="/boxes.png"
          alt="Shipping boxes and globe"
          width={120}
          height={80}
          className=""
        />
      </motion.div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 ">
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
