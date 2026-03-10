"use client"

import { cn } from "@/lib/utils"

interface RegionsSectionProps {
  currentRegion: string
  onRegionChange: (region: string) => void
}

const regions = [
  {
    id: "spb",
    name: "Санкт-Петербург",
    tagline: "Сдержанная северная эстетика",
    description: "Атмосферные сады, учитывающие особенности петербургского климата. Работа с сезонностью, туманами, белыми ночами. Растения, которые раскрываются в северном свете.",
    features: ["Сезонная драматургия", "Теневые сады", "Водные зеркала"],
  },
  {
    id: "msk",
    name: "Москва",
    tagline: "Представительность и масштаб",
    description: "Парадные ландшафты для просторных резиденций. Геометрическая ясность, скульптурные формы, представительные въездные зоны и панорамные виды.",
    features: ["Партерные сады", "Топиарное искусство", "Бассейны и террасы"],
  },
  {
    id: "yerevan",
    name: "Ереван",
    tagline: "Тепло камня и солнца",
    description: "Средиземноморская эстетика, адаптированная к армянскому пейзажу. Террасирование, тёплые текстуры камня, засухоустойчивые растения и прохладные зоны отдыха.",
    features: ["Каменные террасы", "Сухие сады", "Оливы и лаванда"],
  },
]

export function RegionsSection({ currentRegion, onRegionChange }: RegionsSectionProps) {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            География
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight text-balance">
            Три города — три характера
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground leading-relaxed">
            Мы работаем в трёх регионах, и каждый требует уникального подхода к ландшафту.
          </p>
        </div>

        {/* Regions */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => onRegionChange(region.id)}
              className={cn(
                "bg-background p-8 sm:p-10 lg:p-12 text-left transition-all duration-300 hover:bg-muted/50",
                currentRegion === region.id && "bg-muted/80"
              )}
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
                {region.name}
              </h3>
              <p className="mt-2 text-sm font-light tracking-wide text-primary">
                {region.tagline}
              </p>
              <p className="mt-6 text-sm font-light text-muted-foreground leading-relaxed">
                {region.description}
              </p>
              
              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-2">
                {region.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-light tracking-wide text-foreground/70 border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Active Indicator */}
              <div className={cn(
                "mt-8 h-0.5 bg-primary transition-all duration-300",
                currentRegion === region.id ? "w-12" : "w-0"
              )} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
