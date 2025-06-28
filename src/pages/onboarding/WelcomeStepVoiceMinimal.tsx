import React from "react";
import { Button } from "@/components/ui/Button";
import { ProgressDots } from "@/components/ui/ProgressDots";

export type WelcomeStepProps = {
  userName: string;
  setUserName: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  gender: string;
  setGender: (v: string) => void;
  onNext: () => void;
  stepIndex: number;
  totalSteps: number;
};

export const WelcomeStepVoiceMinimal: React.FC<WelcomeStepProps> = ({
  onNext,
  stepIndex,
  totalSteps,
}) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] font-sans px-4">
    <div className="mt-12 mb-6">
      <ProgressDots current={stepIndex} total={totalSteps} />
    </div>
    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F5EFE8] to-[#BA9BE6] bg-clip-text text-transparent text-center mb-4 drop-shadow-lg">
      Design your Conversational AI Agent
    </h1>
    <p className="text-lg text-[#BA9BE6] text-center mb-10">
      Let's have a chat to design your helpful conversational AI agent! Click start and enable microphone access.
    </p>
    <div className="flex flex-col items-center w-full max-w-xs mt-16">
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#846fda] via-[#6556b9] to-[#ba9be6] shadow-2xl animate-breath-glow flex items-center justify-center mb-10" />
      <Button
        variant="primary"
        size="large"
        className="w-full py-4 rounded-full bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white text-lg font-bold shadow-lg transition-transform duration-150 active:scale-105"
        onClick={onNext}
      >
        Start
      </Button>
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