import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LANGUAGES = ['en', 'ru']

const translations = {
  en: {
    nav: {
      links: [
        { name: 'About', href: '#about' },
        { name: 'Stack', href: '#tech' },
        { name: 'Projects', href: '#projects' },
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
      role: 'Full-Stack Developer',
      text: 'Building web applications with React, FastAPI, and AI integrations. CS student at Central Asian University, Tashkent.',
      viewWork: 'View my work',
      contact: 'Get in touch',
      scroll: 'Scroll',
      scrollLabel: 'Scroll down',
    },
    about: {
      title: { eyebrow: 'About me', title: 'Building digital', highlight: 'experiences' },
      bio: [
        "I'm a full-stack developer and CS student at Central Asian University (Tashkent), focused on the full delivery cycle: React frontends, containerized backends, and real deployments.",
        "Over the past year I've completed multiple employer-assigned technical evaluations - a Django + Stripe e-commerce app, a Node.js/TypeScript REST API with full test coverage, and a Go task management service - all with Docker, real deployments, and full README documentation.",
        'Currently integrating LLM APIs into real projects and using AI tooling daily to ship faster.',
      ],
      stats: [
        { n: '1+', label: 'Year coding' },
        { n: '8+', label: 'Projects built' },
        { n: '10+', label: 'Technologies' },
        { n: 'CAU', label: 'University' },
      ],
      skills: [
        { title: 'Frontend', desc: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: 'Backend', desc: 'FastAPI, Python, PostgreSQL, Node.js' },
        { title: 'DevOps', desc: 'Docker, CI/CD, Render, Vercel, AWS' },
        { title: 'AI / ML', desc: 'OpenAI API, Anthropic, LangChain' },
        { title: 'Architecture', desc: 'REST, JWT Auth, Clean Architecture' },
        { title: 'Testing', desc: 'Jest, Pytest, Swagger, Error handling' },
      ],
    },
    tech: {
      title: { eyebrow: 'Tech Stack', title: 'My', highlight: 'toolkit' },
      categories: ['Frontend', 'Backend', 'DevOps & Tools', 'AI & Testing'],
    },
    projects: {
      title: { eyebrow: 'My work', title: 'Featured', highlight: 'projects' },
      items: [
        {
          title: 'IDS/IPS - Anomaly Detection System',
          subtitle: 'Graduation Research Project',
          desc: 'Final academic project: Intrusion Detection & Prevention System for university networks with a Fast API backend, REST API endpoints, and React interface. Conducted full Systematic Literature Review (PRISMA methodology, 15+ peer-reviewed sources). Identified a novel research gap - adaptive IPS threshold tuning. Presented at oral defense.',
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
          usage: 'Constant',
          desc: 'Inline code completion across all editors. Accelerates repetitive patterns, test cases, and routine API integrations.',
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
      text: 'Full-Stack Developer based in Tashkent. Building production-ready web apps with React, FastAPI, Docker, and AI integrations.',
      navigation: 'Navigation',
      contact: 'Contact',
      copyright: year => `© ${year} Asilbek. Built with React + TailwindCSS.`,
      scrollTop: 'Scroll to top',
    },
  },
  ru: {
    nav: {
      links: [
        { name: 'Обо мне', href: '#about' },
        { name: 'Стек', href: '#tech' },
        { name: 'Проекты', href: '#projects' },
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
      role: 'Full-Stack разработчик',
      text: 'Создаю веб-приложения на React, FastAPI и с AI-интеграциями. Студент Computer Science в Central Asian University, Ташкент.',
      viewWork: 'Смотреть проекты',
      contact: 'Связаться',
      scroll: 'Вниз',
      scrollLabel: 'Прокрутить вниз',
    },
    about: {
      title: { eyebrow: 'Обо мне', title: 'Создаю цифровые', highlight: 'продукты' },
      bio: [
        'Я full-stack разработчик и студент Computer Science в Central Asian University (Ташкент). Фокусируюсь на полном цикле разработки: React-фронтенды, контейнеризованные бэкенды и реальные деплои.',
        'За последний год я выполнил несколько технических заданий от работодателей: e-commerce на Django + Stripe, REST API на Node.js/TypeScript с полным покрытием тестами и сервис управления задачами на Go. Все проекты сделаны с Docker, деплоем и подробной README-документацией.',
        'Сейчас интегрирую LLM API в реальные проекты и ежедневно использую AI-инструменты, чтобы быстрее доводить задачи до результата.',
      ],
      stats: [
        { n: '1+', label: 'год в коде' },
        { n: '8+', label: 'проектов' },
        { n: '10+', label: 'технологий' },
        { n: 'CAU', label: 'университет' },
      ],
      skills: [
        { title: 'Frontend', desc: 'React, Next.js, TypeScript, TailwindCSS' },
        { title: 'Backend', desc: 'FastAPI, Python, PostgreSQL, Node.js' },
        { title: 'DevOps', desc: 'Docker, CI/CD, Render, Vercel, AWS' },
        { title: 'AI / ML', desc: 'OpenAI API, Anthropic, LangChain' },
        { title: 'Архитектура', desc: 'REST, JWT Auth, Clean Architecture' },
        { title: 'Тестирование', desc: 'Jest, Pytest, Swagger, обработка ошибок' },
      ],
    },
    tech: {
      title: { eyebrow: 'Технологии', title: 'Мой', highlight: 'инструментарий' },
      categories: ['Frontend', 'Backend', 'DevOps и инструменты', 'AI и тестирование'],
    },
    projects: {
      title: { eyebrow: 'Мои работы', title: 'Избранные', highlight: 'проекты' },
      items: [
        {
          title: 'IDS/IPS - система обнаружения аномалий',
          subtitle: 'Выпускной исследовательский проект',
          desc: 'Финальный академический проект: Intrusion Detection & Prevention System для университетских сетей с FastAPI-бэкендом, REST API и React-интерфейсом. Провел Systematic Literature Review по методологии PRISMA на 15+ рецензируемых источниках. Нашел исследовательский пробел - адаптивная настройка порогов IPS. Защитил проект устно.',
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
          usage: 'Постоянно',
          desc: 'Inline-подсказки кода во всех редакторах. Ускоряет повторяющиеся паттерны, тесты и типовые API-интеграции.',
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
      text: 'Full-Stack разработчик из Ташкента. Создаю production-ready веб-приложения на React, FastAPI, Docker и с AI-интеграциями.',
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
