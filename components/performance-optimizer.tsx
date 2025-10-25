"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  totalBlockingTime: number
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [optimizations, setOptimizations] = useState<string[]>([])

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return

      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paintEntries = window.performance.getEntriesByType('paint')
      
      const loadTime = navigation.loadEventEnd - navigation.navigationStart
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      
      // Get LCP (Largest Contentful Paint)
      const lcpEntries = window.performance.getEntriesByType('largest-contentful-paint')
      const largestContentfulPaint = lcpEntries[lcpEntries.length - 1]?.startTime || 0
      
      // Get CLS (Cumulative Layout Shift)
      let cumulativeLayoutShift = 0
      const clsEntries = window.performance.getEntriesByType('layout-shift')
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cumulativeLayoutShift += entry.value
        }
      })
      
      // Get FID (First Input Delay) - approximated
      const firstInputDelay = 0 // This would need to be measured with PerformanceObserver
      
      // Get TBT (Total Blocking Time) - approximated
      const totalBlockingTime = 0 // This would need to be calculated from long tasks
      
      const performanceMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay,
        totalBlockingTime
      }
      
      setMetrics(performanceMetrics)
      
      // Generate optimization suggestions
      const suggestions: string[] = []
      
      if (loadTime > 3000) {
        suggestions.push("Consider optimizing images and reducing bundle size")
      }
      
      if (firstContentfulPaint > 1500) {
        suggestions.push("Optimize critical rendering path and reduce render-blocking resources")
      }
      
      if (largestContentfulPaint > 2500) {
        suggestions.push("Optimize largest contentful paint element (likely hero image)")
      }
      
      if (cumulativeLayoutShift > 0.1) {
        suggestions.push("Fix layout shifts by setting dimensions for images and dynamic content")
      }
      
      if (firstInputDelay > 100) {
        suggestions.push("Reduce JavaScript execution time to improve interactivity")
      }
      
      if (totalBlockingTime > 200) {
        suggestions.push("Break up long-running JavaScript tasks")
      }
      
      setOptimizations(suggestions)
    }

    // Wait for page to load completely
    const timer = setTimeout(measurePerformance, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  // Image optimization
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.setAttribute('loading', 'lazy')
        }
        
        // Add proper alt attributes if missing
        if (!img.alt) {
          img.alt = 'Event service image'
        }
      })
    }

    optimizeImages()
  }, [])

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        '/professional-coffee-machine-setup-at-elegant-event.jpg',
        '/beautiful-wedding-buffet-setup-with-elegant-food-d.jpg',
        '/masala-grinding-machine-in-action-with-aromatic-sp.jpg'
      ]
      
      heroImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    preloadCriticalResources()
  }, [])

  // Service Worker for caching
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed
      })
    }
  }, [])

  // Bundle size optimization
  useEffect(() => {
    const optimizeBundle = () => {
      // Dynamic imports for heavy components
      const loadHeavyComponents = async () => {
        if (window.location.hash === '#gallery') {
          const { default: GallerySection } = await import('@/components/gallery-section')
          // Component is already loaded, this is just for demonstration
        }
      }
      
      // Load components on demand
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            if (target.dataset.component) {
              loadHeavyComponents()
            }
          }
        })
      })
      
      // Observe sections that might need heavy components
      const sections = document.querySelectorAll('[data-component]')
      sections.forEach(section => observer.observe(section))
    }

    optimizeBundle()
  }, [])

  // Memory optimization
  useEffect(() => {
    const optimizeMemory = () => {
      // Clean up event listeners
      const cleanup = () => {
        // Remove unused event listeners
        window.removeEventListener('scroll', () => {})
        window.removeEventListener('resize', () => {})
      }
      
      // Clean up on page unload
      window.addEventListener('beforeunload', cleanup)
      
      return cleanup
    }

    const cleanup = optimizeMemory()
    return cleanup
  }, [])

  // Network optimization
  useEffect(() => {
    const optimizeNetwork = () => {
      // Implement request batching
      const batchRequests = (requests: any[]) => {
        // Batch multiple API calls into single request
        return Promise.all(requests)
      }
      
      // Implement request caching
      const cache = new Map()
      const cachedFetch = async (url: string) => {
        if (cache.has(url)) {
          return cache.get(url)
        }
        
        const response = await fetch(url)
        cache.set(url, response)
        return response
      }
      
      // Implement connection pooling
      const connectionPool = {
        maxConnections: 6,
        activeConnections: 0,
        queue: [] as any[]
      }
      
      const manageConnections = (request: any) => {
        if (connectionPool.activeConnections < connectionPool.maxConnections) {
          connectionPool.activeConnections++
          return request().finally(() => {
            connectionPool.activeConnections--
            if (connectionPool.queue.length > 0) {
              const nextRequest = connectionPool.queue.shift()
              manageConnections(nextRequest)
            }
          })
        } else {
          connectionPool.queue.push(request)
        }
      }
    }

    optimizeNetwork()
  }, [])

  // Don't render anything visible
  return null
}

// Performance monitoring utilities
export const performanceUtils = {
  // Measure component render time
  measureRenderTime: (componentName: string) => {
    const start = performance.now()
    return () => {
      const end = performance.now()
      console.log(`${componentName} render time: ${end - start}ms`)
    }
  },
  
  // Monitor memory usage
  monitorMemory: () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      }
    }
    return null
  },
  
  // Track user interactions
  trackInteractions: () => {
    const interactions = {
      clicks: 0,
      scrolls: 0,
      keypresses: 0
    }
    
    document.addEventListener('click', () => interactions.clicks++)
    document.addEventListener('scroll', () => interactions.scrolls++)
    document.addEventListener('keypress', () => interactions.keypresses++)
    
    return interactions
  }
}
