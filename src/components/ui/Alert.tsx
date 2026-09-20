import type { ElementType, ReactNode } from 'react'

export type AlertTone = 'info' | 'success' | 'danger'

interface Props {
  tone?: AlertTone
  icon?: ElementType
  className?: string
  children: ReactNode
}

const TONE: Record<AlertTone, string> = {
  info: 'alert',
  success: 'rounded-control border border-green-500/40 bg-green-500/10 px-4 py-3 text-xs text-green-300',
  danger: 'rounded-control border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-300',
}

/** صندوق التنبيه الموحّد */
export default function Alert({ tone = 'info', icon: Icon, className = '', children }: Props) {
  return (
    <div role="status" className={`${TONE[tone]} ${className}`.trim()}>
      {Icon ? (
        <span className="flex items-start gap-2">
          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </div>
  )
}
