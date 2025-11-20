"use client"

import { useMemo, memo, useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

const heroSlideImages = [
  "/coffee-machine-1.jpg",
  "/yantratools-product.webp",
  "/paani-poori-packet-thumb.webp",
  "/fhfhffh.png",
  "/WhatsApp Image 2025-11-20 at 08.35.22_acb815b9.jpg",
  "/WhatsApp Image 2025-11-20 at 08.14.17_f310cd6c.jpg",
  "/hfgkjkjeo.png",
]

// Price information for each image
const heroImagePrices = [
  "₹4,000",
  "₹2,500",
  "₹30",
  "₹3,000",
  "₹200/plate",
  "₹5,000",
  "₹1,500",
]

const HeroSection = memo(function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

  // Get hero slides from translations
  const heroSlides = useMemo(() => {
    const slides = t("hero.slides")
    if (!Array.isArray(slides) || slides.length === 0) {
      // Fallback: use images directly if translations are not available
      return heroSlideImages.map((image, index) => ({
        title: "",
        subtitle: "",
        image: image,
      }))
    }
    return slides.map((slide: any, index: number) => ({
      ...slide,
      image: heroSlideImages[index] || heroSlideImages[0],
    }))
  }, [t])

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.touches[0].clientX
  }

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  // Handle touch end and detect swipe
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && heroSlides.length > 1) {
      // Swipe left - go to next slide
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      // Reset auto-rotate timer
      resetAutoRotate()
    } else if (isRightSwipe && heroSlides.length > 1) {
      // Swipe right - go to previous slide
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      // Reset auto-rotate timer
      resetAutoRotate()
    }
  }

  // Reset auto-rotate timer
  const resetAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current)
    }
    if (heroSlides.length > 1) {
      autoRotateRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 5000)
    }
  }

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (heroSlides.length <= 1) return
    autoRotateRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [heroSlides.length])

  const handleBuyNow = () => {
    window.open(
      "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20buy%20your%20products.",
      "_blank",
    )
  }

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden pt-16">
      {/* Image Display - Swipeable Carousel */}
      <div
        ref={containerRef}
        className="relative w-full h-full touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.length > 0 ? (
          heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image - Clear and Visible */}
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${encodeURI(slide.image)})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              
              {/* Price Tag - Right Side, Just Above Bottom - Cool Design */}
              {index === 2 ? (
                // Paani Poori Packet - Show Price with Cool Design
                <div className="absolute bottom-20 right-4 z-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    {/* Main Price Badge */}
                    <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-white/40 backdrop-blur-md relative overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                      
                      {/* Price */}
                      <div className="relative z-10">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-semibold opacity-90">₹</span>
                          <span className="text-2xl font-bold leading-none">30</span>
                        </div>
                        <div className="text-xs mt-1.5 opacity-95 font-medium">50 pieces</div>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/30 rounded-bl-full"></div>
                      <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-white/30 rounded-tr-full"></div>
                    </div>
                    
                    {/* Ribbon effect */}
                    <div className="absolute -top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                      BEST
                    </div>
                  </div>
                </div>
              ) : (
                // Other Products - Show "On Rent" with Cool Design
                <div className="absolute bottom-20 right-4 z-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-white/40 backdrop-blur-md relative overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
                    
                    {/* Rent Badge */}
                    <div className="relative z-10 flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold tracking-wide">ON RENT</span>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/30 rounded-bl-full"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-white/30 rounded-tr-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          // Fallback if no slides
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Loading images...</p>
          </div>
        )}
      </div>

      {/* Buy Now Button - Positioned at bottom without hiding image */}
      <div className="absolute bottom-12 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <Button
          onClick={handleBuyNow}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-base px-8 py-4 rounded-lg shadow-2xl min-h-[48px] touch-manipulation border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm pointer-events-auto"
        >
          Buy Now
        </Button>
      </div>
    </section>
  )
})

export default HeroSection
