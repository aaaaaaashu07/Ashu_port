"use client";
import { useEffect, useRef, useCallback } from "react";
import { Building, Car, Star } from "@/lib/types";
import { MOODS } from "@/lib/data";
import { lerpN, getMoodColor, initBuildings, makeCar, makeStars, getBuildingAt } from "@/lib/canvas";
import { PageKey } from "@/lib/types";

interface UseCanvasOptions {
  onBuildingClick: (page: PageKey, label: string) => void;
  onMoodChange: (mood: string) => void;
  onBuildingHover: (building: Building | null, clientX: number, clientY: number) => void;
}

export function useCanvas(options: UseCanvasOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buildingsRef = useRef<Building[]>([]);
  const carsRef = useRef<Car[]>([]);
  const starsRef = useRef<Star[]>([]);
  const skyTRef = useRef(0);
  const targetTRef = useRef(0);
  const frameRef = useRef(0);
  const carTimerRef = useRef(0);
  const hoveredBuildingRef = useRef<Building | null>(null);
  const animFrameRef = useRef<number>(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildingsRef.current = initBuildings(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize();
    starsRef.current = makeStars();

    // Seed initial cars spread
    carsRef.current = [];
    for (let i = 0; i < 7; i++) {
      const c = makeCar(window.innerWidth, window.innerHeight, Math.random() > 0.5 ? 1 : -1);
      c.x = Math.random() * window.innerWidth;
      carsRef.current.push(c);
    }

    window.addEventListener("resize", resize);

    function draw() {
      frameRef.current++;
      skyTRef.current = lerpN(skyTRef.current, targetTRef.current, 0.05);
      const W = canvas!.width;
      const H = canvas!.height;
      const groundY = H * 0.74;
      const frame = frameRef.current;

      const idx = skyTRef.current * (MOODS.length - 1);
      const li = Math.floor(idx);
      const hi2 = Math.min(li + 1, MOODS.length - 1);
      const lo = MOODS[li];
      const hi = MOODS[hi2];
      const frac = idx - li;

      // Sky gradient
      const gr = ctx!.createLinearGradient(0, 0, 0, groundY);
      gr.addColorStop(0, getMoodColor(lo, hi, frac, "s1"));
      gr.addColorStop(0.5, getMoodColor(lo, hi, frac, "s2"));
      gr.addColorStop(1, getMoodColor(lo, hi, frac, "s3"));
      ctx!.fillStyle = gr;
      ctx!.fillRect(0, 0, W, groundY);

      // Stars
      if (lo.stars || hi.stars) {
        const sa = Math.max(0, (skyTRef.current - 0.45) * 2.5);
        starsRef.current.forEach((s) => {
          const tw = Math.sin(frame * 0.018 + s.tw) * 0.35 + 0.75;
          ctx!.beginPath();
          ctx!.arc(s.x * W, s.y * H, s.r * tw, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255,248,210,${sa * tw * 0.85})`;
          ctx!.fill();
        });
      }

      // Sun
      const sunA = Math.max(0, 1 - skyTRef.current * 3.5);
      if (sunA > 0) {
        ctx!.beginPath();
        ctx!.arc(W * 0.8, groundY * 0.3, W * 0.042, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,205,80,${sunA * 0.95})`;
        ctx!.fill();
      }

      // Moon
      const moonA = Math.max(0, (skyTRef.current - 0.55) * 3);
      if (moonA > 0) {
        ctx!.beginPath();
        ctx!.arc(W * 0.74, groundY * 0.2, W * 0.026, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(240,240,195,${moonA * 0.88})`;
        ctx!.fill();
      }

      // Ground
      ctx!.fillStyle = getMoodColor(lo, hi, frac, "g");
      ctx!.fillRect(0, groundY, W, H - groundY);

      // Buildings
      buildingsRef.current.forEach((b) => {
        const by = groundY - b.h;

        if (b.named && b.hovered) {
          ctx!.save();
          ctx!.shadowColor = b.accent!;
          ctx!.shadowBlur = 28;
          ctx!.fillStyle = b.accent!;
          ctx!.fillRect(b.x, by, b.w, b.h + 2);
          ctx!.restore();
        } else {
          ctx!.fillStyle = getMoodColor(lo, hi, frac, "gt");
          ctx!.fillRect(b.x, by, b.w, b.h + 2);
        }

        if (b.named) {
          ctx!.strokeStyle = b.hovered ? b.accent! : "rgba(250,247,242,0.18)";
          ctx!.lineWidth = b.hovered ? 2.5 : 1;
          ctx!.strokeRect(b.x, by, b.w, b.h);
        }

        if (b.filler) {
          b.wins.forEach((w, wi) => {
            const wx = b.x + 0.12 * b.w + (wi % 3) * (b.w * 0.28);
            const wy = by + 0.1 * b.h + Math.floor(wi / 3) * (b.h * 0.28);
            const alpha = w.on ? Math.min(1, skyTRef.current * 2.5 + 0.1) : 0.05;
            ctx!.fillStyle = `rgba(255,222,130,${alpha})`;
            ctx!.fillRect(wx, wy, b.w * 0.16, b.h * 0.12);
          });
        } else if (b.cols && b.rows) {
          const { wins, cols, rows, winW, winH, winPadX, winPadY, winOffY } = b;
          wins.forEach((w: { col?: number; row?: number; on: boolean }) => {
            const wx = b.x + winPadX! + (w.col || 0) * (winW! + winPadX! * 0.6);
            const wy = by + winOffY! + (w.row || 0) * (winH! + winPadY! * 0.4);
            const litAlpha = b.hovered
              ? Math.min(1, skyTRef.current * 0.5 + 0.7)
              : Math.min(1, skyTRef.current * 2.2 + 0.08);
            const alpha = w.on ? litAlpha : 0.04;
            ctx!.fillStyle = `rgba(255,222,130,${alpha})`;
            ctx!.fillRect(wx, wy, winW!, winH!);
          });
        }

        if (b.named) {
          ctx!.beginPath();
          ctx!.arc(b.x + b.w / 2, by - 10, 3, 0, Math.PI * 2);
          ctx!.fillStyle = b.hovered ? b.accent! : "rgba(250,247,242,0.3)";
          ctx!.fill();
        }
      });

      // Cars
      const nightRatio = Math.max(0, (skyTRef.current - 0.45) * 2.2);
      const sortedCars = [...carsRef.current].sort((a, b) => b.lane - a.lane);

      sortedCars.forEach((c) => {
        const bounce = Math.sin(frame * 0.07 + c.wobble) * c.h * 0.018;
        const cx2 = c.x;
        const cy2 = c.y + bounce;
        const cw = c.w;
        const ch = c.h;
        const r = ch * 0.32;
        const p = c.pal;
        const outline = "rgba(44,26,14,0.18)";
        const lw = 1.5;

        if (nightRatio > 0.05) {
          const frontX = c.dir === 1 ? cx2 + cw * 0.92 : cx2 + cw * 0.08;
          const glowR = cw * 0.55;
          const gFront = ctx!.createRadialGradient(frontX, cy2 + ch * 0.6, 0, frontX, cy2 + ch * 0.6, glowR);
          gFront.addColorStop(0, `rgba(255,245,200,${nightRatio * 0.28})`);
          gFront.addColorStop(1, "rgba(255,245,200,0)");
          ctx!.fillStyle = gFront;
          ctx!.beginPath();
          ctx!.ellipse(frontX, cy2 + ch * 0.6, glowR, glowR * 0.5, 0, 0, Math.PI * 2);
          ctx!.fill();

          const backX = c.dir === 1 ? cx2 + cw * 0.08 : cx2 + cw * 0.92;
          const gBack = ctx!.createRadialGradient(backX, cy2 + ch * 0.6, 0, backX, cy2 + ch * 0.6, glowR * 0.6);
          gBack.addColorStop(0, `rgba(255,100,80,${nightRatio * 0.2})`);
          gBack.addColorStop(1, "rgba(255,100,80,0)");
          ctx!.fillStyle = gBack;
          ctx!.beginPath();
          ctx!.ellipse(backX, cy2 + ch * 0.6, glowR * 0.6, glowR * 0.35, 0, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Shadow
        ctx!.fillStyle = "rgba(44,26,14,0.12)";
        ctx!.beginPath();
        ctx!.ellipse(cx2 + cw * 0.5, cy2 + ch + c.wheelR * 0.4, cw * 0.42, c.wheelR * 0.35, 0, 0, Math.PI * 2);
        ctx!.fill();

        // Body
        ctx!.fillStyle = p.body;
        ctx!.beginPath();
        (ctx as CanvasRenderingContext2D & { roundRect: (x: number, y: number, w: number, h: number, r: number) => void }).roundRect(cx2, cy2 + ch * 0.38, cw, ch * 0.62, r);
        ctx!.fill();
        ctx!.strokeStyle = outline;
        ctx!.lineWidth = lw;
        ctx!.stroke();

        // Body highlight
        ctx!.fillStyle = "rgba(255,255,255,0.18)";
        ctx!.beginPath();
        (ctx as any).roundRect(cx2 + cw * 0.08, cy2 + ch * 0.42, cw * 0.84, ch * 0.12, ch * 0.06);
        ctx!.fill();

        // Roof
        ctx!.fillStyle = p.roof;
        ctx!.beginPath();
        ctx!.moveTo(cx2 + cw * 0.16, cy2 + ch * 0.39);
        ctx!.bezierCurveTo(cx2 + cw * 0.22, cy2 + ch * 0.04, cx2 + cw * 0.78, cy2 + ch * 0.04, cx2 + cw * 0.86, cy2 + ch * 0.39);
        ctx!.closePath();
        ctx!.fill();
        ctx!.strokeStyle = outline;
        ctx!.lineWidth = lw;
        ctx!.stroke();

        // Window
        ctx!.fillStyle = nightRatio > 0.3 ? `rgba(255,245,190,${0.18 + nightRatio * 0.12})` : p.win;
        ctx!.beginPath();
        (ctx as any).roundRect(cx2 + cw * 0.22, cy2 + ch * 0.1, cw * 0.56, ch * 0.26, ch * 0.07);
        ctx!.fill();
        ctx!.fillStyle = "rgba(255,255,255,0.28)";
        ctx!.beginPath();
        (ctx as any).roundRect(cx2 + cw * 0.24, cy2 + ch * 0.12, cw * 0.2, ch * 0.09, ch * 0.04);
        ctx!.fill();

        // Wheels
        [cx2 + cw * 0.2, cx2 + cw * 0.78].forEach((wx) => {
          const wy = cy2 + ch + c.wheelR * 0.08;
          ctx!.beginPath();
          ctx!.arc(wx, wy, c.wheelR, 0, Math.PI * 2);
          ctx!.fillStyle = p.wheel;
          ctx!.fill();
          ctx!.strokeStyle = outline;
          ctx!.lineWidth = lw * 0.8;
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.arc(wx, wy, c.wheelR * 0.52, 0, Math.PI * 2);
          ctx!.fillStyle = p.hub;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(wx - c.wheelR * 0.12, wy - c.wheelR * 0.12, c.wheelR * 0.18, 0, Math.PI * 2);
          ctx!.fillStyle = "rgba(255,255,255,0.35)";
          ctx!.fill();
          ctx!.strokeStyle = p.wheel;
          ctx!.lineWidth = c.wheelR * 0.18;
          for (let s = 0; s < 4; s++) {
            const a = s * Math.PI * 0.5 + frame * 0.035 * c.dir;
            ctx!.beginPath();
            ctx!.moveTo(wx + Math.cos(a) * c.wheelR * 0.18, wy + Math.sin(a) * c.wheelR * 0.18);
            ctx!.lineTo(wx + Math.cos(a) * c.wheelR * 0.48, wy + Math.sin(a) * c.wheelR * 0.48);
            ctx!.stroke();
          }
        });

        // Lights
        const frontLX = c.dir === 1 ? cx2 + cw * 0.88 : cx2 + cw * 0.12;
        const backLX = c.dir === 1 ? cx2 + cw * 0.12 : cx2 + cw * 0.88;
        ctx!.beginPath();
        (ctx as any).roundRect(frontLX - cw * 0.06, cy2 + ch * 0.5, cw * 0.07, ch * 0.14, ch * 0.04);
        ctx!.fillStyle = `rgba(255,248,200,${0.55 + nightRatio * 0.45})`;
        ctx!.fill();
        ctx!.beginPath();
        (ctx as any).roundRect(backLX - cw * 0.01, cy2 + ch * 0.5, cw * 0.07, ch * 0.14, ch * 0.04);
        ctx!.fillStyle = `rgba(255,120,100,${0.4 + nightRatio * 0.4})`;
        ctx!.fill();
      });

      // Update cars
      carTimerRef.current++;
      carsRef.current.forEach((c) => (c.x += c.speed * c.dir));
      carsRef.current = carsRef.current.filter((c) =>
        c.dir === 1 ? c.x < window.innerWidth + 200 : c.x > -200
      );
      if (carTimerRef.current % 90 === 0) carsRef.current.push(makeCar(W, H, 1));
      if (carTimerRef.current % 120 === 0) carsRef.current.push(makeCar(W, H, -1));
      if (carTimerRef.current % 200 === 0 && Math.random() > 0.4)
        carsRef.current.push(makeCar(W, H, Math.random() > 0.5 ? 1 : -1));

      animFrameRef.current = requestAnimationFrame(draw);
    }

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [resize]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      targetTRef.current = Math.max(0, Math.min(1, cx / canvas.width));
      const mi = Math.round(targetTRef.current * (MOODS.length - 1));
      options.onMoodChange(MOODS[mi].name);

      const b = getBuildingAt(buildingsRef.current, cx, cy, canvas.height);
      if (b && b.named) {
        if (hoveredBuildingRef.current !== b) {
          if (hoveredBuildingRef.current) hoveredBuildingRef.current.hovered = false;
          hoveredBuildingRef.current = b;
          b.hovered = true;
          options.onBuildingHover(b, e.clientX, e.clientY);
        }
      } else {
        if (hoveredBuildingRef.current) {
          hoveredBuildingRef.current.hovered = false;
          hoveredBuildingRef.current = null;
        }
        options.onBuildingHover(null, e.clientX, e.clientY);
      }
    },
    [options]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const b = getBuildingAt(buildingsRef.current, cx, cy, canvas.height);
      if (b && b.named && b.page) options.onBuildingClick(b.page, b.label!);
    },
    [options]
  );

  const handleMouseLeave = useCallback(() => {
    if (hoveredBuildingRef.current) {
      hoveredBuildingRef.current.hovered = false;
      hoveredBuildingRef.current = null;
    }
    options.onBuildingHover(null, 0, 0);
  }, [options]);

  return { canvasRef, handleMouseMove, handleClick, handleMouseLeave };
}
