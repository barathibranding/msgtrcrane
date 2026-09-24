import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, service, message } = data as Record<
    string,
    string
  >;

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in your name, phone number and job details." },
      { status: 400 },
    );
  }

  /*
   * ── WIRE UP EMAIL HERE ───────────────────────────────────────────
   * Option A — Resend (recommended):
   *   npm i resend
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *   await resend.emails.send({
   *     from: 'website@msalshamsi.ae',
   *     to: 'MSGTR2013@GMAIL.COM',
   *     subject: `New Enquiry — ${service || 'General'}`,
   *     text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`,
   *   });
   *
   * Option B — Formspree / Web3Forms (no backend needed):
   *   Just point the form action at their endpoint and delete this route.
   * ─────────────────────────────────────────────────────────────────
   */

  console.log("New website enquiry:", { name, phone, email, service, message });

  return NextResponse.json({ ok: true });
}
