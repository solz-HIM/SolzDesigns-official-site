/**
 * Structured data.
 *
 * Emitted as a single connected @graph rather than a pile of separate script
 * tags. Every node has a stable @id and references the others, so Google and
 * the LLM crawlers resolve one coherent entity ("Solz Designs, a web design
 * agency in Harare") instead of several disconnected fragments.
 *
 * A note on expectations: Google restricted FAQ rich results to government and
 * health sites in 2023, so FAQPage no longer wins blue-link real estate. It is
 * still worth emitting — AI Overviews, ChatGPT and Perplexity read it directly
 * when deciding what to quote.
 */

import { FAQS, SERVICE_AREAS, SERVICES, SITE, SOCIAL_LINKS } from "@/lib/site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const FOUNDER_ID = `${SITE.url}/#founder`;

type JsonLd = Record<string, unknown>;

export const organizationNode: JsonLd = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.shortDescription,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE.url}/#logo`,
    url: `${SITE.url}/logo.png`,
    contentUrl: `${SITE.url}/logo.png`,
    caption: `${SITE.name} logo`,
  },
  image: { "@id": `${SITE.url}/#logo` },
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.foundingDate,
  founder: { "@id": FOUNDER_ID },
  // ASCII hyphen, not an en-dash: Google tolerates either, but some
  // third-party parsers only pattern-match the "$80-$500" form.
  priceRange: "$80-$500",
  currenciesAccepted: "USD",
  paymentAccepted: "EcoCash, Bank Transfer, Cash",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.latitude,
    longitude: SITE.longitude,
  },
  areaServed: [
    ...SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
    { "@type": "Country", name: SITE.country },
  ],
  knowsAbout: [
    "Web design",
    "Web development",
    "Search engine optimisation",
    "E-commerce development",
    "Website maintenance",
    "Next.js",
    "Core Web Vitals",
  ],
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: SOCIAL_LINKS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web design and SEO services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `${SITE.url}/services/${s.slug}`,
        serviceType: s.short,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: SITE.country },
      },
      // Services quoted per project carry no priceSpecification at all.
      // Emitting a placeholder price would be a false claim in machine-readable
      // form, which is exactly the kind of thing that earns a manual action.
      ...(s.priceValue !== null
        ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              price: s.priceValue,
              priceCurrency: s.priceCurrency,
              ...(s.priceType === "from" ? { minPrice: s.priceValue } : {}),
            },
          }
        : {}),
    })),
  },
};

export const founderNode: JsonLd = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: SITE.founder,
  jobTitle: "Founder & Lead Designer",
  worksFor: { "@id": ORG_ID },
  url: `${SITE.url}/about`,
};

export const websiteNode: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-ZW",
};

export type Crumb = { name: string; path: string };

export function breadcrumbNode(crumbs: Crumb[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}${crumbs[crumbs.length - 1]?.path ?? ""}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function faqNode(
  items: ReadonlyArray<{ q: string; a: string }> = FAQS,
  pagePath = "",
): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.url}${pagePath}#faq`,
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function webPageNode({
  path,
  name,
  description,
  crumbs,
}: {
  path: string;
  name: string;
  description: string;
  crumbs?: Crumb[];
}): JsonLd {
  return {
    "@type": "WebPage",
    "@id": `${SITE.url}${path}#webpage`,
    url: `${SITE.url}${path}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-ZW",
    ...(crumbs
      ? { breadcrumb: { "@id": `${SITE.url}${path}#breadcrumb` } }
      : {}),
  };
}

export function serviceNode(slug: string): JsonLd | null {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@type": "Service",
    "@id": `${SITE.url}/services/${s.slug}#service`,
    name: s.title,
    serviceType: s.short,
    description: s.description,
    url: `${SITE.url}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: [
      ...SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
      { "@type": "Country", name: SITE.country },
    ],
    ...(s.priceValue !== null
      ? {
          offers: {
            "@type": "Offer",
            price: s.priceValue,
            priceCurrency: s.priceCurrency,
            availability: "https://schema.org/InStock",
            url: `${SITE.url}/services/${s.slug}`,
          },
        }
      : {}),
  };
}

/**
 * A Service scoped to one city, for the location pages.
 *
 * This is the node that tells Google "this page is about web design *in
 * Bulawayo specifically*", which is the association the site was missing
 * entirely — it ranked around position 85 for Bulawayo terms with no page and
 * no local signal of any kind.
 */
export function localServiceNode({
  slug,
  city,
  name,
  description,
}: {
  slug: string;
  city: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    "@type": "Service",
    "@id": `${SITE.url}/${slug}#service`,
    name,
    serviceType: "Web design",
    description,
    url: `${SITE.url}/${slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "Country", name: SITE.country } },
    offers: {
      "@type": "Offer",
      price: 80,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * Wraps nodes into the final @graph document, escaped for safe embedding in a
 * <script> tag.
 *
 * JSON.stringify does not escape `<`, so a string containing "</script>"
 * would terminate the tag early and everything after it would be parsed as
 * HTML. Nothing here is user-supplied today — every value is a build-time
 * constant — but this output is injected via dangerouslySetInnerHTML on every
 * page, and the day someone adds a blog post or a service description
 * containing that sequence, it becomes stored XSS.
 *
 * Escaping `<` to its < form keeps the JSON semantically identical (the
 * parser resolves the escape back to `<`) while making the string inert to the
 * HTML tokeniser. U+2028/U+2029 are escaped for the same reason: they are
 * valid in JSON but terminate lines in older JS parsers.
 */
export function graph(...nodes: Array<JsonLd | null>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter((n): n is JsonLd => n !== null),
  })
    .replace(/[<\u2028\u2029]/g, (c) =>
      c === "<" ? "\u003c" : c === "\u2028" ? "\u2028" : "\u2029",
    );
}

/** The nodes that belong on every page. */
export const baseNodes = [organizationNode, founderNode, websiteNode];
