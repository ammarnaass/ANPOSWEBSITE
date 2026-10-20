interface Props {
  kicker?: string
  title: string
  description?: string
  /** محاذاة النص: وسط الصفحة أو بداية السطر */
  align?: 'center' | 'start'
  className?: string
}

/** عنوان قسم موحّد لكل صفحات الموقع. */
export default function SectionHead({ kicker, title, description, align = 'start', className = '' }: Props) {
  const centered = align === 'center'
  return (
    <div
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {kicker && <span className="text-xs font-bold text-secondary">{kicker}</span>}
      <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>}
    </div>
  )
}
