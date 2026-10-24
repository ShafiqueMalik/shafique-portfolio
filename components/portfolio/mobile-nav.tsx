'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavLink = { href: string; label: string }

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      const bar = rootRef.current?.closest('[data-header-bar]')
      if (bar && !bar.contains(event.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className={cn(
          'relative flex size-10 items-center justify-center rounded-full border transition-colors duration-300',
          open
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-border bg-background/60 text-foreground hover:bg-muted',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none',
            open ? 'rotate-45' : '-translate-y-1',
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            'absolute h-0.5 rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none',
            open ? 'w-4 -rotate-45' : 'w-2.5 translate-x-0.75 translate-y-1',
          )}
        />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!open}
        className={cn(
          'absolute inset-x-0 top-full mt-3 origin-top overflow-hidden rounded-3xl border border-border bg-background p-3 shadow-2xl shadow-primary/15 transition-all duration-300 ease-out motion-reduce:transition-none',
          open ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-2 scale-95 opacity-0',
        )}
      >
        <p className="px-4 pb-2 pt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Navigate
        </p>
        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${80 + index * 45}ms` : '0ms' }}
              className={cn(
                'transition-all duration-300 ease-out motion-reduce:transition-none',
                open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
              )}
            >
              <a
                href={link.href}
                onClick={close}
                className="group flex items-center justify-between rounded-2xl px-4 py-3 font-serif text-2xl font-medium text-foreground transition-colors hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline-none"
              >
                {link.label}
                <ArrowUpRight
                  className="size-5 text-primary opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div
          style={{ transitionDelay: open ? `${80 + links.length * 45}ms` : '0ms' }}
          className={cn(
            'mt-2 border-t border-border pt-3 transition-all duration-300 ease-out motion-reduce:transition-none',
            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
          )}
        >
          <a
            href="#contact"
            onClick={close}
            className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-opacity hover:opacity-90"
          >
            {"Let's talk"}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </div>
  )
}
