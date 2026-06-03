import { SKILLS } from "@/lib/data";

export default function AboutPage() {
  const stats = [
    { n: "94%", l: "Diploma aggregate" },
    { n: "1", l: "Published research paper" },
    { n: "4", l: "Major projects shipped" },
    { n: "3rd", l: "Place · Tech-Sprint 2026" },
  ];

  return (
    <div className="fade-in grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 sm:gap-10 md:gap-14 items-start mt-8 sm:mt-10">
      <div>
        <p className="text-sm sm:text-base leading-[1.7] sm:leading-[1.9] text-espresso mb-3 sm:mb-5">
          I&apos;m a Computer Engineering diploma student at{" "}
          <strong className="text-ink font-semibold">Sanjivani KBP Polytechnic, Kopargaon</strong> with a 94%
          aggregate. I specialize in <strong className="text-ink font-semibold">Edge AI, TinyML, and full-stack systems</strong> — building intelligent hardware that works offline, real-time computer vision pipelines, and platforms that solve real-world problems.
        </p>
        <p className="text-sm sm:text-base leading-[1.7] sm:leading-[1.9] text-espresso mb-3 sm:mb-5">
          Recent work includes an <strong className="text-ink font-semibold">embedded stethoscope CNN</strong> (91.8% accuracy, 287 KB on ESP32-S3), a <strong className="text-ink font-semibold">disaster response platform</strong> with live WebSocket coordination, and a <strong className="text-ink font-semibold">real-time marketplace</strong> with AI-powered multilingual chat. I published research on cardiopulmonary sound classification in IJRDET, Volume 15, Issue 3 (March 2026).
        </p>
        <p className="text-sm sm:text-base leading-[1.7] sm:leading-[1.9] text-espresso mb-6 sm:mb-8">
          I&apos;m a builder who cares about understanding systems deeply. I completed a 12-week Python internship at ThoughtBliss focusing on clean code and professional workflows. Open to internships and roles in AI, biomedical signals, and systems engineering.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="px-3 sm:px-[0.85rem] py-1.5 sm:py-[0.3rem] border border-sand/60 hover:border-terracotta rounded-full text-[0.65rem] sm:text-[0.75rem] text-espresso hover:text-terracotta font-mono transition-all duration-300 cursor-none hover:shadow-sm hover:bg-cream"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 mt-8 md:mt-0">
        {stats.map((s) => (
          <div
            key={s.l}
            className="bg-gradient-to-br from-card to-cream border border-sand/50 hover:border-sand/80 rounded-lg sm:rounded-xl p-3 sm:p-[1.4rem] transition-all duration-300 hover:shadow-sm"
          >
            <div className="font-lora text-[2.2rem] sm:text-[2.8rem] font-bold bg-gradient-to-r from-terracotta to-sand bg-clip-text text-transparent leading-none">{s.n}</div>
            <div className="text-[0.65rem] sm:text-[0.75rem] text-muted/80 mt-2 sm:mt-[0.35rem] tracking-[0.03em] font-medium">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
