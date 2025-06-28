import React from "react";
import { Card } from "@/components/ui/Card";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { Button } from "@/components/ui/Button";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export const EmotionalDiscoveryStep: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <TakeABreathScreen
      heading="Emotional Discovery"
      subheading="Let's explore your emotional landscape and understand what drives you."
    />
  </div>
); 