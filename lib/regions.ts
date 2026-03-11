export const REGION_IDS = ["spb", "msk", "yerevan"] as const

export type Region = (typeof REGION_IDS)[number]

export interface RegionOption {
  id: Region
  label: string
  short: string
}

export interface RegionHeroContent {
  title: string
  subtitle: string
  imageAlt: string
}

export interface RegionProject {
  id: string
  title: string
  city: string
  description: string
  image: string
}

export interface RegionProjectsContent {
  sectionLabel: string
  title: string
  ctaLabel: string
  items: RegionProject[]
}

export interface RegionContactContent {
  sectionLabel: string
  title: string
  description: string
  city: string
  email: string
  phoneDisplay: string
  phoneHref: string
  officeLabel: string
  officeAddress: string
  projectTypes: string[]
  submitLabel: string
  privacyNote: string
}

export interface RegionFooterContent {
  studioDescription: string
  regionLabel: string
  regionOfficeLabel: string
  regionOfficeAddress: string
  email: string
  phoneDisplay: string
  phoneHref: string
}

export interface RegionCardContent {
  tagline: string
  description: string
  features: string[]
}

export interface RegionContent {
  label: string
  short: string
  hero: RegionHeroContent
  projects: RegionProjectsContent
  contact: RegionContactContent
  footer: RegionFooterContent
  card: RegionCardContent
}

export const REGION_CONTENT: Record<Region, RegionContent> = {
  spb: {
    label: "Санкт-Петербург",
    short: "СПб",
    hero: {
      title: "Сады северного света",
      subtitle:
        "Сдержанные ландшафты для частных резиденций Петербурга с акцентом на тень, воду и стабильную сезонную структуру.",
      imageAlt: "Премиальный ландшафт в Санкт-Петербурге",
    },
    projects: {
      sectionLabel: "Портфолио Санкт-Петербурга",
      title: "Избранные проекты в северной эстетике",
      ctaLabel: "Все проекты СПб",
      items: [
        {
          id: "spb-1",
          title: "Резиденция на Каменном острове",
          city: "Санкт-Петербург",
          description:
            "Сад с водным зеркалом, массивами декоративных трав и вечерним светом, подчеркивающим пластику участка.",
          image: "/images/project-1.jpg",
        },
        {
          id: "spb-2",
          title: "Усадьба в Репино",
          city: "Санкт-Петербург",
          description:
            "Пейзажная композиция с соснами, мхами и сухими ручьями, адаптированная к прибрежному климату Финского залива.",
          image: "/images/project-2.jpg",
        },
        {
          id: "spb-3",
          title: "Дом на Крестовском",
          city: "Санкт-Петербург",
          description:
            "Приватный внутренний двор с геометрией камня, архитектурной подсветкой и устойчивыми многолетниками.",
          image: "/images/project-3.jpg",
        },
      ],
    },
    contact: {
      sectionLabel: "Контакты Санкт-Петербург",
      title: "Обсудим проект в Санкт-Петербурге",
      description:
        "Подготовим концепцию с учётом микроклимата, сезонности и архитектуры вашей резиденции в Петербурге и области.",
      city: "Санкт-Петербург",
      email: "spb@non-stop.design",
      phoneDisplay: "+7 (812) 210-45-67",
      phoneHref: "+78122104567",
      officeLabel: "Офис",
      officeAddress: "Каменноостровский пр., 38",
      projectTypes: [
        "Новый ландшафт",
        "Реконструкция сада",
        "Сад у воды",
        "Премиальный уход",
        "Другое",
      ],
      submitLabel: "Запросить консультацию в СПб",
      privacyNote: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
    },
    footer: {
      studioDescription:
        "Петербургское направление студии: атмосферные сады с северным характером и выверенной сезонной композицией.",
      regionLabel: "Текущий регион",
      regionOfficeLabel: "Офис Санкт-Петербург",
      regionOfficeAddress: "Каменноостровский пр., 38",
      email: "spb@non-stop.design",
      phoneDisplay: "+7 (812) 210-45-67",
      phoneHref: "+78122104567",
    },
    card: {
      tagline: "Сдержанный север",
      description:
        "Сады для прохладного климата: тени, вода и устойчивые посадки без лишних деталей.",
      features: ["Сезонные посадки", "Теневые сады", "Водные зеркала"],
    },
  },
  msk: {
    label: "Москва",
    short: "МСК",
    hero: {
      title: "Представительные сады Москвы",
      subtitle:
        "Проектируем крупные резиденциальные участки с чистой структурой, дорогими материалами и аккуратной деталировкой.",
      imageAlt: "Премиальный ландшафт в Москве",
    },
    projects: {
      sectionLabel: "Портфолио Москвы",
      title: "Пространства статуса и масштаба",
      ctaLabel: "Все проекты Москва",
      items: [
        {
          id: "msk-1",
          title: "Поместье в Жуковке",
          city: "Москва",
          description:
            "Парадный ландшафт с партерами, топиарными акцентами и линейной водной осью у главного фасада.",
          image: "/images/project-2.jpg",
        },
        {
          id: "msk-2",
          title: "Резиденция на Новорижском",
          city: "Москва",
          description:
            "Просторный семейный сад с террасами, бассейном и камерными зонами отдыха для круглогодичного использования.",
          image: "/images/project-3.jpg",
        },
        {
          id: "msk-3",
          title: "Вилла в Барвихе",
          city: "Москва",
          description:
            "Архитектурный двор с крупноформатным камнем, скульптурным озеленением и тщательно выстроенными видовыми осями.",
          image: "/images/project-1.jpg",
        },
      ],
    },
    contact: {
      sectionLabel: "Контакты Москва",
      title: "Обсудим проект в Москве",
      description:
        "Сформируем премиальную концепцию для вашего участка: от статусной входной группы до приватных садовых пространств.",
      city: "Москва",
      email: "moscow@non-stop.design",
      phoneDisplay: "+7 (495) 410-32-10",
      phoneHref: "+74954103210",
      officeLabel: "Офис",
      officeAddress: "Пречистенская наб., 15",
      projectTypes: [
        "Новый ландшафт",
        "Реконструкция резиденции",
        "Парадная входная группа",
        "Сервисное сопровождение",
        "Другое",
      ],
      submitLabel: "Запросить консультацию в Москве",
      privacyNote: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
    },
    footer: {
      studioDescription:
        "Московское направление студии: представительские ландшафты для крупных частных резиденций.",
      regionLabel: "Текущий регион",
      regionOfficeLabel: "Офис Москва",
      regionOfficeAddress: "Пречистенская наб., 15",
      email: "moscow@non-stop.design",
      phoneDisplay: "+7 (495) 410-32-10",
      phoneHref: "+74954103210",
    },
    card: {
      tagline: "Пространство статуса",
      description:
        "Крупные участки, чистые линии и материалы высокого класса для частных резиденций.",
      features: ["Партерные сады", "Топиарное искусство", "Бассейны и террасы"],
    },
  },
  yerevan: {
    label: "Ереван",
    short: "ЕРВ",
    hero: {
      title: "Террасные сады Еревана",
      subtitle:
        "Работаем с камнем, тенью и рельефом, создавая приватные сады для жаркого климата и ежедневного использования.",
      imageAlt: "Премиальный ландшафт в Ереване",
    },
    projects: {
      sectionLabel: "Портфолио Еревана",
      title: "Камень, солнце и живая текстура",
      ctaLabel: "Все проекты Ереван",
      items: [
        {
          id: "yerevan-1",
          title: "Вилла в Аване",
          city: "Ереван",
          description:
            "Средиземноморский сад с каскадными террасами, сухим ручьём и вечнозелёными акцентами для жаркого сезона.",
          image: "/images/project-3.jpg",
        },
        {
          id: "yerevan-2",
          title: "Дом в Норке",
          city: "Ереван",
          description:
            "Сад на рельефе с подпорными стенками из туфа, тенистыми перголами и спокойной вечерней подсветкой.",
          image: "/images/project-1.jpg",
        },
        {
          id: "yerevan-3",
          title: "Резиденция в Арабкире",
          city: "Ереван",
          description:
            "Приватный двор с оливами, лавандой, системой капельного орошения и лаунж-зонами из натурального камня.",
          image: "/images/project-2.jpg",
        },
      ],
    },
    contact: {
      sectionLabel: "Контакты Ереван",
      title: "Обсудим проект в Ереване",
      description:
        "Подберём архитектурное решение, учитывающее рельеф, инсоляцию и локальные материалы для вашего участка.",
      city: "Ереван",
      email: "yerevan@non-stop.design",
      phoneDisplay: "+374 (33) 210-540",
      phoneHref: "+37433210540",
      officeLabel: "Офис",
      officeAddress: "ул. Московян, 31",
      projectTypes: [
        "Новый ландшафт",
        "Террасирование участка",
        "Сад в тёплом климате",
        "Премиальный уход",
        "Другое",
      ],
      submitLabel: "Запросить консультацию в Ереване",
      privacyNote: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
    },
    footer: {
      studioDescription:
        "Ереванское направление студии: тёплая каменная эстетика, террасы и выразительные текстуры южного сада.",
      regionLabel: "Текущий регион",
      regionOfficeLabel: "Офис Ереван",
      regionOfficeAddress: "ул. Московян, 31",
      email: "yerevan@non-stop.design",
      phoneDisplay: "+374 (33) 210-540",
      phoneHref: "+37433210540",
    },
    card: {
      tagline: "Тёплый камень",
      description:
        "Террасы, тень и засухоустойчивые растения для комфортного сада в жарком климате.",
      features: ["Каменные террасы", "Сухие сады", "Оливы и лаванда"],
    },
  },
}

export const REGION_OPTIONS: RegionOption[] = REGION_IDS.map((id) => ({
  id,
  label: REGION_CONTENT[id].label,
  short: REGION_CONTENT[id].short,
}))
