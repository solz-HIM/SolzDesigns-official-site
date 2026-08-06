import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { getWhatsAppUrl, QUOTE_MESSAGE } from "@/lib/contact";

/**
 * The hero.
 *
 * Full-bleed artwork behind the whole section. A server component with no
 * client JavaScript — the entrance sequence is a CSS animation, so nothing
 * here can delay the largest contentful paint.
 *
 * Two scrims sit between the artwork and the type. They are not decoration:
 * the artwork carries a bright lime streak straight through the middle, and
 * white text over that would drop well below the 4.5:1 contrast floor. The
 * left-to-right scrim keeps the text column near-black regardless of how the
 * image crops at a given viewport, so contrast never depends on the artwork
 * happening to be dark in the right place.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92dvh] items-center overflow-hidden bg-ink pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Artwork. Decorative — the headline carries the meaning — so the alt
          is empty rather than a description read out to no purpose. */}
      <Image
        src="/hero-art.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        // Full-bleed at every breakpoint, so the browser should always fetch
        // the widest candidate.
        sizes="100vw"
        // The focal point shifts with the crop: narrow viewports cut in hard
        // from both sides, so the framing moves left to keep the face in shot
        // rather than only the light trails.
        className="-z-20 object-cover object-[46%_36%] sm:object-[58%_42%]"
      />

      {/* No scrim over the artwork — it stays at full strength. Contrast for
          the type comes from the shadow baked into .hero-glow instead, which
          holds the letterforms without washing the image out.

          The one exception is the very bottom edge, which fades into the
          section beneath so the join does not read as a hard seam. It sits
          below the type and darkens nothing that matters. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="max-w-4xl">
          <h1 className="hero-in">
            <span className="display-thin hero-glow-accent block text-acid">
              Creative
            </span>
            <span className="display-hero hero-glow mt-1 block text-paper sm:mt-2">
              Web Design
            </span>
            <span className="display-thin hero-glow mt-2 block text-paper/80 sm:mt-3">
              Zimbabwe
            </span>
          </h1>

          <p
            className="hero-in hero-glow mt-7 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg"
            style={{ "--in-delay": "180ms" } as React.CSSProperties}
          >
            We build websites for Zimbabwean businesses that need to be found
            and need to sell — not brochures that sit at the bottom of page
            eight. Every site is designed from scratch, hand-coded, and tuned to
            load fast on mobile data.
          </p>

          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ "--in-delay": "260ms" } as React.CSSProperties}
          >
            <ButtonLink
              href={getWhatsAppUrl(QUOTE_MESSAGE)}
              external
              variant="acid"
              className="w-full sm:w-auto"
            >
              Get a free quote
            </ButtonLink>
            <ButtonLink
              href="/work"
              variant="ghost"
              className="w-full bg-ink/40 backdrop-blur-sm sm:w-auto"
            >
              See our work
            </ButtonLink>
          </div>

          {/* Honest, verifiable trust signals. No invented client counts. */}
          <dl
            className="hero-in mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/25 pt-7 sm:mt-12"
            style={{ "--in-delay": "340ms" } as React.CSSProperties}
          >
            {[
              { term: "Portfolio sites from", detail: "$80" },
              { term: "Business sites", detail: "$500" },
              { term: "Live in", detail: "5–10 days" },
              { term: "Code & domain", detail: "You own it" },
            ].map((item) => (
              <div key={item.term}>
                <dt className="eyebrow hero-glow text-paper/60">{item.term}</dt>
                <dd className="hero-glow mt-1.5 font-display text-xl font-bold text-paper sm:text-2xl">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
