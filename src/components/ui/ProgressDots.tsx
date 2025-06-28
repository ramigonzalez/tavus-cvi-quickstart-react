import React from "react";

export const ProgressDots = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        aria-current={i === current ? "step" : undefined}
        className={
          "block rounded-full transition-all duration-300 " +
          (i === current
            ? "w-5 h-5 bg-gradient-to-br from-[#846fda] to-[#ba9be6] shadow-[0_0_16px_4px_rgba(186,155,230,0.5)] animate-arami-pulse"
            : "w-3 h-3 bg-[#2d176e] border border-[#6556b9] opacity-70")
        }
      />
    ))}
    <style>{`
      @keyframes arami-pulse {
        0%, 100% { box-shadow: 0 0 16px 4px #ba9be655; }
        50% { box-shadow: 0 0 32px 8px #846fda88; }
      }
      .animate-arami-pulse {
        animation: arami-pulse 1.5s infinite;
      }
    `}</style>
  </div>
); 