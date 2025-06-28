import React from "react";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export type VoiceSelectionStepProps = {
  stepIndex: number;
  totalSteps: number;
};

export const VoiceSelectionStep: React.FC<VoiceSelectionStepProps> = ({ stepIndex, totalSteps}) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <TakeABreathScreen
      heading="Voice Selection"
      subheading="Choose the voice that resonates with you most."
      stepIndex={stepIndex}
      totalSteps={totalSteps}
    />
  </div>
); 