import GolgappeSection from "@/components/golgappe-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Golgappe Service - Fresh Golgappe Machine & Bulk Packets | Shalu Caters',
  description: 'Professional golgappe machines and fresh packets in bulk for shops and events. Perfect for street vendors and food businesses in Delhi.',
  keywords: 'golgappe machine, golgappe packets, street food, food business, bulk golgappe, fresh golgappe',
}

export default function GolgappePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <GolgappeSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
