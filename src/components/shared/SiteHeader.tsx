import { ArrowUpRight } from 'lucide-react'
import type { IPortfolioData } from '@/lib/types'
import { ThemeToggle } from './ThemeToggle'
import { MobileNav } from './MobileNav'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
]

export function SiteHeader({ portfolio }: { portfolio: IPortfolioData }) {
  const initials = `${portfolio.firstName?.[0] ?? ''}${portfolio.lastName?.[0] ?? ''}`

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div data-header-bar className="glass relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-2 pr-2">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-foreground font-mono text-sm font-semibold text-background">
            {initials}
          </span>
          <span className="hidden font-mono text-sm font-medium sm:inline">
            {portfolio.firstName} {portfolio.lastName}
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav links={links} />
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-opacity hover:opacity-90 sm:px-5"
          >
            {"Let's talk"}
            <ArrowUpRight className="hidden size-4 min-[380px]:block" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
