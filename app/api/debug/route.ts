import { NextResponse } from "next/server";
export async function GET() {
  const key = process.env.RESEND_API_KEY || "";
  return NextResponse.json({
    keyLength: key.length,
    keyStart: key.substring(0, 6),
    keyEnd: key.substring(key.length - 4),
  });
}
