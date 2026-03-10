"use client"

const criteria = [
  "Владельцы частных домов и резиденций",
  "Ценители красоты, тишины и приватности",
  "Те, кто хочет создать уникальное пространство",
  "Клиенты, готовые инвестировать в качество",
]

export function AudienceSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              Для кого
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-[1.1] text-balance">
              Мы работаем с теми, кто ценит настоящее
            </h2>
            <p className="mt-8 text-base font-light text-muted-foreground leading-relaxed">
              Наши проекты — не для всех. Мы создаём сады для людей, которые понимают 
              разницу между благоустройством и ландшафтным искусством, между типовым 
              решением и индивидуальной работой.
            </p>

            {/* Criteria */}
            <div className="mt-12 space-y-4">
              {criteria.map((criterion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-border"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-primary text-primary text-xs">
                    ✓
                  </span>
                  <span className="text-base font-light text-foreground">
                    {criterion}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="flex items-center">
            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 font-serif text-8xl text-primary/10">
                {'"'}
              </div>
              <p className="relative font-serif text-2xl sm:text-3xl text-foreground leading-relaxed italic">
                Сад — это не декорация. Это продолжение вашего дома, вашей философии, 
                вашего образа жизни. Он должен быть создан специально для вас.
              </p>
              <footer className="mt-8">
                <span className="text-sm font-light text-muted-foreground">
                  — Основатель студии Non-Stop
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
