import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { KeyRound, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { PageHero } from '../components/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import { Field } from '../components/ui/Field'
import { PRICE_DZD, WA_ACTIVATE } from '../lib/site'

const actSchema = z.object({
  name: z.string().min(2, 'الاسم قصير جداً'),
  phone: z.string().regex(/^[0-9+\s-]{9,15}$/, 'أدخل رقم هاتف صحيح'),
  edition: z.enum(['desktop', 'mobile'], { message: 'اختر نوع النسخة' }),
})
type ActForm = z.infer<typeof actSchema>

const codeSchema = z.object({ code: z.string().min(4, 'أدخل الكود كاملاً') })

export default function Client() {
  const [tab, setTab] = useState<'want' | 'has'>('want')
  const [sent, setSent] = useState(false)
  const act = useForm<ActForm>({ resolver: zodResolver(actSchema) })
  const code = useForm<z.infer<typeof codeSchema>>({ resolver: zodResolver(codeSchema) })

  const onAct = (d: ActForm) => {
    const ed = d.edition === 'desktop' ? 'سطح مكتب' : 'هاتف'
    const t = `مرحباً، أنا ${d.name} (${d.phone}) — أريد تفعيل AN POS (${ed} — ${PRICE_DZD}).`
    window.open(`https://wa.me/213666526021?text=${encodeURIComponent(t)}`, '_blank')
    setSent(true)
  }
  const onCode = () => {
    code.setError('root', { message: 'أدخل الكود داخل التطبيق: الإعدادات ← الترخيص ← الصق الكود.' })
  }

  return (
    <>
      <PageHero kicker="بوابة العميل" title="تفعيل النسخة الكاملة" sub={`انتهت تجربتك؟ فعّل نسختك (${PRICE_DZD}) عبر واتساب.`} />
      <section className="section"><div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="grid grid-cols-2 rounded-control border border-paper-300 bg-paper-50 p-1" role="tablist" aria-label="اختر حالتك">
          {(['want', 'has'] as const).map((k) => (
            <button key={k} role="tab" type="button" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`rounded-control px-4 py-2.5 text-sm font-bold ${tab === k ? 'bg-accent text-accent-on' : 'text-ink-soft'}`}>
              {k === 'want' ? 'أريد التفعيل الآن' : 'لدي كود تفعيل'}
            </button>
          ))}
        </div>
        <Card pad="lg" className="mt-5">
          {tab === 'has' ? (
            <form onSubmit={code.handleSubmit(onCode)} className="space-y-4" noValidate>
              <Alert tone="info">التفعيل من داخل التطبيق: الإعدادات ← الترخيص ← الصق الكود.</Alert>
              <Field id="code" label="كود التفعيل" dir="ltr" placeholder="XXXX-XXXX-XXXX" error={code.formState.errors.code?.message} {...code.register('code')} />
              {code.formState.errors.root && <Alert tone="info">{code.formState.errors.root.message}</Alert>}
              <Button type="submit" block><KeyRound className="h-4 w-4" aria-hidden /> تحقق من الكود</Button>
              <Button href={WA_ACTIVATE} variant="ghost" block><MessageCircle className="h-4 w-4" aria-hidden /> الكود لا يعمل؟ واتساب</Button>
            </form>
          ) : sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-green-500/40 bg-green-500/10">
                <CheckCircle2 className="h-7 w-7 text-success" aria-hidden />
              </div>
              <h2 className="h-sub mt-4">فتحنا لك محادثة واتساب!</h2>
              <p className="mt-2 text-sm text-ink-soft">أكمل إرسال الرسالة وسيرد عليك الدعم بالكود بعد الدفع.</p>
            </div>
          ) : (
            <form onSubmit={act.handleSubmit(onAct)} className="space-y-4" noValidate>
              <Field id="name" label="الاسم" placeholder="اسمك الكامل" error={act.formState.errors.name?.message} {...act.register('name')} />
              <Field id="phone" label="رقم الهاتف" type="tel" dir="ltr" placeholder="06XXXXXXXX" error={act.formState.errors.phone?.message} {...act.register('phone')} />
              <div>
                <span className="field-label">نوع النسخة</span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {([['desktop', 'سطح مكتب'], ['mobile', 'هاتف']] as const).map(([v, l]) => (
                    <label key={v} className="cursor-pointer rounded-control border border-paper-300 px-4 py-2.5 text-center text-sm font-bold text-ink-soft">
                      <input type="radio" value={v} className="sr-only" {...act.register('edition')} />{l}
                    </label>
                  ))}
                </div>
                {act.formState.errors.edition && <p className="field-error">{act.formState.errors.edition.message}</p>}
              </div>
              <Alert tone="info">النسخة الكاملة {PRICE_DZD} — دفعة واحدة.</Alert>
              <Button type="submit" block><Send className="h-4 w-4" aria-hidden /> إرسال طلب التفعيل عبر واتساب</Button>
            </form>
          )}
        </Card>
      </div></section>
    </>
  )
}
