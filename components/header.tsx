"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "DJ Services", href: "/#dj-services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Mobile Optimized */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-3xl font-bold text-primary">Shalu Caters</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.open(
                  "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20book%20your%20services.",
                  "_blank",
                )
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-300 hover:border-orange-400 animate-pulse"
            >
              📞 Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Optimized */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-foreground hover:text-primary transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.open(
                  "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20book%20your%20services.",
                  "_blank",
                )
                setIsMobileMenuOpen(false)
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-300 hover:border-orange-400 animate-pulse"
            >
              📞 Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
