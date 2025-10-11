import Link from 'next/link';
import React from 'react';
import SecondaryButton from './SecondaryButton';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IPortfolioData } from '@/shared/types/models';
import { cn } from '@/lib/utils';

type DownloadCvButtonProps = {
  portfolioData: IPortfolioData;
  className?: string;
};

export default function DownloadCvButton({ portfolioData, className }: DownloadCvButtonProps) {
  const { resume } = portfolioData || {};
  const fileUrl = resume?.asset?.url;
  return (
    <Link
      href={fileUrl || ''}
      download="Shafique Malik - Resume"
      className={cn(`w-full `, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SecondaryButton pill className="w-full border-0 underline gap-1" outlined>
        <MdOutlineFileDownload size={20} /> Download CV
      </SecondaryButton>
    </Link>
  );
}
