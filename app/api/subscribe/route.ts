import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "1SEyilU8t9iWmR1kCuT6RTccql3jQGRPYorP9MRQuLbs";
const SHEET_RANGE = "Sheet1!A:B";

function getGoogleAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set");
  }
  const credentials = JSON.parse(keyJson);
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Check for duplicates
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_RANGE,
    });

    const rows = existing.data.values || [];
    const alreadySubscribed = rows.some(
      (row) => row[0]?.toLowerCase() === email.toLowerCase()
    );

    if (alreadySubscribed) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    // Append new subscriber
    const timestamp = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return NextResponse.json({ message: "Subscribed!" }, { status: 200 });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
