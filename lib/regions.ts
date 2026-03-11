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

export interface RegionPageProject {
  id: string
  title: string
  description: string
  image: string
}

export interface RegionPageContent {
  heroTitle: string
  heroSubtitle: string
  intro: string
  projects: RegionPageProject[]
}

export interface RegionContent {
  label: string
  short: string
  hero: RegionHeroContent
  projects: RegionProjectsContent
  contact: RegionContactContent
  footer: RegionFooterContent
  card: RegionCardContent
  page: RegionPageContent
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
    page: {
      heroTitle: "Проекты в Санкт-Петербурге",
      heroSubtitle: "Северные сады с атмосферой тишины и созерцания",
      intro: "Петербургские ландшафты — это работа с тенью, влагой и переменчивым светом. Мы создаём сады, которые красивы круглый год: от первых весенних луковичных до зимних силуэтов декоративных трав. Каждый проект учитывает особенности северного климата и архитектурный контекст резиденции.",
      projects: [
        {
          id: "spb-page-1",
          title: "Резиденция на Каменном острове",
          description: "Сад с водным зеркалом, массивами декоративных трав и вечерним светом, подчеркивающим пластику участка. Проект реализован на участке 25 соток с учётом существующих лип и берёз.",
          image: "/images/project-1.jpg",
        },
        {
          id: "spb-page-2",
          title: "Усадьба в Репино",
          description: "Пейзажная композиция с соснами, мхами и сухими ручьями, адаптированная к прибрежному климату Финского залива. Минимальный уход при максимальной выразительности в любой сезон.",
          image: "/images/project-2.jpg",
        },
        {
          id: "spb-page-3",
          title: "Дом на Крестовском",
          description: "Приватный внутренний двор с геометрией камня, архитектурной подсветкой и устойчивыми многолетниками. Компактное пространство, максимально функциональное для городской жизни.",
          image: "/images/project-3.jpg",
        },
        {
          id: "spb-page-4",
          title: "Сад в Комарово",
          description: "Природный ландшафт с интеграцией существующего соснового леса. Деревянные настилы, папоротники и тенелюбивые почвопокровники создают атмосферу лесного уединения.",
          image: "/images/project-1.jpg",
        },
        {
          id: "spb-page-5",
          title: "Резиденция в Курортном районе",
          description: "Большой участок с перепадом высот. Террасирование, каскадный ручей и зоны отдыха с видами на залив. Сад для круглогодичного проживания большой семьи.",
          image: "/images/project-2.jpg",
        },
        {
          id: "spb-page-6",
          title: "Таунхаус на Петроградской стороне",
          description: "Камерный городской сад площадью 4 сотки. Вертикальное озеленение, контейнерные посадки и система автополива для минимального ухода.",
          image: "/images/project-3.jpg",
        },
      ],
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
    page: {
      heroTitle: "Проекты в Москве",
      heroSubtitle: "Представительные ландшафты для крупных резиденций",
      intro: "Московские проекты — это работа с масштабом, статусом и премиальными материалами. Мы создаём ландшафты, которые подчёркивают архитектуру и образ жизни владельцев: от парадных партеров до приватных садовых комнат. Каждый проект — это баланс представительности и комфорта.",
      projects: [
        {
          id: "msk-page-1",
          title: "Поместье в Жуковке",
          description: "Парадный ландшафт с партерами, топиарными акцентами и линейной водной осью у главного фасада. Участок 80 соток с отдельными зонами для семьи и гостей.",
          image: "/images/project-2.jpg",
        },
        {
          id: "msk-page-2",
          title: "Резиденция на Новорижском",
          description: "Просторный семейный сад с террасами, бассейном и камерными зонами отдыха для круглогодичного использования. Система ландшафтного освещения для вечерних мероприятий.",
          image: "/images/project-3.jpg",
        },
        {
          id: "msk-page-3",
          title: "Вилла в Барвихе",
          description: "Архитектурный двор с крупноформатным камнем, скульптурным озеленением и тщательно выстроенными видовыми осями. Интеграция современного искусства в ландшафт.",
          image: "/images/project-1.jpg",
        },
        {
          id: "msk-page-4",
          title: "Усадьба в Горках-2",
          description: "Классический регулярный сад с современной интерпретацией. Боскеты, живые изгороди и водный партер. Отдельная зона для детской площадки и спортивных активностей.",
          image: "/images/project-2.jpg",
        },
        {
          id: "msk-page-5",
          title: "Дом на Рублёвке",
          description: "Ландшафт для активной семьи: теннисный корт с озеленением периметра, гостевая зона с барбекю и приватный сад у спален. Акцент на функциональность и эстетику.",
          image: "/images/project-3.jpg",
        },
        {
          id: "msk-page-6",
          title: "Резиденция в Николиной Горе",
          description: "Работа с лесным участком: деликатное внедрение ландшафтных зон без нарушения природного окружения. Мостки, пруд и видовые точки для созерцания.",
          image: "/images/project-1.jpg",
        },
      ],
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
    page: {
      heroTitle: "Проекты в Ереване",
      heroSubtitle: "Террасные сады для жаркого климата",
      intro: "Ереванские ландшафты — это искусство работы с камнем, светом и тенью. Мы создаём сады, комфортные для жизни в жарком климате: прохладные террасы, тенистые перголы и засухоустойчивые посадки. Местный туф и базальт становятся основой архитектуры сада.",
      projects: [
        {
          id: "yerevan-page-1",
          title: "Вилла в Аване",
          description: "Средиземноморский сад с каскадными террасами, сухим ручьём и вечнозелёными акцентами для жаркого сезона. Вид на Арарат из зоны отдыха.",
          image: "/images/project-3.jpg",
        },
        {
          id: "yerevan-page-2",
          title: "Дом в Норке",
          description: "Сад на рельефе с подпорными стенками из туфа, тенистыми перголами и спокойной вечерней подсветкой. Бассейн интегрирован в естественный склон.",
          image: "/images/project-1.jpg",
        },
        {
          id: "yerevan-page-3",
          title: "Резиденция в Арабкире",
          description: "Приватный двор с оливами, лавандой, системой капельного орошения и лаунж-зонами из натурального камня. Минимальный расход воды при пышном озеленении.",
          image: "/images/project-2.jpg",
        },
        {
          id: "yerevan-page-4",
          title: "Вилла в Цахкадзоре",
          description: "Горный сад на высоте 1800 метров. Альпийские посадки, каменные подпорные стены и зона для созерцания горных вершин. Проект для летней резиденции.",
          image: "/images/project-3.jpg",
        },
        {
          id: "yerevan-page-5",
          title: "Дом в Давташене",
          description: "Компактный городской участок с максимальной функциональностью. Терраса для ужинов, мини-сад с ароматическими травами и зона у бассейна.",
          image: "/images/project-1.jpg",
        },
        {
          id: "yerevan-page-6",
          title: "Резиденция у озера Севан",
          description: "Прибрежный ландшафт с учётом ветровой нагрузки. Защитные посадки, каменные террасы и интеграция причала в общую композицию сада.",
          image: "/images/project-2.jpg",
        },
      ],
    },
  },
}

export const REGION_OPTIONS: RegionOption[] = REGION_IDS.map((id) => ({
  id,
  label: REGION_CONTENT[id].label,
  short: REGION_CONTENT[id].short,
}))
