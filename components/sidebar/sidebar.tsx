"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, Package, Globe, Bell, CreditCard, MapPin, Share2, HelpCircle, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarNavItem } from "@/components/sidebar/sidebar-items"

export function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
    { icon: Package, label: "Shipments", href: "/shipments" },
    { icon: Globe, label: "Our Services", href: "/services" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: CreditCard, label: "Wallet", href: "/wallet" },
    { icon: MapPin, label: "My Addresses", href: "/addresses" },
    { icon: Share2, label: "Invite & Earn", href: "/invite" },
    { icon: HelpCircle, label: "Help Center", href: "/help" },
  ]

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-[200px] border-r flex-shrink-0 flex flex-col bg-background transition-colors duration-500 hidden md:flex"
    >
      <div className="flex-1 py-4">
        <div className="px-4 space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pt-4 pb-8"
          >
            <h2 className="text-xl font-bold text-foreground transition-colors duration-500">Invite & Earn</h2>
            <p className="text-sm text-muted-foreground mt-1 transition-colors duration-500">
              Keep track of your addresses, location updates. Edit, Delete, Update and see all your saved addresses
            </p>
          </motion.div>

          {navItems.map((item) => (
            <SidebarNavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="p-4 border-t"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>FN</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="text-foreground transition-colors duration-500">Firstname</p>
              <p className="text-muted-foreground transition-colors duration-500">Lastname</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
