"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import type { RegionHeroContent } from "@/lib/regions"

interface HeroSectionProps {
  content: RegionHeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling

    if (!(nextSection instanceof HTMLElement)) {
      return
    }

    const headerOffset = 80
    const top =
      nextSection.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[calc(100vh-5rem)] h-[calc(100svh-5rem)] min-h-[760px] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center ${content.contentOffsetClassName ?? ""}`}
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background tracking-tight leading-[1.1] text-balance">
            {content.title}
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl md:text-2xl font-light text-background/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            {content.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-widest uppercase bg-background text-foreground hover:bg-background/90 transition-colors min-w-[220px]"
            >
              Обсудить проект
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-widest uppercase border border-background/50 text-background hover:bg-background/10 transition-colors min-w-[220px]"
            >
              Смотреть проекты
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Прокрутить к следующему разделу"
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 animate-bounce text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/70 sm:bottom-4"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
