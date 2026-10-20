import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

export interface HeroAction {
  label: string
  to?: string
  href?: string
  icon?: LucideIcon
  variant?: 'primary' | 'ghost'
}

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  actions?: HeroAction[]
  meta?: ReactNode
  children?: ReactNode
}

const ACTION_CLASS = {
  primary:
    'inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all hover:bg-blue-700 active:translate-y-px',
  ghost:
    'inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50',
} as const

function Action({ action }: { action: HeroAction }) {
  const className = ACTION_CLASS[action.variant ?? 'primary']
  const content = (
    <>
      {action.icon && <action.icon className="h-4 w-4" aria-hidden="true" />}
      {action.label}
    </>
  )

  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  )
}

/** ترويسة موحّدة لكل صفحات الموقع: شارة، عنوان، وصف، وأزرار. */
export default function PageHero({ eyebrow, title, description, actions, meta, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {eyebrow}
          </span>
        )}

        <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-[1.25] text-slate-950 sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="mx-auto mt-7 flex max-w-md flex-col items-center justify-center gap-2.5 sm:flex-row">
            {actions.map((action) => (
              <Action key={action.label} action={action} />
            ))}
          </div>
        )}

        {meta && <div className="mt-6">{meta}</div>}
        {children}
      </div>
    </section>
  )
}
