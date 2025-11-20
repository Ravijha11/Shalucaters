"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "gap-2 min-w-[120px] bg-white/90 text-foreground border border-border shadow-md hover:bg-white hover:text-foreground transition-colors",
            className,
          )}
          aria-label="Change language"
        >
          <Globe size={16} />
          <span className="hidden sm:inline">{language === "en" ? "English" : "हिंदी"}</span>
          <span className="sm:hidden">{language === "en" ? "EN" : "HI"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[170px] bg-white text-foreground border border-border shadow-xl backdrop-blur-none"
      >
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "bg-primary/10 font-semibold" : ""}`}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("hi")}
          className={`cursor-pointer ${language === "hi" ? "bg-primary/10 font-semibold" : ""}`}
        >
          <span className="mr-2">🇮🇳</span>
          हिंदी
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}