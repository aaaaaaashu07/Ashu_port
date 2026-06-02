export type PageKey = "about" | "projects" | "research" | "contact";

export interface Building {
  x: number;
  w: number;
  h: number;
  named: boolean;
  filler: boolean;
  wins: Window[];
  hovered: boolean;
  groundY: number;
  baseColor: string;
  // named only
  label?: string;
  page?: PageKey;
  accent?: string;
  cols?: number;
  rows?: number;
  winW?: number;
  winH?: number;
  winPadX?: number;
  winPadY?: number;
  winOffY?: number;
}

export interface Window {
  col?: number;
  row?: number;
  on: boolean;
}

export interface Mood {
  name: string;
  s1: string;
  s2: string;
  s3: string;
  g: string;
  gt: string;
  stars: boolean;
}

export interface CarPalette {
  body: string;
  roof: string;
  win: string;
  wheel: string;
  hub: string;
}

export interface Car {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
  dir: 1 | -1;
  lane: number;
  pal: CarPalette;
  wobble: number;
  wheelR: number;
  baseY: number;
}

export interface Star {
  x: number;
  y: number;
  r: number;
  tw: number;
}
