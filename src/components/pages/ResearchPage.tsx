export default function ResearchPage() {
  return (
    <div className="fade-in space-y-5 sm:space-y-6">
      <div className="bg-card border border-sand/60 hover:border-sand/80 rounded-lg sm:rounded-xl p-4 sm:p-8 transition-all duration-300 hover:shadow-sm">
        <div className="flex gap-4 sm:gap-6 items-start">
          <div
            className="font-lora text-[1.2rem] sm:text-[2rem] font-bold text-sand/70 flex-shrink-0 hidden sm:block"
            style={{ writingMode: "vertical-rl" }}
          >
            2026
          </div>
          <div className="flex-1">
            <div className="text-[0.65rem] sm:hidden text-sand font-mono tracking-[0.1em] uppercase mb-2 font-medium">2026 · Published</div>
            <div className="font-lora text-[0.95rem] sm:text-[1.1rem] font-bold text-ink mb-2 sm:mb-[0.4rem] leading-snug">
              Edge AI-Powered Digital Stethoscope for Real-Time Cardiopulmonary Classification and Telehealth
            </div>
            <div className="text-[0.65rem] sm:text-[0.73rem] text-terracotta tracking-[0.08em] font-mono mb-3 sm:mb-[0.65rem] leading-tight font-medium">
              IJRDET · Volume 15, Issue 3 · March 2026 · ISSN 2347-6435
            </div>
            <div className="text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso mb-3 sm:mb-[0.8rem]">
              Designed and implemented an MCU-class CNN (INT8, 287 KB) achieving 91.8% weighted accuracy on an ESP32-S3 without cloud dependency. Merged PhysioNet and ICBHI datasets with patient-wise stratified cross-validation, built a full DSP pipeline (Butterworth filter → Daubechies wavelet denoising → Mel-spectrogram), and implemented dual-layer encrypted wireless (TLS/BLE + AES-128 HC-12 failover).
            </div>
            <div className="text-[0.65rem] sm:text-[0.72rem] text-muted/70 font-mono leading-tight font-medium">
              Co-authored with A. Nile, S. Lasankar, P. Nikam · Supervised by Mrs. S. Mohanapriya
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-sand/60 hover:border-sand/80 rounded-lg sm:rounded-xl p-4 sm:p-8 transition-all duration-300 hover:shadow-sm">
        <div className="font-lora text-[0.95rem] sm:text-[1.1rem] font-bold text-ink mb-3 sm:mb-[0.4rem]">
          Research Interests
        </div>
        <div className="text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso flex flex-wrap gap-x-2 gap-y-1 mb-4">
          <span>Edge AI</span>
          <span className="text-muted/50">·</span>
          <span>TinyML</span>
          <span className="text-muted/50">·</span>
          <span>Computer Vision</span>
          <span className="text-muted/50">·</span>
          <span>Biomedical Signals</span>
          <span className="text-muted/50">·</span>
          <span>Real-time Systems</span>
          <span className="text-muted/50">·</span>
          <span>Telehealth</span>
          <span className="text-muted/50">·</span>
          <span>Full-Stack Development</span>
        </div>
        <div className="text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso">
          <strong className="font-semibold">Read the full publication:</strong> <a href="https://www.ijrdet.com/files/Volume15Issue3/IJRDET_0326_75.pdf" target="_blank" rel="noreferrer" className="text-terracotta hover:underline break-all font-medium">IJRDET Volume 15, Issue 3 →</a>
        </div>
      </div>
    </div>
  );
}
