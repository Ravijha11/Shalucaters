"use client"

import { useEffect } from "react"

export default function ResourceHints() {
  useEffect(() => {
    // Add resource hints dynamically for better performance
    const addResourceHint = (rel: string, href: string, as?: string, crossOrigin?: string) => {
      const link = document.createElement("link")
      link.rel = rel
      link.href = href
      if (as) link.as = as
      if (crossOrigin) link.crossOrigin = crossOrigin
      document.head.appendChild(link)
    }

    // Preconnect to external domains
    addResourceHint("preconnect", "https://fonts.googleapis.com")
    addResourceHint("preconnect", "https://fonts.gstatic.com", undefined, "anonymous")
    addResourceHint("dns-prefetch", "https://wa.me")
    addResourceHint("dns-prefetch", "https://vercel.live")
    
    // Prefetch critical resources
    addResourceHint("prefetch", "/_next/static/css/app.css")
  }, [])

  return null
}

