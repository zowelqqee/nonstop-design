# Структура проекта `non-stop`

## 1. Назначение проекта
Одностраничный сайт студии премиальной ландшафтной архитектуры (Next.js, App Router, React, Tailwind CSS v4).

## 2. Верхний уровень репозитория
```text
non-stop/
├── app/                  # App Router: layout, страница, глобальные стили
├── components/           # Секционные компоненты страницы + UI-библиотека
├── hooks/                # Кастомные React-хуки
├── lib/                  # Общие утилиты
├── public/               # Статические ассеты (иконки, изображения)
├── styles/               # Дополнительный глобальный CSS (legacy/alternate)
├── next.config.mjs       # Конфигурация Next.js
├── tailwind.config.ts    # Конфигурация Tailwind
├── postcss.config.mjs    # Конфигурация PostCSS
├── tsconfig.json         # Конфигурация TypeScript
├── package.json          # Скрипты и зависимости
└── pnpm-lock.yaml        # Lock-файл pnpm
```

## 3. Папка `app/`
- `app/layout.tsx`: корневой layout, метаданные, подключение шрифта, `Analytics`, глобальный CSS.
- `app/page.tsx`: сборка главной страницы из секций и управление общим состоянием региона.
- `app/globals.css`: глобальная тема (цвета, токены), типографика, базовые стили.

## 4. Папка `components/`
### 4.1 Секции лендинга
- `header.tsx` — шапка, навигация, выбор региона, мобильное меню.
- `hero-section.tsx` — главный экран.
- `philosophy-section.tsx` — философия/ценности.
- `projects-section.tsx` — блок проектов.
- `process-section.tsx` — этапы работы.
- `materials-section.tsx` — материалы.
- `regions-section.tsx` — регионы присутствия.
- `audience-section.tsx` — целевая аудитория.
- `care-section.tsx` — постпроектный уход.
- `about-section.tsx` — о студии.
- `contact-section.tsx` — контакты и форма.
- `footer.tsx` — подвал сайта.

### 4.2 UI-набор (`components/ui/`)
Коллекция переиспользуемых примитивов и сложных компонентов (в основном на базе Radix UI и shadcn-подхода): `button`, `input`, `select`, `dialog`, `tabs`, `table`, `toast`, `sidebar`, `form` и др.

## 5. Папки `hooks/` и `lib/`
- `hooks/use-mobile.ts`, `hooks/use-toast.ts`: прикладные хуки для адаптивности и уведомлений.
- `lib/utils.ts`: утилиты (например `cn` для объединения классов).

## 6. Папка `public/`
- `public/images/*`: изображения секций (`hero`, `projects`, `materials`).
- Иконки сайта (`icon.svg`, `apple-icon.png`, light/dark favicon).

## 7. Поток данных на главной странице
1. В `app/page.tsx` хранится `currentRegion` (`useState`).
2. `Header` и `RegionsSection` изменяют регион через `onRegionChange`.
3. `ContactSection` получает текущий регион и подставляет его в форму.

## 8. Скрипты из `package.json`
- `pnpm dev` — запуск dev-сервера.
- `pnpm build` — production build.
- `pnpm start` — запуск production-сборки.
- `pnpm lint` — линтинг.

## 9. Технологический стек
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI + shadcn-стиль компонентов
- Vercel Analytics
