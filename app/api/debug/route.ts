import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  // Access via bracket notation to prevent static inlining
  const key = process.env["RESEND_API_KEY"] ?? "";
  return NextResponse.json(
    {
      keyLength: key.length,
      keyStart: key.substring(0, 6),
      keyEnd: key.substring(key.length - 4),
      ts: Date.now(),
    },
    {
      headers: { "Cache-Control": "no-store, max-age=0" },
    }
  );
}
