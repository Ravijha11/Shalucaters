"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Package, Store } from "lucide-react"

export default function GolgappeSection() {
  const handleOrder = () => {
    const message = encodeURIComponent(
      "Hello Shalu Caters! I would like to order Golgappe Machine & Packets for my shop/event. Please provide details and pricing.",
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Special Offering
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Fresh Golgappe for Your Shop or Event
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Perfect for shop owners and event organizers! We provide professional golgappe machines and fresh packets
              in bulk. Delight your customers with authentic, crispy golgappe made fresh on-site.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Professional Machine</h3>
                  <p className="text-muted-foreground text-sm">High-quality golgappe making equipment</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Package className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Bulk Packets Available</h3>
                  <p className="text-muted-foreground text-sm">Fresh golgappe packets in buckets</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Store className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Perfect for Shops</h3>
                  <p className="text-muted-foreground text-sm">Ideal for street vendors and food stalls</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleOrder}
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              >
                Order Golgappe Now
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/golgappe-machine-in-action-with-vendor-preparing-f.jpg"
                    alt="Golgappe Machine"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/fresh-golgappe-packets-in-bucket--crispy-puris--co.jpg"
                    alt="Golgappe Packets"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/hfgkjkjeo.png"
                    alt="Fresh Golgappe Service"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/golgappe-street-food-stall-with-vendor-serving--co.jpg"
                    alt="Golgappe Street Food Stall"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
