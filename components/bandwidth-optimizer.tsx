"use client"

import { useEffect } from "react"
import { useBandwidth } from "@/hooks/use-bandwidth"

export default function BandwidthOptimizer() {
  const { isSlowConnection, saveData, effectiveType, downlink } = useBandwidth()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Apply optimizations for slow connections
    if (isSlowConnection) {
      // Disable animations for slow connections
      document.documentElement.style.setProperty("--animation-duration", "0s")
      
      // Reduce image quality
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          // Add low quality parameter if supported
          const src = img.src
          if (!src.includes("quality=")) {
            img.loading = "lazy"
            img.fetchPriority = "low"
          }
        }
      })

      // Disable auto-play videos
      const videos = document.querySelectorAll("video")
      videos.forEach((video) => {
        if (video instanceof HTMLVideoElement) {
          video.autoplay = false
          video.preload = "none"
        }
      })
    }

    // Apply data saver mode optimizations
    if (saveData) {
      // Disable background images
      document.body.classList.add("data-saver-mode")
      
      // Reduce image quality further
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          img.loading = "lazy"
          img.fetchPriority = "low"
        }
      })
    }

    // Log connection info for debugging
    if (process.env.NODE_ENV === "development") {
      console.log("Connection Info:", {
        effectiveType,
        downlink: `${downlink} Mbps`,
        saveData,
        isSlowConnection,
      })
    }
  }, [isSlowConnection, saveData, effectiveType, downlink])

  return null
}







