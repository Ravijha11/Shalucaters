"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Coffee Counter at Wedding",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Birthday Buffet Spread",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "DJ Stage Setup",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Happy Guests",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Golgappe Stall",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Breakfast Buffet",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Popcorn at Party",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Masala Grinding",
  },
]

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Event Highlights</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Glimpses from our successful events and happy clients
          </p>
        </div>

        {/* Gallery Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg text-foreground p-3 rounded-full transition-all hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg text-foreground p-3 rounded-full transition-all hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Horizontal Scroll Gallery */}
          <div ref={scrollRef} className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 snap-center group">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
