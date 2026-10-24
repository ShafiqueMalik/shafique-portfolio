import { Link2, Mail, MapPin, Phone, UserRound, type LucideIcon } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { location } from '@/lib/cv'
import type { IPortfolioData } from '@/lib/types'

const platformMeta: Record<string, { icon: LucideIcon; label: string }> = {
  email: { icon: Mail, label: 'Email' },
  phone: { icon: Phone, label: 'Phone' },
  linkedin: { icon: UserRound, label: 'LinkedIn' },
  location: { icon: MapPin, label: 'Based in' },
}

export function Contact({ portfolio }: { portfolio: IPortfolioData }) {
  const valueFor: Record<string, string> = {
    email: portfolio.email,
    phone: portfolio.phoneNumber,
    linkedin: `${portfolio.firstName} ${portfolio.lastName}`,
    location: location,
  }

  const channels = (portfolio.socialLinks ?? []).map((link) => {
    const meta = platformMeta[link.platform] ?? { icon: Link2, label: link.platform }
    return { ...meta, key: link._key, href: link.url, value: valueFor[link.platform] ?? link.url }
  })

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Contact</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tighter md:text-6xl">
              {"Have a project in mind? Let's build it."}
            </h2>
          </div>
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {channels.map(({ key, icon: Icon, label, value, href }) => (
              <li key={key}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
                >
                  <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                    <span className="break-words font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-6 md:p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
