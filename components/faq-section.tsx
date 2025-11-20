"use client"

import { useState, useMemo } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function FaqSection() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const faqCategories = useMemo(() => {
    return t("faq.categories") as any[]
  }, [t])

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hello Shalu Caters! I have some questions about your services and would like to discuss my event requirements."
    )
    window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
              <HelpCircle className="inline-block mr-2" size={16} />
              {t("faq.badge")}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t("faq.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {category.icon} {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems[key]
                  
                  return (
                    <Card key={questionIndex} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                              {faq.question}
                            </h4>
                            {isOpen ? (
                              <ChevronUp size={20} className="text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t pt-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("faq.stillHaveQuestions")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("faq.stillHaveQuestionsSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleContact}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              {t("faq.contactUsNow")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello Shalu Caters! I would like to schedule a consultation call to discuss my event requirements."
                )
                window.open(`https://wa.me/917020924372?text=${message}`, "_blank")
              }}
              className="text-lg px-8 py-6"
            >
              {t("faq.scheduleConsultation")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
