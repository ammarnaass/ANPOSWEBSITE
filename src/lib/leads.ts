// نقطة إرسال طلبات العملاء (Lead capture).
// ضع رابط Formspree أو Webhook هنا؛ حتى يتم ربط API حقيقي، يُحفظ الطلب محلياً ويُسجَّل في الكونسول.
const LEADS_ENDPOINT = ''

export interface Lead {
  name: string
  business: string
  phone: string
  email?: string
  message?: string
  source: 'demo' | 'contact' | 'signup'
}

export async function submitLead(lead: Lead): Promise<{ ok: true }> {
  if (LEADS_ENDPOINT) {
    const res = await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })
    if (!res.ok) throw new Error('تعذر إرسال الطلب، حاول مرة أخرى')
    return { ok: true }
  }
  // وضع التطوير: لا يوجد endpoint بعد
  const key = 'an-pos-leads'
  const existing = JSON.parse(localStorage.getItem(key) ?? '[]')
  existing.push({ ...lead, at: new Date().toISOString() })
  localStorage.setItem(key, JSON.stringify(existing))
  console.info('[AN POS] طلب جديد (محفوظ محلياً):', lead)
  return { ok: true }
}
