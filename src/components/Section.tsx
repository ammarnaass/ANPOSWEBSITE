import type { ReactNode } from 'react'
import Button from './ui/Button'

/**
 * عنوان قسم — kicker + عنوان + وصف اختياري.
 * يستخدم سلّم العناوين الموحّد `.h-section` من index.css.
 */
export function SectionTitle({
  kicker,
  title,
  sub,
  align = 'center',
}: {
  kicker?: string
  title: string
  sub?: string
  align?: 'center' | 'start'
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-start max-w-2xl'
  return (
    <div className={alignCls}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className={`h-section ${kicker ? 'mt-2' : ''}`}>{title}</h2>
      {sub && <p className="mt-3 leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  )
}

/**
 * ترويسة صفحة داخلية — نفس بنية SectionTitle لكن بعنوان h1 وسلّم `.h-page`.
 */
export function PageHero({ kicker, title, sub, children }: { kicker?: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="border-b border-paper-300 bg-paper-50">
      <div className="container-page section text-center rise-in">
        {kicker && <span className="kicker">{kicker}</span>}
        <h1 className={`h-page ${kicker ? 'mt-2' : ''}`}>{title}</h1>
        {sub && <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-soft">{sub}</p>}
        {children}
        <hr className="tear-line mx-auto mt-10 max-w-xs" />
      </div>
    </section>
  )
}


export function CTAButton({
  to,
  children,
  variant = 'primary',
}: {
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
}) {
  return (
    <Button to={to} variant={variant} size="lg">
      {children}
    </Button>
  )
}
