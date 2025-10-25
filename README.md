# Shalu Caters - Premium Event Services Website

A comprehensive, modern website for Shalu Caters, providing DJ services, catering, masala grinding machines, popcorn machines, and golgappe services for events in Delhi and surrounding areas.

## 🚀 Features

### Core Services
- **DJ Services**: Professional sound systems, lighting, and MC services
- **Catering**: Complete food services for all event types
- **Masala Grinding**: Traditional stone grinding machines for fresh spices
- **Popcorn Machines**: Fresh popcorn with multiple flavors
- **Golgappe Service**: Machines and bulk packets for events
- **Coffee Machines**: Professional coffee brewing stations

### Advanced Features
- **Smart Booking System**: AI-powered recommendation engine
- **Dynamic Pricing Calculator**: Real-time pricing based on event requirements
- **Performance Optimization**: Advanced caching and optimization algorithms
- **Analytics Tracking**: Comprehensive user behavior tracking
- **Mobile-First Design**: Responsive design for all devices
- **SEO Optimized**: Search engine friendly with meta tags and structured data

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.4 with React 19
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI with custom styling
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Custom tracking
- **Performance**: Service Worker caching, image optimization
- **TypeScript**: Full type safety

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with analytics
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── analytics-tracker.tsx    # Analytics and tracking
│   ├── performance-optimizer.tsx # Performance optimization
│   ├── recommendation-engine.tsx # AI recommendation system
│   ├── smart-booking-section.tsx # Smart booking form
│   ├── pricing-section.tsx      # Dynamic pricing calculator
│   ├── dj-services-section.tsx  # DJ services showcase
│   ├── masala-machine-section.tsx # Masala grinding services
│   ├── popcorn-machine-section.tsx # Popcorn machine services
│   ├── golgappe-section.tsx     # Golgappe services
│   ├── about-section.tsx        # Company information
│   ├── faq-section.tsx          # Frequently asked questions
│   └── ... (other sections)
├── public/
│   ├── sw.js               # Service worker for caching
│   └── images/             # Optimized images
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shalu-caters-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Algorithms & Features

### 1. Smart Pricing Algorithm
- **Dynamic Pricing**: Calculates prices based on event type, guest count, and services
- **Event Multipliers**: Different pricing for weddings, corporate events, etc.
- **Budget Optimization**: Suggests packages within user's budget range
- **Real-time Updates**: Prices update as user changes requirements

### 2. Recommendation Engine
- **Behavioral Analysis**: Tracks user preferences and interactions
- **Personalized Suggestions**: AI-powered service recommendations
- **Trending Services**: Shows popular services based on current demand
- **Context-Aware**: Recommendations based on event type and location

### 3. Performance Optimization
- **Image Optimization**: Lazy loading, WebP format, responsive images
- **Code Splitting**: Dynamic imports for heavy components
- **Caching Strategy**: Service worker for offline functionality
- **Bundle Optimization**: Tree shaking and dead code elimination

### 4. Analytics & Tracking
- **User Behavior**: Tracks clicks, scrolls, and engagement
- **Conversion Funnel**: Monitors booking attempts and completions
- **Performance Metrics**: Core Web Vitals tracking
- **A/B Testing**: Framework for testing different layouts

## 📱 Mobile Optimization

- **Responsive Design**: Works perfectly on all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Loading**: Optimized for mobile networks
- **PWA Ready**: Can be installed as a mobile app

## 🔧 Customization

### Adding New Services
1. Create a new component in `components/`
2. Add the service to the pricing algorithm
3. Update the recommendation engine
4. Add to the main page layout

### Modifying Pricing
1. Update the pricing algorithm in `components/pricing-section.tsx`
2. Adjust multipliers in the smart booking system
3. Update package definitions

### Adding Analytics Events
1. Use the global tracking functions in `analytics-tracker.tsx`
2. Add custom events as needed
3. Monitor in your analytics dashboard

## 📊 Performance Metrics

The website is optimized for:
- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in green
- **Load Time**: < 2 seconds on 3G
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Built-in analytics and performance monitoring

### Other Platforms
- **Netlify**: Static site deployment
- **AWS**: S3 + CloudFront
- **DigitalOcean**: App Platform

## 📈 SEO Features

- **Meta Tags**: Optimized for search engines
- **Structured Data**: Rich snippets for better visibility
- **Sitemap**: Auto-generated sitemap
- **Open Graph**: Social media sharing optimization
- **Local SEO**: Optimized for Delhi/NCR searches

## 🔒 Security

- **HTTPS**: SSL certificate required
- **Content Security Policy**: XSS protection
- **Input Validation**: Form data sanitization
- **Rate Limiting**: API request limiting

## 📞 Support

For technical support or questions:
- **Email**: support@shalucaters.com
- **WhatsApp**: +91 9876543210
- **Phone**: +91 9876543210

## 📄 License

This project is proprietary software for Shalu Caters. All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 Changelog

### Version 1.0.0
- Initial release with all core features
- Smart booking system
- Dynamic pricing calculator
- Performance optimization
- Analytics tracking
- Mobile-responsive design

---

**Built with ❤️ for Shalu Caters - Making Every Event Delicious & Fun!**
