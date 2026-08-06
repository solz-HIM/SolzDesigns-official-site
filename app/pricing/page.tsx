import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getWhatsAppUrl } from "@/lib/contact";
import { breadcrumbNode, faqNode, graph, webPageNode } from "@/lib/schema";
import { SITE } from "@/lib/site";

const TITLE = "Website Design Pricing in Zimbabwe — What a Website Costs";
const DESCRIPTION =
  "What a website actually costs in Zimbabwe: $80 for a one-page site, $500 for a full business website, from $500 for e-commerce. Fixed prices, no hidden fees, no monthly lock-in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/pricing" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

/**
 * "How much does a website cost in Zimbabwe" is the highest-intent question in
 * this market and almost every local agency answers it with "contact us for a
 * quote". Publishing the actual numbers is both the conversion play and the
 * ranking play — it is the page an AI assistant can quote when someone asks.
 */
const TIERS = [
  {
    name: "Portfolio",
    price: "$80 – $100",
    priceValue: 80,
    unit: "one-off",
    best: "Freelancers, personal brands and anyone showing work",
    features: [
      "Custom-designed portfolio site",
      "Contact form and WhatsApp button",
      "Mobile-first responsive build",
      "Google Search Console set up",
      "Live in 5 working days",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$500",
    priceValue: 500,
    unit: "one-off",
    best: "Established businesses that need to be found on Google",
    features: [
      "Up to 8 custom-designed pages",
      "Full technical SEO configuration",
      "Structured data for rich and AI results",
      "Google Business Profile set up",
      "Copywriting guidance for every page",
      "Live in 7–10 working days",
    ],
    featured: true,
  },
  {
    name: "E-Commerce",
    price: "$500",
    priceValue: 500,
    unit: "one-off",
    best: "Anyone selling products online",
    features: [
      "Everything in Business",
      "Product catalogue with search",
      "Cart and checkout flow",
      "Local payment routes wired up",
      "Product schema so items rank individually",
      "Live in 2–4 weeks",
    ],
    featured: false,
  },
];

const ADDONS = [
  {
    name: "Website maintenance",
    price: "$150 / month",
    note: "Optional. Cancel any time — the site is yours either way.",
  },
  {
    name: "SEO optimisation",
    price: "Quoted per project",
    note: "Scope varies too much between a five-page site and a 200-product store to publish one figure honestly.",
  },
];

const NOT_INCLUDED = [
  {
    item: "Domain name",
    cost: "~$20–$30 / year for .co.zw",
    why: "Registered in your name, so you own it outright. We handle the registration at no charge.",
  },
  {
    item: "Hosting",
    cost: "$0–$20 / month",
    why: "The sites we build run on modern platforms with generous free tiers. Most of our clients pay nothing at all.",
  },
];

export default function PricingPage() {
  const pricingFaqs = [
    {
      q: "How much does a website cost in Zimbabwe?",
      a: "A professional website in Zimbabwe costs between $80 and $500 at Solz Designs. A portfolio website is $80 to $100, a full multi-page business website is $500, and an e-commerce store with cart and checkout is $500. These are fixed prices, quoted in writing before any work begins, and they do not change if the build takes longer than we expected. Optional maintenance is $150 per month. Prices across the Zimbabwean market vary widely — always ask any developer for a written fixed quote rather than an hourly estimate, because an hourly estimate is not a price.",
    },
    {
      q: "Are there any hidden costs?",
      a: "No. The quoted price covers design, build, testing and launch. Two costs sit outside it because you own them directly: a domain name at roughly $20–$30 per year, and hosting at $0–$20 per month depending on traffic. We set both up for you at no extra charge and register them in your name, not ours. Nothing else is billed unless you ask for work outside the agreed scope, and that is quoted separately and approved by you before it starts. If we underestimated the job, that is our problem to absorb, not yours to pay for.",
    },
    {
      q: "Do I have to pay monthly?",
      a: "No. Website builds are a one-off payment. The $150 per month maintenance plan is entirely optional — you can decline it and your site keeps working exactly the same. We mention this because subscription website builders charge monthly forever and you lose the site the moment you stop paying. That is not how this works.",
    },
    {
      q: "What are the payment terms?",
      a: "Fifty percent to start and fifty percent on launch. For e-commerce projects over $500 we can split it across three milestones instead. We accept EcoCash, bank transfer and USD cash, and every project starts with a written scope so you know exactly what the payment covers.",
    },
    {
      q: "Why is Solz Designs cheaper than a traditional agency?",
      a: "Because there is no office, no sales team and no account managers between you and the person building your site. Solz Designs is founder-led and runs remotely, so the overheads that make up a large part of a traditional agency's quote do not exist here. The build standard is the same either way — the same Core Web Vitals targets, the same structured data, the same mobile-first testing. What changes is the cost of the business around the work, not the work.",
    },
  ];

  const jsonLd = graph(
    webPageNode({ path: "/pricing", name: TITLE, description: DESCRIPTION, crumbs }),
    breadcrumbNode(crumbs),
    faqNode(pricingFaqs, "/pricing"),
    {
      "@type": "OfferCatalog",
      "@id": `${SITE.url}/pricing#catalog`,
      name: "Website design pricing",
      itemListElement: TIERS.map((t, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: t.name,
        description: t.best,
        priceCurrency: "USD",
        price: t.priceValue,
        seller: { "@id": `${SITE.url}/#organization` },
      })),
    },
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Navigation tone="ink" />
      <main id="main">
        <PageHero
          eyebrow="Pricing"
          title="What a website costs"
          lead="Most agencies here make you ask. Here are the actual numbers, so you can work out whether we are in your budget before you send a single message."
          crumbs={crumbs}
        />

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem]">
            <ul className="grid gap-4 lg:grid-cols-3">
              {TIERS.map((tier, i) => (
                <li key={tier.name}>
                  <Reveal delay={i * 90} className="h-full">
                    <div
                      className={`flex h-full flex-col rounded-card p-7 sm:p-9 ${
                        tier.featured
                          ? "bg-acid text-ink"
                          : "border border-ink-line bg-ink-soft"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h2
                          className={`eyebrow ${tier.featured ? "text-olive" : "text-acid"}`}
                        >
                          {tier.name}
                        </h2>
                        {tier.featured ? (
                          <span className="eyebrow rounded-pill bg-ink px-3 py-1.5 text-acid">
                            Most chosen
                          </span>
                        ) : null}
                      </div>

                      <p
                        className={`mt-7 font-display text-4xl leading-none font-extrabold sm:text-5xl ${
                          tier.featured ? "text-ink" : "text-paper"
                        }`}
                      >
                        {tier.price}
                      </p>
                      <p
                        className={`mt-2 text-xs ${tier.featured ? "text-olive" : "text-ash"}`}
                      >
                        {tier.unit}
                      </p>

                      <p
                        className={`mt-6 text-sm leading-relaxed ${
                          tier.featured ? "text-olive" : "text-ash"
                        }`}
                      >
                        {tier.best}
                      </p>

                      <ul className="mt-7 flex-1 space-y-3.5">
                        {tier.features.map((f) => (
                          <li
                            key={f}
                            className={`flex items-start gap-3 text-sm ${
                              tier.featured ? "text-ink" : "text-ash"
                            }`}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`mt-0.5 shrink-0 ${tier.featured ? "text-ink" : "text-acid"}`}
                              aria-hidden="true"
                            >
                              <path d="m5 13 4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <ButtonLink
                        href={getWhatsAppUrl(
                          `Hi Solz Designs! I'm interested in the ${tier.name} package (${tier.price}).`,
                        )}
                        external
                        variant={tier.featured ? "ink" : "acid"}
                        className="mt-8 w-full"
                      >
                        Get started
                      </ButtonLink>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Add-ons + the honest "not included" table */}
        <section className="bg-ink px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Add-ons" title="Optional extras" />
              <ul className="mt-8">
                {ADDONS.map((a, i) => (
                  <li key={a.name}>
                    <Reveal delay={i * 60}>
                      <div className="flex items-baseline justify-between gap-4 border-b border-ink-line py-5">
                        <div>
                          <p className="font-display font-semibold text-paper">
                            {a.name}
                          </p>
                          <p className="mt-1 text-xs text-ash">{a.note}</p>
                        </div>
                        <p className="shrink-0 font-display font-bold text-acid">
                          {a.price}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="Full transparency"
                title="What isn't included"
                lead="Two costs sit outside our quote, because they belong to you rather than to us. We set both up at no charge."
              />
              <ul className="mt-8">
                {NOT_INCLUDED.map((n, i) => (
                  <li key={n.item}>
                    <Reveal delay={i * 80}>
                      <div className="border-b border-ink-line py-5">
                        <div className="flex items-baseline justify-between gap-4">
                          <p className="font-display font-semibold text-paper">
                            {n.item}
                          </p>
                          <p className="shrink-0 font-display text-sm font-bold text-acid">
                            {n.cost}
                          </p>
                        </div>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-ash">
                          {n.why}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Faq
          items={pricingFaqs}
          eyebrow="Pricing questions"
          title="Costs, answered"
        />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
