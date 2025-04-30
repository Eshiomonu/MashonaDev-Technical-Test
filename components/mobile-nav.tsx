"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, Package, CreditCard, Bell, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Package, label: "Shipments", href: "#" },
    { icon: CreditCard, label: "Wallet", href: "#" },
    { icon: Bell, label: "Notifications", href: "#" },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50 px-2 py-2"
      >
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => (
            <motion.a key={index} href={item.href} whileTap={{ scale: 0.9 }} className="flex flex-col items-center p-2">
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <item.icon size={20} />
              </motion.div>
              <span className="text-xs mt-1">{item.label}</span>
            </motion.a>
          ))}
          <motion.button whileTap={{ scale: 0.9 }} onClick={toggleMenu} className="flex flex-col items-center p-2">
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Menu size={20} />
            </motion.div>
            <span className="text-xs mt-1">Menu</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-background p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X size={20} />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Theme</h3>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium mb-2">Navigation</h3>
                  {[
                    { label: "Dashboard", icon: Home },
                    { label: "Shipments", icon: Package },
                    { label: "Our Services", icon: Package },
                    { label: "Notifications", icon: Bell },
                    { label: "Wallet", icon: CreditCard },
                    { label: "My Addresses", icon: Home },
                    { label: "Invite & Earn", icon: Package },
                    { label: "Help Center", icon: Bell },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-accent"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  className="pt-4 border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button variant="default" className="w-full">
                    Logout
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
