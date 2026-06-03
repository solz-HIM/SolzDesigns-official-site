export const SITE = {
  name: "Solz Designs",
  tagline: "Design Beyond The Boundary",
  mission:
    "We design, develop, and deliver digital solutions that make your brand unforgettable.",
  owner: "Mcgyver Chibvongodze",
  facebook: "https://www.facebook.com/profile.php?id=61590005594397",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Web Portfolio",
    price: "$80 – $150",
    phrase: "Showcase your work with a site that impresses.",
    icon: "layout" as const,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "E-Commerce / Business Website",
    price: "$500",
    phrase: "Launch your store or business online with confidence.",
    icon: "shopping" as const,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    title: "ATS-Friendly Resume & Cover Letters",
    price: "$10",
    phrase: "Get past the bots and into the interview room.",
    icon: "file" as const,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    title: "Data Entry & Report Writing",
    price: "$20",
    phrase: "Clean data and polished reports, delivered on time.",
    icon: "database" as const,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
] as const;

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
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
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
