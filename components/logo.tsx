import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  size?: number;
};

export function Logo({ className, variant = "full", size = 44 }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Solz Designs — Home"
    >
      <Image
        src="/logo.png"
        alt="Solz Designs logo"
        width={size}
        height={size}
        className="shrink-0 transition-transform duration-500 group-hover:scale-105"
        priority
      />
      {variant === "full" && (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="font-heading text-sm font-semibold tracking-[0.15em] text-white uppercase">
            Solz Designs
          </span>
          <span className="font-heading text-[10px] tracking-[0.25em] text-ice uppercase">
            Design Beyond The Boundary
          </span>
        </span>
      )}
    </Link>
  );
}
