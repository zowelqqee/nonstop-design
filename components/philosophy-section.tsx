"use client"

const principles = [
  {
    title: "Без шаблонов",
    description: "Каждый проект начинается с чистого листа. Мы не используем готовые решения и типовые схемы.",
  },
  {
    title: "Архитектурный подход",
    description: "Ландшафт продолжает архитектуру дома, создавая единое гармоничное пространство.",
  },
  {
    title: "Ручная работа",
    description: "Каждый камень, каждое растение размещается вручную с вниманием к деталям.",
  },
  {
    title: "Индивидуальный подбор",
    description: "Материалы и растения подбираются специально для вашего участка и климата.",
  },
  {
    title: "Ограниченное число проектов",
    description: "Мы ведём только несколько проектов одновременно, уделяя максимум внимания каждому.",
  },
]

export function PhilosophySection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Философия
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1] text-balance">
            Почему наша работа — премиальная
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground leading-relaxed text-pretty">
            Мы создаём не просто благоустройство, а произведения ландшафтного искусства, 
            где каждая деталь продумана и исполнена с безупречным качеством.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-background p-8 sm:p-10 lg:p-12 group hover:bg-muted/50 transition-colors"
            >
              <span className="text-xs font-light tracking-wider text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-foreground">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm font-light text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
          {/* Empty cell for visual balance on desktop */}
          <div className="hidden lg:block bg-secondary/30 p-12" />
        </div>
      </div>
    </section>
  )
}
