import Link from "next/link";

type Variant = "gold" | "outline-white" | "outline-navy" | "navy";

interface ButtonProps {
  label: string;
  href: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
}

const base =
  "inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide transition-all duration-200 rounded px-7 py-3.5";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy-deep hover:bg-gold-light shadow-[0_2px_16px_rgba(196,146,58,0.3)] hover:shadow-[0_4px_24px_rgba(196,146,58,0.5)] hover:-translate-y-px",
  "outline-white":
    "border border-white/50 text-white hover:border-white hover:bg-white/10",
  "outline-navy":
    "border border-navy text-navy hover:bg-navy hover:text-white",
  navy: "bg-navy text-white hover:bg-navy-mid hover:-translate-y-px",
};

export function Button({
  label,
  href,
  variant = "gold",
  className = "",
  showArrow = true,
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {label}
      {showArrow && (
        <svg
          className="w-3.5 h-3.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </Link>
  );
}
