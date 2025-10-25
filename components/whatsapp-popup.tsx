"use client"

import { useState } from "react"
import { MessageCircle, X, ChevronRight, Users, Calendar, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const services = [
  {
    id: "dj",
    name: "DJ Services",
    icon: "🎵",
    description: "Professional DJ setup with sound & lighting",
    questions: [
      "What type of event is it?",
      "How many hours do you need?",
      "Do you need MC services?",
      "Any specific music preferences?"
    ]
  },
  {
    id: "catering",
    name: "Catering",
    icon: "🍽️",
    description: "Complete food services for your event",
    questions: [
      "How many guests will attend?",
      "What type of cuisine do you prefer?",
      "Do you need vegetarian/non-vegetarian options?",
      "Any dietary restrictions?"
    ]
  },
  {
    id: "masala",
    name: "Masala Grinding",
    icon: "🌶️",
    description: "Fresh spices ground on-site",
    questions: [
      "What spices do you need ground?",
      "How much quantity do you need?",
      "What type of event is it?",
      "Do you need packaging service?"
    ]
  },
  {
    id: "popcorn",
    name: "Popcorn Machine",
    icon: "🍿",
    description: "Fresh popcorn with multiple flavors",
    questions: [
      "How many guests will attend?",
      "What flavors do you prefer?",
      "How many hours do you need?",
      "Do you need on-site service?"
    ]
  },
  {
    id: "golgappe",
    name: "Golgappe Service",
    icon: "🥟",
    description: "Fresh golgappe machine & bulk packets",
    questions: [
      "Do you need machine or packets?",
      "How many guests will attend?",
      "What type of event is it?",
      "Do you need on-site service?"
    ]
  },
  {
    id: "coffee",
    name: "Coffee Machine",
    icon: "☕",
    description: "Professional coffee brewing station",
    questions: [
      "What type of coffee do you prefer?",
      "How many guests will attend?",
      "Do you need barista service?",
      "How many hours do you need?"
    ]
  }
]

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Anniversary",
  "Festival/Religious",
  "Other"
]

const timeSlots = [
  "Morning (6 AM - 12 PM)",
  "Afternoon (12 PM - 6 PM)",
  "Evening (6 PM - 12 AM)",
  "Night (12 AM - 6 AM)"
]

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    service: "",
    eventType: "",
    guestCount: "",
    date: "",
    timeSlot: "",
    location: "",
    requirements: "",
    name: "",
    phone: ""
  })

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setFormData(prev => ({ ...prev, service: serviceId }))
    setCurrentStep(1)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    const service = services.find(s => s.id === selectedService)
    const message = encodeURIComponent(`
Hello Shalu Caters! I'm interested in your services:

Service: ${service?.name}
Event Type: ${formData.eventType}
Guests: ${formData.guestCount}
Date: ${formData.date}
Time: ${formData.timeSlot}
Location: ${formData.location}
Requirements: ${formData.requirements}

Contact Details:
Name: ${formData.name}
Phone: ${formData.phone}

Please provide more details and pricing.
    `)
    
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
    setIsOpen(false)
    setCurrentStep(0)
    setSelectedService(null)
    setFormData({
      service: "",
      eventType: "",
      guestCount: "",
      date: "",
      timeSlot: "",
      location: "",
      requirements: "",
      name: "",
      phone: ""
    })
  }

  const getCurrentService = () => {
    return services.find(s => s.id === selectedService)
  }

  return (
    <>
      {/* WhatsApp Button - Mobile Optimized */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle size={20} className="sm:hidden" />
        <MessageCircle size={24} className="hidden sm:block" />
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs px-1 py-0.5 sm:px-2 sm:py-1 rounded-full animate-pulse">
          Live
        </div>
      </button>

      {/* Popup Overlay - Mobile Optimized */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <Card className="w-full max-w-md max-h-[95vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-xl font-bold flex items-center">
                <MessageCircle className="mr-2 text-green-500" size={24} />
                Book Your Event
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Service Selection */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">What service do you need?</h3>
                    <p className="text-sm text-muted-foreground">Select the service you're interested in</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-left group"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{service.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-green-600">
                              {service.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                          <ChevronRight size={16} className="text-muted-foreground" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Event Details</h3>
                    <p className="text-sm text-muted-foreground">Tell us about your event</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Number of Guests</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                        placeholder="Enter number of guests"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">Preferred Time</Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => setFormData(prev => ({ ...prev, timeSlot: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Event Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Enter event location"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Special Requirements</h3>
                    <p className="text-sm text-muted-foreground">Any specific needs or preferences?</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Special Requirements</Label>
                      <Textarea
                        id="requirements"
                        value={formData.requirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                        placeholder="Any special requirements or requests..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Summary */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Review Your Request</h3>
                    <p className="text-sm text-muted-foreground">Please review before sending</p>
                  </div>
                  
                  <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-semibold">Service:</span>
                      <span>{getCurrentService()?.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-blue-500" />
                      <span className="font-semibold">Event:</span>
                      <span>{formData.eventType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-green-500" />
                      <span className="font-semibold">Guests:</span>
                      <span>{formData.guestCount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-purple-500" />
                      <span className="font-semibold">Date:</span>
                      <span>{formData.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-red-500" />
                      <span className="font-semibold">Location:</span>
                      <span>{formData.location}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  Back
                </Button>
                
                {currentStep < 3 ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 0 && !selectedService) ||
                      (currentStep === 1 && (!formData.eventType || !formData.guestCount || !formData.date))
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Send to WhatsApp
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
