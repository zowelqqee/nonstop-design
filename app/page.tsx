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

export default function HomePage() {
  const [currentRegion, setCurrentRegion] = useState("spb")

  return (
    <main className="min-h-screen">
      <Header currentRegion={currentRegion} onRegionChange={setCurrentRegion} />
      <HeroSection />
      <PhilosophySection />
      <ProjectsSection />
      <ProcessSection />
      <MaterialsSection />
      <RegionsSection currentRegion={currentRegion} onRegionChange={setCurrentRegion} />
      <AudienceSection />
      <CareSection />
      <AboutSection />
      <ContactSection currentRegion={currentRegion} />
      <Footer />
    </main>
  )
}
