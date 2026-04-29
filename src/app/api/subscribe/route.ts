// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = 7;

export async function POST(req: NextRequest) {
  const { email, firstName, lastName } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName || "",
        LASTNAME: lastName || "",
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (res.status === 201 || res.status === 204) {
    return NextResponse.json({ success: true });
  }

  const data = await res.json();
  console.error("Brevo error:", data);
  return NextResponse.json(
    { error: data.message || "Subscription failed" },
    { status: 500 }
  );
}
