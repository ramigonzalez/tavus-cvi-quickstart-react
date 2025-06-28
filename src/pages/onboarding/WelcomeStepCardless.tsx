import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ProgressDots } from "@/components/ui/ProgressDots";

export type WelcomeStepProps = {
  userName: string;
  setUserName: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  gender: string;
  setGender: (v: string) => void;
  onNext: () => void;
  stepIndex: number;
  totalSteps: number;
};

export const WelcomeStepCardless: React.FC<WelcomeStepProps> = ({
  userName,
  setUserName,
  language,
  setLanguage,
  gender,
  setGender,
  onNext,
  stepIndex,
  totalSteps,
}) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] font-sans px-4">
    <div className="mt-12 mb-6">
      <ProgressDots current={stepIndex} total={totalSteps} />
    </div>
    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F5EFE8] to-[#BA9BE6] bg-clip-text text-transparent text-center mb-4 drop-shadow-lg">
      Design your Conversational AI Agent
    </h1>
    <p className="text-lg text-[#BA9BE6] text-center mb-10">
      Let's have a chat to design your helpful conversational AI agent! Click start and enable microphone access.
    </p>
    <Input
      label="Your Name"
      id="name-input"
      placeholder="Enter your name"
      value={userName}
      onChange={e => setUserName(e.target.value)}
      required
      className="mb-6 bg-[#2d176e]/60 rounded-2xl shadow-lg"
    />
    <div className="mb-6 w-full max-w-sm">
      <label htmlFor="language-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Language</label>
      <select
        id="language-select"
        aria-label="Preferred Language"
        className="w-full bg-[#2d176e]/60 border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200 shadow-lg"
        value={language}
        onChange={e => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
      </select>
    </div>
    <div className="mb-10 w-full max-w-sm">
      <label htmlFor="gender-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Voice Gender</label>
      <select
        id="gender-select"
        aria-label="Preferred Voice Gender"
        className="w-full bg-[#2d176e]/60 border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200 shadow-lg"
        value={gender}
        onChange={e => setGender(e.target.value)}
      >
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
    <Button
      variant="primary"
      size="large"
      className="w-full max-w-xs py-4 rounded-full bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white text-lg font-bold shadow-lg transition-transform duration-150 active:scale-105"
      onClick={onNext}
      disabled={!userName.trim()}
    >
      Start
    </Button>
  </div>
); 