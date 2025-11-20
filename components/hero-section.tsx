"use client"

import { useMemo, memo, useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const heroSlideImages = [
  "/fhfhffh.png",
  "/WhatsApp%20Image%202025-11-20%20at%2008.35.22_acb815b9.jpg",
  "/WhatsApp%20Image%202025-11-20%20at%2008.14.17_f310cd6c.jpg",
]

const HeroSection = memo(function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Get hero slides from translations
  const heroSlides = useMemo(() => {
    const slides = t("hero.slides")
    if (!Array.isArray(slides)) return []
    return slides.map((slide: any, index: number) => ({
      ...slide,
      image: heroSlideImages[index] || heroSlideImages[0],
    }))
  }, [t])

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (heroSlides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden pt-16">
      {/* Image Display - No Overlays, No Blur - Auto-rotating carousel */}
      <div className="relative w-full h-full">
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
