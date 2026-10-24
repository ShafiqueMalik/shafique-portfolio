'use client'

import { useRef, useState } from 'react'
import { useForm, type FieldError } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Loader2 } from 'lucide-react'

type Status = 'idle' | 'sent' | 'error'

type ContactFields = {
  name: string
  email: string
  message: string
}

const fieldClass =
  'w-full rounded-xl border bg-secondary px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function filled(value: string, message: string) {
  return value.trim() !== '' || message
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  async function onSubmit() {
    if (!formRef.current) return
    setStatus('idle')
    try {
      await emailjs.sendForm('service_zutnn15', 'template_d6cumb8', formRef.current, {
        publicKey: 'user_BmmgQOqakGY8uWbnMxx8l',
      })
      reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <input
            id="contact-name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={inputClass(errors.name)}
            {...register('name', { validate: (value) => filled(value, 'Please enter your name.') })}
          />
          <FieldError id="contact-name-error" error={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={inputClass(errors.email)}
            {...register('email', {
              validate: (value) => {
                const email = value.trim()
                if (!email) return 'Please enter your email.'
                if (!emailPattern.test(email)) return 'Please enter a valid email address.'
                return true
              },
            })}
          />
          <FieldError id="contact-email-error" error={errors.email} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about your project"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputClass(errors.message)} resize-y`}
          {...register('message', { validate: (value) => filled(value, 'Please enter your message.') })}
        />
        <FieldError id="contact-message-error" error={errors.message} />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="size-4" aria-hidden="true" />
          )}
          {isSubmitting ? 'Sending' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
          {status === 'sent' ? "Thanks! I'll get back to you soon." : null}
          {status === 'error' ? 'Something went wrong. Please email me directly.' : null}
        </p>
      </div>
    </form>
  )
}

function inputClass(error?: FieldError) {
  return `${fieldClass} ${error ? 'border-destructive' : 'border-input'}`
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}{' '}
      <span className="text-destructive" aria-hidden="true">
        *
      </span>
      <span className="sr-only"> (required)</span>
    </label>
  )
}

function FieldError({ id, error }: { id: string; error?: FieldError }) {
  if (!error) return null
  return (
    <p id={id} role="alert" className="text-sm text-destructive">
      {error.message}
    </p>
  )
}
