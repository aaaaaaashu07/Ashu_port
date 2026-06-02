import { SKILLS } from "@/lib/data";

export default function AboutPage() {
  const stats = [
    { n: "94%", l: "Diploma aggregate" },
    { n: "1", l: "Published research paper" },
    { n: "4", l: "Major projects shipped" },
    { n: "3rd", l: "Place · Tech-Sprint 2026" },
  ];

  return (
    <div className="fade-in grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-14 items-start mt-10">
      <div>
        <p className="text-base leading-[1.9] text-espresso mb-5">
          I&apos;m a Computer Engineering diploma student at{" "}
          <strong className="text-ink">Sanjivani KBP Polytechnic, Kopargaon</strong> with a 94%
          aggregate. I specialize in <strong className="text-ink">Edge AI, TinyML, and full-stack systems</strong> — building intelligent hardware that works offline, real-time computer vision pipelines, and platforms that solve real-world problems.
        </p>
        <p className="text-base leading-[1.9] text-espresso mb-5">
          Recent work includes an <strong className="text-ink">embedded stethoscope CNN</strong> (91.8% accuracy, 287 KB on ESP32-S3), a <strong className="text-ink">disaster response platform</strong> with live WebSocket coordination, and a <strong className="text-ink">real-time marketplace</strong> with AI-powered multilingual chat. I published research on cardiopulmonary sound classification in IJRDET, Volume 15, Issue 3 (March 2026).
        </p>
        <p className="text-base leading-[1.9] text-espresso mb-5">
          I&apos;m a builder who cares about understanding systems deeply. I completed a 12-week Python internship at ThoughtBliss focusing on clean code and professional workflows. Open to internships and roles in AI, biomedical signals, and systems engineering.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="px-[0.85rem] py-[0.3rem] border-[1.5px] border-sand rounded-full text-[0.75rem] text-espresso font-mono transition-all duration-200 cursor-none hover:-translate-y-0.5 hover:bg-terracotta hover:border-terracotta hover:text-white"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="bg-card border-[0.5px] border-sand rounded-xl p-[1.4rem]"
          >
            <div className="font-lora text-[2.8rem] font-bold text-terracotta leading-none">{s.n}</div>
            <div className="text-[0.75rem] text-muted mt-[0.35rem] tracking-[0.04em]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
