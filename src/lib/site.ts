import { headers } from 'next/headers'

export const siteTitle = 'Shafique Malik — Senior Front-End Developer'

export const siteDescription =
  'Senior Front-End Developer (React.js & Next.js, MERN, SEO/AEO) with 8+ years building scalable, unit-tested, internationalized web apps for enterprise e-commerce, SaaS, banking and government.'

export async function siteOrigin() {
  const headerList = await headers()
  const host = (headerList.get('x-forwarded-host') ?? headerList.get('host') ?? 'localhost:3001')
    .split(',')[0]
    .trim()
  const proto = (headerList.get('x-forwarded-proto') ?? (host.includes('localhost') ? 'http' : 'https'))
    .split(',')[0]
    .trim()
  return `${proto}://${host}`
}
