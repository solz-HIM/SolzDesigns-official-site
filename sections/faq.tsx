import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FAQS } from "@/lib/site";

/**
 * Built on native <details>/<summary>: keyboard accessible for free, announced
 * correctly by screen readers for free, and — the part that matters here —
 * the answers are present in the HTML whether or not they are open.
 *
 * A JavaScript accordion that mounts its answers on click hides this content
 * from the crawlers we most want reading it. These answers are written to be
 * lifted verbatim into an AI Overview, so they have to be there on first byte.
 */
export function Faq({
  items = FAQS,
  eyebrow = "Questions",
  title = "Straight answers",
}: {
  items?: ReadonlyArray<{ q: string; a: string }>;
  eyebrow?: string;
  title?: React.ReactNode;
}) {
  return (
    <section id="faq" className="bg-ink px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            lead="The things people ask before they hire us. If yours isn't here, message us — we answer on WhatsApp within a few hours."
          />
        </div>

        <div className="lg:col-span-8">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 60, 300)}>
              <details className="group border-b border-ink-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-lg font-semibold text-paper transition-colors duration-200 hover:text-acid sm:text-xl [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg font-semibold sm:text-xl">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-line text-acid transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 text-sm leading-relaxed text-ash sm:text-base">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
