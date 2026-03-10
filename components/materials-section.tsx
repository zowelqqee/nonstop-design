"use client"

import Image from "next/image"

const materials = [
  "Натуральный камень",
  "Состаренное дерево",
  "Бронза и латунь",
  "Архитектурный бетон",
  "Водные элементы",
  "Ночное освещение",
]

export function MaterialsSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/images/materials.jpg"
              alt="Премиальные материалы"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/60">
              Материалы
            </span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground tracking-tight leading-[1.1] text-balance">
              Детали, которые создают ценность
            </h2>
            <p className="mt-8 text-base font-light text-primary-foreground/80 leading-relaxed">
              Мы работаем только с материалами премиального качества: натуральный камень 
              из лучших карьеров, вековое дерево, патинированные металлы. Каждая деталь 
              подбирается индивидуально и устанавливается вручную.
            </p>

            {/* Materials List */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 border-b border-primary-foreground/20"
                >
                  <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full" />
                  <span className="text-sm font-light text-primary-foreground/90">
                    {material}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-12 text-sm font-light text-primary-foreground/60 italic">
              Именно внимание к деталям и ручная работа делают наши проекты 
              неповторимыми и ценными.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
