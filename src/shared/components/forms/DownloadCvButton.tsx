import Link from 'next/link';
import React from 'react';
import SecondaryButton from './SecondaryButton';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IPortfolioData } from '@/shared/types/models';

type DownloadCvButtonProps = {
  portfolioData: IPortfolioData;
};
export default function DownloadCvButton({ portfolioData }: DownloadCvButtonProps) {
  const { resume } = portfolioData || {};
  const fileUrl = resume?.asset?.url;
  return (
    <Link href={fileUrl || ''} download="Shafique Malik - Resume" className="w-full">
      <SecondaryButton pill className="w-full border-0 underline gap-1" outlined>
        <MdOutlineFileDownload size={20} /> Download CV
      </SecondaryButton>
    </Link>
  );
}
