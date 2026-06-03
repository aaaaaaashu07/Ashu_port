"use client";
import { useCallback, useState, useRef } from "react";
import { PageKey, Building } from "@/lib/types";
import { useCanvas } from "@/hooks/useCanvas";
import BuildingLabel from "./BuildingLabel";

interface CityCanvasProps {
  onBuildingClick: (page: PageKey, label: string) => void;
  onCursorBig: (on: boolean) => void;
}

export default function CityCanvas({ onBuildingClick, onCursorBig }: CityCanvasProps) {
  const [mood, setMood] = useState("golden hour");
  const [hoveredBuilding, setHoveredBuilding] = useState<Building | null>(null);
  const canvasHeightRef = useRef(typeof window !== "undefined" ? window.innerHeight : 800);

  const handleBuildingHover = useCallback(
    (building: Building | null) => {
      setHoveredBuilding(building);
      onCursorBig(!!building);
    },
    [onCursorBig]
  );

  const { canvasRef, handleMouseMove, handleClick, handleMouseLeave } = useCanvas({
    onBuildingClick,
    onMoodChange: setMood,
    onBuildingHover: handleBuildingHover,
  });

  return (
    <div id="stage" className="fixed inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        id="sky-canvas"
        className="absolute inset-0 w-full h-full"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mood tag */}
      <div
        className="absolute top-[1.4rem] right-[1.6rem] text-[0.68rem] text-white/55 tracking-[0.2em] uppercase z-[6] font-mono pointer-events-none"
      >
        {mood}
      </div>

      {/* Hero text */}
      <div className="absolute z-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] text-center pointer-events-none">
        <div
          className="font-lora font-bold text-cream leading-[1.05]"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            textShadow: "0 2px 32px rgba(0,0,0,.25)",
            animation: "fadeUp 0.9s 0.2s both",
            opacity: 0,
          }}
        >
          Anushka Joshi
        </div>
        <div
          className="text-cream/70 uppercase tracking-[0.25em] mt-[0.85rem]"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            animation: "fadeUp 0.9s 0.6s both",
            opacity: 0,
          }}
        >
          Software Engineer &nbsp;·&nbsp; Edge AI &nbsp;·&nbsp; Creative Dev
        </div>
      </div>

      {/* Hint */}
      <div
        className="absolute bottom-[5.5%] left-1/2 -translate-x-1/2 text-[0.6rem] sm:text-[0.72rem] text-white/50 tracking-[0.15em] sm:tracking-[0.18em] uppercase z-[5] pointer-events-none text-center leading-[1.6] px-4 max-w-xs"
        style={{ animation: "fadeUp 0.8s 1.2s both", opacity: 0 }}
      >
        Move cursor to shift the sky
        <br />
        Click a building to explore
      </div>

      {/* Building label */}
      <BuildingLabel building={hoveredBuilding} canvasHeight={canvasHeightRef.current} />
    </div>
  );
}
