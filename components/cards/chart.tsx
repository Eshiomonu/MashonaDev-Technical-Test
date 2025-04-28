"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

interface ChartCardProps {
  title: string
  xLabels: string[]
  yLabels: string[]
}

export function ChartCard({ title, xLabels, yLabels }: ChartCardProps) {
  const [activeTab, setActiveTab] = useState("year")
  const { theme } = useTheme()

  return (
    <Card className="transition-all duration-300 bg-card text-card-foreground">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <h3 className="font-medium">{title}</h3>
          <Tabs defaultValue="year" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-8">
              <TabsTrigger value="year" className="text-xs md:text-sm transition-all duration-200">
                Year
              </TabsTrigger>
              <TabsTrigger value="month" className="text-xs md:text-sm transition-all duration-200">
                Month
              </TabsTrigger>
              <TabsTrigger value="week" className="text-xs md:text-sm transition-all duration-200">
                Week
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Chart */}
        <div className="h-[150px] md:h-[200px] w-full">
          <motion.svg
            viewBox="0 0 1000 200"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.path
              d="M0,150 C50,140 100,130 150,135 C200,140 250,150 300,145 C350,140 400,130 450,140 C500,150 550,170 600,160 C650,150 700,120 750,130 C800,140 850,180 900,100 C950,20 1000,10 1000,10"
              fill="none"
              stroke={theme === "dark" ? "#818cf8" : "#6366f1"}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.7, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Y-axis labels */}
          <div className="flex justify-between text-xs text-muted-foreground mt-2 transition-colors duration-500">
            {yLabels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-muted-foreground mt-2 transition-colors duration-500">
            {xLabels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
