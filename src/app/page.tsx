import { SiteHeader } from '@/components/shared/SiteHeader'
import { Hero } from '@/components/portfolio/Hero'
import { Services } from '@/components/portfolio/Services'
import { Work } from '@/components/portfolio/Work'
import { Skills } from '@/components/portfolio/Skills'
import { Experience } from '@/components/portfolio/Experience'
import { Contact } from '@/components/portfolio/Contact'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { fetchFromSanity } from '@/lib/sanity'
import {
  getJourneyQuery,
  getMySkillsQuery,
  getPortfolioQuery,
  getRecentWorksQuery,
  getServicesQuery,
} from '@/lib/sanity-queries'
import { jsonLdScript, portfolioJsonLd } from '@/lib/json-ld'
import type { IJourneyData, IMyServices, IMySkills, IPortfolioData, IRecentWorks } from '@/lib/types'

export const revalidate = 60

export default async function Page() {
  const [portfolio, services, works, skills, journey] = await Promise.all([
    fetchFromSanity<IPortfolioData>(getPortfolioQuery),
    fetchFromSanity<IMyServices>(getServicesQuery),
    fetchFromSanity<IRecentWorks>(getRecentWorksQuery),
    fetchFromSanity<IMySkills>(getMySkillsQuery),
    fetchFromSanity<IJourneyData>(getJourneyQuery),
  ])

  const jsonLd = await portfolioJsonLd({ portfolio, services, works, skills, journey })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
      <SiteHeader portfolio={portfolio} />
      <main>
        <Hero portfolio={portfolio} />
        <Services data={services} />
        <Work data={works} />
        <Skills data={skills} />
        <Experience data={journey} />
        <Contact portfolio={portfolio} />
      </main>
      <SiteFooter portfolio={portfolio} />
    </>
  )
}
