import type { Metadata } from 'next';

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
        </Providers>
      </body>
    </html>
  );
}
