import React from "react";
import { Card } from "@/components/ui/Card";
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

export const WelcomeStep: React.FC<WelcomeStepProps> = ({
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
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] relative font-sans">
    <div className="absolute inset-0 pointer-events-none z-0" style={{
      background: "rgba(255,255,255,0.02)",
      mixBlendMode: "overlay"
    }} />
    <div className="z-10 flex flex-col items-center w-full px-4">
      <ProgressDots current={stepIndex} total={totalSteps} />
      <Card className="w-full max-w-sm mx-auto mt-8 shadow-indigo rounded-2xl animate-fade-in p-8 bg-[rgba(30,18,70,0.95)] backdrop-blur-md border border-[#6556b9]/30">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F5EFE8] to-[#BA9BE6] bg-clip-text text-transparent text-center mb-4 drop-shadow-lg">Design your Conversational AI Agent</h1>
        <p className="text-base text-[#BA9BE6] mb-6 text-center">Let's have a chat to design your helpful conversational AI agent! Click start and enable microphone access.</p>
        <Input
          label="Your Name"
          id="name-input"
          placeholder="Enter your name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
        <div className="mb-4 mt-4">
          <label htmlFor="language-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Language</label>
          <select
            id="language-select"
            aria-label="Preferred Language"
            className="w-full bg-[#2d176e] border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200 shadow-sm"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="gender-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Voice Gender</label>
          <select
            id="gender-select"
            aria-label="Preferred Voice Gender"
            className="w-full bg-[#2d176e] border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200 shadow-sm"
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
          className="mt-8 w-full button-animated bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white rounded-full shadow-lg text-lg font-bold transition-transform duration-150 active:scale-105"
          onClick={onNext}
          disabled={!userName.trim()}
        >
          Start
        </Button>
      </Card>
    </div>
  </div>
); 