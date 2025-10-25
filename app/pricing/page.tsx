import PricingSection from "@/components/pricing-section"
import SmartBookingSection from "@/components/smart-booking-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Pricing & Packages - Transparent Event Service Pricing | Shalu Caters',
  description: 'Get instant pricing for DJ services, catering, and event services. Transparent pricing with smart calculator for weddings, parties, and corporate events.',
  keywords: 'event pricing, DJ pricing, catering prices, wedding packages, party packages, transparent pricing',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PricingSection />
        <SmartBookingSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
