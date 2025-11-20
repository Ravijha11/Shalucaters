"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    guests: "",
    services: [] as string[],
    notes: "",
  })

  const serviceOptions = [
    "Coffee Machine",
    "Popcorn Machine",
    "Masala Grinding",
    "Golgappe Service",
    "Stage/DJ Setup",
    "Buffet Breakfast",
    "Birthday Catering",
    "Wedding/Party Catering",
  ]

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
Hello Shalu Caters! I would like to book your services:

*Name:* ${formData.name}
*Contact:* ${formData.contact}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate}
*Event Time:* ${formData.eventTime}
*Number of Guests:* ${formData.guests}
*Services Required:* ${formData.services.join(", ")}
*Additional Notes:* ${formData.notes}

Please confirm availability and provide pricing details.
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/917020924372?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="booking" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-2xl font-bold text-foreground text-balance">Book Your Event</h2>
            <p className="text-base text-muted-foreground text-pretty">
              Fill in the details and we'll get back to you on WhatsApp instantly
            </p>
          </div>

          {/* Booking Form */}
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="min-h-[48px] text-base"
                  />
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Enter your WhatsApp number"
                    className="min-h-[48px] text-base"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Input
                    id="eventType"
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    placeholder="e.g., Wedding, Birthday, Corporate Event"
                    className="min-h-[48px] text-base"
                  />
                </div>

                {/* Date and Time - Stack on mobile */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="min-h-[48px] text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime">Event Time *</Label>
                    <Input
                      id="eventTime"
                      type="time"
                      required
                      value={formData.eventTime}
                      onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                      className="min-h-[48px] text-base"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <Input
                    id="guests"
                    type="number"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="Approximate number of guests"
                    className="min-h-[48px] text-base"
                  />
                </div>

                {/* Services Required */}
                <div className="space-y-3">
                  <Label>Services Required *</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-3 min-h-[48px]">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="min-w-[24px] min-h-[24px]"
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer touch-manipulation flex-1"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special requirements or preferences..."
                    rows={4}
                    className="min-h-[120px] text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-base py-4 min-h-[48px] touch-manipulation">
                  Send Booking Request via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
