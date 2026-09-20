import type { ElementType, ReactNode } from 'react'

export type ChipTone = 'accent' | 'neutral' | 'success'

interface Props {
  as?: ElementType
  tone?: ChipTone
  /** أيقونة lucide اختيارية */
  icon?: ElementType
  className?: string
  children: ReactNode
}

const TONE: Record<ChipTone, string> = {
  accent: 'chip',
  neutral: 'inline-flex items-center gap-1.5 rounded-pill border border-paper-300 bg-paper-200 px-3 py-1 text-xs font-bold text-ink-soft',
  success: 'inline-flex items-center gap-1.5 rounded-pill border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-300',
}

/** الشريحة/الشارة الموحّدة */
export default function Chip({ as: Tag = 'span', tone = 'accent', icon: Icon, className = '', children }: Props) {
  return (
    <Tag className={`${TONE[tone]} ${className}`.trim()}>
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden />}
      {children}
    </Tag>
  )
}
