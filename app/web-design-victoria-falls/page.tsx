import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { LOCATION_BY_SLUG } from "@/lib/locations";
import {
  breadcrumbNode,
  faqNode,
  graph,
  localServiceNode,
  webPageNode,
} from "@/lib/schema";

const SLUG = "web-design-victoria-falls";
// Non-null: the slug is a literal that exists in lib/locations.ts, and the
// build fails loudly here if that ever stops being true.
const location = LOCATION_BY_SLUG.get(SLUG)!;

export const metadata: Metadata = {
  title: location.title,
  description: location.metaDescription,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: location.title,
    description: location.metaDescription,
    url: `/${SLUG}`,
    type: "website",
  },
};

export default function Page() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: location.city, path: `/${SLUG}` },
  ];

  const jsonLd = graph(
    webPageNode({
      path: `/${SLUG}`,
      name: location.title,
      description: location.metaDescription,
      crumbs,
    }),
    breadcrumbNode(crumbs),
    localServiceNode({
      slug: SLUG,
      city: location.city,
      name: location.heading,
      description: location.metaDescription,
    }),
    faqNode(location.faqs, `/${SLUG}`),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <LocationPage location={location} />
    </>
  );
}
