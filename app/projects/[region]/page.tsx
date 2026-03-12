import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { REGION_CONTENT, REGION_IDS, isRegion } from "@/lib/regions"

interface RegionProjectsPageProps {
  params: Promise<{ region: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return REGION_IDS.map((region) => ({ region }))
}

export async function generateMetadata({
  params,
}: RegionProjectsPageProps): Promise<Metadata> {
  const { region } = await params

  if (!isRegion(region)) {
    return {
      title: "Проекты — Non-Stop",
      description: "Региональные проекты студии Non-Stop.",
    }
  }

  const content = REGION_CONTENT[region]

  return {
    title: `Проекты в ${content.label} — Non-Stop`,
    description: content.hero.subtitle,
  }
}

function getRegionContent(region: string) {
  if (!isRegion(region)) {
    notFound()
  }

  return REGION_CONTENT[region]
}

export default async function RegionProjectsPage({
  params,
}: RegionProjectsPageProps) {
  const { region } = await params
  const content = getRegionContent(region)

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={content.hero.image}
          alt={`Проекты студии Non-Stop в регионе ${content.label}`}
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/70" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between px-6 py-10 sm:py-12 lg:px-8 lg:py-14">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 border border-background/40 px-4 py-2 text-xs font-light tracking-[0.18em] uppercase text-background transition-colors hover:bg-background/10"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>

          <div className="max-w-4xl pb-8 sm:pb-12">
            <span className="text-xs font-light tracking-[0.3em] uppercase text-background/75">
              Региональные проекты
            </span>
            <h1 className="mt-6 font-serif text-4xl tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
              Проекты в {content.label}
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-background/90 sm:text-xl">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            О регионе
          </p>
          <p className="mt-5 max-w-3xl text-base font-light leading-relaxed text-foreground sm:text-lg">
            {content.card.description}
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              {content.projects.sectionLabel}
            </span>
            <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              {content.projects.title}
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {content.projects.items.map((project, index) => (
              <article
                key={project.id}
                className={`group ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-muted ${index === 0 ? "aspect-[4/3] lg:aspect-[16/12]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title}, ${project.city}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-xs font-light tracking-[0.2em] uppercase text-background/80">
                      {project.city}
                    </p>
                    <h3 className="mt-2 font-serif text-xl text-background sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-background/85">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
