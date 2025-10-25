"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/gihghihgkihe.png",
    title: "Fresh Golgappe Service",
    subtitle: "Professional golgappe machines & bulk packets for your events",
  },
  {
    image: "/hfgkjkjeo.png",
    title: "Premium Golgappe Experience",
    subtitle: "Authentic golgappe with traditional flavors and modern service",
  },
  {
    image: "/hfgkjkjeo.png",
    title: "Bulk Golgappe Packets",
    subtitle: "Fresh golgappe packets in buckets for shops & events",
  },
  {
    image: "/popcorn-machine-with-fresh-popcorn-popping--dj-sta.jpg",
    title: "Fresh Popcorn Machine",
    subtitle: "Hot popcorn with multiple flavors for your entertainment",
  },
  {
    image: "/vintage-popcorn-machine-with-fresh-popcorn-popping.jpg",
    title: "Vintage Popcorn Experience",
    subtitle: "Classic popcorn machine for memorable events",
  },
  {
    image: "/golgappe-street-food-stall-with-vendor-serving--co.jpg",
    title: "Street Food Specialists",
    subtitle: "Perfect for street vendors, shops & food businesses",
  },
  {
    image: "/professional-coffee-machine-setup-at-elegant-event.jpg",
    title: "Premium Coffee Experience",
    subtitle: "Freshly brewed coffee for your special events",
  },
  {
    image: "/beautiful-wedding-buffet-setup-with-elegant-food-d.jpg",
    title: "Exquisite Buffet Catering",
    subtitle: "Delicious spreads for weddings, birthdays & parties",
  },
  {
    image: "/masala-grinding-machine-in-action-with-aromatic-sp.jpg",
    title: "Fresh Masala Grinding",
    subtitle: "Authentic flavors ground fresh at your event",
  },
  {
    image: "/delicious-breakfast-spread-with-variety-of-dishes-.jpg",
    title: "Customized Breakfast",
    subtitle: "Start your event with a perfect breakfast",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden pt-16 md:pt-20">
      {/* Horizontal Scrolling Carousel - Fixed for Single Image Display */}
      <div ref={scrollRef} className="flex h-full w-full overflow-x-hidden hide-scrollbar hero-carousel">
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0 hero-slide">
            {/* Background Image - Fully Mobile Optimized */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                transform: currentSlide === index ? "scale(1.01)" : "scale(1)",
                WebkitTransform: currentSlide === index ? "scale(1.01)" : "scale(1)",
              }}
            >
              {/* Mobile-optimized overlay with better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent" />
            </div>

            {/* Content - Fully Mobile Optimized */}
            <div className="relative h-full flex items-center justify-center md:justify-start">
              <div className="container mx-auto px-3 sm:px-4 md:px-6">
                <div className="max-w-2xl space-y-2 sm:space-y-3 md:space-y-6 animate-slide-in text-center md:text-left">
                  <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance px-1 sm:px-2">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-2xl text-white/95 text-pretty px-1 sm:px-2 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="pt-1 sm:pt-2 md:pt-4 px-1 sm:px-2">
                    <Button
                      size="lg"
                      onClick={() => {
                        window.open(
                          "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20event.",
                          "_blank",
                        )
                      }}
                      className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm md:text-lg px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-6 animate-pulse-glow shadow-2xl w-full sm:w-auto min-h-[44px] touch-manipulation"
                    >
                      Book Your Event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - hidden on mobile for cleaner look */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators - Fully Mobile Optimized */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all touch-manipulation ${
              currentSlide === index ? "w-4 sm:w-6 md:w-8 bg-primary" : "w-1.5 sm:w-2 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Tagline Overlay - Fully Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-20 left-1/2 -translate-x-1/2 text-center z-10 px-2 sm:px-4 w-full">
        <h2 className="text-sm sm:text-lg md:text-4xl font-bold text-white text-balance drop-shadow-2xl leading-tight">
          Shalu Caters – Making Every Event Delicious & Fun
        </h2>
      </div>
    </section>
  )
}
