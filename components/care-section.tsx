"use client"

const services = [
  {
    title: "Сезонный уход",
    description: "Профессиональное обслуживание сада с учётом сезонных особенностей и индивидуальных потребностей растений.",
  },
  {
    title: "Авторский надзор",
    description: "Регулярные визиты автора проекта для контроля состояния сада и корректировки ухода.",
  },
  {
    title: "Обновление композиций",
    description: "Развитие сада со временем: обновление посадок, добавление новых акцентов, улучшение деталей.",
  },
]

export function CareSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Header */}
          <div className="lg:col-span-5">
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              После реализации
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.1] text-balance">
              Премиальный уход за садом
            </h2>
            <p className="mt-8 text-base font-light text-muted-foreground leading-relaxed">
              Сад — живой организм, который требует профессионального внимания. 
              Мы предлагаем долгосрочную программу ухода, чтобы ваш ландшафт 
              становился красивее с каждым годом.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-background border-l-2 border-primary"
                >
                  <h3 className="font-serif text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
