import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      cellNumber,
      bankName,
      branch,
      branchCode,
      issueDescription
    } = body

    /* -------------------- VALIDATION -------------------- */
    if (!name || !email || !cellNumber || !bankName || !branch || !branchCode || !issueDescription) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    /* -------------------- 1. STORE IN DATABASE -------------------- */
    // Note: Table remains 'membership' to match database OR replacing it with "Membership" casing
    await sql`
      INSERT INTO "Membership" (
        id,
        name,
        email,
        "cellNumber",
        "bankName",
        branch,
        "branchCode",
        "issueDescription",
        "createdAt"
      ) VALUES (
        gen_random_uuid(),
        ${name},
        ${email},
        ${cellNumber},
        ${bankName},
        ${branch},
        ${branchCode},
        ${issueDescription},
        NOW()
      )
    `

    /* -------------------- 2. SEND EMAIL USING RESEND -------------------- */
    await resend.emails.send({
      from: "BETRA <onboarding@resend.dev>",
      to: ["khushboo.22210887@viit.ac.in"], // 👉 PUT YOUR EMAIL HERE
       
      subject: "New Bank Clinic Issue Submitted",

      html: `
        <h2>New Bank Clinic Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Cell Number:</b> ${cellNumber}</p>

        <hr/>

        <p><b>Bank Name:</b> ${bankName}</p>
        <p><b>Branch:</b> ${branch}</p>
        <p><b>Branch Code:</b> ${branchCode}</p>

        <hr/>

        <p><b>Issue Description:</b></p>
        <p>${issueDescription}</p>
      `,
    })

    /* -------------------- SUCCESS -------------------- */
    return NextResponse.json(
      { message: 'Issue Saved + Email Sent Successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}