import ServicesSection from "@/components/services-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Utensils, Coffee, Popcorn, CircleDot, Sparkles } from "lucide-react"

const servicePages = [
  {
    title: "DJ Services",
    description: "Professional sound systems, lighting, and MC services",
    href: "/dj-services",
    icon: Music,
    color: "bg-purple-500"
  },
  {
    title: "Catering",
    description: "Complete food services for all event types",
    href: "/catering",
    icon: Utensils,
    color: "bg-blue-500"
  },
  {
    title: "Masala Grinding",
    description: "Traditional stone grinding for fresh spices",
    href: "/masala-machine",
    icon: Sparkles,
    color: "bg-orange-500"
  },
  {
    title: "Popcorn Machine",
    description: "Fresh popcorn with multiple flavors",
    href: "/popcorn-machine",
    icon: Popcorn,
    color: "bg-yellow-500"
  },
  {
    title: "Golgappe Service",
    description: "Fresh golgappe machines and bulk packets",
    href: "/golgappe",
    icon: CircleDot,
    color: "bg-green-500"
  },
  {
    title: "Coffee Machine",
    description: "Professional coffee brewing stations",
    href: "/catering",
    icon: Coffee,
    color: "bg-brown-500"
  }
]

export const metadata = {
  title: 'Our Services - Complete Event Solutions | Shalu Caters',
  description: 'Explore our comprehensive event services including DJ, catering, masala grinding, popcorn machines, and more. Professional services for all occasions.',
  keywords: 'event services, DJ services, catering, masala grinding, popcorn machine, golgappe service, coffee machine',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        
        {/* Service Pages Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Explore Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any service to learn more about our specialized offerings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicePages.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} text-white mb-4 mx-auto`}>
                      <service.icon size={32} />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <Link href={service.href}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="text-center mt-16 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Ready to Book?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
