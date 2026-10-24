import { ArrowUpRight } from 'lucide-react'
import { notableClients } from '@/lib/cv'

export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="flex flex-col gap-6">
        <h2
          id="clients-heading"
          className="text-center font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Brands I&apos;ve worked on
        </h2>
        <ul className="glass grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {notableClients.map((client) => {
            const body = (
              <>
                <span className="flex items-start justify-between gap-3">
                  <span className="text-balance text-xl font-semibold tracking-tight">{client.name}</span>
                  {client.href ? (
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm text-muted-foreground">{client.sector}</span>
                  <span className="font-mono text-xs text-muted-foreground">{client.detail}</span>
                </span>
              </>
            )

            return (
              <li key={client.name} className="sm:[&:nth-child(n+3)]:border-t sm:[&:nth-child(n+3)]:border-border lg:[&:nth-child(n+3)]:border-t-0">
                {client.href ? (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-primary/5 md:p-8"
                  >
                    {body}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-6 p-6 md:p-8">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
