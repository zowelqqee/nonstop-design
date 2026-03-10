"use client"

const stats = [
  { value: "15+", label: "лет опыта" },
  { value: "120+", label: "завершённых проектов" },
  { value: "3", label: "города присутствия" },
  { value: "8", label: "проектов в работе" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              О студии
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.1] text-balance">
              Non-Stop — студия премиальной ландшафтной архитектуры
            </h2>
            <div className="mt-8 space-y-6 text-base font-light text-muted-foreground leading-relaxed">
              <p>
                Мы создаём ландшафты, которые становятся продолжением архитектуры 
                и образа жизни владельца. Каждый проект — результат глубокого погружения 
                в контекст места, индивидуального подбора материалов и кропотливой ручной работы.
              </p>
              <p>
                Наша команда объединяет ландшафтных архитекторов, дендрологов и мастеров, 
                для которых качество — не компромисс, а стандарт. Мы сознательно ограничиваем 
                число проектов в работе, чтобы уделять максимум внимания каждому.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-border self-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 text-center"
              >
                <span className="font-serif text-4xl sm:text-5xl text-primary">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-light text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
