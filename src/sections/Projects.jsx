import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'
import { useI18n } from '../i18n'

const PROJECT_META = [
  { index: 1, tags: ['React', 'Supabase', 'PostgreSQL', 'Vercel'], github: 'https://github.com/Asilbek1702/Uztransformator', demo: 'https://uztransformator.vercel.app', kind: 'LIVE PROJECT', featured: true },
  { index: 0, tags: ['Python', 'FastAPI', 'React', 'REST API', 'Isolation Forest'], github: 'https://github.com/Asilbek1702/Graduation-Project/tree/master', demo: null, kind: 'ACADEMIC PROJECT' },
  { index: 2, tags: ['Django', 'Stripe', 'PostgreSQL', 'Docker'], github: 'https://github.com/Asilbek1702/E-Commerce-Stripe', demo: null, kind: 'TEST ASSIGNMENT' },
  { index: 3, tags: ['Node.js', 'TypeScript', 'JWT', 'Zod', 'Jest'], github: 'https://github.com/Asilbek1702/Node.js-test-job', demo: null, kind: 'TEST ASSIGNMENT' },
  { index: 4, tags: ['React Native', 'Expo', 'Next.js', 'Prisma'], github: 'https://github.com/Asilbek1702/Wishlist-for-IOS', demo: null, kind: 'PERSONAL PROJECT' },
  { index: 5, tags: ['Go', 'PostgreSQL', 'Docker', 'REST'], github: 'https://github.com/Asilbek1702/Job_testing', demo: null, kind: 'CODE CONTRIBUTION' },
  { index: 6, tags: ['Python', 'Telegram', 'OpenClaw', 'OpenRouter'], github: 'https://github.com/Asilbek1702', demo: null, kind: 'AI INTEGRATION' },
]

const GALLERY = [
  { src: '/images/projects/home.webp', key: 'home', wide: true },
  { src: '/images/projects/catalog.webp', key: 'catalog' },
  { src: '/images/projects/about-history.webp', key: 'history' },
  { src: '/images/projects/about-quality.webp', key: 'quality' },
  { src: '/images/projects/admin.webp', key: 'admin' },
  { src: '/images/projects/contacts.webp', key: 'contacts' },
  { src: '/images/projects/request-form.webp', key: 'request' },
]

const COPY = {
  en: {
    context: 'Project brief', contextText: 'A multilingual website for an electrical equipment manufacturer. The site presents the company, explains its production background, showcases transformer products and gives visitors a way to send an enquiry.',
    role: 'My role', roleText: 'Solo developer responsible for the website implementation. I worked on the React interface, product presentation, page structure, multilingual content and enquiry flows.',
    implementation: 'Implementation', implementationText: 'The deployed website uses React on the frontend and Supabase for the production data layer, authentication and Row Level Security policies. The frontend is deployed on Vercel.',
    backend: 'Backend exploration', backendText: 'I also built a separate FastAPI + SQLAlchemy prototype to explore a Python backend structure, including routing, JWT authentication and containerization. This prototype is not the backend currently serving the live website.',
    delivered: 'What the website includes', deliverables: ['Multilingual company presentation (RU / UZ / EN)', 'Transformer product catalog and product information', 'Company history and quality / guarantee content', 'Contact details and customer enquiry form', 'Administrative interface for managing site content'],
    architecture: 'Technical architecture', frontend: 'Frontend', data: 'Production data', hosting: 'Deployment', prototype: 'Separate prototype',
    gallery: 'Inside the product', galleryNote: 'Actual screenshots captured from the implemented website. Select an image to inspect it.',
    contribution: 'Scope and contribution', limitations: 'Architecture note', limitationsText: 'The live site uses Supabase as its production data and authentication layer. The FastAPI implementation is a separate prototype and should not be interpreted as the live production backend.',
    openImage: 'Open screenshot', previous: 'Previous screenshot', next: 'Next screenshot', close: 'Close image preview', live: 'Visit live website', source: 'View source code',
    other: 'Other work', otherNote: 'Academic work, technical assignments and smaller implementations are listed separately from the live product above.'
  },
  ru: {
    context: 'Задача проекта', contextText: 'Многоязычный сайт для производителя электротехнического оборудования. Сайт представляет компанию, рассказывает о производстве, показывает каталог трансформаторов и позволяет посетителям отправлять заявки.',
    role: 'Моя роль', roleText: 'Самостоятельная разработка сайта. Я занимался React-интерфейсом, представлением продукции, структурой страниц, мультиязычным контентом и сценариями отправки заявок.',
    implementation: 'Реализация', implementationText: 'В опубликованной версии используется React на frontend и Supabase для production-данных, аутентификации и политик Row Level Security. Frontend размещён на Vercel.',
    backend: 'Изучение backend-архитектуры', backendText: 'Дополнительно я создал отдельный прототип на FastAPI + SQLAlchemy, чтобы проработать структуру Python backend: маршрутизацию, JWT-аутентификацию и контейнеризацию. Этот прототип не обслуживает текущую опубликованную версию сайта.',
    delivered: 'Что реализовано', deliverables: ['Многоязычное представление компании (RU / UZ / EN)', 'Каталог трансформаторов и страницы продукции', 'История компании, информация о качестве и гарантиях', 'Контактная информация и форма заявки', 'Административный интерфейс для управления содержимым сайта'],
    architecture: 'Техническая архитектура', frontend: 'Frontend', data: 'Production-данные', hosting: 'Размещение', prototype: 'Отдельный прототип',
    gallery: 'Внутри проекта', galleryNote: 'Настоящие скриншоты реализованного сайта. Нажми на изображение, чтобы рассмотреть его подробнее.',
    contribution: 'Мой вклад и границы реализации', limitations: 'Важное уточнение по архитектуре', limitationsText: 'Опубликованный сайт использует Supabase как production-слой данных и аутентификации. Реализация на FastAPI — отдельный прототип, а не backend текущего production-сайта.',
    openImage: 'Открыть скриншот', previous: 'Предыдущий скриншот', next: 'Следующий скриншот', close: 'Закрыть просмотр', live: 'Открыть сайт', source: 'Исходный код',
    other: 'Другие работы', otherNote: 'Учебные проекты, тестовые задания и небольшие реализации отделены от опубликованного продукта.'
  }
}

const GALLERY_LABELS = {
  en: { home: 'Homepage', catalog: 'Product catalog', history: 'Company history', quality: 'Quality and guarantees', admin: 'Admin interface', contacts: 'Contacts page', request: 'Product enquiry form' },
  ru: { home: 'Главная страница', catalog: 'Каталог продукции', history: 'История компании', quality: 'Качество и гарантии', admin: 'Панель администратора', contacts: 'Контакты', request: 'Форма заявки на продукцию' }
}

export default function Projects() {
  const { t, language } = useI18n()
  const copy = COPY[language] || COPY.en
  const labels = GALLERY_LABELS[language] || GALLERY_LABELS.en
  const projects = PROJECT_META.map(meta => ({ ...meta, ...t.projects.items[meta.index] }))
  const featured = projects[0]
  const rest = projects.slice(1)
  const [activeImage, setActiveImage] = useState(-1)

  useEffect(() => {
    if (activeImage < 0) return undefined
    const onKeyDown = event => {
      if (event.key === 'Escape') setActiveImage(-1)
      if (event.key === 'ArrowRight') setActiveImage(index => (index + 1) % GALLERY.length)
      if (event.key === 'ArrowLeft') setActiveImage(index => (index - 1 + GALLERY.length) % GALLERY.length)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeImage])

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle {...t.projects.title} />
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <p className="text-dim text-sm max-w-xl leading-7">
            {t.projects.intro || (language === 'ru' ? 'Реальные проекты, учебные разработки и технические задания. Для каждого указан его контекст.' : 'A selection of shipped work, academic research and technical assignments. Each entry identifies its context clearly.')}
          </p>
          <span className="font-mono text-[10px] text-muted">SELECTED WORK / 2024—2026</span>
        </div>

        <AnimatedCard className="mb-8">
          <article className="project-featured project-case-study">
            <div className="project-featured-header">
              <div className="max-w-4xl">
                <p className="section-kicker mb-3">{language === 'ru' ? 'ОПУБЛИКОВАННЫЙ ПРОЕКТ' : 'LIVE PRODUCT'} · 01 / 07</p>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{featured.title}</h3>
                <p className="text-sm sm:text-base text-dim leading-7 max-w-3xl">{featured.desc}</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a href={featured.demo} target="_blank" rel="noreferrer" className="btn-primary">{copy.live}<ExternalLink className="w-4 h-4" /></a>
                <a href={featured.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github className="w-4 h-4" />GitHub</a>
              </div>
            </div>

            <div className="project-facts">
              <div><span>{language === 'ru' ? 'ФОРМАТ' : 'TYPE'}</span><strong>{language === 'ru' ? 'Реальный сайт компании' : 'Company website'}</strong></div>
              <div><span>{language === 'ru' ? 'ЯЗЫКИ' : 'LANGUAGES'}</span><strong>RU / UZ / EN</strong></div>
              <div><span>{language === 'ru' ? 'МОЯ РОЛЬ' : 'MY ROLE'}</span><strong>{language === 'ru' ? 'Самостоятельная разработка' : 'Solo developer'}</strong></div>
            </div>

            <div className="case-study-intro">
              <div><p className="section-kicker mb-2">{copy.context}</p><p>{copy.contextText}</p></div>
              <div><p className="section-kicker mb-2">{copy.role}</p><p>{copy.roleText}</p></div>
            </div>

            <div className="case-study-architecture">
              <div className="case-study-section-heading">
                <div><p className="section-kicker mb-2">{copy.architecture}</p><h4>{language === 'ru' ? 'Как устроен проект' : 'How the project is put together'}</h4></div>
              </div>
              <div className="architecture-grid">
                <div><span>01</span><small>{copy.frontend}</small><strong>React</strong><p>{language === 'ru' ? 'Страницы, каталог, формы и пользовательский интерфейс.' : 'Pages, product catalog, forms and user interface.'}</p></div>
                <div><span>02</span><small>{copy.data}</small><strong>Supabase</strong><p>PostgreSQL · Auth · Row Level Security</p></div>
                <div><span>03</span><small>{copy.hosting}</small><strong>Vercel</strong><p>{language === 'ru' ? 'Размещение frontend-приложения.' : 'Frontend application deployment.'}</p></div>
                <div className="architecture-prototype"><span>04</span><small>{copy.prototype}</small><strong>FastAPI + SQLAlchemy</strong><p>{language === 'ru' ? 'Отдельный backend-прототип, не production-сервис сайта.' : 'A separate backend prototype, not the live production service.'}</p></div>
              </div>
            </div>

            <div className="case-study-deliverables">
              <div><p className="section-kicker mb-2">{copy.delivered}</p><ul>{copy.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div className="case-study-note"><p className="section-kicker mb-2">{copy.limitations}</p><p>{copy.limitationsText}</p></div>
            </div>

            <div className="project-gallery-heading">
              <div><p className="section-kicker mb-1">{copy.gallery}</p><p className="text-xs text-muted">{copy.galleryNote}</p></div>
              <span className="font-mono text-[10px] text-muted">07 SCREENS</span>
            </div>
            <div className="project-gallery project-gallery-real">
              {GALLERY.map((image, index) => (
                <button key={image.key} type="button" onClick={() => setActiveImage(index)} className={`project-shot ${image.wide ? 'project-shot-wide' : ''}`} aria-label={`${copy.openImage}: ${labels[image.key]}`}>
                  <img src={image.src} alt={`${featured.title}: ${labels[image.key]}`} loading={index === 0 ? 'eager' : 'lazy'} />
                  <span className="project-shot-caption"><span>{String(index + 1).padStart(2, '0')}</span><strong>{labels[image.key]}</strong><ExternalLink className="w-3.5 h-3.5" /></span>
                </button>
              ))}
            </div>

            <div className="project-contribution">
              <div><p className="section-kicker mb-2">{copy.implementation}</p><p className="text-sm text-dim leading-7 max-w-4xl">{copy.implementationText}</p></div>
              <div><p className="section-kicker mb-2">{copy.backend}</p><p className="text-sm text-dim leading-7 max-w-4xl">{copy.backendText}</p></div>
              <div className="flex flex-wrap gap-2 pt-1">{featured.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        </AnimatedCard>

        <article className="ids-case-study project-list-card mb-8" aria-labelledby="ids-case-title">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <p className="section-kicker mb-3">{language === 'ru' ? 'ВЫПУСКНОЙ АКАДЕМИЧЕСКИЙ ПРОЕКТ' : 'GRADUATION PROJECT'} · 02 / 07</p>
              <h3 id="ids-case-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{projects[1].title}</h3>
              <p className="text-sm text-dim leading-7">{projects[1].desc}</p>
            </div>
            <a href={projects[1].github} target="_blank" rel="noreferrer" className="project-source-link">{copy.source}<ArrowUpRight className="w-4 h-4" /></a>
          </div>
          <div className="ids-metrics" aria-label={language === 'ru' ? 'Результаты систематического обзора' : 'Systematic literature review counts'}>
            <div><strong>398</strong><span>{language === 'ru' ? 'найдено записей' : 'records identified'}</span></div>
            <div><strong>42</strong><span>{language === 'ru' ? 'дубликата' : 'duplicates'}</span></div>
            <div><strong>150</strong><span>{language === 'ru' ? 'исключено автоматически' : 'automation exclusions'}</span></div>
            <div><strong>15</strong><span>{language === 'ru' ? 'исследований включено' : 'studies included'}</span></div>
          </div>
          <div className="ids-details-grid">
            <section>
              <h4>{language === 'ru' ? 'Исследовательская часть' : 'Research work'}</h4>
              <p>{language === 'ru' ? 'Проведён систематический обзор литературы по методологии PRISMA. На основе отбора публикаций сформулирован исследовательский пробел: адаптивная настройка порогов IPS.' : 'A Systematic Literature Review followed the PRISMA methodology. The review helped identify a research gap around adaptive IPS threshold tuning.'}</p>
            </section>
            <section>
              <h4>{language === 'ru' ? 'Мой вклад' : 'My contribution'}</h4>
              <p>{language === 'ru' ? 'Evaluation and Metrics Analyst: анализ метрик и результатов оценки. Research and SLR Analyst: поиск, отбор и анализ научных публикаций, подготовка PRISMA-обзора.' : 'Evaluation and Metrics Analyst: analysis of evaluation metrics and results. Research and SLR Analyst: literature search, screening and synthesis for the PRISMA review.'}</p>
            </section>
            <section>
              <h4>{language === 'ru' ? 'Техническая часть проекта' : 'Technical implementation'}</h4>
              <p>{language === 'ru' ? 'Командная система обнаружения и предотвращения вторжений для университетской сети. Использовались Isolation Forest, FastAPI, REST API и React-интерфейс.' : 'A team-built intrusion detection and prevention system for a university network, using Isolation Forest, FastAPI, REST API endpoints and a React interface.'}</p>
            </section>
            <section>
              <h4>{language === 'ru' ? 'API и сценарии управления' : 'API and control flows'}</h4>
              <p className="ids-endpoints" aria-label={language === 'ru' ? 'Список API эндпоинтов' : 'API endpoint list'}>/api/events · /api/stats · /api/ip · /api/blocked · /api/unblock · /api/load-history · /api/risk-trend</p>
              <p>{language === 'ru' ? 'Эндпоинты охватывали события, статистику, IP-адреса, блокировки, историю нагрузки и динамику риска.' : 'Endpoints covered events, statistics, IP information, blocked addresses, load history and risk trends.'}</p>
            </section>
          </div>
          <p className="ids-scope-note">{language === 'ru' ? 'Примечание: это командный выпускной проект. Указаны мои исследовательские и аналитические обязанности; не все компоненты системы были разработаны мной единолично.' : 'Scope note: this was a team graduation project. The research and evaluation responsibilities above describe my contribution; I did not build every system component alone.'}</p>
          <div className="flex flex-wrap gap-2 mt-5">{PROJECT_META[0].tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </article>

        <div className="projects-list-heading"><div><h3 className="text-xl sm:text-2xl font-bold tracking-tight">{copy.other}</h3><p className="text-sm text-dim mt-2">{copy.otherNote}</p></div><span className="font-mono text-[10px] text-muted">03 — 07</span></div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <AnimatedCard key={project.title} delay={i * .04}>
              <article className="project-list-card h-full flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-5"><span className="font-mono text-xs text-muted">0{i + 2}</span><span className="section-kicker">{project.kind}</span></div>
                <h4 className="font-bold text-lg mb-3">{project.title}</h4>
                <p className="text-sm text-dim leading-7 mb-5 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-source-link">{copy.source}<ArrowUpRight className="w-4 h-4" /></a>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {activeImage >= 0 && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={labels[GALLERY[activeImage].key]} onMouseDown={event => { if (event.target === event.currentTarget) setActiveImage(-1) }}>
          <button type="button" className="lightbox-close" onClick={() => setActiveImage(-1)} aria-label={copy.close}><X /></button>
          <button type="button" className="lightbox-arrow lightbox-prev" onClick={() => setActiveImage(index => (index - 1 + GALLERY.length) % GALLERY.length)} aria-label={copy.previous}><ChevronLeft /></button>
          <figure className="lightbox-figure"><img src={GALLERY[activeImage].src} alt={`${featured.title}: ${labels[GALLERY[activeImage].key]}`} /><figcaption><span>{String(activeImage + 1).padStart(2, '0')} / 07</span>{labels[GALLERY[activeImage].key]}</figcaption></figure>
          <button type="button" className="lightbox-arrow lightbox-next" onClick={() => setActiveImage(index => (index + 1) % GALLERY.length)} aria-label={copy.next}><ChevronRight /></button>
        </div>
      )}
    </section>
  )
}
