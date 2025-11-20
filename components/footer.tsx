"use client"

import { Coffee } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="text-primary" size={24} />
              <span className="text-xl sm:text-2xl font-bold">Shalu Caters</span>
            </div>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base block py-1 min-h-[32px] flex items-center touch-manipulation">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base block py-1 min-h-[32px] flex items-center touch-manipulation">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base block py-1 min-h-[32px] flex items-center touch-manipulation">
                  {t("footer.gallery")}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-background/80 hover:text-primary transition-colors text-sm sm:text-base block py-1 min-h-[32px] flex items-center touch-manipulation">
                  {t("footer.booking")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t("footer.ourServices")}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="text-background/80 py-1">{t("footer.coffeeMachine")}</li>
              <li className="text-background/80 py-1">{t("footer.buffetCatering")}</li>
              <li className="text-background/80 py-1">{t("footer.golgappeService")}</li>
              <li className="text-background/80 py-1">{t("footer.djStageSetup")}</li>
              <li className="text-background/80 py-1">{t("footer.eventManagement")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="text-background/80 py-1">+91 98765 43210</li>
              <li className="text-background/80 py-1">info@shalucaters.com</li>
              <li className="text-background/80 py-1">Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
          <p className="text-background/80 text-xs sm:text-sm leading-relaxed px-2">
            © {currentYear} Shalu Caters. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
