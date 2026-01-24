import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, language } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const subject =
      language === "fr"
        ? `Nouveau message de contact de ${name}`
        : `New contact message from ${name}`;

    const htmlContent = `
      <h2>${language === "fr" ? "Nouveau message de contact" : "New Contact Message"}</h2>
      <p><strong>${language === "fr" ? "Nom" : "Name"}:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // TODO: Update 'from' and 'to' email addresses for TechVapor
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "website@contact.techvapor.com", // TODO: Update with actual domain
        to: ["team@techvapor.com"], // TODO: Update with actual email
        subject,
        html: htmlContent,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
