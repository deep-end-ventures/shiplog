import { NextResponse } from 'next/server'

let resendInstance: any = null

async function getResend() {
  if (!resendInstance) {
    const { Resend } = await import('resend')
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}

let audienceId: string | null = null

async function getAudienceId() {
  if (audienceId) return audienceId
  const resend = await getResend()

  const { data: audiences } = await resend.audiences.list()
  const existing = audiences?.data?.find(
    (a: any) => a.name === 'ShipLog Subscribers'
  )
  if (existing) {
    audienceId = existing.id
    return audienceId
  }

  const { data: created } = await resend.audiences.create({
    name: 'ShipLog Subscribers',
  })
  audienceId = created!.id
  return audienceId
}

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const resend = await getResend()
    const audId = await getAudienceId()

    await resend.contacts.create({
      email,
      audienceId: audId!,
      unsubscribed: false,
    })

    // Send welcome email
    await resend.emails.send({
      from: 'ShipLog <hello@deependventures.com>',
      to: email,
      subject: 'Welcome to ShipLog — Ship Better Changelogs 🚀',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; color: #334155;">
          <h1 style="color: #1e40af; font-size: 24px;">Welcome to ShipLog! 🚀</h1>
          <p>Thanks for subscribing. You'll get insights on:</p>
          <ul style="line-height: 1.8;">
            <li>📋 Changelog automation best practices</li>
            <li>✨ AI-powered release note strategies</li>
            <li>🔧 Developer workflow optimization</li>
            <li>🚀 ShipLog product updates</li>
          </ul>
          <p>Ready to auto-generate your first changelog?</p>
          <a href="https://shiplog.deependventures.com/dashboard" style="display: inline-block; background: #1e40af; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Start for Free →</a>
          <p style="margin-top: 24px; font-size: 13px; color: #94a3b8;">
            — The ShipLog Team at <a href="https://deependventures.com" style="color: #3b82f6;">Deep End Ventures</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, source })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
