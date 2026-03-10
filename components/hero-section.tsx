"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Премиальный ландшафтный дизайн"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background tracking-tight leading-[1.1] text-balance">
            Ландшафты, созданные вручную
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl md:text-2xl font-light text-background/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            Индивидуальный дизайн и реализация премиальных садов для частных резиденций
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-background/70" />
      </div>
    </section>
  )
}
