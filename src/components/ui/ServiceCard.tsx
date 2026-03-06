import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  gradient: string; // Tailwind gradient classes e.g. "from-[#0C1A38] to-[#07111F]"
}

export function ServiceCard({
  number,
  title,
  description,
  href,
  gradient,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-br ${gradient} border border-white/5 hover:border-gold/30 p-8 min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(196,146,58,0.12)]`}
    >
      {/* Background number watermark */}
      <span
        aria-hidden="true"
        className="absolute -top-2 -right-2 font-display font-black text-[120px] leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-gold/[0.07] transition-colors duration-300"
      >
        {number}
      </span>

      {/* Gold top accent bar — reveals on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-t-lg" />

      {/* Number badge */}
      <span className="text-gold font-sans text-xs font-bold tracking-widest uppercase mb-6">
        {number}
      </span>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-200 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-ash leading-relaxed flex-1">
        {description}
      </p>

      {/* Learn more */}
      <div className="mt-6 flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase">
        <span>Learn more</span>
        <svg
          className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
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
      </div>
    </Link>
  );
}
