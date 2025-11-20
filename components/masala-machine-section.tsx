"use client"

import { Sparkles, Package, Clock, Award, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const masalaFeatures = [
  {
    icon: Sparkles,
    title: "Fresh Ground Spices",
    description: "Authentic flavors ground fresh at your event for maximum taste and aroma",
    benefit: "Enhanced Flavor"
  },
  {
    icon: Clock,
    title: "On-Site Grinding",
    description: "Traditional stone grinding machine operated by experienced staff",
    benefit: "Authentic Process"
  },
  {
    icon: Package,
    title: "Bulk Quantities",
    description: "Perfect for large events, weddings, and commercial establishments",
    benefit: "Cost Effective"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "High-quality spices and traditional grinding techniques",
    benefit: "Superior Taste"
  }
]

const masalaServices = [
  {
    name: "Basic Masala Grinding",
    price: "₹3,000",
    duration: "4 hours",
    capacity: "Up to 50kg",
    features: [
      "Traditional Stone Grinder",
      "2 Spice Varieties",
      "1 Operator",
      "Basic Setup"
    ]
  },
  {
    name: "Premium Masala Grinding",
    price: "₹5,000",
    duration: "6 hours",
    capacity: "Up to 100kg",
    features: [
      "Professional Grinding Machine",
      "5 Spice Varieties",
      "2 Operators",
      "Premium Setup",
      "Custom Spice Mixes"
    ],
    popular: true
  },
  {
    name: "Commercial Masala Service",
    price: "₹8,000",
    duration: "8 hours",
    capacity: "Up to 200kg",
    features: [
      "Industrial Grinding Machine",
      "10+ Spice Varieties",
      "3 Operators",
      "Complete Setup",
      "Custom Spice Mixes",
      "Packaging Service"
    ]
  }
]

const spiceVarieties = [
  "Garam Masala", "Cumin Powder", "Coriander Powder", "Red Chili Powder",
  "Turmeric Powder", "Garam Masala", "Kitchen King", "Chaat Masala",
  "Pav Bhaji Masala", "Biryani Masala", "Tandoori Masala", "Custom Mixes"
]

export default function MasalaMachineSection() {
  const handleBooking = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I would like to book the ${serviceName} for my event. Please provide more details and pricing.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="masala-machine" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              🌶️ Traditional Masala Grinding
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Fresh Spices, Authentic Taste
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the authentic taste of freshly ground spices with our traditional masala grinding machines. Perfect for weddings, restaurants, and food businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {masalaFeatures.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-2 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg w-fit">
                  <feature.icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                <div className="pt-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {feature.benefit}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Masala Services */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Masala Grinding Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect masala grinding service for your event or business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masalaServices.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                service.popular ? 'border-orange-500 shadow-lg' : 'border-border hover:border-orange-300'
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl font-bold text-foreground">{service.name}</h4>
                    <div className="text-3xl font-bold text-orange-600">{service.price}</div>
                    <p className="text-muted-foreground">{service.duration} • {service.capacity}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Zap size={16} className="text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleBooking(service.name)}
                    className={`w-full ${
                      service.popular 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Book {service.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Spice Varieties */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Available Spice Varieties
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of freshly ground spices to meet all your culinary needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {spiceVarieties.map((spice, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <Sparkles size={16} className="text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{spice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Why Choose Our Masala Grinding Service?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="text-orange-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Experienced Operators</h4>
                  <p className="text-muted-foreground text-sm">Our skilled staff knows the perfect grinding techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-orange-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Premium Quality Spices</h4>
                  <p className="text-muted-foreground text-sm">We use only the finest quality whole spices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Package className="text-orange-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground">Hygienic Process</h4>
                  <p className="text-muted-foreground text-sm">Clean, sanitized equipment and fresh packaging</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/traditional-masala-grinding-machine-with-aromatic-.jpg"
                alt="Traditional Masala Grinding"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/masala-grinding-machine-in-action-with-aromatic-sp.jpg"
                alt="Masala Machine in Action"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Add Authentic Flavor to Your Event?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us now to discuss your masala grinding requirements and get a customized quote.
          </p>
          <Button
            size="lg"
            onClick={() => handleBooking("Masala Grinding Service")}
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6"
          >
            Get Masala Quote Now
          </Button>
        </div>
      </div>
    </section>
  )
}
