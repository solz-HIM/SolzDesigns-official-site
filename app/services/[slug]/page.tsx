import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { getServiceWhatsAppUrl } from "@/lib/contact";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://solzdesigns.co.zw/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
    <Navigation />
    <main className="min-h-screen bg-bg-primary text-white">
      {service.image ? (
        <div className="relative h-64 w-full sm:h-80 md:h-[28rem]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/50 to-bg-primary" />
        </div>
      ) : (
        <div className="h-40 w-full bg-gradient-to-br from-ice/10 via-white/5 to-bg-primary" />
      )}

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <Link
          href="/#services"
          className="mb-10 inline-block text-sm text-muted transition-colors hover:text-ice"
        >
          ← Back to services
        </Link>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ice">
          Service
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-3 font-heading text-2xl font-bold text-ice sm:text-3xl">
          {service.price}
        </p>

        <p className="mt-8 text-lg leading-relaxed text-white/75">
          {service.description}
        </p>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-white">
            What&apos;s included
          </h2>
          <ul className="mt-5 space-y-4">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 shrink-0 text-ice">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={getServiceWhatsAppUrl(service.title, service.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-block rounded-full bg-ice px-8 py-4 font-semibold text-bg-primary transition-opacity hover:opacity-90"
        >
          Get a Quote on WhatsApp →
        </a>
      </div>
    </main>
    <Footer />
    </>
  );
}
