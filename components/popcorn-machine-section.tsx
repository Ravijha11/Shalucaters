"use client"

import { Popcorn, Zap, Clock, Users, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

const defaultPopcornFlavors = [
  { name: "Classic Salted", color: "bg-yellow-100 text-yellow-800", popular: true },
  { name: "Butter Popcorn", color: "bg-yellow-100 text-yellow-800", popular: true },
  { name: "Caramel Sweet", color: "bg-amber-100 text-amber-800", popular: false },
  { name: "Cheese Popcorn", color: "bg-orange-100 text-orange-800", popular: false },
  { name: "Chocolate Popcorn", color: "bg-brown-100 text-brown-800", popular: false },
  { name: "Spicy Masala", color: "bg-red-100 text-red-800", popular: true },
  { name: "Pizza Flavor", color: "bg-red-100 text-red-800", popular: false },
  { name: "Custom Flavors", color: "bg-purple-100 text-purple-800", popular: false }
]

const defaultPopcornPackages = [
  {
    name: "Basic Popcorn Service",
    price: "₹2,500",
    duration: "4 hours",
    capacity: "Up to 200 people",
    features: [
      "Professional Popcorn Machine",
      "3 Flavor Options",
      "1 Operator",
      "Basic Setup",
      "Fresh Popping"
    ]
  },
  {
    name: "Premium Popcorn Service",
    price: "₹4,000",
    duration: "6 hours",
    capacity: "Up to 400 people",
    features: [
      "Professional Popcorn Machine",
      "5 Flavor Options",
      "2 Operators",
      "Premium Setup",
      "Custom Flavors",
      "Packaging Service"
    ],
    popular: true
  },
  {
    name: "Deluxe Popcorn Experience",
    price: "₹6,500",
    duration: "8 hours",
    capacity: "Up to 600 people",
    features: [
      "Professional Popcorn Machine",
      "8+ Flavor Options",
      "3 Operators",
      "Complete Setup",
      "Custom Flavors",
      "Packaging Service",
      "Popcorn Bar Setup"
    ]
  }
]

const defaultPopcornBenefits = [
  {
    icon: Popcorn,
    title: "Fresh & Hot",
    description: "Popcorn made fresh on-site, ensuring maximum taste and crunch",
    benefit: "Always Fresh"
  },
  {
    icon: Users,
    title: "Crowd Favorite",
    description: "Perfect entertainment snack that everyone loves",
    benefit: "Universal Appeal"
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast preparation and serving for large crowds",
    benefit: "Efficient Service"
  },
  {
    icon: Heart,
    title: "Memorable Experience",
    description: "Creates lasting memories with the aroma and taste",
    benefit: "Unforgettable"
  }
]

export default function PopcornMachineSection() {
  const { t } = useLanguage()
  const popcornContent = (t("popcorn") as any) ?? {}
  const popcornBenefits = Array.isArray(popcornContent.benefits)
    ? popcornContent.benefits.map((benefit: any, index: number) => {
        const base = defaultPopcornBenefits[index] ?? defaultPopcornBenefits[0]
        return {
          ...base,
          icon: base.icon,
          title: benefit?.title ?? base.title,
          description: benefit?.description ?? base.description,
          benefit: benefit?.benefit ?? base.benefit,
        }
      })
    : defaultPopcornBenefits
  const popcornFlavors = defaultPopcornFlavors.map((flavor, index) => {
    const override = Array.isArray(popcornContent.flavors) ? popcornContent.flavors[index] : undefined
    return {
      ...flavor,
      name: override?.name ?? flavor.name,
      popular: typeof override?.popular === "boolean" ? override.popular : flavor.popular,
    }
  })
  const popcornPackages = defaultPopcornPackages.map((pkg, index) => {
    const override = Array.isArray(popcornContent.packages) ? popcornContent.packages[index] : undefined
    return {
      ...pkg,
      name: override?.name ?? pkg.name,
      price: override?.price ?? pkg.price,
      duration: override?.duration ?? pkg.duration,
      capacity: override?.capacity ?? pkg.capacity,
      features: override?.features ?? pkg.features,
      popular: override?.popular ?? pkg.popular,
    }
  })
  const whyChooseItems = Array.isArray(popcornContent.whyChoose)
    ? popcornContent.whyChoose
    : [
        {
          title: "Professional Equipment",
          description: "High-quality popcorn machines for consistent results",
        },
        {
          title: "Quick Service",
          description: "Fast preparation to keep up with high demand",
        },
        {
          title: "Experienced Staff",
          description: "Trained operators for smooth service",
        },
      ]

  const handleBooking = (packageName: string) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I would like to book the ${packageName} for my event. Please provide more details and pricing.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="popcorn-machine" className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              {popcornContent.badge ?? "🍿 Fresh Popcorn Machine"}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {popcornContent.title ?? "Fresh Popcorn, Happy Crowds"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {popcornContent.subtitle ??
              "Add excitement to your event with our professional popcorn machines. Fresh, hot popcorn with multiple flavors to delight your guests."}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {popcornBenefits.map((benefit: any, index: number) => (
            <Card key={index} className="group overflow-hidden border-2 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg w-fit">
                  <benefit.icon className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-yellow-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                <div className="pt-2">
                  <Badge variant="outline" className="text-yellow-600 border-yellow-200">
                    {benefit.benefit}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popcorn Flavors */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {popcornContent.flavorsTitle ?? "Delicious Popcorn Flavors"}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {popcornContent.flavorsSubtitle ??
                "Choose from our wide variety of popcorn flavors to satisfy every taste preference."}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popcornFlavors.map((flavor: any, index: number) => (
              <div key={index} className="relative">
                <div className={`p-4 rounded-lg shadow-sm border-2 transition-all duration-300 hover:shadow-md ${
                  flavor.popular ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{flavor.name}</span>
                    {flavor.popular && (
                      <Star size={16} className="text-yellow-500" />
                    )}
                  </div>
                </div>
                {flavor.popular && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {popcornContent.popularLabel ?? "Popular"}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popcorn Packages */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {popcornContent.packagesTitle ?? "Popcorn Service Packages"}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {popcornContent.packagesSubtitle ?? "Choose the perfect popcorn service package for your event size and requirements."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popcornPackages.map((pkg: any, index: number) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? 'border-yellow-500 shadow-lg' : 'border-border hover:border-yellow-300'
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    {popcornContent.mostPopular ?? "Most Popular"}
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl font-bold text-foreground">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-yellow-600">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.duration} • {pkg.capacity}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature: any, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Zap size={16} className="text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => handleBooking(pkg.name)}
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-yellow-600 hover:bg-yellow-700' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    {(popcornContent.bookButton ?? "Book")} {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {popcornContent.whyChooseTitle ?? "Why Choose Our Popcorn Service?"}
            </h3>
            <div className="space-y-4">
              {whyChooseItems.map((item: any, idx: number) => {
                const Icon = idx === 0 ? Popcorn : idx === 1 ? Clock : Users
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <Icon className="text-yellow-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/popcorn-machine-with-fresh-popcorn-popping--dj-sta.jpg"
                alt="Popcorn Machine in Action"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/vintage-popcorn-machine-with-fresh-popcorn-popping.jpg"
                alt="Vintage Popcorn Machine"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {popcornContent.ctaTitle ?? "Ready to Pop Some Fun at Your Event?"}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {popcornContent.ctaSubtitle ?? "Contact us now to discuss your popcorn requirements and get a customized quote for your event."}
          </p>
          <Button
            size="lg"
            onClick={() => handleBooking("Popcorn Machine Service")}
            className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-6"
          >
            {popcornContent.ctaButton ?? "Get Popcorn Quote Now"}
          </Button>
        </div>
      </div>
    </section>
  )
}
