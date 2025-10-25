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
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden pt-16 md:pt-20">
      {/* Horizontal Scrolling Carousel - Images show fully without overlay */}
      <div ref={scrollRef} className="flex h-full w-full overflow-x-auto hide-scrollbar hero-carousel">
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0 hero-slide">
            {/* Full Image Display - No Background Overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content Overlay - Positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 sm:p-6 md:p-8">
              <div className="text-center">
                <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20book%20your%20services%20for%20my%20event.",
                      "_blank",
                    )
                  }}
                  className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 shadow-2xl min-h-[44px] touch-manipulation"
                >
                  Book Your Event
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Tagline Overlay - Positioned at very bottom */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-center z-10 px-2 sm:px-4 w-full">
        <h2 className="text-xs sm:text-sm md:text-lg font-bold text-white text-balance drop-shadow-2xl leading-tight">
          Shalu Caters – Making Every Event Delicious & Fun
        </h2>
      </div>
    </section>
  )
}
