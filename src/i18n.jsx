import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LANGUAGES = ['en', 'ru']

const translations = {
  en: {
    nav: {
      links: [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Stack', href: '#tech' },
        { name: 'Experience', href: '#experience' },
        { name: 'AI', href: '#ai-tools' },
        { name: 'Contact', href: '#contact' },
      ],
      hire: 'Hire me',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Change language',
    },
    hero: {
      status: 'Open to opportunities',
      intro: "Hi, I'm",
      role: 'I build practical web products.',
      text: 'I turn requirements into working interfaces and backend features. My strongest project is a live multilingual website for an industrial manufacturer, alongside academic work in network security and several full-stack implementations.',
      viewWork: 'View my work',
      contact: 'Get in touch',
      scroll: 'Scroll',
      scrollLabel: 'Scroll down',
    },
    about: {
      title: { eyebrow: 'About me', title: 'What I', highlight: 'build' },
      bio: [
        "Computer Science graduate from Central Asian University in Tashkent. I focus on building web applications, connecting frontend interfaces to backend services, and turning requirements into working features.",
        "My practical experience includes React interfaces, REST API development, relational databases, authentication flows, and application deployment. I have worked with React, Next.js, Python (FastAPI, Django), Node.js, PostgreSQL, Docker, and Supabase.",
        'I prefer learning through implementation: building a feature, testing its behaviour, investigating failures, and documenting the result. I use AI coding tools as assistants, while reviewing and validating the code myself.',
      ],
      stats: [
        { n: '2026', label: 'CS graduate' },
        { n: '01', label: 'Live company website' },
        { n: '03', label: 'Website languages' },
        { n: 'TAS', label: 'Based in Tashkent' },
      ],
      skills: [
        { title: 'Frontend', desc: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: 'Backend', desc: 'FastAPI, Python, PostgreSQL, Node.js' },
        { title: 'DevOps', desc: 'Docker, GitHub, Vercel, Render, Linux' },
        { title: 'AI / ML', desc: 'LLM APIs, prompt design, Telegram integration' },
        { title: 'Architecture', desc: 'REST, JWT Auth, Clean Architecture' },
        { title: 'Testing', desc: 'Jest, Pytest, Swagger, Error handling' },
      ],
    },
    tech: {
      title: { eyebrow: 'Tech Stack', title: 'My', highlight: 'toolkit' },
      categories: ['Frontend', 'Backend', 'DevOps & Tools', 'AI & Testing'],
      intro: 'Tools I have used in projects. This list reflects practical exposure, not self-assigned proficiency percentages.',
    },
    experience: {
      title: { eyebrow: 'Experience & Education', title: 'Background and', highlight: 'practice' },
      contractLabel: 'Contract', educationLabel: 'Education', educationRole: 'BSc Computer Science', educationPeriod: 'Graduated · May 2026', educationDesc: 'Computer Science degree. Graduation project focused on an anomaly-detection IDS/IPS for university networks, including API work, evaluation and systematic literature review.',
      job: {
        role: 'Web Developer (Contract)',
        company: 'Energomax Group',
        period: 'June – August 2026',
        current: 'Contract',
        desc: 'Developed and updated the company website in WordPress. Worked on page structure and content presentation, adapting the site to the company’s business needs. The role focused on implementing website changes and maintaining a consistent company-facing presentation.',
        responsibilities: ['WordPress website development and updates', 'Page structure and content presentation', 'Adapting website sections to company requirements'],
        stack: ['WordPress', 'LocalWP', 'Git'],
      },
    },
    projects: {
      title: { eyebrow: 'My work', title: 'Featured', highlight: 'projects' },
      items: [
        {
          title: 'IDS/IPS - Anomaly Detection System',
          subtitle: 'Graduation Research Project',
          desc: 'Final academic project: Intrusion Detection & Prevention System for university networks with a FastAPI backend, REST API endpoints, and React interface. Conducted a Systematic Literature Review using PRISMA methodology; 15 studies were included in the final review. Identified a novel research gap - adaptive IPS threshold tuning. Presented at oral defense.',
        },
        {
          title: 'Uztransformator - Factory Catalog Site',
          desc: 'Multilingual (RU/UZ/EN) catalog website for an electrical equipment factory. React frontend with Supabase (Postgres, Auth and RLS) as the production data store, deployed on Vercel. An additional FastAPI + SQLAlchemy backend prototype demonstrates layered routing, JWT authentication and containerized deployment; it is separate from the production Supabase setup.',
        },
        {
          title: 'E-Commerce + Stripe',
          desc: 'Django full-stack e-commerce with Stripe payment integration, product catalog, cart, and order management. Dockerized with Render deployment, ENV-based config, and CI pipeline. Built as employer test assignment.',
        },
        {
          title: 'REST API - Node.js / TypeScript',
          desc: 'JWT-authenticated REST API with Zod validation, Swagger/OpenAPI docs, and full Jest test suite (unit + integration). Clean layered architecture. Built as employer test assignment.',
        },
        {
          title: 'Wishlist Mobile App',
          desc: 'React Native (Expo) mobile app backed by Next.js + Prisma API. Railway PostgreSQL, full auth flow, wishlist CRUD. Fixed Prisma relation bug (`user` -> `owner`) and pushed to GitHub.',
        },
        {
          title: 'Go Task Manager API',
          desc: 'Extended an existing Go REST API with a task recurrence feature: 5 recurrence types, PostgreSQL migrations, 4 new endpoints. Used clean architecture. Debugged nil/SQL NULL edge cases, tested via Docker + PowerShell.',
        },
        {
          title: 'OpenClaw AI Gateway + Telegram Bot',
          desc: 'Job application task: set up OpenClaw Gateway on WSL2 + Telegram bot integration. Resolved cascading AI provider auth failures (Anthropic credits, Gemini rate limits), switched to OpenRouter free tier. Configured systemd user service.',
        },
      ],
      liveDemo: 'Live demo',
    },
    ai: {
      title: { eyebrow: 'AI Workflow', title: 'How I use', highlight: 'AI tools' },
      approachLabel: 'Approach: ',
      approach: 'AI as a force multiplier, not a crutch. Every AI output is critically reviewed, manually tested, and refined. Errors from AI are fixed by hand - I document both what AI helped with and what required manual correction.',
      tools: [
        {
          usage: 'Daily',
          desc: 'Primary AI for complex reasoning, architecture decisions, code reviews, and detailed documentation. Used throughout every project.',
        },
        {
          usage: 'Daily',
          desc: 'Rapid prototyping, boilerplate generation, brainstorming approaches, and quick syntax lookups during active development.',
        },
        {
          usage: 'As needed',
          desc: 'Multimodal reasoning and long-context tasks - analyzing large codebases and docs, cross-checking answers from other models.',
        },
        {
          usage: 'Constant',
          desc: 'Inline code completion across all editors. Accelerates repetitive patterns, test cases, and routine API integrations.',
        },
        {
          usage: 'Per project',
          desc: 'In-browser AI coding agent for quick prototypes and small full-stack demos without local environment setup.',
        },
        {
          usage: 'As needed',
          desc: 'Pasting stack traces and error logs into AI for root cause analysis. Reduced debugging time significantly on complex issues.',
        },
        {
          usage: 'Per project',
          desc: 'Generating README files, API docs, and inline comments. All AI output is manually reviewed and refined before committing.',
        },
        {
          usage: 'Always',
          desc: 'Structured system prompts, tool-calling flows, and multi-turn agent design. Applied in OpenClaw Gateway and Telegram bot projects.',
        },
      ],
    },
    contact: {
      title: { eyebrow: 'Contact', title: "Let's work", highlight: 'together' },
      intro: 'Open to full-time roles, freelance projects, and internships. Drop me a message - I typically respond within 24 hours.',
      info: {
        email: 'Email',
        telegram: 'Telegram',
        location: 'Location',
        locationValue: 'Tashkent, Uzbekistan',
      },
      fields: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        message: 'Message',
      },
      placeholders: {
        name: 'Asilbek',
        email: 'you@example.com',
        phone: '+998 90 000 0000',
        message: 'Tell me about your project or opportunity...',
      },
      errors: {
        name: 'Name is required',
        email: 'Email is required',
        invalidEmail: 'Invalid email address',
        message: 'Message is required',
      },
      submit: {
        idle: 'Send message',
        loading: 'Sending...',
        success: 'Message sent!',
        error: 'Failed - try again',
      },
      copy: "You'll receive a copy to your email address.",
    },
    footer: {
      text: 'Developer based in Tashkent. Web projects, backend services and practical AI integrations with React, Python and FastAPI.',
      navigation: 'Navigation',
      contact: 'Contact',
      copyright: year => `© ${year} Asilbek. Built with React + TailwindCSS.`,
      scrollTop: 'Scroll to top',
    },
  },
  ru: {
    nav: {
      links: [
        { name: 'Проекты', href: '#projects' },
        { name: 'Обо мне', href: '#about' },
        { name: 'Стек', href: '#tech' },
        { name: 'Опыт', href: '#experience' },
        { name: 'AI', href: '#ai-tools' },
        { name: 'Контакты', href: '#contact' },
      ],
      hire: 'Нанять меня',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      languageLabel: 'Сменить язык',
    },
    hero: {
      status: 'Открыт к предложениям',
      intro: 'Привет, я',
      role: 'Разрабатываю веб-продукты для реальных задач.',
      text: 'Превращаю требования в работающие интерфейсы и backend-функции. Главный практический проект — опубликованный многоязычный сайт промышленного предприятия. Также в портфолио есть академическая работа по сетевой безопасности и несколько full-stack реализаций.',
      viewWork: 'Смотреть проекты',
      contact: 'Связаться',
      scroll: 'Вниз',
      scrollLabel: 'Прокрутить вниз',
    },
    about: {
      title: { eyebrow: 'Обо мне', title: 'Что я', highlight: 'разрабатываю' },
      bio: [
        'Выпускник факультета компьютерных наук Central Asian University в Ташкенте. Сосредоточен на разработке веб-приложений, интеграции интерфейсов с backend-сервисами и превращении требований в работающие функции.',
        'Мой практический опыт включает React-интерфейсы, разработку REST API, реляционные базы данных, аутентификацию и развёртывание приложений. Работал с React, Next.js, Python (FastAPI, Django), Node.js, PostgreSQL, Docker и Supabase.',
        'Предпочитаю учиться через практику: реализовать функцию, проверить её поведение, разобраться с ошибками и задокументировать результат. Использую AI-инструменты как помощников, самостоятельно проверяя и тестируя полученный код.',
      ],
      stats: [
        { n: '2026', label: 'выпуск CAU' },
        { n: '01', label: 'опубликованный сайт' },
        { n: '03', label: 'языка сайта' },
        { n: 'TAS', label: 'Ташкент' },
      ],
      skills: [
        { title: 'Frontend', desc: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: 'Backend', desc: 'FastAPI, Python, PostgreSQL, Node.js' },
        { title: 'DevOps', desc: 'Docker, GitHub, Vercel, Render, Linux' },
        { title: 'AI / ML', desc: 'LLM APIs, prompt design, Telegram integration' },
        { title: 'Архитектура', desc: 'REST, JWT Auth, Clean Architecture' },
        { title: 'Тестирование', desc: 'Jest, Pytest, Swagger, обработка ошибок' },
      ],
    },
    tech: {
      title: { eyebrow: 'Технологии', title: 'Мой', highlight: 'инструментарий' },
      categories: ['Frontend', 'Backend', 'DevOps и инструменты', 'AI и тестирование'],
      intro: 'Технологии, которые я использовал в проектах. Список отражает практический опыт, а не субъективные проценты владения.',
    },
    experience: {
      title: { eyebrow: 'Опыт и образование', title: 'Практика и', highlight: 'образование' },
      contractLabel: 'Контракт', educationLabel: 'Образование', educationRole: 'Бакалавр компьютерных наук', educationPeriod: 'Выпуск · май 2026', educationDesc: 'Образование в области компьютерных наук. Выпускной проект посвящён IDS/IPS для университетских сетей: API, оценка результатов и систематический обзор литературы.' ,
      job: {
        role: 'Web-разработчик (контракт)',
        company: 'Energomax Group',
        period: 'Июнь – август 2026',
        current: 'Контракт',
        desc: 'Разрабатывал и обновлял корпоративный сайт на WordPress. Работал над структурой страниц и представлением контента, адаптируя сайт под задачи компании. Основной фокус — реализация изменений сайта и поддержание целостного представления компании в интернете.',
        responsibilities: ['Разработка и обновление сайта на WordPress', 'Работа со структурой страниц и представлением контента', 'Адаптация разделов сайта под требования компании'],
        stack: ['WordPress', 'LocalWP', 'Git'],
      },
    },
    projects: {
      title: { eyebrow: 'Мои работы', title: 'Избранные', highlight: 'проекты' },
      items: [
        {
          title: 'IDS/IPS - система обнаружения аномалий',
          subtitle: 'Выпускной исследовательский проект',
          desc: 'Финальный академический проект: Intrusion Detection & Prevention System для университетских сетей с FastAPI-бэкендом, REST API и React-интерфейсом. Провёл систематический обзор литературы (Systematic Literature Review) по методологии PRISMA; в итоговый обзор вошли 15 исследований. Нашел исследовательский пробел - адаптивная настройка порогов IPS. Защитил проект устно.',
        },
        {
          title: 'Uztransformator - сайт-каталог завода',
          desc: 'Многоязычный (RU/UZ/EN) сайт-каталог электротехнического завода. React-фронтенд с Supabase (Postgres, Auth и RLS) как production-хранилищем данных, размещён на Vercel. Дополнительный прототип backend на FastAPI + SQLAlchemy демонстрирует разделение маршрутов и сервисов, JWT-аутентификацию и контейнеризацию; он отделён от production-конфигурации Supabase.',
        },
        {
          title: 'E-Commerce + Stripe',
          desc: 'Full-stack e-commerce на Django с интеграцией Stripe, каталогом товаров, корзиной и управлением заказами. Проект контейнеризован через Docker, задеплоен на Render, использует ENV-конфигурацию и CI pipeline. Выполнен как тестовое задание от работодателя.',
        },
        {
          title: 'REST API - Node.js / TypeScript',
          desc: 'REST API с JWT-аутентификацией, Zod-валидацией, Swagger/OpenAPI документацией и полным Jest test suite (unit + integration). Чистая слоистая архитектура. Выполнено как тестовое задание от работодателя.',
        },
        {
          title: 'Wishlist Mobile App',
          desc: 'Мобильное приложение на React Native (Expo) с API на Next.js + Prisma. Railway PostgreSQL, полный auth flow и CRUD для wishlist. Исправил баг связи Prisma (`user` -> `owner`) и отправил проект на GitHub.',
        },
        {
          title: 'Go Task Manager API',
          desc: 'Расширил существующий REST API на Go функцией повторяющихся задач: 5 типов повторения, PostgreSQL-миграции и 4 новых endpoint. Использовал clean architecture. Отладил edge cases с nil/SQL NULL, протестировал через Docker + PowerShell.',
        },
        {
          title: 'OpenClaw AI Gateway + Telegram Bot',
          desc: 'Тестовое задание: настроил OpenClaw Gateway на WSL2 и интеграцию с Telegram-ботом. Разобрал цепочку ошибок авторизации AI-провайдеров (Anthropic credits, Gemini rate limits), переключился на бесплатный tier OpenRouter. Настроил systemd user service.',
        },
      ],
      liveDemo: 'Демо',
    },
    ai: {
      title: { eyebrow: 'AI workflow', title: 'Как я использую', highlight: 'AI-инструменты' },
      approachLabel: 'Подход: ',
      approach: 'AI для меня - усилитель продуктивности, а не замена мышления. Каждый AI-результат я критически проверяю, тестирую вручную и дорабатываю. Ошибки AI исправляю сам и документирую, где AI помог, а где потребовалась ручная корректировка.',
      tools: [
        {
          usage: 'Ежедневно',
          desc: 'Основной AI для сложных рассуждений, архитектурных решений, code review и подробной документации. Использую почти в каждом проекте.',
        },
        {
          usage: 'Ежедневно',
          desc: 'Быстрое прототипирование, генерация boilerplate, поиск подходов и быстрые подсказки по синтаксису во время разработки.',
        },
        {
          usage: 'По задаче',
          desc: 'Мультимодальные рассуждения и работа с длинным контекстом - анализ больших кодовых баз и документации, перепроверка ответов других моделей.',
        },
        {
          usage: 'Постоянно',
          desc: 'Inline-подсказки кода во всех редакторах. Ускоряет повторяющиеся паттерны, тесты и типовые API-интеграции.',
        },
        {
          usage: 'На проект',
          desc: 'AI-агент для кодинга прямо в браузере - для быстрых прототипов и небольших full-stack демо без настройки локального окружения.',
        },
        {
          usage: 'По задаче',
          desc: 'Разбор stack trace и логов ошибок через AI для поиска root cause. Это заметно сокращает время отладки сложных проблем.',
        },
        {
          usage: 'На проект',
          desc: 'Генерация README, API-документации и inline-комментариев. Каждый AI-результат вручную проверяю и улучшаю перед коммитом.',
        },
        {
          usage: 'Всегда',
          desc: 'Структурированные system prompts, tool-calling flows и дизайн multi-turn агентов. Применял в OpenClaw Gateway и Telegram bot проектах.',
        },
      ],
    },
    contact: {
      title: { eyebrow: 'Контакты', title: 'Давайте работать', highlight: 'вместе' },
      intro: 'Открыт к full-time ролям, freelance-проектам и стажировкам. Напишите мне - обычно отвечаю в течение 24 часов.',
      info: {
        email: 'Email',
        telegram: 'Telegram',
        location: 'Локация',
        locationValue: 'Ташкент, Узбекистан',
      },
      fields: {
        name: 'Полное имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
      },
      placeholders: {
        name: 'Асилбек',
        email: 'you@example.com',
        phone: '+998 90 000 0000',
        message: 'Расскажите о проекте или предложении...',
      },
      errors: {
        name: 'Введите имя',
        email: 'Введите email',
        invalidEmail: 'Некорректный email',
        message: 'Введите сообщение',
      },
      submit: {
        idle: 'Отправить сообщение',
        loading: 'Отправка...',
        success: 'Сообщение отправлено!',
        error: 'Ошибка - попробуйте еще раз',
      },
      copy: 'Вы получите копию на свой email.',
    },
    footer: {
      text: 'Разработчик из Ташкента. Веб-проекты, backend-сервисы и практические AI-интеграции на React, Python и FastAPI.',
      navigation: 'Навигация',
      contact: 'Контакты',
      copyright: year => `© ${year} Asilbek. Сделано на React + TailwindCSS.`,
      scrollTop: 'Наверх',
    },
  },
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('portfolio-language')
    return LANGUAGES.includes(saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage: lang => {
      if (LANGUAGES.includes(lang)) setLanguageState(lang)
    },
    t: translations[language],
  }), [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}