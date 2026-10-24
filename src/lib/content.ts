import type { IMyServices, IServiceItem } from '@/lib/types'

/**
 * Temporary copy overrides for text that currently lives in Sanity.
 *
 * Each value below is shown on the site instead of the Sanity value.
 * Once you have pasted the text into sanity.io, delete the matching entry
 * (or set it to `undefined`) and the site will read from Sanity again.
 */

// TODO: update this in sanity.io → Portfolio › roleDescription
export const roleDescription: string | undefined =
  "Senior Front-End Developer with 8+ years of experience building fast, scalable web applications. Currently leading React.js and Next.js development for enterprise clients at Systems Ltd."

export const services = {
  // TODO: update this in sanity.io → My Services › heading
  heading: 'How I can help' as string | undefined,
  // TODO: update this in sanity.io → My Services › subheading
  subheading:
    'From architecture to launch, I deliver front-end solutions that are fast, accessible, maintainable and built to scale with your business.' as
      | string
      | undefined,
  // TODO: update these in sanity.io → My Services › services[] (title + description)
  // Keys are the current Sanity titles; values are the replacement text.
  items: {
    'Responsive Websites': {
      title: 'Responsive Apps & Design Systems',
      description:
        'Mobile-first, WCAG-accessible interfaces built on reusable Shadcn/UI component libraries and design-token driven, multi-brand themes.',
    },
    'ReactJS / NextJS': {
      title: 'React.js & Next.js Development',
      description:
        'Scalable SPAs and server-rendered apps in TypeScript, using SSR, SSG and ISR for speed and search visibility.',
    },
    'Theme Development': {
      title: 'Design Systems & Theming',
      description:
        'Reusable Shadcn/UI component libraries and design-token driven, multi-brand themes that keep products consistent.',
    },
    'REST API': {
      title: 'API Integration & MERN',
      description:
        'REST API design and integration with Node.js, Express and MongoDB to own features end to end.',
    },
    'Google Map JS API': {
      title: 'Maps & Location Features',
      description:
        'Interactive maps, geolocation and custom overlays with the Google Maps JavaScript API and Leaflet.',
    },
  } as Record<string, { title: string; description: string }>,
  // TODO: update this in sanity.io → My Services › services[] (delete "Theme Development"; it is merged into the first service)
  hidden: ['Theme Development'],
  // TODO: update this in sanity.io → My Services › services[] (add as a new service)
  extra: [
    {
      title: 'SEO & AEO Optimization',
      description:
        'Technical SEO, structured data and Core Web Vitals tuning so your product ranks on Google and gets cited by AI search like ChatGPT and Perplexity.',
      iconName: 'AeoSeo',
    },
  ] as { title: string; description: string; iconName?: string | null; iconImage?: string | null }[],
}

export function listedServices(data: IMyServices): IServiceItem[] {
  const current = data.services ?? []
  return [
    ...current.filter((service) => !services.hidden.includes(service.title)),
    ...services.extra.filter((extra) => !current.some((service) => service.title === extra.title)),
  ].map((service) => ({
    ...service,
    ...(services.items[service.title] ?? {}),
  }))
}

export const skills = {
  // TODO: update this in sanity.io → My Skills › sectionTitle
  sectionTitle: 'Skills & expertise' as string | undefined,
  // TODO: update this in sanity.io → My Skills › sectionSubtitle
  sectionSubtitle: 'Technical toolkit' as string | undefined,
}

export const journey = {
  // TODO: update this in sanity.io → Journey › title (and experienceSection.title)
  title: 'Professional experience' as string | undefined,
  // TODO: update this in sanity.io → Journey › subtitle
  subtitle: 'Career' as string | undefined,
  description:
    '8+ years across consultancies and product teams, leading front-end delivery for enterprise, banking and government clients.',
}

export const availability = 'Available for freelance, contract and full-time projects.'

export const recentWorks = {
  // TODO: update this in sanity.io → Recent Works › sectionTitle
  sectionTitle: 'Selected work' as string | undefined,
  // TODO: update this in sanity.io → Recent Works › sectionSubtitle
  sectionSubtitle: 'Portfolio' as string | undefined,
}
