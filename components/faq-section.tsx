"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const faqCategories = [
  {
    title: "General Questions",
    icon: "❓",
    questions: [
      {
        question: "What services do you provide?",
        answer: "We provide comprehensive event services including DJ setup, catering, masala grinding machines, popcorn machines, golgappe services, coffee machines, and complete event coordination for weddings, parties, and corporate events."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 2-4 weeks in advance for weddings and large events, and 1-2 weeks for smaller parties. However, we can accommodate last-minute requests based on availability."
      },
      {
        question: "Do you provide services outside Delhi?",
        answer: "Yes, we provide services in Delhi NCR and surrounding areas. For events outside our regular service area, additional travel charges may apply. Contact us to discuss your specific location requirements."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We offer flexible cancellation policies. Full refund for cancellations made 7+ days in advance, 50% refund for 3-7 days, and 25% refund for 1-3 days. No refund for same-day cancellations."
      }
    ]
  },
  {
    title: "DJ Services",
    icon: "🎵",
    questions: [
      {
        question: "What equipment is included in DJ services?",
        answer: "Our DJ setup includes professional sound system, DJ console, wireless microphones, LED lighting, speakers, and all necessary cables. We also provide backup equipment to ensure uninterrupted service."
      },
      {
        question: "Can you play specific songs or genres?",
        answer: "Absolutely! We have an extensive music library and can accommodate specific song requests. You can provide us with a playlist or let us know your preferred genres and we'll curate the perfect music for your event."
      },
      {
        question: "Do you provide MC services?",
        answer: "Yes, our experienced DJs can also serve as MCs for your event. We can handle announcements, introductions, and keep the crowd engaged throughout the celebration."
      },
      {
        question: "What if the DJ equipment fails?",
        answer: "We always carry backup equipment and have experienced technicians on standby. In the rare case of equipment failure, we have immediate replacement options to ensure your event continues smoothly."
      }
    ]
  },
  {
    title: "Catering & Food Services",
    icon: "🍽️",
    questions: [
      {
        question: "Do you provide vegetarian and non-vegetarian options?",
        answer: "Yes, we offer both vegetarian and non-vegetarian catering options. We can customize the menu based on your preferences and dietary requirements. We also accommodate special dietary needs like Jain food, vegan options, etc."
      },
      {
        question: "Can you provide food for different cuisines?",
        answer: "We specialize in Indian cuisine but can also provide continental, Chinese, and other international cuisines. Our chefs are experienced in preparing a wide variety of dishes to suit your taste preferences."
      },
      {
        question: "How do you handle food safety and hygiene?",
        answer: "We maintain the highest standards of food safety and hygiene. All our staff is trained in food handling, we use fresh ingredients, and follow strict hygiene protocols. We are also certified in food safety standards."
      },
      {
        question: "Can you provide food for large gatherings?",
        answer: "Yes, we can cater to events of any size, from intimate gatherings of 20 people to large celebrations of 500+ guests. We have the capacity and experience to handle large-scale events efficiently."
      }
    ]
  },
  {
    title: "Equipment & Machines",
    icon: "⚙️",
    questions: [
      {
        question: "How do the masala grinding machines work?",
        answer: "Our traditional stone grinding machines are operated by experienced staff who grind fresh spices on-site. We can grind various spices like garam masala, cumin, coriander, etc. The machine is portable and can be set up at your event location."
      },
      {
        question: "What flavors are available for popcorn?",
        answer: "We offer a wide variety of popcorn flavors including classic salted, butter, caramel, cheese, chocolate, spicy masala, and custom flavors. You can choose from our standard options or request custom flavors for your event."
      },
      {
        question: "Do you provide golgappe machines and packets?",
        answer: "Yes, we provide both golgappe machines for on-site preparation and fresh golgappe packets in bulk. This is perfect for shop owners, street vendors, and event organizers who want to serve fresh golgappe."
      },
      {
        question: "How much space do the machines require?",
        answer: "Our machines are designed to be compact and portable. The masala grinding machine requires about 4x4 feet, popcorn machine needs 3x3 feet, and golgappe machine needs 2x2 feet. We can work with your available space."
      }
    ]
  },
  {
    title: "Pricing & Payment",
    icon: "💰",
    questions: [
      {
        question: "How do you calculate pricing?",
        answer: "Our pricing is based on several factors including event type, number of guests, duration, services required, and location. We use a transparent pricing system and provide detailed quotes with no hidden charges."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, bank transfers, UPI payments, and digital wallets. For large events, we may require a 50% advance payment with the balance due on the event day."
      },
      {
        question: "Do you offer package deals?",
        answer: "Yes, we offer various package deals that combine multiple services at discounted rates. Our packages are designed to provide complete event solutions at better value than booking services separately."
      },
      {
        question: "Are there any additional charges?",
        answer: "Our quotes include all standard services. Additional charges may apply for extra hours, special requests, or services outside our standard offerings. All additional charges are discussed and approved before the event."
      }
    ]
  }
]

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hello Shalu Caters! I have some questions about your services and would like to discuss my event requirements."
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              <HelpCircle className="inline-block mr-2" size={16} />
              Frequently Asked Questions
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Got Questions? We Have Answers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Find answers to common questions about our services, pricing, and event planning process.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {category.icon} {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems[key]
                  
                  return (
                    <Card key={questionIndex} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                              {faq.question}
                            </h4>
                            {isOpen ? (
                              <ChevronUp size={20} className="text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t pt-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help! Contact us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleContact}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              Contact Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello Shalu Caters! I would like to schedule a consultation call to discuss my event requirements."
                )
                window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
              }}
              className="text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
