import { Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="text-primary" size={32} />
              <span className="text-2xl font-bold">Shalu Caters</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Making every event delicious and fun with premium catering services across Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-background/80 hover:text-primary transition-colors">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Coffee Machine</li>
              <li className="text-background/80">Buffet Catering</li>
              <li className="text-background/80">Golgappe Service</li>
              <li className="text-background/80">DJ & Stage Setup</li>
              <li className="text-background/80">Event Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">+91 98765 43210</li>
              <li className="text-background/80">info@shalucaters.com</li>
              <li className="text-background/80">Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © {currentYear} Shalu Caters. All rights reserved. | Making events delicious since 2015
          </p>
        </div>
      </div>
    </footer>
  )
}
