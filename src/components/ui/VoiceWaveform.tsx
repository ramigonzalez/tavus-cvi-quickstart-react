import React from "react";

export const VoiceWaveform: React.FC<{ active?: boolean }> = ({ active = true }) => (
  <div className="flex items-end gap-1 h-6" aria-label="Listening...">
    {[0, 1, 2, 3, 4].map(i => (
      <span
        key={i}
        className={
          "block w-1 rounded-full bg-[--color-primary-400] transition-all duration-300" +
          (active ? ` animate-waveform${i}` : " h-2")
        }
        style={{ height: active ? `${6 + Math.random() * 18}px` : "8px" }}
      />
    ))}
    <style>{`
      @keyframes waveform0 { 0%,100%{height:8px;} 50%{height:24px;} }
      @keyframes waveform1 { 0%,100%{height:12px;} 50%{height:20px;} }
      @keyframes waveform2 { 0%,100%{height:16px;} 50%{height:28px;} }
      @keyframes waveform3 { 0%,100%{height:10px;} 50%{height:22px;} }
      @keyframes waveform4 { 0%,100%{height:14px;} 50%{height:26px;} }
      .animate-waveform0 { animation: waveform0 1s infinite; }
      .animate-waveform1 { animation: waveform1 1.1s infinite; }
      .animate-waveform2 { animation: waveform2 0.9s infinite; }
      .animate-waveform3 { animation: waveform3 1.05s infinite; }
      .animate-waveform4 { animation: waveform4 0.95s infinite; }
    `}</style>
  </div>
); 