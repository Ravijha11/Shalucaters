"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Analytics tracking component
export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      })
    }

    // Track custom events
    const trackEvent = (eventName: string, parameters?: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters)
      }
    }

    // Track service interest
    const trackServiceInterest = (serviceName: string) => {
      trackEvent('service_interest', {
        service_name: serviceName,
        page_location: pathname,
        timestamp: new Date().toISOString()
      })
    }

    // Track booking attempts
    const trackBookingAttempt = (packageName: string, estimatedPrice: number) => {
      trackEvent('booking_attempt', {
        package_name: packageName,
        estimated_price: estimatedPrice,
        currency: 'INR',
        page_location: pathname
      })
    }

    // Track WhatsApp clicks
    const trackWhatsAppClick = (source: string) => {
      trackEvent('whatsapp_click', {
        source: source,
        page_location: pathname
      })
    }

    // Track form submissions
    const trackFormSubmission = (formType: string) => {
      trackEvent('form_submission', {
        form_type: formType,
        page_location: pathname
      })
    }

    // Track pricing calculator usage
    const trackPricingCalculator = (guestCount: number, eventType: string, budget: string) => {
      trackEvent('pricing_calculator_used', {
        guest_count: guestCount,
        event_type: eventType,
        budget_range: budget,
        page_location: pathname
      })
    }

    // Track section views
    const trackSectionView = (sectionName: string) => {
      trackEvent('section_view', {
        section_name: sectionName,
        page_location: pathname
      })
    }

    // Expose tracking functions globally for use in other components
    if (typeof window !== 'undefined') {
      window.trackServiceInterest = trackServiceInterest
      window.trackBookingAttempt = trackBookingAttempt
      window.trackWhatsAppClick = trackWhatsAppClick
      window.trackFormSubmission = trackFormSubmission
      window.trackPricingCalculator = trackPricingCalculator
      window.trackSectionView = trackSectionView
    }

    // Track page load time
    const trackPageLoadTime = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart
        trackEvent('page_load_time', {
          load_time: loadTime,
          page_location: pathname
        })
      }
    }

    // Track scroll depth
    let maxScrollDepth = 0
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        if (scrollDepth >= 25 && scrollDepth < 50 && maxScrollDepth < 50) {
          trackEvent('scroll_depth_25', { page_location: pathname })
        } else if (scrollDepth >= 50 && scrollDepth < 75 && maxScrollDepth < 75) {
          trackEvent('scroll_depth_50', { page_location: pathname })
        } else if (scrollDepth >= 75 && scrollDepth < 90 && maxScrollDepth < 90) {
          trackEvent('scroll_depth_75', { page_location: pathname })
        } else if (scrollDepth >= 90) {
          trackEvent('scroll_depth_90', { page_location: pathname })
        }
      }
    }

    // Track user engagement
    const trackUserEngagement = () => {
      let engagementTime = 0
      const startTime = Date.now()
      
      const trackEngagement = () => {
        engagementTime = Date.now() - startTime
        if (engagementTime >= 30000) { // 30 seconds
          trackEvent('high_engagement', {
            engagement_time: engagementTime,
            page_location: pathname
          })
        }
      }

      // Track when user leaves the page
      const handleBeforeUnload = () => {
        trackEngagement()
      }

      window.addEventListener('beforeunload', handleBeforeUnload)
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }

    // Initialize tracking
    trackPageLoadTime()
    trackUserEngagement()
    
    // Add scroll listener
    window.addEventListener('scroll', trackScrollDepth)
    
    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
    }
  }, [pathname])

  return null
}

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    trackServiceInterest: (serviceName: string) => void
    trackBookingAttempt: (packageName: string, estimatedPrice: number) => void
    trackWhatsAppClick: (source: string) => void
    trackFormSubmission: (formType: string) => void
    trackPricingCalculator: (guestCount: number, eventType: string, budget: string) => void
    trackSectionView: (sectionName: string) => void
  }
}
