"use client"

import { Coffee, Popcorn, Sparkles, Music, Utensils, Cake, PartyPopper, CircleDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Coffee,
    title: "Coffee Machine",
    description: "Premium coffee brewing station with professional barista service for your events",
    image: "/professional-coffee-machine-with-steaming-espresso.jpg",
    whatsappText: "I would like to book the Coffee Machine service",
  },
  {
    icon: Popcorn,
    title: "Popcorn Machine",
    description: "Fresh, hot popcorn made on-site with multiple flavor options",
    image: "/vintage-popcorn-machine-with-fresh-popcorn-popping.jpg",
    whatsappText: "I would like to book the Popcorn Machine service",
  },
  {
    icon: Sparkles,
    title: "Masala Grinding",
    description: "Traditional masala grinding machine for authentic fresh spices",
    image: "/traditional-masala-grinding-machine-with-aromatic-.jpg",
    whatsappText: "I would like to book the Masala Grinding Machine service",
  },
  {
    icon: CircleDot,
    title: "Golgappe Service",
    description: "Fresh golgappe machine & packets for shops and events",
    image: "/golgappe-street-food-stall-with-vendor-serving--co.jpg",
    whatsappText: "I would like to book the Golgappe Machine & Packets service",
  },
  {
    icon: Music,
    title: "Stage & DJ Setup",
    description: "Professional DJ equipment and stage setup for unforgettable entertainment",
    image: "/dj-stage-setup-with-colorful-lights--sound-equipme.jpg",
    whatsappText: "I would like to book the Stage/DJ Setup service",
  },
  {
    icon: Utensils,
    title: "Buffet Breakfast",
    description: "Customized breakfast spreads tailored to your preferences",
    image: "/elegant-breakfast-buffet-spread-with-variety-of-di.jpg",
    whatsappText: "I would like to book the Buffet Breakfast service",
  },
  {
    icon: Cake,
    title: "Birthday Catering",
    description: "Complete catering solutions for memorable birthday celebrations",
    image: "/birthday-party-buffet-with-colorful-decorations--c.jpg",
    whatsappText: "I would like to book Birthday Catering service",
  },
  {
    icon: PartyPopper,
    title: "Wedding & Party",
    description: "Full-service catering for weddings and large celebrations",
    image: "/elegant-wedding-buffet-with-beautiful-food-display.jpg",
    whatsappText: "I would like to book Wedding/Party Catering service",
  },
]

export default function ServicesSection() {
  const handleBooking = (serviceText: string) => {
    const message = encodeURIComponent(`Hello Shalu Caters! ${serviceText}. Please provide more details.`)
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Our Premium Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From coffee to complete catering, we bring excellence to every event
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon size={32} className="mb-2" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <Button
                    onClick={() => handleBooking(service.whatsappText)}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
