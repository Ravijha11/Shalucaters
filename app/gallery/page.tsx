import GallerySection from "@/components/gallery-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Gallery - Event Photos & Portfolio | Shalu Caters',
  description: 'View our portfolio of successful events including weddings, parties, corporate events, and festivals. See our DJ setups, catering displays, and masala grinding in action.',
  keywords: 'event gallery, wedding photos, party photos, DJ setup photos, catering photos, portfolio',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
