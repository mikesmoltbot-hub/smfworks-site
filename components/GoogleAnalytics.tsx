// Google Analytics 4 — GA ID: G-PWCP8SEN62
// Placed in layout.tsx so it loads on every page automatically.

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-PWCP8SEN62";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
}
