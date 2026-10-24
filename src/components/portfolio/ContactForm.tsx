'use client'

import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Loader2 } from 'lucide-react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'w-full rounded-xl border border-input bg-secondary px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm('service_zutnn15', 'template_d6cumb8', formRef.current, {
        publicKey: 'user_BmmgQOqakGY8uWbnMxx8l',
      })
      formRef.current.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project"
          className={`${fieldClass} resize-y`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'sending' ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="size-4" aria-hidden="true" />
          )}
          {status === 'sending' ? 'Sending' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
          {status === 'sent' ? "Thanks! I'll get back to you soon." : null}
          {status === 'error' ? 'Something went wrong. Please email me directly.' : null}
        </p>
      </div>
    </form>
  )
}
