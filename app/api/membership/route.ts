import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      addressOffice,
      addressResidence,
      telephoneOffice,
      telephoneResidence,
      cellNumber,
      email,
      dob,
      qualification,
      workingInBank,
      since,
      designation,
      remittance,
      ddNo,
      rtgsUtrNo,
      chequeNo,
      signature,
      date,
      place,
      declaration,
    } = body

    /* -------------------- VALIDATION -------------------- */
    if (!name || !email || !declaration) {
      return NextResponse.json(
        { error: 'Name, Email and Declaration are required' },
        { status: 400 }
      )
    }

    /* -------------------- 1. STORE IN DATABASE -------------------- */
    await sql`
      INSERT INTO membership (
        name,
        address_office,
        address_residence,
        telephone_office,
        telephone_residence,
        cell_number,
        email,
        dob,
        qualification,
        working_in_bank,
        since,
        designation,
        remittance,
        dd_no,
        rtgs_utr_no,
        cheque_no,
        signature,
        date,
        place,
        declaration
      ) VALUES (
        ${name},
        ${addressOffice},
        ${addressResidence},
        ${telephoneOffice},
        ${telephoneResidence},
        ${cellNumber},
        ${email},
        ${dob || null},
        ${qualification},
        ${workingInBank},
        ${since},
        ${designation},
        ${remittance},
        ${ddNo},
        ${rtgsUtrNo},
        ${chequeNo},
        ${signature},
        ${date || null},
        ${place},
        ${declaration}
      )
    `

    /* -------------------- 2. SEND EMAIL USING RESEND -------------------- */
    await resend.emails.send({
      from: "BETRA <onboarding@resend.dev>",
      to: ["khushboo.22210887@viit.ac.in"], // 👉 PUT YOUR EMAIL HERE
       

      subject: "New Membership Form Submission",

      html: `
        <h2>New Membership Application</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${cellNumber}</p>
        <p><b>Qualification:</b> ${qualification}</p>
        <p><b>Working In Bank:</b> ${workingInBank}</p>
        <p><b>Since:</b> ${since}</p>
        <p><b>Designation:</b> ${designation}</p>

        <hr/>

        <p><b>Remittance:</b> ${remittance}</p>
        <p><b>DD No:</b> ${ddNo}</p>
        <p><b>RTGS/UTR No:</b> ${rtgsUtrNo}</p>
        <p><b>Cheque No:</b> ${chequeNo}</p>

        <hr/>

        <p><b>Office Address:</b> ${addressOffice}</p>
        <p><b>Residence Address:</b> ${addressResidence}</p>

        <hr/>

        <p><b>Signature:</b> ${signature}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Place:</b> ${place}</p>

        <hr/>

        <p><b>Declaration:</b> ${declaration ? 'Accepted' : 'Not Accepted'}</p>
      `,
    })

    /* -------------------- SUCCESS -------------------- */
    return NextResponse.json(
      { message: 'Saved + Email Sent Successfully' },
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