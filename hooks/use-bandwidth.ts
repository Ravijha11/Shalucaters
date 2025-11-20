import { useState, useEffect } from "react"

interface BandwidthInfo {
  effectiveType: string
  downlink: number
  saveData: boolean
  isSlowConnection: boolean
}

export function useBandwidth(): BandwidthInfo {
  const [bandwidthInfo, setBandwidthInfo] = useState<BandwidthInfo>({
    effectiveType: "4g",
    downlink: 10,
    saveData: false,
    isSlowConnection: false,
  })

  useEffect(() => {
    if (typeof window === "undefined" || !("connection" in navigator)) {
      return
    }

    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

    if (!connection) {
      return
    }

    const updateConnection = () => {
      const effectiveType = connection.effectiveType || "4g"
      const downlink = connection.downlink || 10
      const saveData = connection.saveData || false
      
      // Consider slow if: 2g, 3g, or downlink < 1.5 Mbps, or save-data mode
      const isSlowConnection = 
        effectiveType === "2g" || 
        effectiveType === "slow-2g" || 
        downlink < 1.5 || 
        saveData

      setBandwidthInfo({
        effectiveType,
        downlink,
        saveData,
        isSlowConnection,
      })
    }

    updateConnection()
    connection.addEventListener("change", updateConnection)

    return () => {
      connection.removeEventListener("change", updateConnection)
    }
  }, [])

  return bandwidthInfo
}






