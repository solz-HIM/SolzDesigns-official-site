import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Cta } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/sections/process";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getWhatsAppUrl, QUOTE_MESSAGE } from "@/lib/contact";
import { LOCATIONS } from "@/lib/locations";
import {
  breadcrumbNode,
  faqNode,
  graph,
  localServiceNode,
  webPageNode,
} from "@/lib/schema";
import { SERVICES } from "@/lib/site";

/**
 * The national page.
 *
 * This URL matters more than any other on the site: it drew 184 of the site's
 * 208 total impressions in the last three months, ranking around position 80.
 * It already has whatever crawl history and authority this domain has, so it
 * is rewritten in place rather than replaced — the URL does not change.
 *
 * Its job is different from the city pages. Those answer "who can build me a
 * site *here*". This one answers "how does web development work in Zimbabwe",
 * which is the broader, more informational query the impressions are coming
 * from — and the kind of question AI assistants answer by quoting a source.
 */

const TITLE = "Web Development Zimbabwe — Custom Builds";
const DESCRIPTION =
  "Custom web development in Zimbabwe — hand-coded, not templates. What it costs, how long it takes, and the four questions to ask any developer first.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/web-development-zimbabwe" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/web-development-zimbabwe",
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Web development Zimbabwe", path: "/web-development-zimbabwe" },
];

const CHECKLIST = [
  {
    title: "Ask who owns the domain",
    body: "The domain must be registered in your business's name, not the developer's. If a developer registers it under their own account, they control your web address — and businesses discover this at the worst possible moment, usually during a dispute. Ask for the registrar login before you pay anything.",
  },
  {
    title: "Ask what happens if you leave",
    body: "You should be able to take your site to another developer without permission or a release fee. If the answer involves a proprietary platform or a monthly subscription that switches the site off when it lapses, you are renting, not buying — price it accordingly.",
  },
  {
    title: "Ask what the site weighs",
    body: "Ask for the page weight in megabytes. A well-built business site should be well under one megabyte on first load. Many template builds ship three to four, which on Zimbabwean mobile data is both a real cost to your visitor and a real ranking penalty.",
  },
  {
    title: "Ask how you will be found",
    body: "A site is not marketing on its own. Ask specifically whether Search Console will be set up, whether a sitemap will be submitted, and whether the pages target anything people actually search. If those questions get a vague answer, the site will be invisible no matter how it looks.",
  },
];

const STACK = [
  {
    term: "Next.js and React",
    detail:
      "An open-source framework built on React and widely used for large commercial sites. Pages are pre-rendered to static HTML, so they arrive complete instead of being assembled in the visitor's browser — faster to load, and far easier for Google to crawl than a site that only appears once JavaScript has run.",
  },
  {
    term: "Global edge delivery",
    detail:
      "Sites are served from the network location nearest the visitor rather than from a single machine. A customer in Harare and a buyer in Johannesburg both get a nearby copy.",
  },
  {
    term: "Structured data",
    detail:
      "Machine-readable markup describing your business, services, prices and location — the information Google's AI Overviews, ChatGPT and Perplexity read when deciding what to say about you.",
  },
  {
    term: "Core Web Vitals",
    detail:
      "Google's own loading, interactivity and visual-stability measurements are treated as build requirements, not as something to fix later once rankings disappoint.",
  },
];

const FAQS_NATIONAL = [
  {
    q: "What does web development cost in Zimbabwe?",
    a: "Solz Designs charges $80 to $100 for a portfolio site, $500 for a full multi-page business website, and $500 for an e-commerce store — fixed prices quoted in writing before work starts. Prices across the Zimbabwean market vary a great deal, and the variation reflects the cost of running the business behind the website at least as much as it reflects the website itself: an agency with an office, a sales team and account managers has to recover that somewhere. When comparing quotes, ask what is actually included and insist on a fixed figure rather than an hourly estimate.",
  },
  {
    q: "What is the best web development company in Zimbabwe?",
    a: "There is no single best one — it depends on what you need. A large agency suits a corporate with committee approvals and a budget to match. A small studio like Solz Designs suits a business that wants a modern technical standard without the overhead, and that would rather talk directly to the person building the site than to an account manager. Rather than trusting any ranking, ask every developer the same four questions: who owns the domain, what happens if I leave, how heavy is the site, and how will I actually be found. The answers separate the good from the merely expensive faster than a portfolio does.",
  },
  {
    q: "How long does web development take in Zimbabwe?",
    a: "A business website takes 5–10 working days at Solz Designs, and an e-commerce store takes 2–4 weeks, measured from the day we receive your content. Timelines quoted elsewhere are often much longer, and in our experience that usually reflects how many projects are queued ahead of yours rather than how long the building itself takes. Whoever you hire, ask for the delivery date in writing and ask what specifically would delay it — the honest answer is almost always 'waiting for content from you', which is something you can prepare for in advance.",
  },
  {
    q: "Should I use WordPress or a custom-built website in Zimbabwe?",
    a: "For most Zimbabwean businesses, a custom static build is the better choice. WordPress carries ongoing costs that are easy to miss: paid hosting capable of running PHP and a database, plugin licences, and regular security patching, because an unpatched WordPress site is a genuine target for automated attacks. A brochure or business site built the way we build it has no database and no admin login to attack at all, runs on free or near-free hosting, and loads considerably faster. Online stores are different — a store needs somewhere to keep products and orders, so that build does involve a database, and we secure and maintain it accordingly. WordPress still makes sense when a large team needs to publish content daily.",
  },
  {
    q: "Can Zimbabwean developers build for international clients?",
    a: "Yes, and it is common. Solz Designs works with clients abroad as well as across Zimbabwe, quoting in USD and running everything over WhatsApp, email and video calls. Time zones are rarely an issue — Zimbabwe sits within a couple of hours of most of Europe and shares a working day with the Middle East and much of Asia.",
  },
  {
    q: "Do I need a .co.zw domain for a Zimbabwean business?",
    a: "Not necessarily. A .co.zw domain is a mild signal to Google that you serve Zimbabwe and can read as more locally credible to Zimbabwean customers, at roughly $20–$30 per year. A .com works equally well if you also serve customers abroad, and location is communicated to Google through your Google Business Profile and on-page content regardless. Many businesses register both and redirect one.",
  },
];

export default function Page() {
  const jsonLd = graph(
    webPageNode({
      path: "/web-development-zimbabwe",
      name: TITLE,
      description: DESCRIPTION,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    localServiceNode({
      slug: "web-development-zimbabwe",
      city: "Harare",
      name: "Web development in Zimbabwe",
      description: DESCRIPTION,
    }),
    faqNode(FAQS_NATIONAL, "/web-development-zimbabwe"),
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
          eyebrow="Zimbabwe"
          title="Web development Zimbabwe"
          lead="Custom-built websites for Zimbabwean businesses — hand-coded in Next.js, not assembled from a template. Here is what that means, what it costs, and how to tell a good developer from an expensive one."
          crumbs={crumbs}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={getWhatsAppUrl(QUOTE_MESSAGE)}
              external
              variant="ink"
              className="w-full sm:w-auto"
            >
              Get a fixed quote
            </ButtonLink>
            <ButtonLink href="/pricing" variant="ghostInk" className="w-full sm:w-auto">
              See full pricing
            </ButtonLink>
          </div>
        </PageHero>

        {/* The buyer's checklist — the genuinely useful part of this page */}
        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[88rem]">
            <SectionHeading
              eyebrow="Before you hire anyone"
              title={
                <>
                  Four questions that{" "}
                  <span className="text-acid">separate good from expensive</span>
                </>
              }
              lead="Ask these of any Zimbabwean web developer, including us. The answers tell you more than a portfolio does."
            />

            <ol className="mt-14 grid gap-4 sm:grid-cols-2">
              {CHECKLIST.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 80} className="h-full">
                    <div className="flex h-full flex-col rounded-card border border-ink-line bg-ink-soft p-7 sm:p-8">
                      <span className="font-display text-4xl leading-none font-extrabold text-acid">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display-md mt-6 text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ash">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How we build */}
        <section className="on-acid bg-acid px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="The stack"
                tone="ink"
                title="How we build"
                lead="Four technical decisions that determine whether a Zimbabwean website is fast, findable and cheap to run."
              />
            </div>
            {/* A ul rather than a dl: <Reveal> wraps each row in its own div,
                which puts dt/dd two levels below the dl and breaks the
                description-list contract. */}
            <ul className="lg:col-span-7">
              {STACK.map((item, i) => (
                <li key={item.term}>
                  <Reveal delay={i * 70}>
                    <div className="border-b border-ink/15 py-6">
                      <h3 className="display-md text-ink">{item.term}</h3>
                      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-olive sm:text-base">
                        {item.detail}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[88rem]">
            <SectionHeading
              eyebrow="Services"
              title="What we develop"
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service, i) => (
                <li key={service.slug}>
                  <Reveal delay={i * 80} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full cursor-pointer flex-col rounded-card border border-ink-line bg-ink-soft p-7 transition-colors hover:border-acid/50"
                    >
                      <span className="eyebrow text-acid">{service.short}</span>
                      <h3 className="display-sm mt-6 text-paper">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                        {service.summary}
                      </p>
                      <span className="mt-6 font-display text-xl font-bold text-paper">
                        {service.price}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Process />

        <Faq
          items={FAQS_NATIONAL}
          eyebrow="Zimbabwe questions"
          title="Web development in Zimbabwe, answered"
        />

        <section className="border-t border-ink-line bg-ink px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-[88rem]">
            <h2 className="eyebrow text-acid">Web design by city</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    prefetch={false}
                    className="inline-flex rounded-pill border border-ink-line px-5 py-2.5 font-display text-sm text-ash transition-colors hover:border-acid hover:text-acid"
                  >
                    Web design in {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
