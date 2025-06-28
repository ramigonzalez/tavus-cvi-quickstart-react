import React from "react";
import { Card } from "@/components/ui/Card";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { VoiceWaveform } from "@/components/ui/VoiceWaveform";
import { Button } from "@/components/ui/Button";
import { TakeABreathScreen } from "@/components/ui/TakeABreathScreen";

export const RitualDesignStep: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <TakeABreathScreen
      heading="Ritual Design"
      subheading="Let's design your perfect daily ritual together."
    />
  </div>
); 