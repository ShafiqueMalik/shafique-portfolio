import { ArrowUp } from 'lucide-react'
import { withFrontend } from '@/lib/content'
import type { IPortfolioData } from '@/lib/types'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const platformLabels: Record<string, string> = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  twitter: 'X',
  x: 'X',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  dribbble: 'Dribbble',
  behance: 'Behance',
  medium: 'Medium',
}

const contactPlatforms = ['email', 'phone', 'location']

export function SiteFooter({ portfolio }: { portfolio: IPortfolioData }) {
  const fullName = `${portfolio.firstName} ${portfolio.lastName}`
  const initials = `${portfolio.firstName?.[0] ?? ''}${portfolio.lastName?.[0] ?? ''}`
  const socials = (portfolio.socialLinks ?? []).filter(
    (link) => link.url?.startsWith('http') && !contactPlatforms.includes(link.platform),
  )

  return (
    <footer className="px-4 pb-6">
      <div className="glass mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl px-5 py-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-foreground font-mono text-xs font-semibold text-background">
              {initials}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">{fullName}</span>
              <span className="text-xs text-muted-foreground">{withFrontend(portfolio.role)}</span>
            </span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#top"
            aria-label="Back to top"
            className="hidden size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
          {socials.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {socials.map((link) => (
                <li key={link._key}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {platformLabels[link.platform] ?? link.platform}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}
