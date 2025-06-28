import { ProgressDots } from "./ProgressDots";

export const TakeABreathScreen = ({
  heading,
  subheading,
  onContinue,
  buttonText,
  stepIndex,
  totalSteps,
}: {
  heading: string;
  subheading: string;
  onContinue?: () => void;
  buttonText?: string;
  stepIndex: number;
  totalSteps: number;
}) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] relative font-sans">
    <div className="absolute inset-0 pointer-events-none z-0" style={{
      background: "rgba(255,255,255,0.02)",
      mixBlendMode: "overlay"
    }} />
    <div className="z-10 flex flex-col items-center w-full px-6">
    <div className="mt-12 mb-6">
      <ProgressDots current={stepIndex} total={totalSteps} />
    </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#F5EFE8] text-center mt-12 mb-2 drop-shadow-lg">
        {heading}
      </h1>
      <p className="text-lg text-[#BA9BE6] text-center mb-10">
        {subheading}
      </p>
      <div className="my-10 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#846fda] via-[#6556b9] to-[#ba9be6] shadow-2xl animate-breath-glow flex items-center justify-center" />
      </div>
      {onContinue && buttonText && (
        <button
          className="mt-10 w-full max-w-xs py-4 rounded-full bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white text-lg font-bold shadow-lg transition-transform duration-150 active:scale-105"
          onClick={onContinue}
        >
          {buttonText}
        </button>
      )}
    </div>
    <style>{`
      @keyframes breath-glow {
        0%, 100% { box-shadow: 0 0 60px 10px #846fda55, 0 0 0 0 #6556b955; }
        50% { box-shadow: 0 0 100px 30px #ba9be655, 0 0 0 0 #6556b955; }
      }
      .animate-breath-glow {
        animation: breath-glow 3s ease-in-out infinite;
      }
    `}</style>
  </div>
); 