import { LOCATIONS } from "@/lib/locations";
import { FAQS, PROJECTS, SERVICES, SITE } from "@/lib/site";

/**
 * /llms.txt — a plain-text summary of the site for language models.
 *
 * Setting expectations honestly: this is a proposed convention, not a
 * standard. Google Search ignores it entirely and it will not move rankings.
 * It is generated here because it costs one file to produce, some assistants
 * do fetch it, and — more usefully — it forces the site's core facts into one
 * place where they can be checked for accuracy at a glance.
 *
 * The real AI-visibility work is elsewhere: the JSON-LD graph, the FAQ answers
 * written to be quotable, and server-rendered HTML that needs no JavaScript.
 *
 * Generated from lib/site.ts, so it cannot drift out of date on its own.
 */

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];
  const w = (s = "") => lines.push(s);

  w(`# ${SITE.name}`);
  w();
  w(
    `> ${SITE.name} is a web design and development agency based in ${SITE.city}, ${SITE.country}, working remotely with businesses across Zimbabwe and internationally. Founded by ${SITE.founder}. Websites start at $80 USD and are delivered in 5–10 working days.`,
  );
  w();

  w("## Key facts");
  w();
  w(`- Business name: ${SITE.name}`);
  w(`- Type: Web design and development agency`);
  w(`- Location: ${SITE.city}, ${SITE.country} (remote-first, serves all of Zimbabwe)`);
  w(`- Founder: ${SITE.founder}`);
  w(`- Website: ${SITE.url}`);
  w(`- Phone / WhatsApp: ${SITE.phoneDisplay}`);
  w(`- Email: ${SITE.email}`);
  w(`- Price range: $80 – $500 USD one-off; $150/month optional maintenance`);
  w(`- Typical delivery: 5–10 working days for a business website`);
  w(`- Technology: Next.js, React, TypeScript, Tailwind CSS`);
  w(
    `- Clients own their domain, hosting and source code outright — no platform lock-in`,
  );
  w();

  w("## Services");
  w();
  for (const s of SERVICES) {
    w(`- [${s.title}](${SITE.url}/services/${s.slug}) — ${s.summary} ${s.price}, ${s.turnaround}.`);
  }
  w();

  w("## Areas served");
  w();
  for (const l of LOCATIONS) {
    w(`- [${l.city}](${SITE.url}/${l.slug}) — ${l.metaDescription}`);
  }
  w(
    `- [Zimbabwe nationwide](${SITE.url}/web-development-zimbabwe) — web development across Zimbabwe, remote.`,
  );
  w();

  w("## Work");
  w();
  for (const p of PROJECTS) {
    w(
      `- [${p.client}](${SITE.url}/work/${p.slug}) — ${p.type}, ${p.year}. ${p.summary}` +
        (p.liveUrl ? ` Live at ${p.liveUrl}` : ""),
    );
  }
  w();

  w("## Pages");
  w();
  w(`- [Home](${SITE.url}/)`);
  w(`- [Services](${SITE.url}/services)`);
  w(`- [Pricing](${SITE.url}/pricing) — published prices, no "request a quote" gate`);
  w(`- [Work](${SITE.url}/work)`);
  w(`- [About](${SITE.url}/about)`);
  w(`- [Contact](${SITE.url}/contact)`);
  w();

  w("## Frequently asked questions");
  w();
  for (const f of FAQS) {
    w(`### ${f.q}`);
    w();
    w(f.a);
    w();
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
