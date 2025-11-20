"use client"

import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-2xl font-bold text-foreground text-balance">{t("contact.title")}</h2>
            <p className="text-base text-muted-foreground text-pretty">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Contact Cards - Mobile First (Single Column) */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Phone */}
            <div className="bg-card p-4 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow min-h-[120px] flex flex-col justify-center touch-manipulation">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{t("contact.callUs")}</h3>
              <a href="tel:+917020924372" className="text-muted-foreground hover:text-primary transition-colors block min-h-[48px] flex items-center justify-center">
                +91 70209 24372
              </a>
            </div>

            {/* Email */}
            <div className="bg-card p-4 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow min-h-[120px] flex flex-col justify-center touch-manipulation">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full">
                <Mail className="text-secondary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground">{t("contact.emailUs")}</h3>
              <a
                href="mailto:info@shalucaters.com"
                className="text-muted-foreground hover:text-primary transition-colors block min-h-[48px] flex items-center justify-center"
              >
                info@shalucaters.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-card p-4 rounded-2xl shadow-lg text-center space-y-3 hover:shadow-xl transition-shadow min-h-[120px] flex flex-col justify-center">
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
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary hover:text-white rounded-full transition-all touch-manipulation min-w-[48px] min-h-[48px]"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary hover:text-white rounded-full transition-all touch-manipulation min-w-[48px] min-h-[48px]"
                aria-label="Facebook"
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
              className="bg-primary hover:bg-primary/90 text-base px-6 py-4 w-full min-h-[48px] touch-manipulation"
            >
              {t("contact.messageWhatsApp")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
