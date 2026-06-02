"use client";
import { useState, useEffect, useCallback } from "react";

export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const setCursorBig = useCallback((on: boolean) => setBig(on), []);

  return { pos, big, setCursorBig };
}
