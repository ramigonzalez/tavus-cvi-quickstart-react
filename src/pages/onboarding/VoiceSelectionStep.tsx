import React from "react";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export type VoiceSelectionStepProps = {
  stepIndex: number;
  totalSteps: number;
};

export const VoiceSelectionStep: React.FC<VoiceSelectionStepProps> = ({ stepIndex, totalSteps }) => (
  <TakeABreathScreen
    heading="Voice Selection"
    subheading="Choose the voice that resonates with you most."
    stepIndex={stepIndex}
    totalSteps={totalSteps}
  />
); 