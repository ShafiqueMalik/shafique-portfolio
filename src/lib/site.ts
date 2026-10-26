export const siteTitle = 'Shafique Malik — Senior Frontend Engineer'

export const siteDescription =
  'Senior Frontend Engineer (React.js & Next.js, MERN, SEO/AEO) with 8+ years building scalable, unit-tested, internationalized web apps for enterprise e-commerce, SaaS, banking and government.'

/**
 * Absolute site origin used for canonical, social, and JSON-LD URLs.
 * Set NEXT_PUBLIC_SITE_URL in production. Netlify also provides URL at build time.
 * Reading the request host would force the page to render on every visit.
 */
export function siteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL
  if (configured) return configured.replace(/\/$/, '')
  return 'http://localhost:3000'
}
