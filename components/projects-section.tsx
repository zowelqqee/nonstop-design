"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { RegionProjectsContent } from "@/lib/regions"

interface ProjectsSectionProps {
  content: RegionProjectsContent
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 sm:py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              {content.sectionLabel}
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              {content.title}
            </h2>
          </div>
          <button className="self-start sm:self-auto inline-flex items-center gap-2 text-sm font-light tracking-wide text-primary hover:text-primary/80 transition-colors group">
            {content.ctaLabel}
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content.items.map((project, index) => (
            <article
              key={project.id}
              className={`group cursor-pointer ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden bg-muted ${index === 0 ? 'aspect-[4/3] lg:aspect-[16/12]' : 'aspect-[4/3]'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-light tracking-wider text-background/80 uppercase">
                    {project.city}
                  </p>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl text-background">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-background/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Static Content */}
              <div className="mt-4 lg:hidden">
                <p className="text-xs font-light tracking-wider text-muted-foreground uppercase">
                  {project.city}
                </p>
                <h3 className="mt-1 font-serif text-lg text-foreground">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
