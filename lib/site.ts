/**
 * Single source of truth for business facts.
 *
 * Everything user-visible AND everything in structured data reads from here,
 * so the NAP (name / address / phone) that Google sees can never drift from
 * the NAP a human sees. Drift is the most common local-SEO own-goal.
 */

export const SITE = {
  name: "Solz Designs",
  legalName: "Solz Designs",
  url: "https://solzdesigns.co.zw",
  tagline: "Design Beyond The Boundary",

  /** Used as the <title> fallback and in the org schema. */
  shortDescription:
    "Web design agency in Harare, Zimbabwe building fast, high-converting websites for businesses nationwide.",

  founder: "Mcgyver Chibvongodze",
  foundingDate: "2026",

  // --- NAP ---------------------------------------------------------------
  phone: "+263778231792",
  phoneDisplay: "+263 77 823 1792",
  whatsapp: "263778231792",
  email: "mcgyver8605@gmail.com",
  city: "Harare",
  region: "Harare Province",
  country: "Zimbabwe",
  countryCode: "ZW",
  latitude: -17.8252,
  longitude: 31.0335,

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61590005594397",
    instagram: "https://www.instagram.com/solz_designs",
    tiktok: "https://www.tiktok.com/@solz.designs",
  },

  /** Business hours, in schema.org openingHours shorthand. */
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "08:00", close: "17:00" },
    { days: ["Saturday"], open: "09:00", close: "13:00" },
  ],
} as const;

export const SOCIAL_LINKS = [
  SITE.social.facebook,
  SITE.social.instagram,
  SITE.social.tiktok,
];

/**
 * Cities we genuinely serve remotely. Ordered by real search demand measured
 * in Search Console, not by population.
 */
export const SERVICE_AREAS = [
  "Harare",
  "Bulawayo",
  "Victoria Falls",
  "Mutare",
  "Gweru",
  "Kwekwe",
  "Masvingo",
  "Chitungwiza",
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type Service = {
  title: string;
  /** Short label for nav, cards and breadcrumbs. */
  short: string;
  slug: string;
  /** Display price, exactly as a human should read it. */
  price: string;
  /** Numeric floor for schema.org Offer. Null when priced per project. */
  priceValue: number | null;
  priceCurrency: "USD";
  priceType: "from" | "exact" | "monthly" | "quote";
  turnaround: string;
  summary: string;
  /** Long-form, page-level copy. Written once, never templated per city. */
  description: string;
  includes: string[];
  image: string | null;
  imageAlt: string;
};

/**
 * Slugs deliberately match the URLs the old site already had
 * (/services/portfolio, /services/e-commerce, /services/website-maintenance)
 * so whatever crawl history those paths earned is kept rather than redirected.
 */
export const SERVICES: Service[] = [
  {
    title: "Portfolio Websites",
    short: "Portfolio",
    slug: "portfolio",
    price: "$80 – $100",
    priceValue: 80,
    priceCurrency: "USD",
    priceType: "from",
    turnaround: "5 working days",
    summary:
      "A sharp one-page or small site for individuals, freelancers and personal brands.",
    description:
      "A portfolio site has one job: convince someone who has never met you, in under a minute, that you are worth contacting. So it is built around your work rather than around a navigation menu — large images, fast loading, and a contact route that takes one tap. Everything is designed from scratch around what you actually do; there is no template underneath it.",
    includes: [
      "Custom design — never a template",
      "Built mobile-first and tested on real devices",
      "Contact form and WhatsApp button",
      "Technical SEO configured at build time",
      "You own the code and the domain",
    ],
    image: "/work/effort-wafawarova-portfolio.webp",
    imageAlt: "Portfolio website designed and built by Solz Designs",
  },
  {
    title: "Business Websites",
    short: "Business",
    slug: "business-website",
    price: "$500",
    priceValue: 500,
    priceCurrency: "USD",
    priceType: "exact",
    turnaround: "7–10 working days",
    summary:
      "A full multi-page site for an established business that needs to be found on Google.",
    description:
      "This is the build most Zimbabwean businesses actually need: several pages, each one written and structured around something your customers search for, rather than a single page that says everything and ranks for nothing. It matters here specifically that template builders ship two to four megabytes of JavaScript before your first word of text appears — on mobile data your customer pays for that twice, once in loading time and once in bundle. These builds ship a fraction of it, so the site opens quickly on a mid-range Android on a patchy connection, which is how most of your customers will actually see it.",
    includes: [
      "Up to 8 custom-designed pages",
      "Full technical SEO configuration",
      "Structured data so Google and AI assistants can read your business",
      "Google Search Console and Analytics set up at launch",
      "Copywriting guidance for every page",
      "You own the code and the domain",
    ],
    image: null,
    imageAlt: "",
  },
  {
    title: "E-Commerce & Online Stores",
    short: "E-Commerce",
    slug: "e-commerce",
    price: "$500",
    priceValue: 500,
    priceCurrency: "USD",
    priceType: "exact",
    turnaround: "2–4 weeks",
    summary:
      "Product pages, cart and checkout wired to payment methods Zimbabweans actually use.",
    description:
      "An online store is only as good as its checkout. We build product catalogues, cart and checkout flows that work with the payment routes available locally — EcoCash, bank transfer, and card via international gateways — plus a stock and order view you can run from your phone. The storefront is built to be indexed, so your individual products can appear in search results rather than sitting invisible behind JavaScript.",
    includes: [
      "Product catalogue with search and filtering",
      "Cart, checkout and order management",
      "Local payment routes wired up",
      "Product structured data so items can rank individually",
      "Training so you can add stock yourself",
    ],
    image: "/work/sunnies-by-mel-store.webp",
    imageAlt: "E-commerce store designed and built by Solz Designs",
  },
  {
    title: "Website Maintenance & Care",
    short: "Maintenance",
    slug: "website-maintenance",
    price: "$150 / month",
    priceValue: 150,
    priceCurrency: "USD",
    priceType: "monthly",
    turnaround: "Same-day for urgent issues",
    summary:
      "Updates, backups, uptime monitoring and content changes — handled.",
    description:
      "Websites drift. Dependencies go out of date, contact details change, prices move, and a form quietly stops sending until someone notices months later. This plan covers the upkeep: we patch dependencies before they become vulnerabilities, keep off-site backups we have actually tested restoring from, monitor uptime so we usually know something broke before you do, and make your content and price changes for you. If your site goes down on a Saturday, that is our problem to solve, not yours. It is entirely optional — decline it and your site keeps working exactly the same.",
    includes: [
      "Security patching and dependency updates",
      "Daily off-site backups with tested restores",
      "Uptime monitoring with alerting",
      "Content, copy and price updates",
      "Priority support on WhatsApp",
    ],
    image: null,
    imageAlt: "",
  },
  {
    title: "SEO Optimisation",
    short: "SEO",
    slug: "seo-optimisation",
    // No published figure: SEO scope varies too much between a five-page site
    // and a 200-product store to quote honestly in advance. Inventing a number
    // here would be worse than asking.
    price: "Quoted per project",
    priceValue: null,
    priceCurrency: "USD",
    priceType: "quote",
    turnaround: "First report in 14 days",
    summary:
      "Get found for what your customers actually search — not vanity keywords.",
    description:
      "Most Zimbabwean business sites are invisible for a boring reason: nothing on the page matches what people type, and nothing tells Google what the business is or where it operates. We start from your Search Console data — real queries, real positions — then fix the technical foundation, rebuild the pages that have demand behind them, and set up the structured data that lets you appear in Google's AI Overviews and in ChatGPT and Perplexity answers. You get a monthly report showing movement on the terms that actually bring enquiries, not a list of rankings for phrases nobody searches.",
    includes: [
      "Search Console and Analytics set up properly",
      "Technical audit — crawling, indexing, speed",
      "Keyword research from real local demand",
      "Structured data for rich and AI results",
      "Monthly reporting on positions and enquiries",
    ],
    image: null,
    imageAlt: "",
  },
];

export const SERVICE_BY_SLUG = new Map(SERVICES.map((s) => [s.slug, s]));

// ---------------------------------------------------------------------------
// Work
//
// Real projects only. Deliberately no invented metrics — "increased sales
// 240%" on a site with no analytics history is the fastest way to lose the
// trust the page is trying to build. What each project actually did is enough.
// ---------------------------------------------------------------------------

export type Project = {
  client: string;
  slug: string;
  /** The kind of build. Real information, unlike an arbitrary 01/02/03. */
  type: string;
  year: string;
  sector: string;
  summary: string;
  /** What the build had to solve. */
  brief: string;
  /** How it was built, and why those decisions were made. */
  approach: string;
  /** What the finished site does for the client. No invented metrics. */
  outcome: string;
  scope: string[];
  /** The stack, for the reader who wants to know. */
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    client: "Madfutsal",
    slug: "madfutsal",
    type: "League & booking site",
    year: "2026",
    sector: "Sport — 5-a-side football",
    liveUrl: "https://madfutsal.co.zw",
    summary:
      "The home of 5-a-side football at Madokero Mall — a full league site with standings, fixtures, teams and player profiles, plus pitch hire at $20 an hour.",
    brief:
      "Madfutsal runs the Emagumeni Futsal League out of Madokero Mall and hires its caged pitches out by the hour, and both sides of that were living in WhatsApp groups. League standings were screenshots that went stale the moment a match finished, and every booking meant a conversation. The site had to serve two audiences at once without feeling like two websites: players and supporters who come for the table, the fixtures and their own stats, and anyone who just wants a pitch on Saturday and needs the price and the location inside five seconds.",
    approach: "The site is organised around the two jobs rather than around a menu. Anything to do with hiring a pitch — the $20 hourly rate, the Madokero Mall location on Kirkman Road, and the booking action — is reachable from the first screen without scrolling, because that visitor is usually deciding in under a minute and often already standing outside. Everything to do with the league sits behind its own clear set of sections: Table, Teams, Players, News and Grounds, so a supporter checking where their club sits after a Saturday fixture goes straight there and never wades through booking copy.\n\nThe visual direction follows the football rather than the fashion. Matches at Madokero are played under floodlights on caged artificial turf, so the interface is built dark, with a club red and a pitch-marking blue carrying the accents against near-black. That reads correctly on a phone at the ground at night, which is where a large share of the traffic actually happens — someone checking the table between games, on patchy signal, on a screen at half brightness.",
    outcome: "The league now has a single public record that stays current, instead of standings circulating as screenshots that go stale the moment a fixture ends. Pitch hire has a permanent, searchable home rather than living inside a WhatsApp thread. And because every team and player has its own page, the site gives the clubs something of their own to share — which brings their supporters back to Madfutsal rather than to a group chat.",
    scope: [
      "League table, fixtures and results",
      "Team and player profiles with stats",
      "Pitch hire with pricing and location up front",
      "News section for match reports",
      "Floodlit-pitch look — dark UI built for evening football",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Structured data"],
    image: "/work/madfutsal-league.webp",
    imageAlt:
      "Madfutsal homepage showing the High Intensity, Zero Limits headline over a football illustration, with pitch booking and league table calls to action",
  },
  {
    client: "Sunnies by Mel",
    slug: "sunnies-by-mel",
    type: "E-commerce store",
    year: "2026",
    sector: "Retail — eyewear & accessories",
    liveUrl: "https://sunniesbymel.co.zw",
    summary:
      "An online store for a Zimbabwean eyewear brand, with a separate accessories range and a checkout built for local payment methods.",
    brief:
      "Mel was selling sunglasses through Instagram DMs — every order meant a back-and-forth conversation about stock, price and payment. The store had to carry two distinct ranges without feeling like two websites, and it had to let a customer complete a purchase without ever needing to message anyone.",
    approach: "The two ranges were the central design problem. Sunnies and Tiny Treasures have different buyers and different price points, but putting them behind separate storefronts would have split a small brand in half. They are handled instead as distinct top-level sections sharing one identity, one cart and one checkout — so a customer who arrives for sunglasses finds the accessories without being redirected anywhere, and Mel maintains a single catalogue rather than two.\n\nThe product photography leads. Eyewear is bought on how it looks, so the layout gives images the full width of the screen rather than cropping them into a grid of thumbnails, and the typography stays quiet so it never competes with the product. Almost all of the traffic arrives from an Instagram link on a phone, so the mobile layout is the primary design rather than a scaled-down desktop one, and the store is built to load fast enough that someone arriving from a story does not leave before the first image resolves.",
    outcome: "Orders no longer require a conversation. A customer can browse both ranges, see what is available, and complete a purchase without messaging anyone — removing the back-and-forth that used to sit between interest and payment. Mel updates the catalogue herself as new stock lands. The store also gives the brand a fixed address that belongs to her: an Instagram account can be restricted or lost overnight, and the entire business had been built inside one.",
    scope: [
      "Product catalogue across two ranges",
      "Cart and checkout flow",
      "Full-bleed lifestyle photography treatment",
      "Mobile-first — most traffic arrives from Instagram",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Product schema"],
    image: "/work/sunnies-by-mel-store.webp",
    imageAlt:
      "Sunnies by Mel online store homepage, showing the Shade The Ordinary hero and Shop Collection call to action",
  },
  {
    client: "Effort Wafawarova",
    slug: "effort-wafawarova",
    type: "Portfolio site",
    year: "2026",
    sector: "Technology — cloud developer",
    liveUrl: "https://effortportfolio.vercel.app/",
    summary:
      "A developer portfolio for a Harare-based cloud engineer, built to be read by recruiters in under a minute.",
    brief:
      "Effort needed a site that made his stack and availability legible immediately — a recruiter skims a portfolio for seconds before deciding. The whole first screen had to answer who he is, what he works in, and whether he is open to work, without a scroll.",
    approach: "A recruiter gives a portfolio seconds, so the whole first screen answers three questions before any scrolling happens: who he is, what he works in, and whether he is available. His name is set in large gradient type as the anchor, with a live status card reading Open to work beside a portrait, and a stack card listing Python, JavaScript, PHP, Vue.js, Laravel and AWS. A row of credentials — years of experience, projects shipped, ICDL certification, University of Zimbabwe, Harare — sits directly beneath, so the qualifying facts are visible without a click.\n\nBelow that the structure stays deliberately short: About, Skills, Projects and Contact, with the résumé download treated as the primary action rather than buried in a footer. The interface is dark with a green terminal accent — a deliberate nod to the tooling his audience works in, and a signal of the kind of engineering he does before a single project has been read.",
    outcome: "Effort has one link that does the work of a CV, a covering note and an availability status at the same time, and it holds up when a recruiter opens it on a phone. Because it sits on his own domain rather than a profile on someone else's platform, he controls what it says, and it stays online whether or not he is actively looking.",
    scope: [
      "Single-screen credential summary",
      "Projects and skills sections",
      "Résumé download as the primary conversion",
      "Dark interface with a typographic identity",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/work/effort-wafawarova-portfolio.webp",
    imageAlt:
      "Effort Wafawarova developer portfolio homepage, showing his name in large gradient type and an open-to-work status card",
  },
];

// ---------------------------------------------------------------------------
// Process — a genuine sequence, which is the only reason it gets numbered.
// ---------------------------------------------------------------------------

export const PROCESS = [
  {
    title: "Discover",
    duration: "Day 1–2",
    description:
      "A call about your business, not your website. Who buys from you, what stops them, and what a win looks like in enquiries or sales.",
  },
  {
    title: "Design",
    duration: "Day 3–6",
    description:
      "You see real screens, not a mood board. We iterate on the actual layout and copy until the homepage earns its job.",
  },
  {
    title: "Build",
    duration: "Day 7–10",
    description:
      "Hand-coded in Next.js and tested on real devices and real connection speeds — not just a fast laptop.",
  },
  {
    title: "Launch",
    duration: "Day 10",
    description:
      "Domain, hosting, Search Console and Analytics configured. Then a handover session so you can run it yourself.",
  },
] as const;

// ---------------------------------------------------------------------------
// FAQs — answers written to be quotable verbatim by an AI assistant.
// Each answer opens with a direct, self-contained factual sentence.
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    q: "How much does a website cost in Zimbabwe?",
    a: "A professional website in Zimbabwe costs between $80 and $500 at Solz Designs. A portfolio website is $80 to $100, a full multi-page business website is $500, and an e-commerce store with cart and checkout is $500. Ongoing maintenance is $150 per month and is entirely optional. Every price is fixed and quoted in writing before work begins — there are no hourly charges, no hidden fees, and no change in price if the project takes us longer than we expected. Two costs sit outside the quote because you own them directly: a domain at roughly $20–$30 a year, and hosting, which for the way we build is usually free.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A portfolio or small business website takes 5–10 working days from the day we receive your content. E-commerce stores take 2–4 weeks depending on how many products and payment methods are involved. The timeline is agreed in writing before the project starts, and the main thing that delays a build is waiting on content from the client — so we help you prepare it up front.",
  },
  {
    q: "Do you work with businesses outside Harare?",
    a: "Yes. Solz Designs is based in Harare but works remotely across all of Zimbabwe, including Bulawayo, Victoria Falls, Mutare, Gweru and Masvingo, as well as with clients abroad. The entire process runs over WhatsApp, email and video calls, so where you are makes no difference to the price or the timeline.",
  },
  {
    q: "Do I own my website after it is built?",
    a: "Yes, completely. You own the domain, the hosting account and the source code. Solz Designs registers everything in your name, not ours, and you receive the full codebase at handover. You are never locked into us — you can move the site to another developer at any time without asking permission or paying a release fee.",
  },
  {
    q: "Is hosting and a domain included in the price?",
    a: "Hosting and the domain are billed separately because they are ongoing costs you own directly. A .co.zw domain costs roughly $20–$30 per year and hosting for the sites we build is typically $0–$20 per month, since our Next.js builds run on free or low-cost tiers that would cost far more on traditional WordPress hosting. We set both up for you at no extra charge.",
  },
  {
    q: "Can you redesign or fix my existing website?",
    a: "Yes. Redesigns are a large part of our work. We audit what your current site earns in Search Console first, so that we keep the pages and URLs that already bring traffic and rebuild the rest. Preserving working URLs and redirecting old ones correctly is what stops a redesign from destroying rankings — it is the step most redesigns skip.",
  },
  {
    q: "What makes a website rank on Google in Zimbabwe?",
    a: "Three things, in order: pages that match what people actually search, a site fast enough to crawl and use on mobile data, and clear signals about where you operate. Most Zimbabwean business sites fail the first one — they have a single Home, About and Contact page and nothing targeting real search demand. Adding pages that answer specific questions your customers ask is usually worth more than any technical fix.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Standard terms are 50% to start and 50% on launch. For e-commerce projects over $500 we can split payment across three milestones. We accept EcoCash, bank transfer and USD cash, and every project is invoiced with a written scope so you know exactly what you are paying for.",
  },
] as const;
