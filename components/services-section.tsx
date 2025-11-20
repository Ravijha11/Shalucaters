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
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon size={32} className="mb-2" />
                  </div>
                </div>

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
