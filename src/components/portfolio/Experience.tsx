import { SectionHeading } from '@/components/shared/SectionHeading'
import { brandsFor, certifications, highlightsFor, languages } from '@/lib/cv'
import type { IJourneyData } from '@/lib/types'
import { journey, withFrontend } from '@/lib/content'

export function Experience({ data }: { data: IJourneyData }) {
  const jobs = data.experienceSection?.jobs ?? []
  const degrees = data.educationSection?.degrees ?? []

  return (
    <section id="experience" className="below-fold mx-auto max-w-6xl px-6 py-20 md:py-28">
      {/* TODO: update this in sanity.io → Journey › subtitle & title (see lib/content.ts) */}
      <SectionHeading
        label={journey.subtitle ?? data.subtitle}
        title={journey.title ?? data.experienceSection?.title ?? data.title}
        description={journey.description}
      />

      <ol className="glass mt-14 flex flex-col divide-y divide-border rounded-3xl px-6 md:px-10">
        {jobs.map((job) => {
          const current = job.endDate?.trim().toLowerCase() === 'present'
          const highlights = highlightsFor(job.company)
          const brands = brandsFor(job.company)
          return (
            <li
              key={`${job.company}-${job.startDate}`}
              className="grid gap-3 py-8 md:grid-cols-12 md:gap-6"
            >
              <span className="font-mono text-sm text-muted-foreground md:col-span-3">
                {job.startDate?.trim()} — {job.endDate?.trim()}
              </span>
              <div className="flex flex-col gap-2 md:col-span-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                  {current ? (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                      Current
                    </span>
                  ) : null}
                </div>
                <ul className="flex flex-col gap-0.5 text-sm text-muted-foreground">
                  {[...(job.positions ?? [])].reverse().map((role) => {
                    const title = withFrontend(role)
                    return <li key={title}>{title}</li>
                  })}
                </ul>
              </div>
              {highlights.length || brands.length ? (
                <div className="flex flex-col gap-4 md:col-span-5">
                  {highlights.length ? (
                    <ul className="flex flex-col gap-2 text-pretty leading-relaxed">
                      {highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {brands.length ? (
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
                      <span className="text-xs text-muted-foreground">Worked on</span>
                      <ul className="flex flex-wrap gap-1.5">
                        {brands.map((brand) => (
                          <li key={brand.name}>
                            <a
                              href={brand.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="glass inline-flex rounded-full px-2.5 py-1 text-xs font-medium transition-colors hover:text-primary"
                            >
                              {brand.name}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>

      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        <div className="glass flex flex-col gap-8 rounded-3xl p-8 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {data.educationSection?.title ?? 'Education'}
            </h3>
            <ul className="flex flex-col divide-y divide-border">
              {degrees.map((item) => (
                <li key={item.degree} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                  <span className="font-semibold">{item.degree}</span>
                  <span className="text-sm text-muted-foreground">{item.field}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.startYear} — {item.endYear}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Languages</h3>
            <ul className="flex flex-col gap-2">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="glass flex flex-col gap-4 rounded-3xl p-8 lg:col-span-7">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Certifications</h3>
          <ul className="flex flex-col divide-y divide-border">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-pretty font-medium">{cert.name}</span>
                  <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
