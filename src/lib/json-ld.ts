import { availability, journey, listedServices, recentWorks, roleDescription, withFrontend } from '@/lib/content'
import { siteOrigin } from '@/lib/site'
import { brandsFor, certifications, coreCompetencies, headline, languages, skillGroups } from '@/lib/cv'
import type { IJourneyData, IMyServices, IMySkills, IPortfolioData, IRecentWorks, IWorkItem } from '@/lib/types'

type Json = Record<string, unknown>

const MONTHS: Record<string, string> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
}

function omitEmpty(value: Json): Json {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry == null || entry === '') return false
      if (Array.isArray(entry) && entry.length === 0) return false
      return true
    }),
  )
}

function unique(values: string[]) {
  const seen = new Set<string>()
  return values.filter((value) => {
    const key = value.trim().toLowerCase()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function titleCase(name: string) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function credentialDate(date: string) {
  const match = date.trim().match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (!match) return undefined
  const month = MONTHS[match[1].slice(0, 3).toLowerCase()]
  return month ? `${match[2]}-${month}` : undefined
}

function projectHref(work: IWorkItem) {
  const href = work.links?.live || work.links?.github || work.links?.caseStudy
  return href && /^https?:\/\//i.test(href) ? href : undefined
}

export async function portfolioJsonLd(input: {
  portfolio: IPortfolioData
  services: IMyServices
  works: IRecentWorks
  skills: IMySkills
  journey: IJourneyData
}) {
  const origin = siteOrigin()
  const pageUrl = `${origin}/`
  const personId = `${origin}/#person`
  const name = `${input.portfolio.firstName} ${input.portfolio.lastName}`.trim()
  const portrait = `${origin}/portraits/hero-portrait.webp`
  const description = [
    roleDescription ?? input.portfolio.roleDescription,
    'Open to work and open to relocation from Lahore, Punjab, Pakistan.',
    availability,
  ]
    .filter(Boolean)
    .join(' ')

  const knowsAbout = unique([
    ...coreCompetencies,
    ...skillGroups.flatMap((group) => [...group.primary, ...group.supporting]),
    ...(input.skills.skillsGroups ?? []).flatMap((group) => (group.skills ?? []).map((skill) => skill.name.trim())),
  ])

  const jobs = input.journey.experienceSection?.jobs ?? []
  const currentJob = jobs.find((job) => job.endDate?.trim().toLowerCase() === 'present')
  const currentTitle = withFrontend(currentJob?.positions?.at(-1) || 'Senior Frontend Engineer')
  const seenBrands = new Set<string>()
  const clients = jobs.flatMap((job) => brandsFor(job.company)).filter((brand) => {
    if (seenBrands.has(brand.name)) return false
    seenBrands.add(brand.name)
    return true
  })

  const services = listedServices(input.services)
  const works = input.works.works ?? []

  const graph: Json[] = [
    omitEmpty({
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: pageUrl,
      name: `${name} — Senior Frontend Engineer`,
      description,
      inLanguage: 'en',
      publisher: { '@id': personId },
    }),
    omitEmpty({
      '@type': 'ProfilePage',
      '@id': `${origin}/#profile`,
      url: pageUrl,
      name: `${name} — Senior Frontend Engineer`,
      description,
      inLanguage: 'en',
      isPartOf: { '@id': `${origin}/#website` },
      mainEntity: { '@id': personId },
      about: { '@id': personId },
      primaryImageOfPage: { '@id': `${origin}/#portrait` },
    }),
    omitEmpty({
      '@type': 'ImageObject',
      '@id': `${origin}/#portrait`,
      url: portrait,
      contentUrl: portrait,
      caption: `Portrait of ${name}`,
    }),
    omitEmpty({
      '@type': 'Person',
      '@id': personId,
      name,
      givenName: input.portfolio.firstName,
      familyName: input.portfolio.lastName,
      jobTitle: headline,
      description,
      url: pageUrl,
      image: { '@id': `${origin}/#portrait` },
      email: input.portfolio.email,
      telephone: input.portfolio.phoneNumber,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Lahore, Punjab, Pakistan',
      },
      knowsLanguage: languages.map((language) => language.name),
      knowsAbout,
      sameAs: (input.portfolio.socialLinks ?? [])
        .filter((link) => link.platform !== 'location')
        .map((link) => link.url)
        .filter((url) => /^https?:\/\//i.test(url)),
      hasOccupation: omitEmpty({
        '@type': 'Occupation',
        name: currentTitle,
        description: journey.description,
        skills: coreCompetencies.join(', '),
        occupationLocation: {
          '@type': 'City',
          name: 'Lahore',
          containedInPlace: { '@type': 'Country', name: 'Pakistan' },
        },
      }),
      worksFor: currentJob
        ? { '@type': 'Organization', name: currentJob.company }
        : undefined,
      hasCredential: [
        ...certifications.map((cert) =>
          omitEmpty({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certificate',
            name: cert.name,
            dateCreated: credentialDate(cert.date),
            recognizedBy: { '@type': 'Organization', name: cert.issuer },
          }),
        ),
        ...(input.journey.educationSection?.degrees ?? []).map((degree) =>
          omitEmpty({
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: degree.degree,
            description: `${degree.field} (${degree.startYear}–${degree.endYear})`,
          }),
        ),
      ],
      contactPoint: omitEmpty({
        '@type': 'ContactPoint',
        contactType: 'project inquiries',
        email: input.portfolio.email,
        telephone: input.portfolio.phoneNumber,
        url: `${pageUrl}#contact`,
        availableLanguage: languages.map((language) => language.name),
      }),
      hasOfferCatalog: { '@id': `${origin}/#services` },
      subjectOf: { '@id': `${origin}/cv.pdf#document` },
    }),
    omitEmpty({
      '@type': 'DigitalDocument',
      '@id': `${origin}/cv.pdf#document`,
      name: `${name} curriculum vitae`,
      encodingFormat: 'application/pdf',
      url: `${origin}/cv.pdf`,
      about: { '@id': personId },
    }),
    omitEmpty({
      '@type': 'OfferCatalog',
      '@id': `${origin}/#services`,
      name: 'How I can help',
      description: availability,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          serviceType: 'Frontend development',
          provider: { '@id': personId },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${pageUrl}#contact`,
          },
        },
      })),
    }),
  ]

  if (works.length) {
    graph.push(
      omitEmpty({
        '@type': 'ItemList',
        '@id': `${origin}/#work`,
        name: recentWorks.sectionTitle ?? 'Selected work',
        itemListElement: works.map((work, index) =>
          omitEmpty({
            '@type': 'ListItem',
            position: index + 1,
            item: omitEmpty({
              '@type': 'CreativeWork',
              name: titleCase(work.name),
              description: work.shortDescription || work.categories?.join(', '),
              url: projectHref(work),
              image: work.thumbnail ? `${work.thumbnail}?w=1200&auto=format` : undefined,
              keywords: work.technologies?.join(', '),
              creator: { '@id': personId },
            }),
          }),
        ),
      }),
    )
  }

  if (clients.length) {
    graph.push(
      omitEmpty({
        '@type': 'ItemList',
        '@id': `${origin}/#clients`,
        name: 'Worked on',
        itemListElement: clients.map((brand, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Organization',
            name: brand.name,
            url: brand.href,
          },
        })),
      }),
    )
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
