"use client"

const steps = [
  {
    number: "01",
    title: "Первая встреча",
    description: "Знакомимся с вами, изучаем ваши предпочтения, образ жизни и ожидания от будущего сада.",
  },
  {
    number: "02",
    title: "Анализ участка",
    description: "Исследуем участок, архитектуру дома, микроклимат, рельеф и существующую растительность.",
  },
  {
    number: "03",
    title: "Концепция",
    description: "Разрабатываем уникальную концепцию, создаём эскизы и визуализации вашего будущего сада.",
  },
  {
    number: "04",
    title: "Подбор материалов",
    description: "Отбираем камень, дерево, растения и декоративные элементы премиального качества.",
  },
  {
    number: "05",
    title: "Реализация",
    description: "Воплощаем проект с безупречным вниманием к каждой детали и постоянным авторским надзором.",
  },
  {
    number: "06",
    title: "Уход и поддержка",
    description: "Обеспечиваем профессиональный уход за садом, чтобы он становился красивее с каждым годом.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Как мы работаем
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight text-balance">
            Процесс создания сада
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (desktop) */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-px bg-border" />
                )}
                
                <div className="flex flex-col">
                  <span className="font-serif text-5xl text-primary/20">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
