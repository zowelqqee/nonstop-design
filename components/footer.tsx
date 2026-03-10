"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-tight text-background">Non-Stop</span>
            </Link>
            <p className="mt-4 text-sm font-light text-background/60 leading-relaxed">
              Студия премиальной ландшафтной архитектуры
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-background/40 mb-6">
              Навигация
            </h4>
            <nav className="space-y-3">
              <Link href="#projects" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                Проекты
              </Link>
              <Link href="#process" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                Процесс
              </Link>
              <Link href="#about" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                О студии
              </Link>
              <Link href="#contact" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-background/40 mb-6">
              Регионы
            </h4>
            <nav className="space-y-3">
              <span className="block text-sm font-light text-background/80">
                Санкт-Петербург
              </span>
              <span className="block text-sm font-light text-background/80">
                Москва
              </span>
              <span className="block text-sm font-light text-background/80">
                Ереван
              </span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-background/40 mb-6">
              Связь
            </h4>
            <div className="space-y-3">
              <a href="mailto:studio@non-stop.design" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                studio@non-stop.design
              </a>
              <a href="tel:+78121234567" className="block text-sm font-light text-background/80 hover:text-background transition-colors">
                +7 (812) 123-45-67
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-background/40">
            © {currentYear} Non-Stop. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs font-light text-background/40 hover:text-background/60 transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
