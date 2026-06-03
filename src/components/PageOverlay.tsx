"use client";
import { useRef } from "react";
import { PageKey } from "@/lib/types";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";

interface PageConfig {
  label: string;
  title: string;
  Component: React.ComponentType;
}

const PAGES: Record<PageKey, PageConfig> = {
  about: { label: "01 — About", title: "Anushka Joshi", Component: AboutPage },
  projects: { label: "02 — Projects", title: "Things I've built", Component: ProjectsPage },
  research: { label: "03 — Research", title: "Published work", Component: ResearchPage },
  contact: { label: "04 — Contact", title: "Let's build something real.", Component: ContactPage },
};

interface PageOverlayProps {
  activePage: PageKey | null;
  onClose: () => void;
  onHoverInteractive: (on: boolean) => void;
}

export default function PageOverlay({ activePage, onClose, onHoverInteractive }: PageOverlayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isOpen = activePage !== null;
  const page = activePage ? PAGES[activePage] : null;
  const Component = page?.Component;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transition-opacity duration-[450ms] ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cream" />

      {/* Content */}
      <div
        ref={scrollRef}
        className="relative z-10 h-full overflow-y-auto overscroll-contain page-scroll"
      >
        {/* Back button */}
        <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur-md border-b border-sand/30">
          <button
            className="flex items-center gap-2 sm:gap-[0.6rem] px-3 sm:px-7 py-3 sm:py-4 text-[0.65rem] sm:text-[0.75rem] font-mono tracking-[0.12em] uppercase text-muted hover:text-terracotta transition-colors duration-300 cursor-none w-full text-left font-medium"
            onClick={onClose}
            onMouseEnter={() => onHoverInteractive(true)}
            onMouseLeave={() => onHoverInteractive(false)}
          >
            <svg className="w-4 h-4 stroke-current fill-none stroke-2 flex-shrink-0" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to city
          </button>
        </div>

        {/* Page title */}
        <div className="pt-6 sm:pt-12 pb-3 sm:pb-4 px-4 sm:px-8 max-w-[960px] mx-auto border-b border-sand/20">
          <div className="text-[0.6rem] sm:text-[0.68rem] tracking-[0.25em] uppercase text-sand/70 mb-2 font-mono font-medium">
            {page?.label}
          </div>
          <div className="font-lora text-[clamp(1.6rem,5vw,3.8rem)] font-bold text-ink leading-[1.1]">
            {page?.title}
          </div>
        </div>

        {/* Page content */}
        <div className="px-4 sm:px-8 pb-20 max-w-[960px] mx-auto pt-6 sm:pt-8">
          {Component && <Component />}
        </div>
      </div>
    </div>
  );
}
