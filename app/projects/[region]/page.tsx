import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { REGION_IDS, REGION_CONTENT, type Region } from "@/lib/regions"

interface PageProps {
  params: Promise<{ region: string }>
}

export async function generateStaticParams() {
  return REGION_IDS.map((region) => ({
    region,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params
  
  if (!REGION_IDS.includes(region as Region)) {
    return {
      title: "Страница не найдена",
    }
  }

  const content = REGION_CONTENT[region as Region]
  
  return {
    title: `${content.page.heroTitle} — Non-Stop`,
    description: content.page.intro,
  }
}

export default async function RegionProjectsPage({ params }: PageProps) {
  const { region } = await params
  
  if (!REGION_IDS.includes(region as Region)) {
    notFound()
  }

  const content = REGION_CONTENT[region as Region]
  const { page, label } = content

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-tight text-foreground">Non-Stop</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              На главную
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              {label}
            </span>
            <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight text-balance">
              {page.heroTitle}
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-light text-muted-foreground leading-relaxed text-pretty">
              {page.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg font-light text-foreground/80 leading-relaxed text-pretty">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.projects.map((project) => (
              <article
                key={project.id}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
                Обсудить проект в {label.split("-")[0]}?
              </h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Оставьте заявку, и мы свяжемся для консультации
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Обсудить проект
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-light tracking-widest uppercase border border-border text-foreground hover:bg-muted transition-colors"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="font-serif text-xl tracking-tight text-foreground">
              Non-Stop
            </Link>
            <p className="text-xs font-light text-muted-foreground">
              Премиальная ландшафтная архитектура
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
