"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const defaultDishes = [
  {
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled to perfection with aromatic spices",
    image: "/paneer-tikka-skewers-with-colorful-bell-peppers-an.jpg",
    category: "Starters",
  },
  {
    name: "Chole Bhature",
    description: "Fluffy deep-fried bread served with spicy chickpea curry",
    image: "/chole-bhature-with-fluffy-bread-and-spicy-chickpea.jpg",
    category: "Main Course",
  },
  {
    name: "Dosa Varieties",
    description: "Crispy South Indian crepes with multiple filling options",
    image: "/crispy-masala-dosa-with-potato-filling-and-chutneys.jpg",
    category: "Main Course",
  },
  {
    name: "Pav Bhaji",
    description: "Spicy mashed vegetable curry served with buttered bread rolls",
    image: "/pav-bhaji-with-buttered-buns-and-spicy-vegetable-ma.jpg",
    category: "Street Food",
  },
  {
    name: "Veg Biryani",
    description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices",
    image: "/vegetable-biryani-with-colorful-vegetables-and-arom.jpg",
    category: "Main Course",
  },
  {
    name: "Samosa Chaat",
    description: "Crispy samosas topped with yogurt, chutneys, and spices",
    image: "/samosa-chaat-with-yogurt-chutneys-and-crispy-samosa.jpg",
    category: "Street Food",
  },
  {
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach gravy",
    image: "/palak-paneer-in-creamy-spinach-gravy-with-cottage-c.jpg",
    category: "Main Course",
  },
  {
    name: "Aloo Tikki",
    description: "Crispy potato patties served with tangy chutneys",
    image: "/aloo-tikki-potato-patties-with-chutneys-and-garnish.jpg",
    category: "Starters",
  },
  {
    name: "Rajma Chawal",
    description: "Red kidney beans curry served with steamed rice",
    image: "/rajma-chawal-red-kidney-beans-curry-with-steamed-ri.jpg",
    category: "Main Course",
  },
  {
    name: "Dhokla",
    description: "Steamed savory cake made from fermented rice and chickpea batter",
    image: "/dhokla-steamed-savory-cake-with-mustard-seeds-and-c.jpg",
    category: "Snacks",
  },
  {
    name: "Veg Pulao",
    description: "Aromatic rice cooked with mixed vegetables and whole spices",
    image: "/vegetable-pulao-with-colorful-vegetables-and-aromat.jpg",
    category: "Main Course",
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
    image: "/gulab-jamun-soft-milk-dumplings-in-rose-sugar-syrup.jpg",
    category: "Desserts",
  },
]

export default function IndianDishesSection() {
  const { t } = useLanguage()
  const menuContent = (t("menu") as any) ?? {}
  const dishes = Array.isArray(menuContent.items)
    ? defaultDishes.map((dish, index) => {
        const override = menuContent.items[index]
        return {
          ...dish,
          name: override?.name ?? dish.name,
          description: override?.description ?? dish.description,
          category: override?.category ?? dish.category,
        }
      })
    : defaultDishes
  const badgeLabel = menuContent.badge ?? "Our Menu"
  const sectionTitle = menuContent.title ?? "Authentic Indian Vegetarian Delights"
  const sectionSubtitle = menuContent.subtitle ?? "Experience the rich flavors of India with our carefully curated vegetarian menu"
  const orderButton = menuContent.orderButton ?? "Order Now"
  const ctaText = menuContent.ctaText ?? "Want to customize your menu? We can create a personalized selection for your event!"
  const ctaButton = menuContent.ctaButton ?? "Customize Your Menu"

  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 animate-slide-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">{badgeLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            {sectionTitle}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {sectionSubtitle}
          </p>
        </div>

        {/* Dishes Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {dish.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">{dish.description}</p>

                {/* Book Button */}
                <Button
                  onClick={() => {
                    window.open(
                      `https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20order%20${dish.name}%20for%20my%20event.`,
                      "_blank",
                    )
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
                  size="sm"
                >
                  {orderButton}
                </Button>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            {ctaText}
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.open(
                "https://wa.me/917020924372?text=Hello%20Shalu%20Caters!%20I%20would%20like%20to%20discuss%20a%20custom%20menu%20for%20my%20event.",
                "_blank",
              )
            }}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            {ctaButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
