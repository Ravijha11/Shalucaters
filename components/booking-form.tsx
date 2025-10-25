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
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">Book Your Event</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Fill in the details and we'll get back to you on WhatsApp instantly
            </p>
          </div>

          {/* Booking Form */}
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
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
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
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
                  />
                </div>

                {/* Services Required */}
                <div className="space-y-3">
                  <Label>Services Required *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
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
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
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
