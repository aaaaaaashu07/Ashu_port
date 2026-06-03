"use client";
import { Building } from "@/lib/types";

interface BuildingLabelProps {
  building: Building | null;
  canvasHeight: number;
}

export default function BuildingLabel({ building, canvasHeight }: BuildingLabelProps) {
  if (!building) return null;

  const topPx = canvasHeight * 0.74 - building.h - 20;

  return (
    <div
      className="pointer-events-none fixed z-[8] font-lora text-[0.7rem] sm:text-[0.82rem] font-semibold whitespace-nowrap rounded-full px-[0.7rem] sm:px-[0.9rem] py-[0.3rem] sm:py-[0.35rem] transition-opacity duration-200"
      style={{
        left: Math.max(60, Math.min(window.innerWidth - 60, building.x + building.w / 2)),
        top: topPx,
        transform: "translateX(-50%) translateY(-100%)",
        background: "rgba(250,247,242,0.93)",
        color: "#2C1A0E",
        border: `1.5px solid ${building.accent}`,
        opacity: 1,
      }}
    >
      {building.label}
    </div>
  );
}
