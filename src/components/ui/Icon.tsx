export default function Icon({
  name,
  className = '',
  size,
  filled = false,
}: {
  name: string
  className?: string
  size?: number
  filled?: boolean
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        ...(size ? { fontSize: size } : {}),
        ...(filled ? { fontVariationSettings: "'FILL' 1" } : {}),
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

