import { Mood, CarPalette, PageKey } from "./types";

export const MOODS: Mood[] = [
  { name: "golden hour", s1: "#F7B85A", s2: "#E8855A", s3: "#C06030", g: "#7A5C4A", gt: "#9B7460", stars: false },
  { name: "late afternoon", s1: "#EDCB6A", s2: "#D4956A", s3: "#A06040", g: "#6B4A35", gt: "#8A6550", stars: false },
  { name: "dusk", s1: "#C4708A", s2: "#8A4A7A", s3: "#4A2550", g: "#4E3020", gt: "#6B4A35", stars: false },
  { name: "twilight", s1: "#6A5090", s2: "#3A2860", s3: "#1A1030", g: "#2C1A10", gt: "#3D2310", stars: true },
  { name: "midnight", s1: "#1A2040", s2: "#0E1228", s3: "#060810", g: "#100808", gt: "#1E1008", stars: true },
];

export const CAR_PALETTES: CarPalette[] = [
  { body: "#F2A98A", roof: "#E8855A", win: "rgba(200,230,255,0.55)", wheel: "#5C3D2E", hub: "#E8C4A8" },
  { body: "#C8DEB8", roof: "#8DB87A", win: "rgba(200,240,220,0.55)", wheel: "#3A5028", hub: "#B8D4A0" },
  { body: "#ECD9B0", roof: "#C9A882", win: "rgba(220,240,255,0.55)", wheel: "#5C3D2E", hub: "#D8C090" },
  { body: "#C4D8EC", roof: "#8AAAC8", win: "rgba(200,220,255,0.6)", wheel: "#2C3D50", hub: "#A8C0D8" },
  { body: "#ECC8D8", roof: "#C89AB8", win: "rgba(255,220,240,0.55)", wheel: "#4A2C3A", hub: "#D8A8C0" },
  { body: "#D8C8EC", roof: "#A888C8", win: "rgba(230,220,255,0.55)", wheel: "#3A2850", hub: "#C0A8D8" },
  { body: "#F8ECC0", roof: "#D4B870", win: "rgba(255,250,200,0.55)", wheel: "#4A3818", hub: "#E8D098" },
];

export const NAMED_BUILDINGS = [
  { label: "About Me", page: "about" as PageKey, accent: "#E8855A" },
  { label: "Projects", page: "projects" as PageKey, accent: "#B8CFA8" },
  { label: "Research", page: "research" as PageKey, accent: "#C9A882" },
  { label: "Contact", page: "contact" as PageKey, accent: "#D4B896" },
];

export interface Project {
  title: string;
  sub: string;
  desc: string;
  accent: string;
  tags: { cls: string; name: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: "ResQNet",
    sub: "Disaster Response · Full-Stack",
    desc: "Real-time disaster response platform with instant SOS alerts and command center coordination. WebSocket-powered live updates across admin dashboards with zero page refresh.",
    accent: "#E8855A",
    tags: [{ cls: "tw", name: "Node.js" }, { cls: "ts", name: "Socket.io" }, { cls: "td", name: "MongoDB" }],
  },
  {
    title: "Edge AI Digital Stethoscope",
    sub: "TinyML · Biomedical",
    desc: "Embedded diagnostic device classifying cardiopulmonary sounds on ESP32-S3. 287 KB INT8-quantized CNN, 91.8% accuracy, ~$25 hardware cost. Published research.",
    accent: "#B8CFA8",
    tags: [{ cls: "ts", name: "TensorFlow Lite" }, { cls: "tw", name: "ESP32-S3" }, { cls: "td", name: "Python" }],
  },
  {
    title: "BidBridge",
    sub: "Real-Time Marketplace · Full-Stack",
    desc: "Hyperlocal task bidding platform with real-time bid broadcasting, multi-role JWT auth, and AI-powered multilingual in-app chat via Google Gemini.",
    accent: "#C9A882",
    tags: [{ cls: "tw", name: "Flask" }, { cls: "ts", name: "Supabase" }, { cls: "td", name: "PostgreSQL" }],
  },
  {
    title: "VMouse",
    sub: "Gesture Control · Computer Vision",
    desc: "Gesture-controlled virtual mouse via webcam. Hand landmark extraction, priority-ordered conflict resolution, and per-action cooldown system for day-to-day usability.",
    accent: "#D4B896",
    tags: [{ cls: "tw", name: "MediaPipe" }, { cls: "td", name: "Python" }, { cls: "ts", name: "OpenCV" }],
  },
];

export const SKILLS = [
  "Python", "Java", "Node.js", "Flask", "Express",
  "TensorFlow Lite", "MediaPipe", "OpenCV", "Socket.io",
  "MongoDB", "PostgreSQL", "Supabase", "ESP32-S3", "Edge AI",
];
