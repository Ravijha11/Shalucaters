import ServicesSection from "@/components/services-section"
import IndianDishesSection from "@/components/indian-dishes-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Catering Services - Complete Food Solutions | Shalu Caters',
  description: 'Professional catering services for weddings, parties, and corporate events. Complete food solutions with authentic Indian cuisine in Delhi.',
  keywords: 'catering services, wedding catering, party catering, corporate catering, Indian cuisine, food services',
}

export default function CateringPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        <IndianDishesSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
