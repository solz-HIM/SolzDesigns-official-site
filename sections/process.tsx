import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PROCESS } from "@/lib/site";

/**
 * The one place on this site where numbering is honest: these steps happen in
 * this order, and the number tells you how far through a project you are. The
 * day range beside each step is the commitment the numbers exist to make
 * concrete.
 */
export function Process() {
  return (
    <section
      id="process"
      className="bg-ink px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Ten days, <span className="text-acid">start to live</span>
            </>
          }
          lead="No mood boards, no month-long discovery phase. You see real screens by day three and the site is online by day ten."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-ink-line bg-ink-soft p-7 sm:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-5xl leading-none font-extrabold text-acid">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-ash">{step.duration}</span>
                  </div>

                  <h3 className="display-sm mt-8 text-paper">{step.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-ash">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
