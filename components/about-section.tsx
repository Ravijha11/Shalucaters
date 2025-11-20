"use client"

import { Users, Award, Clock, Heart, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

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
  const { t } = useLanguage()
  
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
              {t("about.badge")}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t("about.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const labelKey = index === 0 ? "events" : index === 1 ? "experience" : index === 2 ? "satisfaction" : "support"
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-fit">
                    <stat.icon className={`${stat.color}`} size={48} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{t(`about.stats.${labelKey}`)}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("about.story.title")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t("about.story.p1")}
              </p>
              <p>
                {t("about.story.p2")}
              </p>
              <p>
                {t("about.story.p3")}
              </p>
            </div>
            <Button onClick={handleContact} className="bg-primary hover:bg-primary/90">
              {t("about.story.button")}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/beautiful-wedding-buffet-setup-with-elegant-food-d.jpg"
                alt="Our Team in Action"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
              <img
                src="/elegant-wedding-buffet-with-beautiful-food-display.jpg"
                alt="Event Setup"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("about.values.title")}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t("about.values.items") as any[]).map((value: any, index: number) => {
              const IconComponent = values[index]?.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="mx-auto w-fit bg-primary/10 p-4 rounded-full">
                      {IconComponent && <IconComponent className="text-primary" size={32} />}
                    </div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("about.team.title")}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about.team.subtitle")}
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
                      loading="lazy"
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
              {t("about.achievements.title")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about.achievements.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(t("about.achievements.items") as any[]).map((achievement: string, index: number) => (
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
            {t("about.cta.title")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("about.cta.subtitle")}
          </p>
          <Button
            size="lg"
            onClick={handleContact}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            {t("about.cta.button")}
          </Button>
        </div>
      </div>
    </section>
  )
}
