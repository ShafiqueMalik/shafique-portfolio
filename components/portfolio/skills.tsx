import { coreCompetencies, skillGroups } from '@/lib/cv'
import type { IMySkills } from '@/lib/types'
import { skills as skillsCopy } from '@/lib/content'

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

function sanityExtras(data: IMySkills) {
  const known = new Set(
    skillGroups.flatMap((group) => [...group.primary, ...group.supporting]).map(normalize),
  )
  const extras = (data.skillsGroups ?? [])
    .flatMap((group) => group.skills ?? [])
    .map((skill) => skill.name.trim())
    .filter((name) => {
      const key = normalize(name)
      return ![...known].some((k) => k === key || key.includes(k) || k.includes(key))
    })
  return [...new Set(extras)]
}

export function Skills({ data }: { data: IMySkills }) {
  const extras = sanityExtras(data)
  const groups = extras.length
    ? [...skillGroups, { title: 'Also experienced with', summary: '', primary: [], supporting: extras }]
    : skillGroups

  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28"><div className="glass rounded-[2rem] p-6 md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {/* TODO: update this in sanity.io → My Skills › sectionSubtitle & sectionTitle (see lib/content.ts) */}
              {skillsCopy.sectionSubtitle ?? data.sectionSubtitle}
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {skillsCopy.sectionTitle ?? data.sectionTitle}
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            {'8+ years of production experience across enterprise e-commerce, SaaS, banking and government platforms.'}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-y border-border py-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Core competencies</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {coreCompetencies.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-4 flex flex-col">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 border-b border-border py-8 last:border-b-0 md:grid-cols-12 md:gap-8"
            >
              <dt className="flex flex-col gap-2 md:col-span-4">
                <span className="text-lg font-semibold tracking-tight">{group.title}</span>
                {group.summary ? (
                  <span className="text-pretty text-sm leading-relaxed text-muted-foreground">{group.summary}</span>
                ) : null}
              </dt>
              <dd className="flex flex-wrap content-start gap-2 md:col-span-8">
                {group.primary.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-primary bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20"
                  >
                    {skill}
                  </span>
                ))}
                {group.supporting.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="inline-block size-2.5 rounded-sm bg-primary" aria-hidden="true" />
          Daily drivers
          <span className="ml-4 inline-block size-2.5 rounded-sm border border-foreground/30" aria-hidden="true" />
          Working experience
        </p>
        </div>
      </div>
    </section>
  )
}
