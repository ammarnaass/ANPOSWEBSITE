import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  className?: string
  children: ReactNode
  /** رابط داخلي (react-router) */
  to?: string
  /** رابط خارجي أو رابط مراسلة */
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
  rel?: string
  'aria-label'?: string
  'aria-current'?: 'page' | boolean
}

/** بناء أصناف الزر من التوكنات الموحّدة (index.css) */
export function buttonClass({
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
}: Pick<BaseProps, 'variant' | 'size' | 'block' | 'className'>) {
  return [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '',
    block ? 'btn-block' : '',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * الزر الموحّد لكل الموقع.
 * - مع `to` يُصدر <Link> داخلياً
 * - مع `href` يُصدر <a>
 * - بغير ذلك يُصدر <button>
 */
export default function Button({
  variant,
  size,
  block,
  className,
  children,
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  target,
  rel,
  'aria-label': ariaLabel,
  'aria-current': ariaCurrent,
}: BaseProps) {
  const cls = buttonClass({ variant, size, block, className })

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} aria-current={ariaCurrent}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target={target ?? (external ? '_blank' : undefined)}
        rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {children}
    </button>
  )
}
