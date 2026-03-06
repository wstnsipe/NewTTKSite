import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#04091A] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,146,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,146,58,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center">
        <p
          className="font-display font-black text-gold/20 leading-none select-none"
          style={{ fontSize: "clamp(100px, 20vw, 200px)" }}
        >
          404
        </p>
        <div className="-mt-6 mb-6">
          <div className="gold-rule mx-auto" />
        </div>
        <h1 className="font-display font-bold text-white text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-[#8BA0BB] text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          That page doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold text-[#04091A] font-sans font-semibold text-sm px-7 py-3.5 rounded hover:bg-gold-light transition-all duration-200 shadow-[0_4px_20px_rgba(196,146,58,0.4)]"
        >
          Back to Home
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
