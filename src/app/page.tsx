import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import MySkillsSection from "@/components/sections/MySkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MySkillsSection />
      <ExperienceSection />

      <ContactSection />
      <SocialIcons
        className="hidden lg:flex  fixed left-2 lg:left-8 top-1/2 gap-5 md:gap-8 z-20 -translate-y-1/2 
        [&>*]:shadow-md [&>*]:shadow-white
         "
        rounded
        direction="column"
        iconClassName="text-white"
      />
    </div>
  );
}
