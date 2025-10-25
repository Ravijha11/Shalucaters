"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Reception",
    rating: 5,
    text: "Shalu Caters made our wedding reception absolutely perfect! The buffet was delicious and the coffee station was a huge hit. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    event: "Corporate Event",
    rating: 5,
    text: "Professional service and amazing food quality. The breakfast buffet for our corporate event was exceptional. Will definitely book again!",
  },
  {
    name: "Anjali Patel",
    event: "Birthday Party",
    rating: 5,
    text: "The popcorn machine and DJ setup were perfect for my daughter's birthday party. Kids and adults both loved it. Thank you Shalu Caters!",
  },
  {
    name: "Vikram Singh",
    event: "Shop Owner",
    rating: 5,
    text: "I ordered the golgappe machine and packets for my shop. The quality is excellent and my customers love it. Great business partnership!",
  },
  {
    name: "Meera Reddy",
    event: "Anniversary Celebration",
    rating: 5,
    text: "Everything was handled so professionally. The masala grinding and buffet service added authentic flavors to our celebration. Wonderful experience!",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">Trusted by hundreds of happy customers</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-primary fill-primary" size={24} />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg md:text-xl text-center text-muted-foreground italic mb-6 leading-relaxed text-pretty">
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="text-center">
                        <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
