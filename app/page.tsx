import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { Clients } from '@/components/portfolio/clients'
import { Services } from '@/components/portfolio/services'
import { Work } from '@/components/portfolio/work'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { fetchFromSanity } from '@/lib/sanity'
import {
  getJourneyQuery,
  getMySkillsQuery,
  getPortfolioQuery,
  getRecentWorksQuery,
  getServicesQuery,
} from '@/lib/sanity-queries'
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

  return (
    <>
      <SiteHeader portfolio={portfolio} />
      <main>
        <Hero portfolio={portfolio} />
        <Clients />
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
