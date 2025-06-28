import React from "react";
import { WelcomeStepFloating } from "./WelcomeStepFloating";
import type { WelcomeStepProps } from "./WelcomeStepCardless";

export const WelcomeStep: React.FC<WelcomeStepProps> = (props) => {
  return <WelcomeStepFloating {...props} />;
}; 