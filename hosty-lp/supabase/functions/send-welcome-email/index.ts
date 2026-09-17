import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { record } = await req.json()

    const email = record.email
    const firstName = record.first_name || 'there'
    const userType = record.user_type // 'host' or 'guest'

    const welcomeMessage = userType === 'host'
      ? "We can't wait to see the legendary experiences you'll create."
      : "We can't wait to grant you access to the most coveted gatherings."

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Hosty <onboarding@resend.dev>', // Replace with your verified domain later
        to: [email],
        subject: 'Welcome to the Inner Circle 🥂',
        html: `
          <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; color: #0D0D2B; line-height: 1.6;">
            <h1 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #6C3CE1;">Welcome to the Inner Circle.</h1>
            <p>Hello ${firstName},</p>
            <p>Welcome to <strong>Hosty</strong>. You've just taken the first step into the most exclusive party ecosystem in the city.</p>
            <p>${welcomeMessage}</p>
            <p>We're polishing the final details of the experience. You'll be the first to know when we open the gates.</p>
            <p style="margin-top: 30px;">Stay elegant.</p>
            <p><strong>The Hosty Team</strong></p>
            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #888;">
              You are receiving this because you joined the Hosty waitlist.
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Resend error: ${errorText}`)
      return new Response(`Error sending email: ${errorText}`, { status: 500 })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error(`Unexpected error: ${error}`)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
