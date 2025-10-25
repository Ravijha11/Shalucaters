"use client"

import { Users, Award, Clock, Heart, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Users, value: "500+", label: "Events Completed", color: "text-blue-600" },
  { icon: Award, value: "5+", label: "Years Experience", color: "text-purple-600" },
  { icon: Heart, value: "100%", label: "Client Satisfaction", color: "text-red-600" },
  { icon: Clock, value: "24/7", label: "Customer Support", color: "text-green-600" }
]

const teamMembers = [
  {
    name: "Shalu Sharma",
    role: "Founder & CEO",
    description: "Passionate about creating memorable events with authentic flavors and professional service.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "Head DJ & Sound Engineer",
    description: "Professional DJ with 8+ years experience in creating the perfect atmosphere for any event.",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Priya Singh",
    role: "Catering Manager",
    description: "Expert in traditional Indian cuisine and modern catering solutions for all occasions.",
    image: "/placeholder-user.jpg"
  }
]

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We are passionate about delivering exceptional service and creating unforgettable experiences for our clients."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We use only the finest ingredients and professional equipment to ensure the highest quality service."
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Every decision we make is with our clients' satisfaction and success in mind."
  },
  {
    icon: Star,
    title: "Innovation & Tradition",
    description: "We blend traditional methods with modern techniques to create unique and memorable experiences."
  }
]

const achievements = [
  "Featured in Top 10 Catering Services in Delhi",
  "Winner of Best Event Service Provider 2023",
  "5-Star Rating on Google Reviews",
  "Certified Food Safety Standards",
  "Member of Delhi Caterers Association",
  "ISO 9001:2015 Certified"
]

export default function AboutSection() {
  const handleContact = () => {
    const message = encodeURIComponent(
      "Hello Shalu Caters! I would like to know more about your services and discuss my event requirements."
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              🏆 About Shalu Caters
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Your Trusted Event Partners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            With over 5 years of experience, we've been making celebrations memorable with our professional DJ services, authentic catering, and innovative food solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-4">
                <div className="mx-auto w-fit">
                  <stat.icon className={`${stat.color}`} size={48} />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Shalu Caters was born from a simple dream: to make every celebration special with authentic flavors and professional service. What started as a small family business has grown into one of Delhi's most trusted event service providers.
              </p>
              <p>
                Our journey began with a passion for traditional Indian cuisine and a love for bringing people together. Today, we offer comprehensive event solutions including DJ services, catering, masala grinding, popcorn machines, and golgappe services.
              </p>
              <p>
                We believe that every event deserves the perfect blend of tradition and innovation, quality and creativity, professionalism and warmth.
              </p>
            </div>
            <Button onClick={handleContact} className="bg-primary hover:bg-primary/90">
              Get to Know Us Better
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/beautiful-wedding-buffet-setup-with-elegant-food-d.jpg"
                alt="Our Team in Action"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
              <img
                src="/elegant-wedding-buffet-with-beautiful-food-display.jpg"
                alt="Event Setup"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="mx-auto w-fit bg-primary/10 p-4 rounded-full">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind every successful event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Achievements
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that reflect our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Work With Us?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your event requirements and create something amazing together.
          </p>
          <Button
            size="lg"
            onClick={handleContact}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Start Planning Your Event
          </Button>
        </div>
      </div>
    </section>
  )
}
