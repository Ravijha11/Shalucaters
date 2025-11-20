"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSelector({ onLanguageSelected }: { onLanguageSelected?: () => void }) {
  const { setLanguage } = useLanguage()
  const [showSelector, setShowSelector] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if language has been selected before
    if (typeof window !== "undefined") {
      const hasSelectedLanguage = localStorage.getItem("language")
      if (hasSelectedLanguage === "en" || hasSelectedLanguage === "hi") {
        setShowSelector(false)
      }
    }
    setMounted(true)
  }, [])

  const handleLanguageSelect = (lang: "en" | "hi") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
      localStorage.setItem("languageSelected", "true")
    }
    setLanguage(lang)
    setShowSelector(false)
    // Notify parent that language was selected
    if (onLanguageSelected) {
      onLanguageSelected()
    }
    // Also trigger a custom event for cross-component communication
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("languageSelected", { detail: lang }))
    }
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  // Show language selector if no language has been selected
  if (!showSelector) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-orange-500 via-red-600 to-orange-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center space-y-6 animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-4">
            <Globe className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose Your Language
          </h2>
          <p className="text-gray-600 text-lg">
            अपनी भाषा चुनें
          </p>
        </div>

        {/* Language Buttons */}
        <div className="space-y-4 pt-4">
          <button
            onClick={() => handleLanguageSelect("en")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl min-h-[56px] touch-manipulation border-2 border-white/20 hover:border-white/40"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect("hi")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl min-h-[56px] touch-manipulation border-2 border-white/20 hover:border-white/40"
          >
            हिंदी
          </button>
        </div>

        {/* Welcome Message */}
        <p className="text-sm text-gray-500 pt-2">
          Welcome to Shalu Caters! 🎉
        </p>
      </div>
    </div>
  )
}

