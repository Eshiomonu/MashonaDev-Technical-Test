"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/useMobile"

export interface ShipmentItemProps {
  id: string
  trackingId: string
  sender: string
  receiver: string
  pickupFrom: string
  deliveryTo: string
  amount: string
  status: "In-Transit" | "Delayed" | "Delivered"
  processingTime: string
  isPaid: boolean
  isExpanded: boolean
  onToggle: () => void
}

export function ShipmentItem({
  id,
  trackingId,
  sender,
  receiver,
  pickupFrom,
  deliveryTo,
  amount,
  status,
  processingTime,
  isPaid,
  isExpanded,
  onToggle,
}: ShipmentItemProps) {
  const isMobile = useIsMobile()

  return (
    <motion.div whileHover={{ y: isMobile ? -2 : -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Card className="mb-4 overflow-hidden transition-all duration-300 hover:shadow-md bg-card text-card-foreground">
        <CardContent className="p-0">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-3"} gap-4 md:gap-8 flex-1`}>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Tracking ID</p>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-500">
                    {trackingId}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Sender</p>
                  <p className="text-sm">{sender}</p>
                </div>
                {!isMobile && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Receiver</p>
                    <p className="text-sm">{receiver}</p>
                  </div>
                )}
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onToggle}>
                <Button variant="ghost" size="icon" className="transition-all duration-200">
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className={`p-4 grid ${isMobile ? "grid-cols-2" : "grid-cols-4"} gap-4`}>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Pick Up From</p>
                    <div className="flex items-center gap-1">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-block w-4 h-3 bg-green-500 dark:bg-green-400 rounded-sm transition-colors duration-500"
                      ></motion.span>
                      <p className="text-sm">{pickupFrom}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Delivery To</p>
                    <div className="flex items-center gap-1">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block w-4 h-3 bg-green-500 dark:bg-green-400 rounded-sm transition-colors duration-500"
                      ></motion.span>
                      <p className="text-sm">{deliveryTo}</p>
                    </div>
                  </div>

                  <div className={isMobile ? "col-span-2" : ""}>
                    <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Amount</p>
                    <p className="text-sm font-medium">{amount}</p>
                  </div>

                  {!isMobile && (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Status</p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                            status === "In-Transit"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                              : status === "Delivered"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                                : "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300"
                          }`}
                        >
                          {status}
                        </motion.div>
                      </div>

                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" className="transition-all duration-200">
                            View More
                          </Button>
                        </motion.div>

                        {isPaid ? (
                          <Button variant="outline" size="sm" disabled className="transition-all duration-200">
                            Paid
                          </Button>
                        ) : (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white transition-all duration-200"
                            >
                              Pay Now
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile status and buttons */}
                {isMobile && (
                  <div className="px-4 pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Status</p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                            status === "In-Transit"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                              : status === "Delivered"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                                : "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300"
                          }`}
                        >
                          {status}
                        </motion.div>
                      </div>

                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" className="text-xs transition-all duration-200">
                            View
                          </Button>
                        </motion.div>

                        {isPaid ? (
                          <Button variant="outline" size="sm" disabled className="text-xs transition-all duration-200">
                            Paid
                          </Button>
                        ) : (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              className="text-xs bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white transition-all duration-200"
                            >
                              Pay Now
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground mb-1 transition-colors duration-500">Processing time</p>
                  <div className="flex items-center gap-1">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="text-indigo-600 dark:text-indigo-400 transition-colors duration-500"
                    >
                      <Clock size={16} />
                    </motion.div>
                    <p className="text-sm">{processingTime}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}
