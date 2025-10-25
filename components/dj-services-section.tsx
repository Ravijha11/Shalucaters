"use client"

import { Music, Volume2, Mic, Headphones, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const djServices = [
  {
    icon: Music,
    title: "Professional DJ Setup",
    description: "High-quality sound system with professional DJ equipment",
    features: ["Premium Sound System", "Professional DJ Console", "Wireless Microphones"],
    price: "Starting from ₹15,000",
    image: "/dj-stage-setup-with-colorful-lights--sound-equipme.jpg"
  },
  {
    icon: Volume2,
    title: "Sound & Lighting",
    description: "Complete audio-visual setup with dynamic lighting effects",
    features: ["LED Stage Lights", "Fog Machine", "Spotlight Effects"],
    price: "Starting from ₹8,000",
    image: "/placeholder.svg"
  },
  {
    icon: Mic,
    title: "MC Services",
    description: "Professional Master of Ceremonies for your special events",
    features: ["Event Hosting", "Announcements", "Crowd Engagement"],
    price: "Starting from ₹5,000",
    image: "/placeholder.svg"
  },
  {
    icon: Headphones,
    title: "Music Library",
    description: "Extensive collection of latest Bollywood, English & regional music",
    features: ["Latest Hits", "Classic Songs", "Custom Playlists"],
    price: "Included",
    image: "/placeholder.svg"
  }
]

const djPackages = [
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
  const handleBooking = (packageName: string) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I would like to book the ${packageName} for my event. Please provide more details and availability.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="dj-services" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              🎵 Professional DJ Services
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Make Your Event Unforgettable
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional DJ services with premium sound systems, lighting effects, and MC services for weddings, parties, and corporate events
          </p>
        </div>

        {/* DJ Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {djServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">DJ Packages</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect DJ package for your event. All packages include professional equipment and experienced DJs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {djPackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? 'border-purple-500 shadow-lg' : 'border-border hover:border-purple-300'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
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
                    📞 Book {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Rock Your Event?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us now to discuss your DJ requirements and get a customized quote for your special event.
          </p>
          <Button
            size="lg"
            onClick={() => handleBooking("DJ Services")}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg px-10 py-6 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-300 hover:border-purple-400 animate-pulse"
          >
            📞 Get DJ Quote Now
          </Button>
        </div>
      </div>
    </section>
  )
}
