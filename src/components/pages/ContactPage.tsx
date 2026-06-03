export default function ContactPage() {
  const funItems = [
    { icon: "📍", label: "based in", val: "Kopargaon, Maharashtra" },
    { icon: "🏫", label: "studying at", val: "Sanjivani KBP Polytechnic" },
    { icon: "🎯", label: "focus areas", val: "Edge AI · TinyML · Biomedical" },
    { icon: "🔗", label: "open to", val: "Internships & full-time roles" },
  ];

  return (
    <div className="fade-in text-center pt-8 sm:pt-12 pb-8">
      <p className="text-sm sm:text-base text-muted max-w-[440px] mx-auto mt-4 mb-8 sm:mb-10 leading-[1.7] sm:leading-[1.8] px-4">
        I&apos;m actively looking for internships and full-time roles in AI, systems, and creative tech. Let&apos;s build something that matters.
      </p>
      <div className="flex justify-center gap-2 sm:gap-4 flex-wrap px-4">
        <a
          href="mailto:anushkajoshi7531@gmail.com"
          className="px-4 sm:px-[1.8rem] py-2 sm:py-[0.7rem] rounded-full text-[0.75rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-200 cursor-none border-2 bg-terracotta text-cream border-terracotta hover:bg-transparent hover:text-terracotta"
        >
          Say hello →
        </a>
        <a
          href="https://www.linkedin.com/in/anushka-joshi-5a1bb6297"
          target="_blank"
          rel="noreferrer"
          className="px-4 sm:px-[1.8rem] py-2 sm:py-[0.7rem] rounded-full text-[0.75rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-200 cursor-none border-2 bg-transparent text-espresso border-sand hover:bg-sand hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aaaaaaashu07"
          target="_blank"
          rel="noreferrer"
          className="px-4 sm:px-[1.8rem] py-2 sm:py-[0.7rem] rounded-full text-[0.75rem] sm:text-[0.83rem] font-medium no-underline transition-all duration-200 cursor-none border-2 bg-transparent text-espresso border-sand hover:bg-sand hover:text-ink"
        >
          GitHub
        </a>
      </div>
      <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mt-8 sm:mt-12 pt-8 sm:pt-12 border-t-[0.5px] border-sand px-4">
        {funItems.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-[1.4rem] sm:text-[1.8rem] mb-[0.4rem]">{item.icon}</div>
            <div className="text-[0.65rem] sm:text-[0.72rem] text-muted tracking-[0.08em] uppercase font-mono">{item.label}</div>
            <div className="font-lora text-[0.85rem] sm:text-base text-ink mt-[0.15rem]">{item.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
