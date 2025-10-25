import MasalaMachineSection from "@/components/masala-machine-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Masala Grinding Machine - Fresh Spices On-Site | Shalu Caters',
  description: 'Traditional masala grinding machines for fresh spices at your event. Professional grinding service for weddings, festivals, and food businesses in Delhi.',
  keywords: 'masala grinding, fresh spices, traditional grinding, wedding spices, festival spices, food business',
}

export default function MasalaMachinePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <MasalaMachineSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
