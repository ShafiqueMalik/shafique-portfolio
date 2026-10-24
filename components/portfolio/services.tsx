import { Code2, LayoutTemplate, MapPinned, Palette, ScanSearch, Sparkles, Webhook, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import type { IMyServices } from '@/lib/types'
import { services as copy } from '@/lib/content'

// Sanity stores react-icons names; map them to the lucide icons used by this design.
const iconMap: Record<string, LucideIcon> = {
  FaLaptopCode: LayoutTemplate,
  FaReact: Code2,
  FaWordpress: Palette,
  FaServer: Webhook,
  FaMapMarkedAlt: MapPinned,
  AeoSeo: ScanSearch,
  FaSearch: ScanSearch,
}

export function Services({ data }: { data: IMyServices }) {
  return (
    <section id="services">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* TODO: update this in sanity.io → My Services › heading, subheading, services[] (see lib/content.ts) */}
        <SectionHeading
          label="Services"
          title={copy.heading ?? data.heading}
          description={copy.subheading ?? data.subheading}
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ...(data.services ?? []).filter((s) => !copy.hidden.includes(s.title)),
            ...copy.extra.filter((extra) => !data.services?.some((s) => s.title === extra.title)),
          ].map((original) => {
            const service = { ...original, ...copy.items[original.title] }
            const Icon = (service.iconName && iconMap[service.iconName]) || Sparkles
            return (
              <li key={service.title} className="glass group flex flex-col gap-6 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {service.iconImage ? (
                    <img src={service.iconImage || '/placeholder.svg'} alt="" className="size-5 object-contain" />
                  ) : (
                    <Icon className="size-5" aria-hidden="true" />
                  )}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </li>
            )
          })}
          <li className="flex flex-col justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/25">
            <p className="text-lg font-semibold tracking-tight">Have something else in mind?</p>
            <a href="#contact" className="font-mono text-sm underline underline-offset-4">
              Start a conversation
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
