"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShipmentItem, type ShipmentItemProps } from "@/components/shipments/shipment-item"

interface ShipmentListProps {
  shipments: Omit<ShipmentItemProps, "isExpanded" | "onToggle">[]
}

export function ShipmentList({ shipments }: ShipmentListProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-foreground transition-colors duration-500">Recent shipment</h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="sm" className="transition-all duration-200">
            See All
          </Button>
        </motion.div>
      </div>

      {shipments.map((shipment, index) => (
        <motion.div
          key={shipment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        >
          <ShipmentItem
            {...shipment}
            isExpanded={expandedItem === shipment.id}
            onToggle={() => toggleExpand(shipment.id)}
          />
        </motion.div>
      ))}
    </div>
  )
}
