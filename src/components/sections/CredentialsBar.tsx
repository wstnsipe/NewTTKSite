import { credentialsBar } from "@/lib/content";

export function CredentialsBar() {
  return (
    <section className="bg-[#070F23] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <ul className="flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-6">
          {credentialsBar.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8BA0BB]"
            >
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
