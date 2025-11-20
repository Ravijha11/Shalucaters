"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "dj",
    name: "DJ Services",
    icon: "🎵",
    description: "Professional DJ setup with sound & lighting",
    price: "Starting from ₹12,000"
  },
  {
    id: "catering",
    name: "Catering Services",
    icon: "🍽️",
    description: "Complete food services for your event",
    price: "Starting from ₹150/plate"
  },
  {
    id: "masala",
    name: "Masala Grinding",
    icon: "🌶️",
    description: "Fresh spices ground on-site",
    price: "Starting from ₹2,000"
  },
  {
    id: "popcorn",
    name: "Popcorn Machine",
    icon: "🍿",
    description: "Fresh popcorn with multiple flavors",
    price: "Starting from ₹3,000"
  },
  {
    id: "golgappe",
    name: "Golgappe Service",
    icon: "🥟",
    description: "Fresh golgappe machine & bulk packets",
    price: "Starting from ₹2,500"
  },
  {
    id: "coffee",
    name: "Coffee Machine",
    icon: "☕",
    description: "Professional coffee brewing station",
    price: "Starting from ₹4,000"
  },
  {
    id: "buffet",
    name: "Buffet Breakfast",
    icon: "🥞",
    description: "Customized breakfast spreads",
    price: "Starting from ₹200/plate"
  },
  {
    id: "wedding",
    name: "Wedding Catering",
    icon: "💒",
    description: "Full-service wedding catering",
    price: "Starting from ₹300/plate"
  }
]

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)

  const handleServiceSelect = (service: any) => {
    const message = encodeURIComponent(`
Hello Shalu Caters! 

I'm interested in your ${service.name} service.

Service Details:
• ${service.name}
• ${service.description}
• ${service.price}

Please provide more details and availability.

Thank you!
    `)
    
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
    setIsOpen(false)
    setShowServices(false)
  }

  const handleDirectContact = () => {
    const message = encodeURIComponent(`
Hello Shalu Caters! 

I would like to know more about your services and get a quote for my event.

Please provide details about:
• Available services
• Pricing information
• Booking process

Thank you!
    `)
    
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
    setIsOpen(false)
    setShowServices(false)
  }

  return (
    <>
      {/* WhatsApp Button - Mobile Optimized */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse min-w-[56px] min-h-[56px] touch-manipulation"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle size={28} />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce font-bold">
          Live
        </div>
      </button>

      {/* WhatsApp Chat Interface - Mobile First */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-0">
          <div className="w-full h-[90vh] bg-white rounded-t-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* WhatsApp Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Shalu Caters</h3>
                  <p className="text-green-100 text-sm">Online • Available now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X size={18} />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
              {/* Welcome Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SC</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm">Hello! 👋 Welcome to Shalu Caters!</p>
                  <p className="text-sm mt-1">I'm here to help you with your event needs. What service are you looking for?</p>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* Service Options */}
              {!showServices ? (
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SC</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm mb-3">Here are our premium services:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {services.slice(0, 4).map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors min-h-[48px] touch-manipulation"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{service.icon}</span>
                              <div>
                                <p className="text-xs font-semibold text-gray-800">{service.name}</p>
                                <p className="text-xs text-green-600">{service.price}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowServices(true)}
                        className="mt-2 text-sm text-green-600 hover:text-green-700 font-medium"
                      >
                        View all services →
                      </button>
                      <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SC</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                      <p className="text-sm mb-3">Our complete service menu:</p>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors group min-h-[48px] touch-manipulation"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{service.icon}</span>
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 group-hover:text-green-700">{service.name}</p>
                                <p className="text-xs text-gray-600">{service.description}</p>
                                <p className="text-xs text-green-600 font-medium">{service.price}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Contact Options */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">SC</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm mb-3">Or contact us directly:</p>
                  <div className="space-y-2">
                    <button
                      onClick={handleDirectContact}
                      className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-base font-medium transition-colors flex items-center justify-center space-x-2 min-h-[48px] touch-manipulation"
                    >
                      <Phone size={18} />
                      <span>Get Quote & Book</span>
                    </button>
                    <button
                      onClick={() => setShowServices(!showServices)}
                      className="w-full p-3 border border-green-500 text-green-600 hover:bg-green-50 rounded-lg text-base font-medium transition-colors min-h-[48px] touch-manipulation"
                    >
                      {showServices ? '← Back to Quick View' : 'View All Services'}
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Footer */}
            <div className="bg-white border-t p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Shalu Caters is typing...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
