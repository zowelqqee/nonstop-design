"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { MaterialsSection } from "@/components/materials-section"
import { RegionsSection } from "@/components/regions-section"
import { AudienceSection } from "@/components/audience-section"
import { CareSection } from "@/components/care-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { REGION_CONTENT, REGION_OPTIONS, getRegionProjectsPath, type Region } from "@/lib/regions"

export default function HomePage() {
  const [currentRegion, setCurrentRegion] = useState<Region>("spb")
  const regionContent = REGION_CONTENT[currentRegion]

  return (
    <main className="min-h-screen pt-20">
      <Header
        currentRegion={currentRegion}
        onRegionChange={setCurrentRegion}
        regions={REGION_OPTIONS}
      />
      <HeroSection content={regionContent.hero} />
      <PhilosophySection />
      <ProjectsSection
        content={regionContent.projects}
        projectsHref={getRegionProjectsPath(currentRegion)}
      />
      <ProcessSection />
      <MaterialsSection />
      <RegionsSection
        currentRegion={currentRegion}
        onRegionChange={setCurrentRegion}
        regions={REGION_OPTIONS.map((option) => ({
          id: option.id,
          label: option.label,
          tagline: REGION_CONTENT[option.id].card.tagline,
          description: REGION_CONTENT[option.id].card.description,
          features: REGION_CONTENT[option.id].card.features,
          ctaLabel: REGION_CONTENT[option.id].projects.ctaLabel,
          projectsHref: getRegionProjectsPath(option.id),
        }))}
      />
      <AudienceSection />
      <CareSection />
      <AboutSection />
      <ContactSection
        currentRegion={currentRegion}
        content={regionContent.contact}
        regions={REGION_OPTIONS}
      />
      <Footer content={regionContent.footer} regions={REGION_OPTIONS} />
    </main>
  )
}
