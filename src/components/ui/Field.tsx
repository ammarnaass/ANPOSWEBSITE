import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'

interface Common {
  id: string
  label: string
  error?: string
  optional?: boolean
}

/** الحقل النصي الموحّد — يستبدل تكرار inputCls في Client.tsx و Contact.tsx */
export const Field = forwardRef<HTMLInputElement, Common & InputHTMLAttributes<HTMLInputElement>>(
  function Field({ id, label, error, optional, className = '', ...rest }, ref) {
    return (
      <div>
        <label htmlFor={id} className="field-label">
          {label}
          {optional && <span className="font-normal text-ink-soft"> (اختياري)</span>}
        </label>
        <input
          id={id}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`field-input ${className}`.trim()}
          {...rest}
        />
        <FieldError id={id} error={error} />
      </div>
    )
  },
)

/** منطقة النص الموحّدة */
export const TextAreaField = forwardRef<HTMLTextAreaElement, Common & TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function TextAreaField({ id, label, error, optional, className = '', ...rest }, ref) {
    return (
      <div>
        <label htmlFor={id} className="field-label">
          {label}
          {optional && <span className="font-normal text-ink-soft"> (اختياري)</span>}
        </label>
        <textarea
          id={id}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`field-input ${className}`.trim()}
          {...rest}
        />
        <FieldError id={id} error={error} />
      </div>
    )
  },
)

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={`${id}-error`} role="alert" className="field-error">
      {error}
    </p>
  )
}

/** غلاف عام لحقول مخصّصة (مجموعات أزرار راديو، جداول، إلخ) */
export function FieldShell({ id, label, error, children }: Common & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      <FieldError id={id} error={error} />
    </div>
  )
}
