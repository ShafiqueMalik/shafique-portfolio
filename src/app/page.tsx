import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HeroSection from '@/components/sections/HeroSection';
import MySkillsSection from '@/components/sections/MySkillsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SocialIcons from '@/components/SocialIcons';
import { fetchFromSanity } from '@/lib/fetchFromSanity';
import { getPorfolioQuery } from '@/lib/sanityQueries';
import { IPortfolioData } from '@/shared/types/models';

export default async function Home() {
  const portfolioData = await fetchFromSanity<IPortfolioData>(getPorfolioQuery);

  return (
    <div className="">
      <HeroSection portfolioData={portfolioData} />
      <AboutSection portfolioData={portfolioData} />
      <ServicesSection />
      <PortfolioSection />
      <MySkillsSection />
      <ExperienceSection />

      <ContactSection portfolioData={portfolioData} />
      <SocialIcons
        className="hidden lg:flex  fixed left-2 lg:left-8 top-1/2 gap-5 md:gap-8 z-20 -translate-y-1/2 
        [&>*]:shadow-md [&>*]:shadow-white
         "
        rounded
        direction="column"
        iconClassName="text-white"
        portfolioData={portfolioData}
      />
    </div>
  );
}
