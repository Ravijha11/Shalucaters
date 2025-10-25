import DjServicesSection from "@/components/dj-services-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'DJ Services - Professional Sound & Lighting | Shalu Caters',
  description: 'Professional DJ services with premium sound systems, lighting effects, and MC services for weddings, parties, and corporate events in Delhi.',
  keywords: 'DJ services, sound system, lighting, MC services, wedding DJ, party DJ, corporate events',
}

export default function DjServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <DjServicesSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
