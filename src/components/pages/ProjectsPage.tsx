import { PROJECTS } from "@/lib/data";

const TAG_CLASSES: Record<string, string> = {
  tw: "bg-[#EED8C0] text-[#5E3020]",
  ts: "bg-[#D4E8C4] text-[#2D5020]",
  td: "bg-[#E8D8C8] text-[#5E4020]",
};

export default function ProjectsPage() {
  return (
    <div className="fade-in grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-[1.4rem] mt-8">
      {PROJECTS.map((p) => (
        <div
          key={p.title}
          className="bg-card border-2 border-sand rounded-xl overflow-hidden transition-all duration-300 cursor-none hover:-translate-y-[5px] hover:rotate-[0.3deg] hover:shadow-[6px_6px_0_#C9A882]"
        >
          <div className="h-[5px]" style={{ background: p.accent }} />
          <div className="p-[1.35rem]">
            <div className="font-lora text-[1.1rem] font-bold text-ink mb-[0.25rem]">{p.title}</div>
            <div className="text-[0.73rem] text-muted tracking-[0.05em] mb-[0.65rem] font-mono">{p.sub}</div>
            <div className="text-[0.87rem] leading-[1.7] text-espresso mb-[0.9rem]">{p.desc}</div>
            <div className="flex flex-wrap gap-[0.35rem]">
              {p.tags.map((t) => (
                <span
                  key={t.name}
                  className={`px-[0.6rem] py-[0.18rem] rounded-full text-[0.7rem] font-mono ${TAG_CLASSES[t.cls] || ""}`}
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
