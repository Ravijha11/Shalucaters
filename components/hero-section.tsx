"use client"

import { useMemo, memo, useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

const heroSlideImages = [
  "/fhfhffh.png",
  "/WhatsApp%20Image%202025-11-20%20at%2008.35.22_acb815b9.jpg",
  "/WhatsApp%20Image%202025-11-20%20at%2008.14.17_f310cd6c.jpg",
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
    if (!Array.isArray(slides)) return []
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
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image - Clear and Visible */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
})

export default HeroSection
