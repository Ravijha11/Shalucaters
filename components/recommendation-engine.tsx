"use client"

import { useState, useEffect } from "react"
import { Star, TrendingUp, Users, Clock, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Recommendation {
  id: string
  title: string
  description: string
  category: string
  popularity: number
  price: number
  features: string[]
  image: string
  reason: string
}

const recommendationEngine = {
  // Analyze user behavior and preferences
  analyzeUserBehavior: (userData: any) => {
    const preferences = {
      budget: userData.budget || 'standard',
      eventType: userData.eventType || 'birthday',
      guestCount: userData.guestCount || 50,
      services: userData.services || [],
      location: userData.location || 'delhi'
    }
    return preferences
  },

  // Generate personalized recommendations
  generateRecommendations: (preferences: any): Recommendation[] => {
    const recommendations: Recommendation[] = []
    
    // DJ Services Recommendations
    if (preferences.eventType === 'wedding' || preferences.eventType === 'anniversary') {
      recommendations.push({
        id: 'premium-dj',
        title: 'Premium DJ Package',
        description: 'Perfect for your special day with professional sound and lighting',
        category: 'DJ Services',
        popularity: 95,
        price: 25000,
        features: ['Professional DJ Setup', 'Premium Sound System', 'LED Lighting', 'MC Services'],
        image: '/dj-stage-setup-with-colorful-lights--sound-equipme.jpg',
        reason: 'Most popular choice for weddings and anniversaries'
      })
    }

    // Catering Recommendations
    if (preferences.guestCount > 100) {
      recommendations.push({
        id: 'complete-catering',
        title: 'Complete Catering Service',
        description: 'Full-service catering for your large gathering',
        category: 'Catering',
        popularity: 90,
        price: 45000,
        features: ['Full Menu', 'Professional Staff', 'Setup & Cleanup', 'Multiple Cuisines'],
        image: '/elegant-wedding-buffet-with-beautiful-food-display.jpg',
        reason: 'Ideal for events with 100+ guests'
      })
    }

    // Masala Grinding for Traditional Events
    if (preferences.eventType === 'festival' || preferences.eventType === 'wedding') {
      recommendations.push({
        id: 'masala-grinding',
        title: 'Traditional Masala Grinding',
        description: 'Fresh spices ground on-site for authentic flavors',
        category: 'Food Services',
        popularity: 85,
        price: 5000,
        features: ['On-site Grinding', 'Fresh Spices', 'Traditional Method', 'Multiple Varieties'],
        image: '/traditional-masala-grinding-machine-with-aromatic-.jpg',
        reason: 'Perfect for traditional celebrations'
      })
    }

    // Popcorn Machine for Entertainment
    if (preferences.eventType === 'birthday' || preferences.eventType === 'corporate') {
      recommendations.push({
        id: 'popcorn-machine',
        title: 'Popcorn Machine Service',
        description: 'Fresh popcorn with multiple flavors for your guests',
        category: 'Entertainment',
        popularity: 80,
        price: 4000,
        features: ['Fresh Popcorn', 'Multiple Flavors', 'Professional Setup', 'On-site Service'],
        image: '/popcorn-machine-with-fresh-popcorn-popping--dj-sta.jpg',
        reason: 'Great for entertainment and crowd engagement'
      })
    }

    // Golgappe Service for Street Food Lovers
    if (preferences.eventType === 'festival' || preferences.location === 'delhi') {
      recommendations.push({
        id: 'golgappe-service',
        title: 'Golgappe Machine & Packets',
        description: 'Fresh golgappe machine and bulk packets for your event',
        category: 'Street Food',
        popularity: 75,
        price: 6000,
        features: ['Fresh Golgappe', 'Bulk Packets', 'Professional Machine', 'On-site Service'],
        image: '/golgappe-street-food-stall-with-vendor-serving--co.jpg',
        reason: 'Popular street food choice for Delhi events'
      })
    }

    // Coffee Machine for Corporate Events
    if (preferences.eventType === 'corporate') {
      recommendations.push({
        id: 'coffee-machine',
        title: 'Professional Coffee Service',
        description: 'Premium coffee brewing station for your corporate event',
        category: 'Beverages',
        popularity: 88,
        price: 8000,
        features: ['Professional Machine', 'Barista Service', 'Multiple Coffee Types', 'Premium Setup'],
        image: '/professional-coffee-machine-with-steaming-espresso.jpg',
        reason: 'Essential for professional corporate events'
      })
    }

    // Sort by popularity and relevance
    return recommendations.sort((a, b) => b.popularity - a.popularity)
  },

  // Get trending services
  getTrendingServices: (): Recommendation[] => {
    return [
      {
        id: 'trending-dj',
        title: 'Deluxe DJ Experience',
        description: 'Currently trending - complete entertainment package',
        category: 'DJ Services',
        popularity: 98,
        price: 35000,
        features: ['Advanced Sound System', 'Dynamic Lighting', 'Fog Machine', 'MC Services'],
        image: '/dj-stage-setup-with-colorful-lights--sound-equipme.jpg',
        reason: 'Trending this month with 98% satisfaction'
      },
      {
        id: 'trending-catering',
        title: 'Fusion Catering',
        description: 'Modern fusion cuisine trending in Delhi',
        category: 'Catering',
        popularity: 92,
        price: 55000,
        features: ['Fusion Menu', 'Live Cooking', 'Interactive Counters', 'Premium Presentation'],
        image: '/elegant-wedding-buffet-with-beautiful-food-display.jpg',
        reason: 'New fusion menu gaining popularity'
      }
    ]
  }
}

export default function RecommendationEngine({ userData }: { userData?: any }) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [trending, setTrending] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadRecommendations = async () => {
      setIsLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const preferences = recommendationEngine.analyzeUserBehavior(userData)
      const personalizedRecs = recommendationEngine.generateRecommendations(preferences)
      const trendingRecs = recommendationEngine.getTrendingServices()
      
      setRecommendations(personalizedRecs)
      setTrending(trendingRecs)
      setIsLoading(false)
    }

    loadRecommendations()
  }, [userData])

  const handleRecommendationClick = (recommendation: Recommendation) => {
    // Track recommendation click
    if (typeof window !== 'undefined' && window.trackServiceInterest) {
      window.trackServiceInterest(recommendation.title)
    }
  }

  const handleBookNow = (recommendation: Recommendation) => {
    const message = encodeURIComponent(
      `Hello Shalu Caters! I'm interested in the ${recommendation.title} (₹${recommendation.price.toLocaleString()}). ${recommendation.reason}. Please provide more details.`
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground mt-2">Analyzing your preferences...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Personalized Recommendations */}
      {recommendations.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center">
              <Star className="mr-2 text-yellow-500" size={24} />
              Personalized for You
            </h3>
            <p className="text-muted-foreground">
              Based on your preferences and event requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec) => (
              <Card key={rec.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {rec.popularity}% Popular
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {rec.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{rec.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {rec.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        ₹{rec.price.toLocaleString()}
                      </div>
                      <Button
                        onClick={() => handleBookNow(rec)}
                        className="bg-primary hover:bg-primary/90"
                        size="sm"
                      >
                        Book Now
                      </Button>
                    </div>
                    
                    <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                      💡 {rec.reason}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Trending Services */}
      {trending.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center">
              <TrendingUp className="mr-2 text-green-500" size={24} />
              Trending Now
            </h3>
            <p className="text-muted-foreground">
              Popular services that other customers are loving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trending.map((rec) => (
              <Card key={rec.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-bold text-foreground">{rec.title}</h4>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Trending
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground text-sm">{rec.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-primary">
                          ₹{rec.price.toLocaleString()}
                        </div>
                        <Button
                          onClick={() => handleBookNow(rec)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          Book Now
                        </Button>
                      </div>
                      
                      <div className="text-xs text-muted-foreground bg-green-50 p-2 rounded">
                        🔥 {rec.reason}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
