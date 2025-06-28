import { ProgressDots } from "./ProgressDots";

export const TakeABreathScreen = ({
  heading,
  subheading,
  stepIndex,
  totalSteps,
}: {
  heading: string;
  subheading: string;
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
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#846fda] via-[#6556b9] to-[#ba9be6] shadow-2xl animate-breath-glow-advanced flex items-center justify-center" />
      </div>
    </div>
    <style>{`
      @keyframes breath-glow-advanced {
        0%, 100% {
          box-shadow: 0 0 60px 10px #846fda55, 0 0 0 0 #6556b955;
          transform: scale(1);
          background: linear-gradient(135deg, #846fda 0%, #ba9be6 100%);
        }
        30% {
          box-shadow: 0 0 120px 40px #ba9be688, 0 0 0 0 #6556b955;
          transform: scale(1.12);
          background: linear-gradient(135deg, #ba9be6 0%, #846fda 100%);
        }
        60% {
          box-shadow: 0 0 180px 60px #846fda88, 0 0 0 0 #6556b955;
          transform: scale(1.06);
          background: linear-gradient(135deg, #846fda 0%, #ba9be6 100%);
        }
      }
      .animate-breath-glow-advanced {
        animation: breath-glow-advanced 3s ease-in-out infinite;
      }
    `}</style>
  </div>
); 