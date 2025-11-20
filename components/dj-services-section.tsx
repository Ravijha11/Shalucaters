"use client"

import { Music, Volume2, Mic, Headphones, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const defaultDjServices = [
  {
    icon: Music,
    title: "Professional DJ Setup",
    description: "High-quality sound system with professional DJ equipment",
    features: ["Premium Sound System", "Professional DJ Console", "Wireless Microphones"],
    price: "Starting from ₹15,000",
    image: "/dj-stage-setup-with-colorful-lights--sound-equipme.jpg"
  },
]

const defaultDjPackages = [
  {
    name: "Basic DJ Package",
    price: "₹12,000",
    duration: "4 hours",
    features: [
      "Professional DJ Setup",
      "Basic Sound System",
      "Music Library Access",
      "1 DJ + 1 Assistant"
    ],
    popular: false
  },
  {
    name: "Premium DJ Package",
    price: "₹20,000",
    duration: "6 hours",
    features: [
      "Professional DJ Setup",
      "Premium Sound System",
      "LED Lighting Effects",
      "MC Services",
      "2 DJs + 2 Assistants"
    ],
    popular: true
  },
  {
    name: "Deluxe DJ Package",
    price: "₹35,000",
    duration: "8 hours",
    features: [
      "Professional DJ Setup",
      "Premium Sound System",
      "Advanced LED Lighting",
      "Fog Machine",
      "MC Services",
      "Custom Playlist",
      "3 DJs + 3 Assistants"
    ],
    popular: false
  }
]

export default function DjServicesSection() {
  const { t } = useLanguage()
  const translatedCards = t("djServices.cards") as any[]
  const translatedPackages = t("djServices.packages") as any[]
  const labels = (t("djServices.labels") as { mostPopular?: string; bookButton?: string }) ?? {}

  const cardsFromTranslations = Array.isArray(translatedCards) ? translatedCards : []
  const djServices =
    cardsFromTranslations.length > 0
      ? cardsFromTranslations.map((service, index) => {
          const fallback = defaultDjServices[index % defaultDjServices.length] ?? defaultDjServices[0]
          return {
            ...fallback,
            ...service,
            icon: fallback.icon,
            features: service?.features ?? fallback.features,
            price: service?.price ?? fallback.price,
            description: service?.description ?? fallback.description,
            title: service?.title ?? fallback.title,
          }
        })
      : defaultDjServices

  const djPackages = defaultDjPackages.map((pkg, index) => {
    const override = Array.isArray(translatedPackages) ? translatedPackages[index] : undefined
    return {
      ...pkg,
      ...override,
      features: override?.features ?? pkg.features,
      duration: override?.duration ?? pkg.duration,
      name: override?.name ?? pkg.name,
      price: override?.price ?? pkg.price,
      popular: override?.popular ?? pkg.popular,
    }
  })

  const mostPopularLabel = labels.mostPopular ?? "Most Popular"
  const bookButtonLabel = labels.bookButton ?? "📞 Book"
  
  const handleBooking = (packageName: string) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I would like to book the ${packageName} for my event. Please provide more details and availability.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="dj-services" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-3 md:space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2">
              {t("djServices.badge")}
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">
            {t("djServices.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            {t("djServices.subtitle")}
          </p>
        </div>

        {/* DJ Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {djServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon size={32} className="mb-2" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star size={16} className="text-purple-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg font-bold text-purple-600">{service.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DJ Packages */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("djServices.packagesTitle")}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("djServices.packagesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {djPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? 'border-purple-500 shadow-lg' : 'border-border hover:border-purple-300'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    {mostPopularLabel}
                  </div>
                )}
                <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl font-bold text-foreground">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-purple-600">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Zap size={16} className="text-purple-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleBooking(pkg.name)}
                    className={`w-full font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 animate-pulse ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-purple-300 hover:border-purple-400' 
                        : 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-orange-300 hover:border-orange-400'
                    }`}
                  >
                    {bookButtonLabel} {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl sm:rounded-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            {t("djServices.readyToRock")}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            {t("djServices.readyToRockSubtitle")}
          </p>
          <Button
            size="lg"
            onClick={() => handleBooking("DJ Services")}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg px-10 py-6 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-300 hover:border-purple-400 animate-pulse"
          >
            {t("djServices.getDjQuote")}
          </Button>
        </div>
      </div>
    </section>
  )
}
