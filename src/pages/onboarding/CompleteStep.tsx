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
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <ProgressDots current={stepIndex} total={totalSteps} />
    <Card className="w-full max-w-sm mx-auto mt-8">
      <h1 className="heading-gradient text-3xl font-bold mb-4">All Set!</h1>
      <p className="text-base text-[--color-neutral-0] mb-6">Your conversational AI agent is ready to support you on your journey.</p>
      <div className="bg-[--color-surface-900] rounded-16 shadow-indigo p-4 space-y-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[--color-primary-400] mb-1">Knowledge Categories</h2>
          <div className="flex flex-wrap gap-2">
            {knowledgeCategories.map((cat, i) => (
              <Badge key={i}>{cat}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[--color-primary-400] mb-1">Primary Goals</h2>
          <ul className="list-disc list-inside text-[--color-neutral-0]">
            {primaryGoals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>
        {personalityProfile && (
          <div>
            <h2 className="text-lg font-semibold text-[--color-primary-400] mb-1">Personality Profile</h2>
            <div className="flex flex-col gap-1 text-[--color-neutral-0]">
              <span><b>DISC:</b> {personalityProfile.disc}</span>
              {personalityProfile.enneagram && <span><b>Enneagram:</b> {personalityProfile.enneagram}</span>}
              <span><b>Confidence:</b> {(personalityProfile.confidence * 100).toFixed(0)}%</span>
            </div>
          </div>
        )}
        {ritualPreferences && (
          <div>
            <h2 className="text-lg font-semibold text-[--color-primary-400] mb-1">Ritual Preferences</h2>
            <div className="grid grid-cols-2 gap-2 text-[--color-neutral-0]">
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
        className="w-full"
        onClick={onContinue}
      >
        Continue
      </Button>
    </Card>
  </div>
);

export default CompleteStep; 