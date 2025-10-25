import PopcornMachineSection from "@/components/popcorn-machine-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Popcorn Machine - Fresh Popcorn with Multiple Flavors | Shalu Caters',
  description: 'Professional popcorn machines with multiple flavors for events. Fresh popcorn service for parties, corporate events, and entertainment in Delhi.',
  keywords: 'popcorn machine, fresh popcorn, popcorn flavors, party entertainment, corporate events, snack service',
}

export default function PopcornMachinePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PopcornMachineSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
