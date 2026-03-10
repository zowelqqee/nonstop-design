"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const regions = [
  { id: "spb", name: "Санкт-Петербург", short: "СПб" },
  { id: "msk", name: "Москва", short: "МСК" },
  { id: "yerevan", name: "Ереван", short: "ЕРВ" },
]

interface HeaderProps {
  currentRegion: string
  onRegionChange: (region: string) => void
}

export function Header({ currentRegion, onRegionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRegionOpen, setIsRegionOpen] = useState(false)

  const currentRegionData = regions.find((r) => r.id === currentRegion) || regions[0]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-tight text-foreground">Non-Stop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="#projects" className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Проекты
            </Link>
            <Link href="#process" className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Процесс
            </Link>
            <Link href="#about" className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              О студии
            </Link>
            <Link href="#contact" className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Region Selector & CTA */}
          <div className="flex items-center gap-6">
            {/* Region Selector */}
            <div className="relative">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">{currentRegionData.name}</span>
                <span className="sm:hidden">{currentRegionData.short}</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isRegionOpen && "rotate-180")} />
              </button>

              {isRegionOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsRegionOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 z-50 min-w-[180px] bg-card border border-border rounded-sm shadow-lg">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => {
                          onRegionChange(region.id)
                          setIsRegionOpen(false)
                        }}
                        className={cn(
                          "w-full px-4 py-3 text-left text-sm font-light tracking-wide transition-colors hover:bg-muted",
                          region.id === currentRegion && "bg-muted text-primary"
                        )}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-light tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Обсудить проект
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Проекты
            </Link>
            <Link
              href="#process"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Процесс
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              О студии
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-light tracking-wide bg-primary text-primary-foreground"
            >
              Обсудить проект
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
