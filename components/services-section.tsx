"use client"

import { memo, useMemo, useState } from "react"
import { Coffee, Popcorn, Sparkles, Music, Utensils, Cake, PartyPopper, CircleDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const serviceIcons = [Coffee, Popcorn, Sparkles, CircleDot, Music, Utensils, Cake, PartyPopper]
const serviceImages = [
  "/coffee-machine-service.jpg",
  "/popcorn-machine-service.png",
  "/masala-grinding-machine-service.jpg",
  "/golgappe-service.jpg",
  "/stage-dj-setup-service.jpg",
  "/buffet-breakfast-service.jpg",
  "/birthday-catering-service.jpg",
  "/elegant-wedding-buffet-with-beautiful-food-display.jpg", // Fallback for wedding catering
]

// Service Image Component with Error Handling
function ServiceImage({ src, alt, priority, icon: Icon }: { src: string; alt: string; priority?: boolean; icon: any }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative h-48 overflow-hidden bg-muted">
      {/* Background image - show immediately */}
      {!imgError ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Hidden img for error detection */}
          <img
            src={src}
            alt={alt}
            className="hidden"
            onError={() => setImgError(true)}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <Icon size={48} className="text-muted-foreground/50" />
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-4 left-4 text-white z-20 pointer-events-none">
        <Icon size={32} className="mb-2" />
      </div>
    </div>
  )
}

const ServicesSection = memo(function ServicesSection() {
  const { t } = useLanguage()
  
  const services = useMemo(() => {
    const items = t("services.items")
    if (!Array.isArray(items)) return []
    return items.map((item: any, index: number) => ({
      ...item,
      icon: serviceIcons[index] || Coffee,
      image: serviceImages[index] || serviceImages[0],
    }))
  }, [t])

  const handleBooking = (serviceText: string) => {
    const message = encodeURIComponent(`Hello Shalu Caters! ${serviceText}. Please provide more details.`)
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-2xl font-bold text-foreground text-balance px-2">{t("services.title")}</h2>
          <p className="text-base text-muted-foreground max-w-full mx-auto text-pretty px-2">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid - Mobile First (Single Column) */}
        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Service Image */}
                <ServiceImage 
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  priority={index < 2}
                  icon={service.icon}
                />

                {/* Service Content */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <Button
                    onClick={() => handleBooking(service.title)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40 animate-pulse text-base min-h-[48px] touch-manipulation"
                  >
                    {t("services.bookNow")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

export default ServicesSection
