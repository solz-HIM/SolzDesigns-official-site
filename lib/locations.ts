/**
 * Location pages.
 *
 * These exist because Search Console shows real, unserved demand: "web design
 * bulawayo" and its variants drew 28 impressions in three months against no
 * page at all, and "website development victoria falls" drew 13. The site was
 * ranking around position 85 for terms it had nothing relevant to offer.
 *
 * The trap here is the templated city page — the same 600 words with the name
 * swapped, which Google has classified as doorway spam since 2015 and which
 * an LLM will refuse to cite because there is nothing specific to quote.
 *
 * So every field below is written per city from the actual local economy:
 * different industries, different customers, different technical constraints,
 * different questions. If a paragraph would still be true with another city's
 * name in it, it does not belong here.
 */

export type Location = {
  slug: string;
  city: string;
  /** Short label used in the footer's link column. */
  linkLabel: string;
  title: string;
  metaDescription: string;
  /** H1. */
  heading: string;
  /** The opening statement — specific to this city's economy. */
  intro: string;
  /** Why search behaves differently here. */
  context: string;
  /** Sectors we actually see enquiries from in this city. */
  industries: string[];
  /** The concrete local angle — what a site here has to get right. */
  angle: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Cross-links to sibling locations, for internal link flow. */
  related: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "web-design-harare",
    city: "Harare",
    linkLabel: "Web design Harare",
    title: "Web Design Harare — Website Designers in Harare, Zimbabwe",
    metaDescription:
      "Web design in Harare from $80. Custom business websites, online stores and SEO, built by a Harare-based agency and delivered in 5–10 days. Get a fixed quote today.",
    heading: "Web design in Harare",
    intro:
      "Solz Designs is based in Harare and builds websites for businesses across the city — from Borrowdale and Avondale offices to Msasa and Graniteside operations. Being in the same city means we can meet in person when a project needs it, though most of our Harare clients still prefer to run everything over WhatsApp because it is faster.",
    context:
      "Harare is the most competitive search market in Zimbabwe, which cuts both ways. There are more businesses bidding for the same terms, but there are also far more people searching — a Harare restaurant or law firm gets meaningful search volume in a way a smaller town simply does not. The businesses that win here are not the ones with the prettiest sites; they are the ones with pages that answer specific questions, a Google Business Profile that is actually filled in, and a site fast enough to survive a mobile connection in traffic on Samora Machel.",
    industries: [
      "Professional services — law, accounting, consulting",
      "Restaurants and hospitality",
      "Real estate and property management",
      "Private schools and training providers",
      "Medical and dental practices",
      "Retail and wholesale distribution",
    ],
    angle: [
      {
        title: "Local search is the whole game",
        body: "For most Harare businesses, more enquiries come from ranking in the map pack for 'near me' searches than from ranking in the regular results. We set up and optimise your Google Business Profile alongside the website, and make sure the name, address and phone number match exactly across both — mismatches are the single most common reason a Harare business does not appear on the map.",
      },
      {
        title: "Suburb-level intent matters",
        body: "People in Harare search by suburb, not just by city — 'dentist Borrowdale', 'plumber Avondale'. If you serve specific areas, your site needs to say so in plain text on a page Google can index, not only on a contact page map embed that a crawler reads as a blank frame.",
      },
      {
        title: "Built for the connection you actually have",
        body: "Harare mobile data is expensive and inconsistent. A site that loads instantly on office fibre can take fifteen seconds on a phone in a load-shedding brownout with a congested tower. We build to the second case, because that is where your customers are when they look you up.",
      },
    ],
    faqs: [
      // Deliberately no "how much does a website cost" question here. That is
      // answered canonically on /pricing and in the global FAQ set, and
      // repeating it with the city name swapped in is precisely the doorway
      // pattern this file exists to avoid. These four are Harare-only.
      {
        q: "Can we meet in person in Harare?",
        a: "Yes. We are based in Harare, so an in-person meeting is possible for projects where it helps — usually the initial brief for larger e-commerce builds. Most clients skip it, because a thirty-minute WhatsApp video call covers the same ground without either of us sitting in traffic. There is no price difference either way.",
      },
      {
        q: "Do you help with Google Business Profile in Harare?",
        a: "Yes, and it is included with every website build at no extra cost. For a Harare business with a physical address, the Google Business Profile usually generates more enquiries in the first six months than the website's organic rankings do. We claim or fix the listing, align it with your site, and show you how to keep posting to it.",
      },
      {
        q: "Which Harare areas do you work with?",
        a: "All of them. Our Harare clients span the CBD, Borrowdale, Avondale, Highlands, Mount Pleasant, Msasa, Graniteside, Belvedere and Chitungwiza. Because the work is remote by default, your location within Harare has no effect on price or timeline.",
      },
    ],
    related: ["web-design-bulawayo", "web-design-victoria-falls"],
  },

  {
    slug: "web-design-bulawayo",
    city: "Bulawayo",
    linkLabel: "Web design Bulawayo",
    title: "Web Design Bulawayo — Affordable Website Designers in Bulawayo",
    metaDescription:
      "Affordable web design in Bulawayo from $80. Custom websites for Bulawayo manufacturers, retailers and service businesses, delivered remotely in 5–10 days.",
    heading: "Web design in Bulawayo",
    intro:
      "Bulawayo businesses are underserved online, and the search data shows it. People in and around Bulawayo search for web designers every week, and most of the results they get are Harare agencies who never mention Bulawayo, or template resellers charging a monthly subscription for a site the client will never own. We work with Bulawayo clients remotely, at the same fixed prices we quote anyone else.",
    context:
      "Bulawayo is Zimbabwe's industrial city, and that shapes what its businesses need from a website. A Harare retailer is usually chasing walk-in customers within a few kilometres. A Bulawayo engineering firm, steel supplier or logistics operator is more often being evaluated by a buyer in another city — or another country — who found them through a search and is deciding whether they look like a real, capable company. That is a credibility problem more than a footfall problem, and it calls for a different site.",
    industries: [
      "Manufacturing and engineering",
      "Steel, hardware and industrial supply",
      "Logistics and freight",
      "Agriculture and agri-processing",
      "Tourism operators serving Matobo and Hwange",
      "Retail and family businesses",
    ],
    angle: [
      {
        title: "Less competition than Harare",
        body: "Ranking for 'web design Bulawayo' or 'engineering firm Bulawayo' takes a fraction of the effort that the Harare equivalent does, because far fewer Bulawayo businesses have a properly built site. If you are in Bulawayo and your competitors are on Facebook pages and WhatsApp catalogues, a real website with correct technical SEO can reach page one within months rather than years.",
      },
        {
        title: "Built to be evaluated, not just found",
        body: "Industrial and B2B buyers do their research before they call. They want capability, capacity, certifications and past work — in detail, on a page they can read at 22:00 without speaking to anyone. We build those specification and capability pages properly, because for a Bulawayo manufacturer they are the ones that convert.",
      },
      {
        title: "Reaching buyers outside Zimbabwe",
        body: "A great deal of Bulawayo's trade runs south to South Africa and west into Botswana. If that is your market, your site should be findable from those countries too — which means clean technical setup, fast loading on international connections, and content that names the regions and products you actually supply.",
      },
    ],
    faqs: [
      {
        q: "Do you offer affordable web design in Bulawayo?",
        a: "Yes. A portfolio website for a Bulawayo business is $80 to $100 and a full multi-page business website is $500 — the same fixed prices we quote in Harare, with no travel or distance surcharge. There are no monthly fees unless you choose the optional $150 maintenance plan, and you own the site outright either way. If your budget is below that, say so when you enquire: it is usually better to start with a smaller site that is built properly and add to it later than to stretch for pages you do not yet need.",
      },
      {
        q: "Do you have to be in Bulawayo to work with us?",
        a: "No. Solz Designs is based in Harare and works with Bulawayo clients entirely remotely — over WhatsApp, email and video calls. Nothing about the process requires anyone to travel, and Bulawayo clients pay exactly the same as Harare clients. In practice a remote Bulawayo project moves faster than an in-person one, because feedback happens the same day rather than at the next meeting.",
      },
      {
        q: "How quickly can a Bulawayo business rank on Google?",
        a: "Nobody can promise you a position or a date — anyone who does is guessing, because rankings are Google's decision, not a developer's. What can be said honestly is that search competition in Bulawayo is much lower than in Harare, so there is less standing between a well-built site and the first page. A correctly built site with a claimed Google Business Profile and pages that match real local searches gives you the best available chance; how fast it moves depends on your competitors, your reviews, and how consistently you keep the site updated.",
      },
      {
        q: "Can you build a site for a Bulawayo manufacturer or supplier?",
        a: "Yes — industrial and B2B sites are some of our better work, because the requirements are clear. That usually means detailed product or capability pages, downloadable specification sheets, a clear enquiry path for buyers requesting quotes, and structured data so individual products can appear in search on their own rather than only through the homepage.",
      },
    ],
    related: ["web-design-harare", "web-design-victoria-falls"],
  },

  {
    slug: "web-design-victoria-falls",
    city: "Victoria Falls",
    linkLabel: "Web design Victoria Falls",
    title: "Web Design Victoria Falls — Websites for Tourism Businesses",
    metaDescription:
      "Web design and development in Victoria Falls for lodges, tour operators and activity providers. Fast, bookable websites built for international visitors. From $80.",
    heading: "Web design in Victoria Falls",
    intro:
      "Victoria Falls runs on a different economy to the rest of Zimbabwe, and its websites have a different job. Your customer is usually not in the country — they are planning a trip from Johannesburg, London or Sydney, comparing lodges and operators across several tabs, and they will never phone you to ask a question they could not find the answer to. The site has to close that gap on its own.",
    context:
      "This is the one part of Zimbabwe where you are competing internationally by default. A visitor searching 'Victoria Falls sunset cruise' is shown TripAdvisor, Viator, GetYourGuide and a handful of operators — and the aggregators take a substantial cut of every booking made through them. A direct-booking site that ranks is worth considerably more per customer than the same booking through a platform. The same searches also spill across the borders into Livingstone and Kasane, so operators working both sides of the river need pages that address that explicitly.",
    industries: [
      "Lodges, hotels and guest houses",
      "Safari and game-drive operators",
      "Adventure activities — rafting, bungee, helicopter",
      "Tour and transfer companies",
      "Restaurants and bars",
      "Craft and curio retail",
    ],
    angle: [
      {
        title: "Speed matters more here than anywhere",
        body: "Your visitor is loading your site from another continent, often on hotel wifi or roaming data. Every extra second costs bookings, and it costs rankings too — international page speed is a real ranking factor for exactly this kind of query. Our builds are engineered to open fast from outside Zimbabwe, not just from a Harare fibre connection.",
      },
      {
        title: "Winning direct bookings from the aggregators",
        body: "You will not out-rank TripAdvisor for a broad term, and you should not try. You can out-rank it for the specific ones — your own property name, your specific activity, the questions a traveller asks before booking. Those pages take the highest-intent traffic and send it straight to your own booking form instead of a platform's.",
      },
      {
        title: "The Livingstone and Kasane crossover",
        body: "Search demand around the Falls does not respect the border — we see real query volume for Livingstone and Kasane alongside Victoria Falls itself. If you collect from Zambia or run trips into Chobe, saying so on an indexable page captures traffic your competitors are ignoring entirely.",
      },
    ],
    faqs: [
      {
        q: "Do you build booking systems for Victoria Falls lodges and operators?",
        a: "Yes. We build direct enquiry and booking flows, and we integrate with existing booking or channel management systems where you already use one. For smaller operators a well-designed enquiry form with instant WhatsApp notification converts as well as a full booking engine and costs far less to run, so we usually start there.",
      },
      {
        q: "Will my site load quickly for visitors from overseas?",
        a: "Yes. The sites we build are served from a global content delivery network, so a visitor in London or Sydney is served from a nearby edge location rather than from a single server in Africa. This is one of the biggest differences between our builds and a typical locally-hosted WordPress site, and for a tourism business it directly affects both bookings and international rankings.",
      },
      {
        q: "Can you help us take bookings directly instead of through TripAdvisor?",
        a: "That is usually the main goal of the project. The approach is to build pages targeting the specific searches your future guests make — your property name, your particular activity, and the practical questions they ask before committing — rather than competing with aggregators on broad terms. Direct bookings avoid platform commission entirely, so the site typically pays for itself within a handful of bookings.",
      },
      {
        q: "Do you work with operators in Livingstone or Kasane?",
        a: "Yes. We work with businesses on the Zambian and Botswana sides of the Falls as well as in Victoria Falls town. Everything runs remotely over WhatsApp and email, and we quote in USD, so cross-border projects work exactly like local ones.",
      },
    ],
    related: ["web-design-harare", "web-design-bulawayo"],
  },
];

export const LOCATION_BY_SLUG = new Map(LOCATIONS.map((l) => [l.slug, l]));
