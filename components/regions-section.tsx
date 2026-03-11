"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Region } from "@/lib/regions"

interface RegionsSectionProps {
  currentRegion: Region
  onRegionChange: (region: Region) => void
  regions: Array<{
    id: Region
    label: string
    tagline: string
    description: string
    features: string[]
  }>
}

export function RegionsSection({ currentRegion, onRegionChange, regions }: RegionsSectionProps) {
  if (regions.length === 0) {
    return null
  }

  const activeRegion = regions.find((region) => region.id === currentRegion) ?? regions[0]

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
            {activeRegion.description}
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
                {region.label}
              </h3>
              <p className="mt-2 text-sm font-light tracking-wide text-primary">
                {region.tagline}
              </p>
              <p className="mt-6 text-sm font-light text-muted-foreground leading-relaxed">
                {region.description}
              </p>
              
              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-2">
                {region.features.map((feature) => (
                  <span
                    key={feature}
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

              {/* CTA Link */}
              <Link
                href={`/projects/${region.id}`}
                onClick={(e) => e.stopPropagation()}
                className="mt-6 inline-flex items-center gap-2 text-sm font-light tracking-wide text-primary hover:text-primary/80 transition-colors group"
              >
                Смотреть все проекты в {region.label.split("-")[0]}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
