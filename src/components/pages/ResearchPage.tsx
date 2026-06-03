export default function ResearchPage() {
  return (
    <div className="fade-in">
      <div className="bg-card border-[0.5px] border-sand rounded-xl p-4 sm:p-8 grid grid-cols-[auto_1fr] gap-3 sm:gap-6 items-start mt-6 sm:mt-8 transition-transform duration-200 hover:translate-x-1">
        <div
          className="font-lora text-[1.4rem] sm:text-[2rem] font-bold text-sand hidden sm:block"
          style={{ writingMode: "vertical-rl" }}
        >
          2026
        </div>
        <div className="sm:hidden text-[0.7rem] text-sand font-mono tracking-[0.1em] uppercase mb-2">2026 · Published</div>
        <div>
          <div className="font-lora text-[0.95rem] sm:text-[1.1rem] font-bold text-ink mb-[0.4rem]">
            Edge AI-Powered Digital Stethoscope for Real-Time Cardiopulmonary Classification and Telehealth
          </div>
          <div className="text-[0.65rem] sm:text-[0.73rem] text-terracotta tracking-[0.08em] font-mono mb-[0.65rem] leading-tight">
            IJRDET · Volume 15, Issue 3 · March 2026 · ISSN 2347-6435
          </div>
          <div className="text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso mb-[0.8rem]">
            Designed and implemented an MCU-class CNN (INT8, 287 KB) achieving 91.8% weighted accuracy on an ESP32-S3 without cloud dependency. Merged PhysioNet and ICBHI datasets with patient-wise stratified cross-validation, built a full DSP pipeline (Butterworth filter → Daubechies wavelet denoising → Mel-spectrogram), and implemented dual-layer encrypted wireless (TLS/BLE + AES-128 HC-12 failover).
          </div>
          <div className="text-[0.65rem] sm:text-[0.72rem] text-muted font-mono leading-tight">
            Co-authored with A. Nile, S. Lasankar, P. Nikam · Supervised by Mrs. S. Mohanapriya
          </div>
        </div>
      </div>

      <div className="mt-6 bg-card border-[0.5px] border-sand rounded-xl p-4 sm:p-8">
        <div className="font-lora text-[0.95rem] sm:text-[1.1rem] font-bold text-ink mb-[0.4rem]">
          Research Interests
        </div>
        <div className="text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso flex flex-wrap gap-x-1 gap-y-1">
          Edge AI · TinyML · Computer Vision · Biomedical Signals · Real-time Systems · Telehealth · Full-Stack Development
        </div>
        <div className="mt-4 text-[0.8rem] sm:text-[0.88rem] leading-[1.6] sm:leading-[1.75] text-espresso">
          <strong>Read the full publication:</strong> <a href="https://www.ijrdet.com/files/Volume15Issue3/IJRDET_0326_75.pdf" target="_blank" rel="noreferrer" className="text-terracotta hover:underline break-all">IJRDET Volume 15, Issue 3</a>
        </div>
      </div>
    </div>
  );
}
