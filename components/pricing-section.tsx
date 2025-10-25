"use client"

import { useState } from "react"
import { Check, Star, Calculator, Users, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const eventTypes = [
  { value: "wedding", label: "Wedding", multiplier: 1.5 },
  { value: "birthday", label: "Birthday Party", multiplier: 1.0 },
  { value: "corporate", label: "Corporate Event", multiplier: 1.2 },
  { value: "festival", label: "Festival/Religious", multiplier: 0.9 },
  { value: "anniversary", label: "Anniversary", multiplier: 1.1 },
  { value: "other", label: "Other", multiplier: 1.0 }
]

const basePackages = [
  {
    name: "Essential Package",
    basePrice: 15000,
    description: "Perfect for small gatherings and intimate events",
    features: [
      "Basic DJ Setup (4 hours)",
      "Coffee Machine",
      "Popcorn Machine",
      "Basic Catering (50 people)",
      "1 Event Coordinator"
    ],
    color: "border-blue-500",
    popular: false
  },
  {
    name: "Premium Package",
    basePrice: 35000,
    description: "Most popular choice for medium to large events",
    features: [
      "Professional DJ Setup (6 hours)",
      "Premium Sound & Lighting",
      "Coffee Machine + Popcorn Machine",
      "Masala Grinding Service",
      "Full Catering (100 people)",
      "2 Event Coordinators",
      "MC Services"
    ],
    color: "border-purple-500",
    popular: true
  },
  {
    name: "Deluxe Package",
    basePrice: 65000,
    description: "Complete event solution for grand celebrations",
    features: [
      "Deluxe DJ Setup (8 hours)",
      "Advanced Sound & Lighting",
      "All Food Services (Coffee, Popcorn, Masala)",
      "Complete Catering (200 people)",
      "Golgappe Machine & Packets",
      "3 Event Coordinators",
      "MC Services",
      "Event Planning Support"
    ],
    color: "border-gold-500",
    popular: false
  }
]

const addOnServices = [
  { name: "Additional DJ Hours", price: 2000, per: "hour" },
  { name: "Extra Lighting Effects", price: 5000, per: "event" },
  { name: "Fog Machine", price: 3000, per: "event" },
  { name: "Photo Booth", price: 8000, per: "event" },
  { name: "Live Music Band", price: 15000, per: "event" },
  { name: "Extra Catering (per 50 people)", price: 8000, per: "50 people" },
  { name: "Premium Coffee Service", price: 5000, per: "event" },
  { name: "Custom Popcorn Flavors", price: 2000, per: "event" }
]

export default function PricingSection() {
  const [guestCount, setGuestCount] = useState(50)
  const [eventType, setEventType] = useState("birthday")
  const [selectedPackage, setSelectedPackage] = useState("premium")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const calculatePrice = (basePrice: number) => {
    const eventMultiplier = eventTypes.find(e => e.value === eventType)?.multiplier || 1.0
    const guestMultiplier = Math.max(1, guestCount / 50)
    const baseCalculated = basePrice * eventMultiplier * guestMultiplier
    
    const addOnPrice = selectedAddOns.reduce((total, addOn) => {
      const service = addOnServices.find(s => s.name === addOn)
      return total + (service?.price || 0)
    }, 0)
    
    return Math.round(baseCalculated + addOnPrice)
  }

  const handleAddOnToggle = (addOnName: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnName) 
        ? prev.filter(name => name !== addOnName)
        : [...prev, addOnName]
    )
  }

  const handleBooking = (packageName: string, price: number) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I would like to book the ${packageName} for my ${eventType} event with ${guestCount} guests. Estimated price: ₹${price.toLocaleString()}. Please provide more details.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              💰 Smart Pricing Calculator
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Transparent Pricing for Every Event
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Get instant pricing based on your event requirements. Our smart algorithm calculates the perfect package for your budget and needs.
          </p>
        </div>

        {/* Pricing Calculator */}
        <Card className="mb-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-6">
              <Calculator className="inline-block mr-2" />
              Event Pricing Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  min="10"
                  max="1000"
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-sm text-muted-foreground mb-2">Estimated Price Range</p>
              <div className="text-2xl font-bold text-primary">
                ₹{calculatePrice(15000).toLocaleString()} - ₹{calculatePrice(65000).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Based on {guestCount} guests for {eventTypes.find(e => e.value === eventType)?.label}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Package Comparison */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Choose Your Perfect Package</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All packages include professional service, experienced staff, and quality equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basePackages.map((pkg, index) => {
              const calculatedPrice = calculatePrice(pkg.basePrice)
              return (
                <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  pkg.popular ? `${pkg.color} shadow-lg` : 'border-border hover:border-primary'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                      <h4 className="text-2xl font-bold text-foreground">{pkg.name}</h4>
                      <div className="text-4xl font-bold text-primary">₹{calculatedPrice.toLocaleString()}</div>
                      <p className="text-muted-foreground text-sm">{pkg.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => handleBooking(pkg.name, calculatedPrice)}
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      Book {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Add-On Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Add-On Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customize your package with additional services to make your event even more special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOnServices.map((service, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedAddOns.includes(service.name) 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleAddOnToggle(service.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">₹{service.price.toLocaleString()} / {service.per}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedAddOns.includes(service.name) 
                        ? 'border-primary bg-primary' 
                        : 'border-gray-300'
                    }`}>
                      {selectedAddOns.includes(service.name) && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedAddOns.length > 0 && (
            <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-2">Selected Add-Ons</h4>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {selectedAddOns.map((addOn) => (
                  <Badge key={addOn} variant="secondary" className="px-3 py-1">
                    {addOn}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Add-ons will be included in your final quote
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Your Custom Quote?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us now for a detailed quote tailored to your specific event requirements and budget.
          </p>
          <Button
            size="lg"
            onClick={() => handleBooking("Custom Package", calculatePrice(35000))}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Get Custom Quote Now
          </Button>
        </div>
      </div>
    </section>
  )
}
