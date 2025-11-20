"use client"

import { memo, useMemo } from "react"
import { Coffee, Popcorn, Sparkles, Music, Utensils, Cake, PartyPopper, CircleDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import OptimizedImage from "@/components/optimized-image"
import { useLanguage } from "@/contexts/language-context"

const serviceIcons = [Coffee, Popcorn, Sparkles, CircleDot, Music, Utensils, Cake, PartyPopper]
const serviceImages = [
  "/professional-coffee-machine-with-steaming-espresso.jpg",
  "/vintage-popcorn-machine-with-fresh-popcorn-popping.jpg",
  "/traditional-masala-grinding-machine-with-aromatic-.jpg",
  "/golgappe-street-food-stall-with-vendor-serving--co.jpg",
  "/dj-stage-setup-with-colorful-lights--sound-equipme.jpg",
  "/elegant-breakfast-buffet-spread-with-variety-of-di.jpg",
  "/birthday-party-buffet-with-colorful-decorations--c.jpg",
  "/elegant-wedding-buffet-with-beautiful-food-display.jpg",
]

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
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">{t("services.title")}</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <service.icon size={24} className="sm:hidden mb-1" />
                    <service.icon size={32} className="hidden sm:block mb-2" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  <Button
                    onClick={() => handleBooking(service.title)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40 animate-pulse text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
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
