import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import AnalyticsTracker from '@/components/analytics-tracker'
import PerformanceOptimizer from '@/components/performance-optimizer'
import ResourceHints from '@/components/resource-hints'
import BandwidthOptimizer from '@/components/bandwidth-optimizer'
import ServiceWorkerRegister from '@/components/service-worker-register'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shalu Caters - Premium DJ, Catering & Event Services',
  description: 'Professional DJ services, golgappe in bulk, catering, masala grinding machines, popcorn machines for weddings, parties, and events. Book now for the best event experience!',
  keywords: 'DJ services, catering, golgappe, masala machine, popcorn machine, wedding catering, party services, event planning',
  generator: 'Shalu Caters',
  authors: [{ name: 'Shalu Caters' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Shalu Caters - Premium Event Services',
    description: 'Professional DJ, catering, and event services for unforgettable celebrations',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased touch-manipulation`}>
        <LanguageProvider>
          <ResourceHints />
          <ServiceWorkerRegister />
          <BandwidthOptimizer />
          {children}
          <Analytics />
          <AnalyticsTracker />
          <PerformanceOptimizer />
        </LanguageProvider>
      </body>
    </html>
  )
}
