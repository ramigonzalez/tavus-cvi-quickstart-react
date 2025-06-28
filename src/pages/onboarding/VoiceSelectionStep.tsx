import React from "react";
import { Card } from "@/components/ui/Card";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { Button } from "@/components/ui/Button";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export const VoiceSelectionStep: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <TakeABreathScreen
      heading="Voice Selection"
      subheading="Choose the voice that resonates with you most."
    />
  </div>
); 