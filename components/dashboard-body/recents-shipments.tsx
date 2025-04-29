"use client"

import { motion } from "framer-motion"
import { ChartCard } from "@/components/cards/chart"
import { ShipmentList } from "@/components/shipments/shipment-list"

export function RecentShipmentsSection() {
  const shipments = [
    {
      id: "shipment-1",
      trackingId: "MAF-100-234-291",
      sender: "Bunmi Tanny",
      receiver: "Mercy",
      pickupFrom: "Lagos, Nigeria",
      deliveryTo: "Oyo Nigeria",
      amount: "₦3000",
      status: "In-Transit" as const,
      processingTime: "10 hours",
      isPaid: true,
    },
    {
      id: "shipment-2",
      trackingId: "MAF-100-234-291",
      sender: "Bunmi Tanny",
      receiver: "Mercy",
      pickupFrom: "Lagos, Nigeria",
      deliveryTo: "Oyo Nigeria",
      amount: "₦3000",
      status: "Delayed" as const,
      processingTime: "10 hours",
      isPaid: false,
    },
    {
      id: "shipment-3",
      trackingId: "MAF-100-234-291",
      sender: "Bunmi Tanny",
      receiver: "Mercy",
      pickupFrom: "Lagos, Nigeria",
      deliveryTo: "Oyo Nigeria",
      amount: "₦3000",
      status: "In-Transit" as const,
      processingTime: "10 hours",
      isPaid: true,
    },
  ]

  const xLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  const yLabels = ["0", "200", "400", "600", "800", "1000"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="p-4 md:p-6"
    >
      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mb-6"
      >
        <ChartCard title="Company Growth" xLabels={xLabels} yLabels={yLabels} />
      </motion.div>

      {/* Shipment List */}
      <ShipmentList shipments={shipments} />
    </motion.div>
  )
}
