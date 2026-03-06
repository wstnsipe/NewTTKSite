interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  centered?: boolean;
  light?: boolean; // true = white text on dark backgrounds
}

export function SectionHeader({
  eyebrow,
  headline,
  body,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`eyebrow ${light ? "!text-gold" : "text-gold"}`}>
          {eyebrow}
        </div>
      )}
      <h2
        className={`section-heading whitespace-pre-line ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {headline}
      </h2>
      {body && (
        <p
          className={`mt-4 font-sans text-base leading-relaxed ${
            light ? "text-ash" : "text-navy/60"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
