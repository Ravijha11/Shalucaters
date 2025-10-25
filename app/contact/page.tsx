import ContactSection from "@/components/contact-section"
import BookingForm from "@/components/booking-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'Contact Us - Get in Touch | Shalu Caters',
  description: 'Contact Shalu Caters for DJ services, catering, and event planning. Call +91 70209 24372 or message us on WhatsApp for instant booking.',
  keywords: 'contact shalu caters, phone number, WhatsApp, email, location, booking',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
        <BookingForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
