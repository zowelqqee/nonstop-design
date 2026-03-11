"use client"

import { useEffect, useState } from "react"
import type { Region, RegionContactContent, RegionOption } from "@/lib/regions"

interface ContactSectionProps {
  currentRegion: Region
  content: RegionContactContent
  regions: RegionOption[]
}

export function ContactSection({ currentRegion, content, regions }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: content.city,
    projectType: "",
    description: "",
  })

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      city: content.city,
      projectType: content.projectTypes.includes(prev.projectType) ? prev.projectType : "",
    }))
  }, [content.city, content.projectTypes])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { ...formData, region: currentRegion })
  }

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              {content.sectionLabel}
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.1] text-balance">
              {content.title}
            </h2>
            <p className="mt-8 text-base font-light text-muted-foreground leading-relaxed">
              {content.description}
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <span className="text-xs font-light tracking-wider text-muted-foreground uppercase">
                  Email
                </span>
                <p className="mt-1 text-lg font-light text-foreground">
                  {content.email}
                </p>
              </div>
              <div>
                <span className="text-xs font-light tracking-wider text-muted-foreground uppercase">
                  Телефон
                </span>
                <p className="mt-1 text-lg font-light text-foreground">
                  {content.phoneDisplay}
                </p>
              </div>
              <div>
                <span className="text-xs font-light tracking-wider text-muted-foreground uppercase">
                  {content.officeLabel}
                </span>
                <p className="mt-1 text-lg font-light text-foreground">
                  {content.officeAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-light tracking-wider text-muted-foreground uppercase mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm font-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-light tracking-wider text-muted-foreground uppercase mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm font-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-xs font-light tracking-wider text-muted-foreground uppercase mb-2">
                  Город
                </label>
                <select
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm font-light focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.label}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-light tracking-wider text-muted-foreground uppercase mb-2">
                  Тип проекта
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm font-light focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Выберите тип проекта</option>
                  {content.projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-light tracking-wider text-muted-foreground uppercase mb-2">
                  Расскажите о проекте
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground text-sm font-light focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Кратко опишите ваш участок и пожелания"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm font-light tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                {content.submitLabel}
              </button>

              <p className="text-xs font-light text-muted-foreground text-center">
                {content.privacyNote}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
