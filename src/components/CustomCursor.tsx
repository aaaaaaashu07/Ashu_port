"use client";

interface CustomCursorProps {
  x: number;
  y: number;
  big: boolean;
}

export default function CustomCursor({ x, y, big }: CustomCursorProps) {
  return (
    <>
      <div
        id="custom-cursor"
        className={big ? "big" : ""}
        style={{ left: x, top: y }}
      />
      <div
        id="cursor-ring"
        style={{ left: x, top: y }}
      />
    </>
  );
}
