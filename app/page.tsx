import dynamic from "next/dynamic"
import { Suspense } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

// Lazy load components below the fold for better initial load performance
// Use lower priority for non-critical components
const ServicesSection = dynamic(() => import("@/components/services-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const DjServicesSection = dynamic(() => import("@/components/dj-services-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const MasalaMachineSection = dynamic(() => import("@/components/masala-machine-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const PopcornMachineSection = dynamic(() => import("@/components/popcorn-machine-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const IndianDishesSection = dynamic(() => import("@/components/indian-dishes-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const GolgappeSection = dynamic(() => import("@/components/golgappe-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const PricingSection = dynamic(() => import("@/components/pricing-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const SmartBookingSection = dynamic(() => import("@/components/smart-booking-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const FaqSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const BookingForm = dynamic(() => import("@/components/booking-form"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="h-96 bg-muted/30" />,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-muted/30" />,
})

const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button"), {
  loading: () => null,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <DjServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <MasalaMachineSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <PopcornMachineSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <IndianDishesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <GolgappeSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <SmartBookingSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <BookingForm />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/30" />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-muted/30" />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </main>
  )
}
