import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export type WelcomeStepProps = {
  userName: string;
  setUserName: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  gender: string;
  setGender: (v: string) => void;
  onNext: () => void;
};

export const WelcomeStepFloating: React.FC<WelcomeStepProps> = ({
  userName,
  setUserName,
  language,
  setLanguage,
  gender,
  setGender,
  onNext,
}) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1047] via-[#2d176e] to-[#0e062a] font-sans p-8">
    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#F5EFE8] to-[#BA9BE6] bg-clip-text text-transparent text-center mb-4 drop-shadow-lg">
      Design your Conversational AI Agent
    </h1>
    <p className="text-lg text-[#BA9BE6] text-center mb-10">
      Let's have a chat to design your helpful conversational AI agent! Click start and enable microphone access.
    </p>
    <div className="mb-6 w-full max-w-sm mx-auto">
      <div className="rounded-2xl bg-[#2d176e]/60 shadow-2xl backdrop-blur-md p-4 mb-4">
        <label htmlFor="name-input" className="block text-base font-semibold text-[#BA9BE6] mb-1">
          Your Name
        </label>
        <Input
          id="name-input"
          placeholder="Enter your name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
          className="w-full bg-transparent border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200"
        />
      </div>
      <div className="rounded-2xl bg-[#2d176e]/60 shadow-2xl backdrop-blur-md p-4 mb-4">
        <label htmlFor="language-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Language</label>
        <select
          id="language-select"
          aria-label="Preferred Language"
          className="w-full bg-transparent border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese</option>
        </select>
      </div>
      <div className="rounded-2xl bg-[#2d176e]/60 shadow-2xl backdrop-blur-md p-4 mb-6">
        <label htmlFor="gender-select" className="block text-base font-semibold text-[#BA9BE6] mb-1">Preferred Voice Gender</label>
        <select
          id="gender-select"
          aria-label="Preferred Voice Gender"
          className="w-full bg-transparent border border-[#6556b9] rounded-2xl px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#846fda] focus:border-transparent transition-all duration-200"
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div className="rounded-full bg-gradient-to-r from-[#846fda] to-[#6556b9] shadow-xl p-1">
        <Button
          variant="primary"
          size="large"
          className="w-full py-4 rounded-full bg-gradient-to-r from-[#846fda] to-[#6556b9] text-white text-lg font-bold shadow-lg transition-transform duration-150 active:scale-105"
          onClick={onNext}
          disabled={!userName.trim()}
        >
          Start
        </Button>
      </div>
    </div>
  </div>
); 