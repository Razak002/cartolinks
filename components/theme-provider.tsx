"use client"

console.log("[ThemeProvider component loading")
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("ThemeProvider rendering with props:", props)
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
