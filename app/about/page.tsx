import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: 'About Us - Shalu Caters Team & Story | Professional Event Services',
  description: 'Learn about Shalu Caters - your trusted event partners. Our story, team, achievements, and commitment to making every celebration memorable.',
  keywords: 'about shalu caters, event team, catering team, DJ team, company story, achievements',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <TestimonialsSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
