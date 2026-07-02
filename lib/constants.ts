export const SITE = {
  name: "Solz Designs",
  tagline: "Design Beyond The Boundary",
  mission:
    "We design, develop, and deliver digital solutions that make your brand unforgettable.",
  owner: "Mcgyver Chibvongodze",
  facebook: "https://www.facebook.com/profile.php?id=61590005594397",
  instagram: "https://www.instagram.com/solz_designs",
  tiktok: "https://www.tiktok.com/@solz.designs",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SERVICES = [
  {
    title: "Web Portfolio",
    slug: "portfolio",
    price: "$80 – $150",
    phrase: "Showcase your work with a site that impresses.",
    icon: "layout" as const,
    image: "/portfolio%201/portfolio.webp",
    description:
      "A premium portfolio website that puts your work front and centre. Immersive layouts, smooth motion, and editorial typography designed to make every project the hero.",
    includes: [
      "Custom design — no templates",
      "Mobile-first, fully responsive build",
      "Smooth animations & micro-interactions",
      "Performance & SEO optimised",
      "Up to 10 project showcases",
    ],
  },
  {
    title: "E-Commerce / Business Website",
    slug: "e-commerce",
    price: "$500",
    phrase: "Launch your store or business online with confidence.",
    icon: "shopping" as const,
    image: "/e-commerce/e-commerce.webp",
    description:
      "A full-featured online store or business website built to convert visitors into customers. Clean product pages, smooth checkout, and a shopping experience that builds trust and drives sales.",
    includes: [
      "Full e-commerce or business site",
      "Product listings, cart & checkout",
      "Mobile-first, fully responsive build",
      "Performance & SEO optimised",
      "Payment integration ready",
    ],
  },
  {
    title: "Website Maintenance",
    slug: "website-maintenance",
    price: "$150/mo",
    phrase: "Keep your site fast, secure, and always up to date.",
    icon: "database" as const,
    image: "/website%20maintainance/website-maintenance.webp",
    description:
      "Your website is your 24/7 salesperson — keep it running at its best. We handle updates, security patches, performance checks, and content changes so you never have to worry.",
    includes: [
      "Monthly security & software updates",
      "Performance monitoring & fixes",
      "Content & copy updates",
      "Uptime monitoring",
      "Priority support",
    ],
  },
] satisfies {
  title: string;
  slug: string;
  price: string;
  phrase: string;
  icon: "layout" | "shopping" | "database" | "file";
  image: string | null;
  description: string;
  includes: string[];
}[];

export const FEATURES = [
  {
    title: "Affordable Pricing",
    description:
      "Premium quality digital solutions at prices that respect your budget.",
    icon: "tag" as const,
  },
  {
    title: "Professional Design",
    description:
      "Every pixel crafted with intention — refined, modern, and on-brand.",
    icon: "sparkles" as const,
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient workflows mean your project ships on time, every time.",
    icon: "zap" as const,
  },
  {
    title: "Client-Focused Approach",
    description:
      "Your vision leads the process. We listen, iterate, and deliver.",
    icon: "heart" as const,
  },
] as const;

export const STATS = [
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your brand, goals, and audience to shape a clear creative direction.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes evolve into polished visuals that capture your unique identity.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, performant code brings every design detail to life on the web.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Launch, handoff, and ongoing support — your project, ready for the world.",
  },
] as const;
