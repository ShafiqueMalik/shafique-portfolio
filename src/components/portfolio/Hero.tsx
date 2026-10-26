import Image from 'next/image'
import { ArrowDownRight, Download } from 'lucide-react'
import { headline } from '@/lib/cv'
import { roleDescription } from '@/lib/content'
import type { IPortfolioData } from '@/lib/types'

export function Hero({ portfolio }: { portfolio: IPortfolioData }) {
  const fullName = `${portfolio.firstName} ${portfolio.lastName}`

  // TODO: update this in sanity.io → Portfolio › experience & completedProjects
  const facts = [
    { value: `${portfolio.experience}+`, label: 'Years of experience' },
    { value: `${portfolio.completedProjects}+`, label: 'Projects delivered' },
    { value: '100%', label: 'Commitment to Quality' },
  ]

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col lg:col-span-7">
          <p
            className="rise glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground"
            style={{ animationDelay: '60ms' }}
          >
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {fullName} — {headline}
          </p>
          <h1
            className="rise mt-6 text-balance text-5xl font-semibold leading-tight md:text-7xl md:leading-none"
            style={{ animationDelay: '100ms' }}
          >
            Building <span className="text-shine">fast, accessible</span> products for the web.
          </h1>
          <p
            className="rise mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '160ms' }}
          >
            {/* TODO: update this in sanity.io → Portfolio › roleDescription (see lib/content.ts) */}
            {roleDescription ?? portfolio.roleDescription}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: '200ms' }}>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-opacity hover:opacity-90"
            >
              View selected work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            {/* TODO: Download serves public/cv.pdf. When the CV is updated in sanity.io → Portfolio › resume, replace public/cv.pdf as well. */}
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:text-primary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <div className="rise relative pt-36 lg:col-span-5" style={{ animationDelay: '140ms' }}>
          <figure className="glass relative mx-auto w-full max-w-sm overflow-visible rounded-[2rem] !border-t-0 p-0">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-primary/15 via-background/30 to-accent/10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-2 select-none font-mono text-8xl font-semibold leading-none tracking-tighter text-foreground/[0.06]"
              >
                SM
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 bottom-8 h-8 rounded-[100%] bg-foreground/20 blur-2xl"
              />
            </div>
            {/* TODO: when this portrait changes, replace public/portraits/hero-portrait.webp */}
            <div className="absolute inset-x-1 -top-36 bottom-12">
              <Image
                src="/portraits/hero-portrait.webp"
                alt={`Portrait of ${fullName}`}
                fill
                preload
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-contain object-bottom"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-1/2 z-10 flex w-[calc(100%-2rem)] -translate-x-1/2 flex-col items-center gap-2 rounded-2xl border border-border bg-background/95 px-4 py-3 text-center text-foreground shadow-xl backdrop-blur-xl sm:w-[calc(100%-3rem)] sm:flex-row sm:justify-between sm:gap-3 sm:text-left">
              <span className="flex flex-col items-center sm:items-start">
                <span className="font-mono text-sm font-semibold">{fullName}</span>
                <span className="text-xs text-foreground/75">React.js · Next.js · TypeScript</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 font-mono text-xs font-medium text-foreground">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Open to work
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      <dl
        className="rise glass mt-20 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        style={{ animationDelay: '240ms' }}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 p-6 md:p-8">
            <dt className="order-2 text-sm text-muted-foreground">{fact.label}</dt>
            <dd className="order-1 font-mono text-4xl font-semibold tracking-tight">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
