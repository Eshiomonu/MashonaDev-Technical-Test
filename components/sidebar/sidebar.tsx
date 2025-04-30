"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, Package, Globe, Bell, CreditCard, MapPin, Share2, HelpCircle, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarNavItem } from "@/components/sidebar/sidebar-items"
import Image from "next/image"

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
      className="w-[240px] right-1 bg-white border border-[#E5E5E5] flex-shrink-0 flex flex-col transition-colors duration-500 md:flex"
    >
      <div
            className="w-[240px] h-[96px] bottom-1 p-[24px] gap-8 border border-[#E5E5E5]"
          >
           <Image src={""} alt="logo" height={96}/>
          </div>

        <div className=" w-[180px] h-[504px] ml-[30px] mt-[54px] gap-8">

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
     

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="p-4 border-t"
      >
        

        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="w-[180px] h-[144px] ml-[30px] mt-[37px] gap-8">
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
         
        </div>
          <Button
            variant="ghost"
            className=" justify-start transition-all duration-200 hover:bg-accent text-secondary"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
