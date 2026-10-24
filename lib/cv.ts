export const headline = 'Senior Front-End Developer · React.js & Next.js Specialist'

export const location = 'Lahore, Punjab, Pakistan · Open to relocation'

export const summary =
  'Senior Front-End Developer with 8+ years building scalable, mobile-first, unit-tested and internationalized SPAs with TypeScript, React.js and Next.js — across enterprise e-commerce, SaaS, banking, fintech and national government platforms.'

export const coreCompetencies = [
  'Front-End Architecture',
  'React.js & Next.js (SSR, SSG, ISR)',
  'TypeScript',
  'MERN Stack',
  'E-commerce & SaaS',
  'SEO, AEO & AI Search',
  'Design Systems & Theming',
  'Performance & Core Web Vitals',
  'Accessibility (WCAG)',
  'Unit Testing',
  'Internationalization (i18n)',
  'AI-Assisted Development',
  'Banking & FinTech',
  'Team Leadership & Mentoring',
]

export type SkillGroup = {
  title: string
  summary: string
  primary: string[]
  supporting: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    summary: 'Production SPAs and server-rendered apps, mobile-first from day one.',
    primary: ['TypeScript', 'React.js', 'Next.js', 'JavaScript (ES6+)'],
    supporting: ['HTML5', 'CSS3', 'Sass', 'jQuery', 'SPA Architecture', 'Mobile-First Responsive Design'],
  },
  {
    title: 'UI & State',
    summary: 'Reusable component libraries and predictable client and server state.',
    primary: ['Tailwind CSS', 'Shadcn/UI', 'Zustand', 'Redux Toolkit'],
    supporting: ['TanStack Query', 'Material UI', 'Bootstrap', 'Design Tokens'],
  },
  {
    title: 'Testing & i18n',
    summary: 'Unit-tested, multi-language interfaces that ship with confidence.',
    primary: ['Jest', 'React Testing Library', 'next-intl'],
    supporting: ['react-i18next', 'Unit Testing', 'Internationalization (i18n)'],
  },
  {
    title: 'SEO, AEO & AI Search',
    summary: 'Visibility in Google and AI answer engines like ChatGPT, Gemini and Perplexity.',
    primary: ['Technical SEO', 'BrightEdge', 'Gumshoe'],
    supporting: ['Schema.org', 'Google Search Console', 'Lighthouse', 'Core Web Vitals'],
  },
  {
    title: 'MERN & Back-End',
    summary: 'Enough back-end depth to own features end to end.',
    primary: ['Node.js', 'Express.js', 'MongoDB'],
    supporting: ['Mongoose', 'REST API Design', 'JWT', 'ASP.NET', 'SQL Server'],
  },
  {
    title: 'AI-Assisted Development',
    summary: 'Faster delivery, refactoring, testing and code review.',
    primary: ['Cursor', 'Claude Code', 'GitHub Copilot'],
    supporting: ['Prompt Engineering'],
  },
  {
    title: 'Integrations',
    summary: 'Banking platforms, maps, payments and headless content.',
    primary: ['Temenos Kony Visualizer', 'Sanity.io', 'Stripe'],
    supporting: ['Google Maps API', 'Leaflet'],
  },
  {
    title: 'Tools & Process',
    summary: 'Clean Git workflows, CI/CD and Agile delivery.',
    primary: ['Git', 'CI/CD', 'Vercel', 'Vite'],
    supporting: ['GitHub', 'GitLab', 'Webpack', 'Jira', 'Azure DevOps', 'Agile / Scrum'],
  },
]

export const jobHighlights: Record<string, string[]> = {
  systems: [
    'Lead front-end for enterprise clients and mentor a team of 5 developers.',
    'Architected Shadcn/UI component libraries that standardize UI across projects.',
  ],
  royal: [
    'Cut page load time by 50% with code splitting, lazy loading and bundle reduction.',
    'Built multi-brand themes with design tokens and Redux Toolkit state.',
  ],
  phenologix: [
    'Built mobile-first SPAs with React.js, REST APIs, Google Maps and Leaflet.',
    'Guided junior developers and gathered requirements directly with clients.',
  ],
  text: ['Built web applications with ASP.NET Web Forms, SQL Server and jQuery.'],
}

export function highlightsFor(company: string) {
  const key = Object.keys(jobHighlights).find((k) => company.toLowerCase().includes(k))
  return key ? jobHighlights[key] : []
}

// TODO: update this in sanity.io → add a "clients" list to Portfolio if you want to manage these from the CMS
export const notableClients = [
  { name: 'Coach', sector: 'Global e-commerce', detail: 'Tapestry, Inc.', href: 'https://www.coach.com' },
  { name: 'Kate Spade', sector: 'Global e-commerce', detail: 'Tapestry, Inc.', href: 'https://www.katespade.com' },
  { name: 'iPay', sector: 'FinTech · Payments', detail: 'Qatar', href: 'https://ipay.com.qa' },
  { name: 'Pakistan Single Window', sector: 'National trade platform', detail: 'Government', href: 'https://www.psw.gov.pk' },
] as const

export const certifications = [
  { name: 'Node.js, Express, MongoDB & More: The Complete Bootcamp', issuer: 'Udemy', date: 'Apr 2026' },
  { name: 'AI with GitHub Copilot for JavaScript and React Developers', issuer: 'Udemy', date: 'Jan 2026' },
  { name: 'Programming with JavaScript', issuer: 'Meta · Coursera', date: 'Jan 2023' },
  { name: 'Introduction to Front-End Development', issuer: 'Meta · Coursera', date: 'Dec 2022' },
]

export const languages = [
  { name: 'English', level: 'Professional working' },
  { name: 'Urdu', level: 'Native / bilingual' },
]
