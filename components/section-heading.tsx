import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Section headings carry a two-part structure: a small eyebrow that names the
 * section, and the statement itself. The eyebrow is a real label — it tells
 * you where you are in the page — not decoration.
 *
 * `tone` switches the whole block between the ink and lime panels.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "paper",
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "paper" | "ink";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const onInk = tone === "ink";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "eyebrow flex items-center gap-2.5",
            align === "center" && "justify-center",
            onInk ? "text-olive" : "text-acid",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-1.5 w-1.5 rounded-full",
              onInk ? "bg-ink" : "bg-acid",
            )}
          />
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <Tag
          className={cn(
            "display-lg mt-4",
            onInk ? "text-ink" : "text-paper",
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {lead ? (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              onInk ? "text-olive" : "text-ash",
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
