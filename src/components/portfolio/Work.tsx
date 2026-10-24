import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import type { IRecentWorks, IWorkItem } from '@/lib/types'
import { recentWorks } from '@/lib/content'

function projectHref(work: IWorkItem) {
  return work.links?.live || work.links?.github || work.links?.caseStudy || undefined
}

function titleCase(name: string) {
  return name.replace(/\b\w/g, (c) => c.toUpperCase())
}

export function Work({ data }: { data: IRecentWorks }) {
  const works = data.works ?? []
  const withThumb = works.filter((w) => w.thumbnail)
  const featured = withThumb.filter((w) => w.featured).slice(0, 4)
  const gallery = featured.length >= 2 ? featured : withThumb.slice(0, 4)
  const rest = works.filter((w) => !gallery.includes(w))

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {/* TODO: update this in sanity.io → Recent Works › sectionSubtitle & sectionTitle (see lib/content.ts) */}
      <SectionHeading
        label={recentWorks.sectionSubtitle ?? data.sectionSubtitle}
        title={recentWorks.sectionTitle ?? data.sectionTitle}
        description="Products and websites I've architected and engineered for clients across fintech, SaaS, e-commerce and local services."
      />

      <ul className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {gallery.map((work) => {
          const href = projectHref(work)
          const name = titleCase(work.name)
          return (
            <li key={work.name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex flex-col gap-5 rounded-3xl p-3 pb-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={`${work.thumbnail}?w=1200&auto=format`}
                    alt={`${name} website preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
                    {work.shortDescription || work.categories?.length ? (
                      <p className="text-sm text-muted-foreground">
                        {work.shortDescription || work.categories?.join(' · ')}
                      </p>
                    ) : null}
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">Open {name}</span>
                  </span>
                </div>
                {work.technologies?.length ? (
                  <ul className="flex flex-wrap gap-2 px-3" aria-label="Tech stack">
                    {work.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </a>
            </li>
          )
        })}
      </ul>

      {rest.length ? (
        <ul className="glass mt-12 divide-y divide-border overflow-hidden rounded-3xl">
          {rest.map((work) => (
            <li key={work.name}>
              <a
                href={projectHref(work)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-muted hover:text-primary"
              >
                <span className="text-lg font-medium tracking-tight">{titleCase(work.name)}</span>
                <span className="flex items-center gap-4">
                  {work.technologies?.length ? (
                    <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                      {work.technologies.join(' · ')}
                    </span>
                  ) : null}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
