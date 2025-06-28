import React from "react";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export type RitualDesignStepProps = {
  stepIndex: number;
  totalSteps: number;
};

export const RitualDesignStep: React.FC<RitualDesignStepProps> = ({ stepIndex, totalSteps }) => (
  <TakeABreathScreen
    heading="Ritual Design"
    subheading="Let's design your perfect daily ritual together."
    stepIndex={stepIndex}
    totalSteps={totalSteps}
  />
); 