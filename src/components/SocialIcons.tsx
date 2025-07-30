import { socialData, socialIcons } from '@/data/appData';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Flex from './layout/Flex';
import { fetchSocialsData } from '@/lib/sanityDataFetching/fetchHeroData';
import { IPortfolioData } from '@/shared/types/models';

type SocialIconsProps = {
  className?: string;
  iconClassName?: string;
  direction?: 'row' | 'column';
  rounded?: boolean;
  portfolioData: IPortfolioData;
  // socials?: Record<"email" | "linkedin" | "location" | "mobile", string>;
};
function SocialIcons({
  className,
  iconClassName,
  direction,
  rounded = false,
  portfolioData,
}: SocialIconsProps) {
  const socials: any = {};
  let classes = '';
  if (rounded) {
    classes = 'bg-primary p-2 rounded-full text-white';
  }
  const getSocialIcon = (plateform: string) => {
    if (plateform?.toLowerCase() === 'location') {
      return <socialIcons.location />;
    } else if (plateform?.toLowerCase() === 'linkedin') {
      return <socialIcons.linkedin />;
    } else if (plateform?.toLowerCase() === 'email') {
      return <socialIcons.email />;
    } else if (plateform?.toLowerCase() === 'phone') {
      return <socialIcons.phone />;
    }
    return '';
  };
  return (
    <Flex as="ul" className={twMerge(`gap-3 ${direction === 'column' && 'flex-col'}`, className)}>
      {portfolioData?.socialLinks.map((item) => (
        <li key={item.platform} className={classes}>
          <a
            href={item.url}
            target="_blank"
            className="text-xl relative"
            rel="noreferrer"
            aria-label={item.platform}
            title={item.platform}
          >
            <>{getSocialIcon(item.platform)}</>
          </a>
        </li>
      ))}
    </Flex>
  );
}

export default SocialIcons;
