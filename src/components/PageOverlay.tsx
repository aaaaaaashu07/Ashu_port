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
        <div className="sticky top-0 z-10 bg-cream/90 backdrop-blur-[8px] border-b border-b-sand/50">
          <button
            className="flex items-center gap-[0.6rem] px-7 py-4 text-[0.75rem] font-mono tracking-[0.12em] uppercase text-muted transition-colors duration-200 cursor-none hover:text-terracotta w-full text-left"
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
        <div className="pt-12 pb-4 px-8 max-w-[960px] mx-auto">
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-sand mb-2 font-mono">
            {page?.label}
          </div>
          <div className="font-lora text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-ink leading-[1.1]">
            {page?.title}
          </div>
        </div>

        {/* Page content */}
        <div className="px-8 pb-20 max-w-[960px] mx-auto">
          {Component && <Component />}
        </div>
      </div>
    </div>
  );
}
