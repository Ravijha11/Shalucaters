"use client"

import { Coffee } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Coffee className="text-primary" size={24} />
              <span className="text-xl font-bold">Shalu Caters</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors text-base block py-1 min-h-[48px] flex items-center touch-manipulation">
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors text-base block py-1 min-h-[48px] flex items-center touch-manipulation">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-primary transition-colors text-base block py-1 min-h-[48px] flex items-center touch-manipulation">
                  {t("footer.gallery")}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-background/80 hover:text-primary transition-colors text-base block py-1 min-h-[48px] flex items-center touch-manipulation">
                  {t("footer.booking")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-3">{t("footer.ourServices")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80 py-1">{t("footer.coffeeMachine")}</li>
              <li className="text-background/80 py-1">{t("footer.buffetCatering")}</li>
              <li className="text-background/80 py-1">{t("footer.golgappeService")}</li>
              <li className="text-background/80 py-1">{t("footer.djStageSetup")}</li>
              <li className="text-background/80 py-1">{t("footer.eventManagement")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-3">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80 py-1">+91 98765 43210</li>
              <li className="text-background/80 py-1">info@shalucaters.com</li>
              <li className="text-background/80 py-1">Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/80 text-sm leading-relaxed px-2">
            © {currentYear} Shalu Caters. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
