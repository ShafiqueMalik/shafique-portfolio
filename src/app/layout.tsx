import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer.tsx';
import { Providers } from '@/providers';

import { Inter } from 'next/font/google';
import { fetchFromSanity } from '@/lib/fetchFromSanity';
import { IPortfolioData } from '@/shared/types/models';
import { getPorfolioQuery } from '@/lib/sanityQueries';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shafique Malik - Front End Developer',
  description:
    'Shafique Malik - Front End Developer. React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, and more.',
  openGraph: {
    title: 'Shafique Malik - Front End Developer',
    description:
      'Front End Developer, React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB',
    url: 'https://malikportfolio.netlify.app/',
    siteName: 'Your Portfolio Title',
    images: [
      {
        url: 'https://malikportfolio.netlify.app/og-thumbnail.png',
        width: 730,
        height: 547,
        alt: 'Shafique Malik - Front End Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portfolioData = await fetchFromSanity<IPortfolioData>(getPorfolioQuery);

  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth  " suppressHydrationWarning>
      <body className={inter.className + ' bg-white dark:bg-dark'} style={{ overflowX: 'hidden' }}>
        <Providers>
          <Navbar portfolioData={portfolioData} />
          {children}
          <Footer portfolioData={portfolioData} />
          <ToastContainer position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
