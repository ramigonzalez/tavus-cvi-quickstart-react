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
  <div className="relative min-h-screen flex flex-col items-center justify-center px-4 onboarding-bg">
    <div className="app-bg-overlay" />
    <ProgressDots current={stepIndex} total={totalSteps} />
    <Card className="w-full max-w-sm mx-auto mt-8 shadow-indigo rounded-24 animate-fade-in p-6">
      <h1 className="heading-gradient text-4xl font-bold mb-4">Design your Conversational AI Agent</h1>
      <p className="text-base text-[--color-neutral-0] mb-6">Let's have a chat to design your helpful conversational AI agent! Click start and enable microphone access.</p>
      <Input
        label="Your Name"
        id="name-input"
        placeholder="Enter your name"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        required
      />
      <div className="mb-4">
        <label htmlFor="language-select" className="block text-base font-semibold text-[--color-primary-400] mb-1">Preferred Language</label>
        <select
          id="language-select"
          aria-label="Preferred Language"
          className="w-full bg-[--color-surface-900] border border-gray-700 rounded-16 px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary-600] focus:border-transparent transition-all duration-200 shadow-sm"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="gender-select" className="block text-base font-semibold text-[--color-primary-400] mb-1">Preferred Voice Gender</label>
        <select
          id="gender-select"
          aria-label="Preferred Voice Gender"
          className="w-full bg-[--color-surface-900] border border-gray-700 rounded-16 px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary-600] focus:border-transparent transition-all duration-200 shadow-sm"
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
        className="mt-8 w-full button-animated"
        onClick={onNext}
        disabled={!userName.trim()}
      >
        Start
      </Button>
    </Card>
  </div>
); 