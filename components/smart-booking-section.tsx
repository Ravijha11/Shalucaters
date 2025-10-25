"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Users, MapPin, CheckCircle, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

const eventTypes = [
  { value: "wedding", label: "Wedding", duration: "8-12 hours", complexity: "high" },
  { value: "birthday", label: "Birthday Party", duration: "4-6 hours", complexity: "medium" },
  { value: "corporate", label: "Corporate Event", duration: "2-4 hours", complexity: "medium" },
  { value: "anniversary", label: "Anniversary", duration: "4-8 hours", complexity: "medium" },
  { value: "festival", label: "Festival/Religious", duration: "6-10 hours", complexity: "high" },
  { value: "other", label: "Other", duration: "2-8 hours", complexity: "low" }
]

const serviceRecommendations = {
  wedding: ["DJ Services", "Complete Catering", "Masala Grinding", "Coffee Machine", "Popcorn Machine"],
  birthday: ["DJ Services", "Popcorn Machine", "Basic Catering", "Coffee Machine"],
  corporate: ["Coffee Machine", "Basic Catering", "Popcorn Machine"],
  anniversary: ["DJ Services", "Complete Catering", "Coffee Machine"],
  festival: ["Complete Catering", "Masala Grinding", "Golgappe Service", "Coffee Machine"],
  other: ["Basic Catering", "Coffee Machine"]
}

const timeSlots = [
  { value: "morning", label: "Morning (6 AM - 12 PM)", availability: "high" },
  { value: "afternoon", label: "Afternoon (12 PM - 6 PM)", availability: "medium" },
  { value: "evening", label: "Evening (6 PM - 12 AM)", availability: "high" },
  { value: "night", label: "Night (12 AM - 6 AM)", availability: "low" }
]

const budgetRanges = [
  { value: "budget", label: "Budget (₹15,000 - ₹30,000)", color: "bg-green-100 text-green-800" },
  { value: "standard", label: "Standard (₹30,000 - ₹60,000)", color: "bg-blue-100 text-blue-800" },
  { value: "premium", label: "Premium (₹60,000 - ₹1,00,000)", color: "bg-purple-100 text-purple-800" },
  { value: "luxury", label: "Luxury (₹1,00,000+)", color: "bg-gold-100 text-gold-800" }
]

export default function SmartBookingSection() {
  const [formData, setFormData] = useState({
    eventType: "",
    guestCount: 50,
    eventDate: "",
    timeSlot: "",
    location: "",
    budget: "",
    specialRequirements: "",
    services: [] as string[]
  })

  const [recommendations, setRecommendations] = useState<string[]>([])
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [availability, setAvailability] = useState("")

  useEffect(() => {
    if (formData.eventType) {
      const recommendedServices = serviceRecommendations[formData.eventType as keyof typeof serviceRecommendations] || []
      setRecommendations(recommendedServices)
      
      // Calculate estimated price based on form data
      const basePrice = formData.guestCount * 200 // Base price per guest
      const eventMultiplier = formData.eventType === "wedding" ? 1.5 : 
                            formData.eventType === "corporate" ? 1.2 : 1.0
      const budgetMultiplier = formData.budget === "luxury" ? 2.0 :
                              formData.budget === "premium" ? 1.5 :
                              formData.budget === "standard" ? 1.0 : 0.8
      
      setEstimatedPrice(Math.round(basePrice * eventMultiplier * budgetMultiplier))
    }
  }, [formData.eventType, formData.guestCount, formData.budget])

  useEffect(() => {
    if (formData.timeSlot) {
      const slot = timeSlots.find(s => s.value === formData.timeSlot)
      setAvailability(slot?.availability || "medium")
    }
  }, [formData.timeSlot])

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = () => {
    const message = encodeURIComponent(`
Hello Shalu Caters! I would like to book your services for my event:

Event Type: ${formData.eventType}
Guests: ${formData.guestCount}
Date: ${formData.eventDate}
Time: ${formData.timeSlot}
Location: ${formData.location}
Budget: ${formData.budget}
Services: ${formData.services.join(", ")}
Special Requirements: ${formData.specialRequirements}

Estimated Budget: ₹${estimatedPrice.toLocaleString()}
Please provide a detailed quote and availability.
    `)
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "high": return "text-green-600"
      case "medium": return "text-yellow-600"
      case "low": return "text-red-600"
      default: return "text-gray-600"
    }
  }

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case "high": return "High Availability"
      case "medium": return "Limited Availability"
      case "low": return "Low Availability"
      default: return "Check Availability"
    }
  }

  return (
    <section id="smart-booking" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              <Zap className="inline-block mr-2" size={16} />
              Smart Booking System
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Get Your Perfect Event Quote
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our intelligent booking system analyzes your requirements and provides personalized recommendations with instant pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Type */}
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>{type.label}</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {type.duration}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Guest Count */}
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests *</Label>
                <Input
                  id="guests"
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, guestCount: Number(e.target.value) }))}
                  min="10"
                  max="1000"
                  className="text-lg"
                />
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time Slot *</Label>
                <Select value={formData.timeSlot} onValueChange={(value) => setFormData(prev => ({ ...prev, timeSlot: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>{slot.label}</span>
                          <Badge 
                            variant="outline" 
                            className={`ml-2 text-xs ${getAvailabilityColor(slot.availability)}`}
                          >
                            {slot.availability}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Event Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Enter event location"
                />
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range *</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Special Requirements */}
              <div className="space-y-2">
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                  placeholder="Any special requirements or requests..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Recommendations & Pricing */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            {recommendations.length > 0 && (
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Star className="mr-2 text-yellow-500" size={20} />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Based on your event type, we recommend these services:
                  </p>
                  <div className="space-y-2">
                    {recommendations.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Checkbox
                          id={`service-${index}`}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={`service-${index}`} className="text-sm font-medium">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pricing Estimate */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Calendar className="mr-2 text-primary" size={20} />
                  Pricing Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    ₹{estimatedPrice.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Estimated price for {formData.guestCount} guests
                  </p>
                </div>
                
                {availability && (
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold">Availability:</span>{" "}
                      <span className={getAvailabilityColor(availability)}>
                        {getAvailabilityText(availability)}
                      </span>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Selected Services */}
            {formData.services.length > 0 && (
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={20} />
                    Selected Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {formData.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!formData.eventType || !formData.eventDate || !formData.timeSlot || !formData.location}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
            >
              Get Detailed Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
