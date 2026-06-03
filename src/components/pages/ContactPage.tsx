export default function ContactPage() {
  const funItems = [
    { icon: "📍", label: "based in", val: "Kopargaon, Maharashtra" },
    { icon: "🏫", label: "studying at", val: "Sanjivani KBP Polytechnic" },
    { icon: "🎯", label: "focus areas", val: "Edge AI · TinyML · Biomedical" },
    { icon: "🔗", label: "open to", val: "Internships & full-time roles" },
  ];

  return (
    <div className="fade-in text-center pt-6 sm:pt-12 pb-8 px-4">
      <p className="text-sm sm:text-base text-muted max-w-[440px] mx-auto mt-2 sm:mt-4 mb-6 sm:mb-10 leading-relaxed">
        I&apos;m actively looking for internships and full-time roles in AI, systems, and creative tech. Let&apos;s build something that matters.
      </p>
      <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-10 sm:mb-12">
        <a
          href="mailto:anushkajoshi7531@gmail.com"
          className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[0.7rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-300 cursor-none border-2 bg-terracotta text-cream border-terracotta hover:shadow-md hover:-translate-y-0.5 font-semibold"
        >
          Say hello →
        </a>
        <a
          href="https://www.linkedin.com/in/anushka-joshi-5a1bb6297"
          target="_blank"
          rel="noreferrer"
          className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[0.7rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-300 cursor-none border-2 border-sand bg-cream/50 hover:bg-sand hover:text-ink text-espresso font-semibold"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aaaaaaashu07"
          target="_blank"
          rel="noreferrer"
          className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[0.7rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-300 cursor-none border-2 border-sand bg-cream/50 hover:bg-sand hover:text-ink text-espresso font-semibold"
        >
          GitHub
        </a>
      </div>
      <div className="flex justify-center gap-3 sm:gap-8 flex-wrap mt-6 sm:mt-12 pt-6 sm:pt-12 border-t border-sand/50">
        {funItems.map((item) => (
          <div key={item.label} className="text-center flex-1 min-w-[120px] sm:min-w-auto">
            <div className="text-[1.2rem] sm:text-[1.8rem] mb-2 sm:mb-[0.4rem] opacity-80">{item.icon}</div>
            <div className="text-[0.6rem] sm:text-[0.72rem] text-muted/70 tracking-[0.08em] uppercase font-mono font-medium">{item.label}</div>
            <div className="font-lora text-[0.8rem] sm:text-base text-ink mt-1 sm:mt-[0.15rem] leading-snug">{item.val}</div>
          </div>
        ))}}
      </div>
    </div>
  );
}
