import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export type CompleteStepProps = {
  knowledgeCategories: string[];
  primaryGoals: string[];
  personalityProfile: { disc: string; enneagram?: string; confidence: number } | null;
  ritualPreferences: {
    timing: string;
    duration: string;
    style: string;
    voice_id: string;
    focus_area: string;
  } | null;
  onContinue: () => void;
  stepIndex: number;
  totalSteps: number;
};

const ConfettiBurst: React.FC = () => (
  <div className="relative flex justify-center items-center h-16 mb-4">
    <span className="absolute text-4xl animate-bounce">🎉</span>
    {/* CSS confetti burst */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute block w-2 h-2 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            background: `hsl(${30 * i}, 80%, 60%)`,
            transform: `rotate(${30 * i}deg) translateY(-32px)`,
            animation: `confetti-burst 1.2s cubic-bezier(.4,1.2,.6,1) both`
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-burst {
          0% { opacity: 0; transform: scale(0.5) translateY(0); }
          60% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.2) translateY(-48px); }
        }
      `}</style>
    </div>
  </div>
);

const CompleteStep: React.FC<CompleteStepProps> = ({
  knowledgeCategories,
  primaryGoals,
  personalityProfile,
  ritualPreferences,
  onContinue,
  stepIndex,
  totalSteps,
}) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] relative font-sans">
    <div className="absolute inset-0 pointer-events-none z-0" style={{
      background: "rgba(255,255,255,0.02)",
      mixBlendMode: "overlay"
    }} />
    <div className="z-10 flex flex-col items-center w-full px-4">
      <ProgressDots current={stepIndex} total={totalSteps} />
      <Card className="w-full max-w-sm mx-auto mt-8 shadow-indigo rounded-2xl animate-fade-in p-8 bg-[rgba(30,18,70,0.95)] backdrop-blur-md border border-[#6556b9]/30">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F5EFE8] to-[#BA9BE6] bg-clip-text text-transparent text-center mb-4 drop-shadow-lg">All Set!</h1>
        <p className="text-base text-[#BA9BE6] mb-6 text-center">Your conversational AI agent is ready to support you on your journey.</p>
        <div className="bg-[#2d176e]/60 rounded-2xl shadow-indigo p-4 space-y-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#BA9BE6] mb-1">Knowledge Categories</h2>
            <div className="flex flex-wrap gap-2">
              {knowledgeCategories.map((cat, i) => (
                <Badge key={i}>{cat}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#BA9BE6] mb-1">Primary Goals</h2>
            <ul className="list-disc list-inside text-[#F5EFE8]">
              {primaryGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
          {personalityProfile && (
            <div>
              <h2 className="text-lg font-semibold text-[#BA9BE6] mb-1">Personality Profile</h2>
              <div className="flex flex-col gap-1 text-[#F5EFE8]">
                <span><b>DISC:</b> {personalityProfile.disc}</span>
                {personalityProfile.enneagram && <span><b>Enneagram:</b> {personalityProfile.enneagram}</span>}
                <span><b>Confidence:</b> {(personalityProfile.confidence * 100).toFixed(0)}%</span>
              </div>
            </div>
          )}
          {ritualPreferences && (
            <div>
              <h2 className="text-lg font-semibold text-[#BA9BE6] mb-1">Ritual Preferences</h2>
              <div className="grid grid-cols-2 gap-2 text-[#F5EFE8]">
                <span><b>Timing:</b> {ritualPreferences.timing.replace('_', ' ')}</span>
                <span><b>Duration:</b> {ritualPreferences.duration.replace('_', ' ')}</span>
                <span><b>Style:</b> {ritualPreferences.style.replace('_', ' ')}</span>
                <span><b>Voice:</b> {ritualPreferences.voice_id.replace('_', ' ')}</span>
                <span><b>Focus Area:</b> {ritualPreferences.focus_area.replace('_', ' ')}</span>
              </div>
            </div>
          )}
        </div>
        <ConfettiBurst />
        <Button
          variant="primary"
          size="large"
          className="w-full bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white rounded-full shadow-lg text-lg font-bold transition-transform duration-150 active:scale-105"
          onClick={onContinue}
        >
          Continue
        </Button>
      </Card>
    </div>
  </div>
);

export default CompleteStep; 