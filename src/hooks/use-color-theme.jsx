"use client"

import React, { useState, useEffect, createContext, useContext } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme
    setThemeState(initialTheme)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"))
  }

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useColorTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values when context is not available (SSR)
    return {
      theme: "light",
      toggleTheme: () => {},
      setTheme: () => {},
      mounted: false,
    }
  }
  return context
}
