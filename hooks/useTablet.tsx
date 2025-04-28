"use client"

import { useEffect, useState } from "react"

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return

    // Initial check - tablet is typically between 768px and 1024px
    const checkIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < 1024)
    }

    // Run initial check
    checkIsTablet()

    // Handler for window resize
    const handleResize = () => {
      checkIsTablet()
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isTablet
}
