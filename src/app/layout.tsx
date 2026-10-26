import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { siteDescription, siteOrigin, siteTitle } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })

export async function generateMetadata(): Promise<Metadata> {
  const origin = siteOrigin()

  return {
    metadataBase: new URL(origin),
    title: siteTitle,
    description: siteDescription,
    applicationName: 'Shafique Malik',
    authors: [{ name: 'Shafique Malik', url: origin }],
    creator: 'Shafique Malik',
    alternates: { canonical: '/' },
    openGraph: {
      type: 'profile',
      title: siteTitle,
      description: siteDescription,
      url: '/',
      siteName: 'Shafique Malik',
      locale: 'en_US',
      firstName: 'Shafique',
      lastName: 'Malik',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
    },
    icons: {
      icon: [{ url: '/icon.svg?v=sm', type: 'image/svg+xml' }],
      apple: '/icon.svg?v=sm',
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eef2f8' },
    { media: '(prefers-color-scheme: dark)', color: '#060a14' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} bg-background`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
