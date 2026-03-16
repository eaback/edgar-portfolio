import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  website: "Website",
  platform: "Platform / SaaS",
  mobile: "Mobile app",
  consulting: "Consulting",
  other: "Other",
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !toEmail) {
    console.error("Missing BREVO_API_KEY or CONTACT_EMAIL_TO env vars");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  let body: {
    name?: string;
    email?: string;
    company?: string;
    type?: string;
    message?: string;
    locale?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, company, type, message, locale } = body;

  // Basic validation
  if (!name || !email || !type || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const projectTypeLabel = PROJECT_TYPE_LABELS[type] ?? type;
  const companyLine = company ? `<tr><td style="padding:4px 0;color:#8C8880;font-size:14px;">Company</td><td style="padding:4px 0 4px 16px;font-size:14px;">${company}</td></tr>` : "";

  const htmlContent = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#1A1917;">
      <div style="background:#3B6E52;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">New contact form submission</h1>
        <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">edgarbacker.dev — via ${locale?.toUpperCase() ?? "EN"} locale</p>
      </div>
      <div style="background:#F7F4EF;padding:32px;border-radius:0 0 8px 8px;border:1px solid #E4E0D9;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:4px 0;color:#8C8880;font-size:14px;">Name</td><td style="padding:4px 0 4px 16px;font-size:14px;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:4px 0;color:#8C8880;font-size:14px;">Email</td><td style="padding:4px 0 4px 16px;font-size:14px;"><a href="mailto:${email}" style="color:#3B6E52;">${email}</a></td></tr>
          ${companyLine}
          <tr><td style="padding:4px 0;color:#8C8880;font-size:14px;">Project type</td><td style="padding:4px 0 4px 16px;font-size:14px;">${projectTypeLabel}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #E4E0D9;margin:20px 0;">
        <p style="color:#8C8880;font-size:13px;margin:0 0 8px;">Message</p>
        <p style="font-size:15px;line-height:1.65;white-space:pre-wrap;margin:0;">${message}</p>
        <hr style="border:none;border-top:1px solid #E4E0D9;margin:20px 0;">
        <a href="mailto:${email}?subject=Re: Your project inquiry" style="display:inline-block;background:#3B6E52;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">
          Reply to ${name}
        </a>
      </div>
    </div>
  `;

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Edgar Portfolio", email: toEmail },
        to: [{ email: toEmail, name: "Edgar Backer" }],
        replyTo: { email, name },
        subject: `[Portfolio] ${projectTypeLabel} enquiry from ${name}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Brevo error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
