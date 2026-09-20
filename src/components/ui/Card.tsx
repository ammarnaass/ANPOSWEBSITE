import type { ElementType, ReactNode } from 'react'

export type CardPad = 'sm' | 'md' | 'lg' | 'none'

interface Props {
  as?: ElementType
  /** مُعرّف للربط من روابط داخلية (#id) */
  id?: string
  pad?: CardPad
  /** تأثير الرفع عند المرور */
  hover?: boolean
  /** إبراز البطاقة (تُستخدم للباقة المميّزة والجهاز الحالي) */
  highlighted?: boolean
  className?: string
  children: ReactNode
}

const PAD: Record<CardPad, string> = {
  none: '',
  sm: 'card-pad-sm',
  md: 'card-pad',
  lg: 'card-pad-lg',
}

/** البطاقة الموحّدة — أساس كل الألواح في الموقع */
export default function Card({
  as: Tag = 'div',
  id,
  pad = 'md',
  hover = false,
  highlighted = false,
  className = '',
  children,
}: Props) {
  const cls = [
    'card',
    PAD[pad],
    highlighted ? 'ring-2 ring-cash-500' : '',
    hover ? 'transition-transform hover:-translate-y-1' : '',
    'relative',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag id={id} className={cls}>
      {children}
    </Tag>
  )
}
