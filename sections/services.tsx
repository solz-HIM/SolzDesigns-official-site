"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { MagneticButton } from "@/components/magnetic-button";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import {
  GENERAL_INQUIRY_MESSAGE,
  getServiceWhatsAppUrl,
  getWhatsAppUrl,
} from "@/lib/contact";
import { SERVICES } from "@/lib/constants";

function ServiceCard3D({
  title,
  price,
  phrase,
  image,
  href,
}: {
  title: string;
  price: string;
  phrase: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ice focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
      aria-label={`Enquire about ${title} on WhatsApp`}
    >
      <CardContainer containerClassName="py-2 sm:py-4" className="h-full w-full">
        <CardBody className="group/card relative mx-auto h-auto w-full min-h-[380px] max-w-none cursor-pointer rounded-2xl border border-white/10 bg-bg-primary p-0 transition-colors duration-300 hover:border-ice/30 [transform-style:preserve-3d] sm:min-h-[420px]">
          <CardItem translateZ={40} className="w-full">
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl sm:h-44">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
            </div>
          </CardItem>

          <div className="flex w-full flex-col p-5 sm:p-6">
            <CardItem
              translateZ={70}
              className="w-full font-heading text-lg font-semibold leading-snug text-white sm:text-xl"
            >
              {title}
            </CardItem>

            <CardItem
              translateZ={90}
              className="mt-3 w-full font-heading text-2xl font-bold text-white sm:text-3xl"
            >
              {price}
            </CardItem>

            <CardItem
              translateZ={50}
              className="mt-3 w-full text-sm leading-relaxed text-white/80"
            >
              {phrase}
            </CardItem>

            <CardItem
              translateZ={30}
              className="mt-4 w-full text-xs font-medium tracking-wide text-ice uppercase"
            >
              Tap to enquire →
            </CardItem>
          </div>

          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(165,243,252,0.06), transparent 70%)",
            }}
            aria-hidden
          />
        </CardBody>
      </CardContainer>
    </a>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-bg-primary px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Services"
          title="Digital Solutions Tailored To You"
          description="Tap a card to enquire on WhatsApp. Transparent pricing, premium execution."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard3D
              key={service.title}
              title={service.title}
              price={service.price}
              phrase={service.phrase}
              image={service.image}
              href={getServiceWhatsAppUrl(service.title, service.price)}
            />
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <MagneticButton
            href={getWhatsAppUrl(GENERAL_INQUIRY_MESSAGE)}
            external
            variant="secondary"
            className="w-full max-w-xs sm:w-auto"
          >
            Discuss Your Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
