type SectionHeadingProps = {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">{label}</span>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
