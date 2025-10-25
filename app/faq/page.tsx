import FaqSection from "@/components/faq-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | Shalu Caters',
  description: 'Find answers to common questions about our DJ services, catering, masala grinding, popcorn machines, and event services.',
  keywords: 'FAQ, frequently asked questions, DJ FAQ, catering FAQ, event services FAQ, help',
}

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <FaqSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
