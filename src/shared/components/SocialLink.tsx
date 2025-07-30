import Flex from '@/components/layout/Flex';
import Link from 'next/link';
import React from 'react';

type SocialLinkProps = {
  link: string;
  title: string;
  subTitle?: string;
  icon?: React.ReactNode; // Assuming icon is a React component
};
export default function SocialLink({ link = '', title, subTitle, icon }: SocialLinkProps) {
  console.log('subtitle', subTitle);
  console.log('link', link);
  console.log('title', title);
  return (
    <Link target="_blank" href={link} className="">
      <Flex className="gap-2 md:gap-3 items-start">
        {icon && <div className="translate-y-[6px]">{icon}</div>}
        <div className="space-y-0">
          <h4 className="text-lg font-semibold">{title}</h4>
          {subTitle && <p className="opacity-70 text-sm italic">{subTitle}</p>}
        </div>
      </Flex>
    </Link>
  );
}
