import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import DjServicesSection from "@/components/dj-services-section"
import MasalaMachineSection from "@/components/masala-machine-section"
import PopcornMachineSection from "@/components/popcorn-machine-section"
import IndianDishesSection from "@/components/indian-dishes-section"
import GolgappeSection from "@/components/golgappe-section"
import PricingSection from "@/components/pricing-section"
import SmartBookingSection from "@/components/smart-booking-section"
import AboutSection from "@/components/about-section"
import FaqSection from "@/components/faq-section"
import BookingForm from "@/components/booking-form"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DjServicesSection />
      <MasalaMachineSection />
      <PopcornMachineSection />
      <IndianDishesSection />
      <GolgappeSection />
      <PricingSection />
      <SmartBookingSection />
      <AboutSection />
      <FaqSection />
      <BookingForm />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
