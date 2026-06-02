import { Building, Car, Star, Mood } from "./types";
import { MOODS, CAR_PALETTES, NAMED_BUILDINGS } from "./data";

export function lerpN(a: number, b: number, k: number): number {
  return a + (b - a) * k;
}

export function lerpHex(c1: string, c2: string, k: number): string {
  if (!c1 || !c2) return c1 || c2 || "#888";
  const h = (s: string, i: number) => parseInt(s.slice(1 + i * 2, 3 + i * 2), 16);
  return `rgb(${[0, 1, 2].map((i) => Math.round(lerpN(h(c1, i), h(c2, i), k))).join(",")})`;
}

export function getMoodColor(lo: Mood, hi: Mood, frac: number, key: keyof Mood): string {
  return lerpHex(lo[key] as string, hi[key] as string, frac);
}

export function initBuildings(W: number, H: number): Building[] {
  const buildings: Building[] = [];
  const groundY = H * 0.74;

  const namedPositions = [0.12, 0.32, 0.55, 0.76];
  const namedWidths = [0.09, 0.085, 0.09, 0.085];
  const namedHeights = [0.28, 0.34, 0.3, 0.32];

  NAMED_BUILDINGS.forEach((n, i) => {
    const x = namedPositions[i] * W;
    const w = namedWidths[i] * W;
    const h = namedHeights[i] * H;
    const wins: { col: number; row: number; on: boolean }[] = [];
    const rows = Math.floor(h / (H * 0.055));
    const cols = 3;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) wins.push({ col: c, row: r, on: Math.random() > 0.35 });

    buildings.push({
      x, w, h,
      named: true,
      filler: false,
      label: n.label,
      page: n.page,
      accent: n.accent,
      wins,
      hovered: false,
      baseColor: "#7A5C4A",
      groundY,
      cols, rows,
      winW: w * 0.16,
      winH: H * 0.04,
      winPadX: w * 0.14,
      winPadY: H * 0.055,
      winOffY: H * 0.06,
    });
  });

  const fillerDefs = [
    { x: 0.03, w: 0.06, h: 0.18 }, { x: 0.22, w: 0.05, h: 0.22 },
    { x: 0.27, w: 0.04, h: 0.15 }, { x: 0.42, w: 0.07, h: 0.2 },
    { x: 0.49, w: 0.035, h: 0.14 }, { x: 0.66, w: 0.06, h: 0.18 },
    { x: 0.72, w: 0.04, h: 0.12 }, { x: 0.84, w: 0.07, h: 0.24 },
    { x: 0.92, w: 0.05, h: 0.16 }, { x: 0.97, w: 0.04, h: 0.13 },
  ];
  fillerDefs.forEach((f) => {
    const wins = Array.from({ length: 8 }, () => ({ on: Math.random() > 0.4 }));
    buildings.push({
      x: f.x * W, w: f.w * W, h: f.h * H,
      named: false, filler: true,
      wins, hovered: false,
      groundY, baseColor: "#6B4A35",
    });
  });

  return buildings;
}

export function makeCar(W: number, H: number, forceSide?: 1 | -1): Car {
  const dir: 1 | -1 = forceSide !== undefined ? forceSide : Math.random() > 0.5 ? 1 : -1;
  const lane = Math.floor(Math.random() * 2);
  const groundY = H * 0.74;
  const laneY = groundY + (lane === 0 ? H * 0.058 : H * 0.03);
  const speed = (1.1 + Math.random() * 1.8) * (lane === 0 ? 1 : 0.65);
  const carW = W * (0.062 + Math.random() * 0.022);
  const carH = carW * 0.44;
  const pal = CAR_PALETTES[Math.floor(Math.random() * CAR_PALETTES.length)];
  const wobble = Math.random() * Math.PI * 2;
  return {
    x: dir === 1 ? -carW - 10 : W + carW + 10,
    y: laneY - carH,
    w: carW, h: carH,
    speed, dir, lane, pal, wobble,
    wheelR: carH * 0.26,
    baseY: laneY - carH,
  };
}

export function makeStars(): Star[] {
  return Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random() * 0.58,
    r: 0.4 + Math.random() * 1.3,
    tw: Math.random() * Math.PI * 2,
  }));
}

export function getBuildingAt(
  buildings: Building[],
  x: number,
  y: number,
  canvasH: number
): Building | null {
  const groundY = canvasH * 0.74;
  for (let i = buildings.length - 1; i >= 0; i--) {
    const b = buildings[i];
    const by = groundY - b.h;
    if (x >= b.x && x <= b.x + b.w && y >= by && y <= groundY) return b;
  }
  return null;
}
