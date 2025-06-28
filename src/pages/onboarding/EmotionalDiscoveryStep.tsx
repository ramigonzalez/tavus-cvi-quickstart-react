import React from "react";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export type EmotionalDiscoveryStepProps = {
  stepIndex: number;
  totalSteps: number;
};

export const EmotionalDiscoveryStep: React.FC<EmotionalDiscoveryStepProps> = ({ stepIndex, totalSteps }) => (
  <div className="min-h-screen flex flex-col items-center justify-center onboarding-bg">
    <TakeABreathScreen
      heading="Emotional Discovery"
      subheading="Let's explore your emotional landscape and understand what drives you."
      stepIndex={stepIndex}
      totalSteps={totalSteps}
    />
  </div>
); 