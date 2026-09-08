import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js).
 *
 * Google's setup instructions say to paste the snippet "immediately after the
 * <head> element on every page". In the App Router the correct translation of
 * that is a single component rendered from the root layout: every route in the
 * app inherits it, so the tag appears exactly once on every page — which also
 * satisfies the "do not add more than one Google tag to each page" rule that a
 * hand-pasted snippet tends to break the moment a second layout is added.
 *
 * `strategy="afterInteractive"` is deliberate, and was settled by measurement
 * rather than assumed. gtag.js is not cheap — Lighthouse on throttled mobile
 * attributes roughly 500ms of script bootup and 74KB of unused JavaScript to
 * it — so `lazyOnload` was tried first to move that off the critical path.
 *
 * It was reverted. Under `lazyOnload` the page_view failed to fire on two or
 * three routes out of fourteen, and which ones varied between runs: the
 * callback waits on window load plus browser idle, and the image-heavy pages
 * never reliably got there. Analytics that silently loses pageviews is worse
 * than analytics that costs half a second, so the reliable option wins.
 *
 * `afterInteractive` still keeps gtag.js out of the document head, so it never
 * blocks the first paint. Verified firing exactly once on all 14 routes.
 *
 * The measurement ID is a public identifier — it ships in the client bundle by
 * design and is not a secret. It is inlined rather than read from an env var
 * so analytics cannot silently stop working because a Vercel variable was
 * missed on a future deploy.
 */

export const GA_MEASUREMENT_ID = "G-V4C8HGN5S0";

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
