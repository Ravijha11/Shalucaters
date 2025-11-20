"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("header.home"), href: "/" },
    { name: t("header.services"), href: "/#services" },
    { name: t("header.djServices"), href: "/#dj-services" },
    { name: t("header.pricing"), href: "/#pricing" },
    { name: t("header.about"), href: "/#about" },
    { name: t("header.gallery"), href: "/#gallery" },
    { name: t("header.faq"), href: "/#faq" },
    { name: t("header.contact"), href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg shadow-xl border-b border-primary/20"
          : "bg-background/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Mobile Optimized */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">Shalu Caters</div>
          </Link>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
            {/* Menu Button - Always visible for mobile */}
            <button 
              className="text-foreground p-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Always mobile-first */}
        {isMobileMenuOpen && (
          <nav className="py-4 border-t border-border max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3.5 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium text-base min-h-[48px] flex items-center touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-3 space-y-3">
              <LanguageSwitcher className="w-full justify-center" />
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20book%20your%20services.",
                    "_blank",
                  )
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-base py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-300 hover:border-orange-400 animate-pulse min-h-[48px] touch-manipulation"
              >
                {t("header.bookNow")}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
