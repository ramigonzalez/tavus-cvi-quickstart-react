import React from "react";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export type RitualDesignStepProps = {
  stepIndex: number;
  totalSteps: number;
};

export const RitualDesignStep: React.FC<RitualDesignStepProps> = ({ stepIndex, totalSteps }) => (
  <div className="min-h-screen flex flex-col items-center justify-center onboarding-bg">
    <TakeABreathScreen
      heading="Ritual Design"
      subheading="Let's design your perfect daily ritual together."
      stepIndex={stepIndex}
      totalSteps={totalSteps}
    />
  </div>
); 