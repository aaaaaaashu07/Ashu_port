import { PROJECTS } from "@/lib/data";

const TAG_CLASSES: Record<string, string> = {
  tw: "bg-[#EED8C0] text-[#5E3020]",
  ts: "bg-[#D4E8C4] text-[#2D5020]",
  td: "bg-[#E8D8C8] text-[#5E4020]",
};

export default function ProjectsPage() {
  return (
    <div className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 sm:gap-5 lg:gap-6 mt-8">
      {PROJECTS.map((p) => (
        <div
          key={p.title}
          className="bg-card border border-sand/60 hover:border-sand rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 cursor-none hover:shadow-md hover:-translate-y-1"
        >
          <div className="h-1 sm:h-[5px]" style={{ background: p.accent }} />
          <div className="p-3 sm:p-[1.35rem]">
            <div className="font-lora text-[0.95rem] sm:text-[1.1rem] font-bold text-ink mb-1 sm:mb-[0.25rem] leading-tight">{p.title}</div>
            <div className="text-[0.65rem] sm:text-[0.73rem] text-muted/80 tracking-[0.05em] mb-2 sm:mb-[0.65rem] font-mono uppercase">{p.sub}</div>
            <div className="text-[0.8rem] sm:text-[0.87rem] leading-[1.5] sm:leading-[1.7] text-espresso mb-3 sm:mb-[0.9rem]">{p.desc}</div>
            <div className="flex flex-wrap gap-1.5 sm:gap-[0.35rem]">
              {p.tags.map((t) => (
                <span
                  key={t.name}
                  className={`px-2 sm:px-[0.6rem] py-1 sm:py-[0.18rem] rounded-full text-[0.65rem] sm:text-[0.7rem] font-mono font-medium transition-colors duration-200 ${TAG_CLASSES[t.cls] || ""}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
