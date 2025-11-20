"use client"

import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">{t("contact.title")}</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{t("contact.callUs")}</h3>
              <a href="tel:+917020924372" className="text-muted-foreground hover:text-primary transition-colors block">
                +91 70209 24372
              </a>
            </div>

            {/* Email */}
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full">
                <Mail className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{t("contact.emailUs")}</h3>
              <a
                href="mailto:info@shalucaters.com"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                info@shalucaters.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-card p-6 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full">
                <MapPin className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{t("contact.visitUs")}</h3>
              <p className="text-muted-foreground">Mumbai, Maharashtra</p>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary hover:text-white rounded-full transition-all"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary hover:text-white rounded-full transition-all"
              >
                <Facebook size={24} />
              </a>
            </div>

            <Button
              size="lg"
              onClick={() => {
                window.open(
                  "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20discuss%20catering%20services.",
                  "_blank",
                )
              }}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              {t("contact.messageWhatsApp")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
