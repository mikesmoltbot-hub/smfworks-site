'use client';

// SMFLeadCaptureWidget — disabled until production API URL is configured
// To re-enable: set NEXT_PUBLIC_SMF_API_URL in Vercel environment variables
// to a real production URL (not localhost), then uncomment the useEffect below.
//
// The widget was causing a browser permission popup ("smfworks.com wants to
// access other apps and services on this device") because the widget script
// was being loaded from localhost:5000 which doesn't exist in production.

export default function SMFLeadCaptureWidget() {
  return null;
}
