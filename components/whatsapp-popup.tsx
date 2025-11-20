"use client"

import { useMemo, useState } from "react"
import { MessageCircle, X, Phone, Send } from "lucide-react"
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

const WhatsappIcon = ({ className = "w-6 h-6 text-white" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    role="img"
    aria-label="WhatsApp"
  >
    <path d="M27.58 4.42A15.9 15.9 0 0 0 16.02 0C7.29 0 .21 6.8.21 15.17a14.9 14.9 0 0 0 2.16 7.7L0 31.86l9.14-2.39a16.35 16.35 0 0 0 6.88 1.52c8.73 0 15.82-6.8 15.82-15.18a14.75 14.75 0 0 0-4.26-10.39Zm-11.56 24a13 13 0 0 1-6.18-1.57l-.44-.24-5.43 1.42 1.45-5.08-.29-.52A12.38 12.38 0 0 1 2.32 15.2C2.32 8 8.37 2.1 16 2.1a12.73 12.73 0 0 1 9 3.7 12.27 12.27 0 0 1 3.63 8.71c0 7.21-6.05 13.31-13.58 13.31Zm7.47-9.93c-.41-.2-2.41-1.18-2.78-1.31s-.65-.2-.92.2-1.05 1.31-1.29 1.58-.48.29-.89.1a10.89 10.89 0 0 1-3.19-1.95 11.89 11.89 0 0 1-2.21-2.77c-.24-.41 0-.64.18-.84s.41-.48.62-.72a2.76 2.76 0 0 0 .41-.72.77.77 0 0 0 0-.72c0-.2-.92-2.2-1.27-3s-.67-.68-.91-.69h-.78a1.5 1.5 0 0 0-1.08.51 4.39 4.39 0 0 0-1.36 3.26 7.63 7.63 0 0 0 1.65 4.05 17.39 17.39 0 0 0 6.59 5.75 22.47 22.47 0 0 0 2.19.81 5.28 5.28 0 0 0 2 .13 3.27 3.27 0 0 0 2.14-1.52 2.69 2.69 0 0 0 .19-1.52c-.06-.12-.34-.23-.75-.43Z" />
  </svg>
)

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [message, setMessage] = useState("")

  const quickReplies = useMemo(
    () => [
      "I need DJ services",
      "Share your catering packages",
      "Looking for Golgappe setup",
      "Need a quick quote",
    ],
    [],
  )

  const handleSendMessage = () => {
    const trimmed = message.trim()
    const fallback = `
Hello Shalu Caters!

I would like to talk about my upcoming event. Please connect with me.
    `.trim()

    const prepared = encodeURIComponent(trimmed || fallback)
    window.open(`https://wa.me/917020924372?text=${prepared}`, "_blank")
    setMessage("")
    setIsOpen(false)
    setShowServices(false)
  }

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
        className="fixed bottom-4 right-4 z-50 bg-[#25d366] text-white p-5 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-w-[56px] min-h-[56px] touch-manipulation"
        aria-label="Open WhatsApp chat"
      >
        <WhatsappIcon className="w-7 h-7 text-white" />
      </button>

      {/* WhatsApp Chat Interface - Mobile First */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
          <div className="w-full sm:max-w-md h-[88vh] sm:h-[75vh] bg-[#ece5dd] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#c8c8c8]">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <WhatsappIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Shalu Caters</h3>
                  <p className="text-[#d7f8e4] text-sm">Online • Typically replies within 5 min</p>
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
            <div
              className="flex-1 p-4 space-y-4 overflow-y-auto"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='160' height='149' viewBox='0 0 160 149' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dfe6d8' fill-opacity='0.4'%3E%3Cpath d='M0 54.54V0h53.65zm0 39.24 39.24 55.39H0zM160 94.08V149h-53.65zM160 54.84 120.76 0H160zM40.85 0h78.3L79 45.24zm77.72 149h-76.3L79 104.3z'/%3E%3C/g%3E%3C/svg%3E\")",
                backgroundColor: "#efeae2",
              }}
            >
              {/* Welcome Message */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    SC
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">Hello! 👋 Welcome to Shalu Caters.</p>
                    <p className="text-sm mt-1">How can we help with your event today?</p>
                    <span className="text-[11px] text-gray-500 mt-1 block">Just now</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">Hi! I’d like to explore your services.</p>
                    <span className="text-[11px] text-gray-500 mt-1 block">Typing drafts…</span>
                  </div>
                </div>
              </div>

              {/* Service Options */}
              {!showServices ? (
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      SC
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                      <p className="text-sm mb-3 text-gray-800">Here are our premium services:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {services.slice(0, 4).map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className="p-2 bg-[#f1f8f5] hover:bg-[#e0f4ea] rounded-xl text-left transition-colors min-h-[48px] touch-manipulation border border-[#cdebdc]"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{service.icon}</span>
                              <div>
                                <p className="text-xs font-semibold text-gray-800">{service.name}</p>
                                <p className="text-xs text-[#128c7e]">{service.price}</p>
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
                    <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      SC
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                      <p className="text-sm mb-3 text-gray-800">Our complete service menu:</p>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className="w-full p-3 bg-[#f1f8f5] hover:bg-[#e0f4ea] rounded-xl text-left transition-colors group min-h-[48px] touch-manipulation border border-[#cdebdc]"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{service.icon}</span>
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 group-hover:text-[#0b6b58]">{service.name}</p>
                                <p className="text-xs text-gray-600">{service.description}</p>
                                <p className="text-xs text-[#128c7e] font-medium">{service.price}</p>
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
                <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  SC
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-sm mb-3 text-gray-800">Or contact us directly:</p>
                  <div className="space-y-2">
                    <button
                      onClick={handleDirectContact}
                      className="w-full p-3 bg-[#25d366] hover:bg-[#1faf54] text-white rounded-xl text-base font-medium transition-colors flex items-center justify-center space-x-2 min-h-[48px] touch-manipulation"
                    >
                      <Phone size={18} />
                      <span>Get Quote & Book</span>
                    </button>
                    <button
                      onClick={() => setShowServices(!showServices)}
                      className="w-full p-3 border border-[#25d366] text-[#128c7e] hover:bg-[#f1f8f5] rounded-xl text-base font-medium transition-colors min-h-[48px] touch-manipulation"
                    >
                      {showServices ? '← Back to Quick View' : 'View All Services'}
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Footer */}
            <div className="bg-[#f7f7f7] border-t border-[#d1d1d1] p-3">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => setMessage(reply)}
                    className="px-3 py-1.5 bg-white text-xs rounded-full border border-[#d1d1d1] text-gray-700 hover:border-[#25d366] hover:text-[#128c7e] transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-2xl border border-[#d1d1d1] px-3 py-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message"
                  className="flex-1 text-sm bg-transparent outline-none"
                />
                <Button
                  size="icon"
                  className="bg-[#25d366] hover:bg-[#1faf54] text-white rounded-full h-10 w-10"
                  onClick={handleSendMessage}
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
