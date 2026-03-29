import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    console.log("API HIT") // ✅ FIRST LINE

    const { name, email, phone, subject, message } = await req.json()

    console.log("REQUEST DATA:", { name, email, subject }) // ✅ DEBUG INPUT

    const data = await resend.emails.send({
      from: "BETRA <onboarding@resend.dev>",
      to: ["khushboo.22210887@viit.ac.in"],
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    console.log("EMAIL SENT:", data) // ✅ SUCCESS LOG

    return NextResponse.json({ success: true, data })

  } catch (error) {
    console.error("API ERROR:", error) // ✅ ERROR LOG

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}