import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl sm:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-3 font-mono text-[10px] tracking-[0.25em] text-ice uppercase sm:mb-4 sm:text-xs sm:tracking-[0.3em]",
          align === "center" && "mx-auto",
        )}
      >
        {label}
      </p>
      <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
