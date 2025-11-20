"use client"

import { useState, useEffect } from "react"
import LanguageSelector from "./language-selector"

export default function LanguageSelectorWrapper({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (typeof window === "undefined") {
      return
    }

    const hasSelectedLanguage = localStorage.getItem("language")
    if (hasSelectedLanguage === "en" || hasSelectedLanguage === "hi") {
      setShowContent(true)
    }

    // Listen for language selection event
    const handleLanguageSelected = () => {
      setShowContent(true)
    }

    window.addEventListener("languageSelected", handleLanguageSelected)

    return () => {
      window.removeEventListener("languageSelected", handleLanguageSelected)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <LanguageSelector onLanguageSelected={() => setShowContent(true)} />
      {showContent ? children : null}
    </>
  )
}

