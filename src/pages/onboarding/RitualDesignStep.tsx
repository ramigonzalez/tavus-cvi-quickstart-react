import React from "react";
import { Card } from "@/components/ui/Card";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { Button } from "@/components/ui/Button";

export type RitualDesignStepProps = {
  onNext: () => void;
  onBack: () => void;
  stepIndex: number;
  totalSteps: number;
  listening?: boolean;
};

export const RitualDesignStep: React.FC<RitualDesignStepProps> = ({
  onNext,
  onBack,
  stepIndex,
  totalSteps,
  listening = true,
}) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <ProgressDots current={stepIndex} total={totalSteps} />
    <Card className="w-full max-w-sm mx-auto mt-8 flex flex-col items-center shadow-indigo rounded-24 animate-fade-in">
      <h1 className="heading-gradient text-4xl font-bold mb-4">Ritual Design</h1>
      <p className="text-base text-[--color-neutral-0] mb-6 text-center">Let's design your perfect daily ritual together.</p>
      <div className="my-6">
        <VoiceWaveform active={listening} />
        <div className="text-center mt-2">
          <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse inline-block mr-2"></span>
          <span className="text-sm text-gray-400">Listening...</span>
        </div>
      </div>
      <div className="flex w-full gap-2 mt-8">
        <Button variant="ghost" size="medium" className="w-1/2" onClick={onBack}>Back</Button>
        <Button variant="primary" size="medium" className="w-1/2" onClick={onNext}>Next</Button>
      </div>
    </Card>
  </div>
); 