"use client";

import { useState, useCallback, useEffect } from "react";
import { useConversation } from "@11labs/react";
import type { Language } from "@11labs/react";
import { WelcomeStep } from "./onboarding/WelcomeStep";
import { EmotionalDiscoveryStep } from "./onboarding/EmotionalDiscoveryStep";
import { RitualDesignStep } from "./onboarding/RitualDesignStep";
import { VoiceSelectionStep } from "./onboarding/VoiceSelectionStep";
import CompleteStep from "./onboarding/CompleteStep";

// Hardcoded map of voice IDs by language and gender
const VOICE_ID_MAP: Record<string, Record<string, string>> = {
  en: {
    male: "tQbs4WJdeIOdank6mubQ",
    female: "eaNNqnkhfRYVtX7U7VLj",
  },
  es: {
    male: "AvFwmpNEfWWu5mtNDqhH",
    female: "9rvdnhrYoXoUt4igKpBw",
  },
  pt: {
    male: "x6uRgOliu4lpcrqMH3s1",
    female: "PZIBrGsMjLyYasEz50bI",
  }
};

async function getSignedUrl(): Promise<string> {
  const res = await fetch('https://surodgyimnsfrxqehsxb.supabase.co/functions/v1/eleven-labs-signed-url', {
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json'
    }
  });  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to get signed URL');
  return data.signed_url;
}

const steps = [
  "emotional_discovery",
  "ritual_design",
  "voice_selection",
  "complete"
] as const;

type Step = "welcome" | "emotional_discovery" | "ritual_design" | "voice_selection" | "complete"

export const OnboardingPage = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState<Step>("emotional_discovery");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [knowledgeCategories, setKnowledgeCategories] = useState<string[]>([]);
  const [primaryGoals, setPrimaryGoals] = useState<string[]>([]);
  const [personalityProfile, setPersonalityProfile] = useState<{ disc: string; enneagram?: string; confidence: number } | null>(null);
  const [ritualPreferences, setRitualPreferences] = useState<{
    timing: string;
    duration: string;
    style: string;
    voice_id: string;
    focus_area: string;
  } | null>(null);

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (props: { message: string; source: string }) => { 
      console.log("Message:", props.message) 
      console.log("Source:", props.source) 
    },
    onError: (message: string) => console.error("Error:", message),
  });

  useEffect(() => {
      const requestMic = async () => await navigator.mediaDevices.getUserMedia({ audio: true });
      requestMic()
    }, [])

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Request signed URL
      const signedUrl = await getSignedUrl();

      // Select the correct voiceId from the map
      const voiceId = VOICE_ID_MAP[language]?.[gender] || VOICE_ID_MAP["en"]["male"];

      console.log("voiceId", voiceId)
      console.log("language", language)
      console.log("gender", gender)

      setCurrentStep("emotional_discovery")
      // Start the conversation with your agent
      await conversation.startSession({
        overrides: { agent: { language }, tts: { voiceId } },
        signedUrl,
        dynamicVariables: {
          user_name: userName,
        },
        clientTools: {
          set_personality_profile: ({ disc, enneagram, confidence }: {
            disc: 'D' | 'I' | 'S' | 'C',
            enneagram?: string,
            confidence: number
          }): string => {
            console.log("*** setPersonalityProfile ***", JSON.stringify({ disc, enneagram, confidence }))
            setPersonalityProfile({ disc, enneagram, confidence });
            return "Personality Profile Set Done";
          },
          set_ritual_preferences: ({ timing, duration, style, voice_id, focus_area }: {
            timing: 'morning_person' | 'evening_person',
            duration: 'quick_focused' | 'deeper_dive', 
            style: 'guided_structure' | 'open_conversation',
            voice_id: 'confident_coach' | 'warm_friend' | 'gentle_guide' | 'wise_mentor',
            focus_area: 'stress_management' | 'goal_achievement' | 'relationships' | 'self_worth' | 'emotional_regulation'
          }): string => {
            console.log("*** setRitualPreferences ***", JSON.stringify({ timing, duration, style, voice_id, focus_area }))
            setRitualPreferences({ timing, duration, style, voice_id, focus_area });
            return "Ritual Preferences Set Done";
          },
          tag_knowledge_category: ({ categories }: { categories: string[] }): string => {
            console.log("*** tagKnowledgeCategory ***", JSON.stringify(categories))
            setKnowledgeCategories(categories);
            return "Knowledge Category Tag Done";
          },
          set_primary_goals: ({ goals }: { goals: string[] }): string => {
            console.log("*** setPrimaryGoals ***", JSON.stringify(goals))
            setPrimaryGoals(goals);
            return "Primary Goals Set Done";
          },
          complete_onboarding: async (): Promise<string> => {
            setCurrentStep('complete' as Step)
            console.log("*** complete_onboarding ***")
            return 'Onboarding data saved successfully. Agent can now provide closing message before session ends.';
          },
          set_ui_step: ({ step }: { step: string }): string => {
            setCurrentStep(step as Step);
            console.log("***** set_ui_step ****", step)
            return `Navigated to ${step}`;
          },
        }
      });
      console.log("Conversation started successfully");
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, userName, language, gender]);


  // Step navigation helpers
  const stepIndex = steps.indexOf(currentStep);
  const totalSteps = steps.length;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center onboarding-bg">
      {currentStep === "welcome" && (
        <WelcomeStep
          userName={userName}
          setUserName={setUserName}
          language={language}
          setLanguage={(v: string) => setLanguage(v as Language)}
          gender={gender}
          setGender={(v: string) => setGender(v as "male" | "female")}
          onNext={() => startConversation()}
          stepIndex={stepIndex}
          totalSteps={totalSteps}
        />
      )}
      {currentStep === "emotional_discovery" && (
        <EmotionalDiscoveryStep 
          stepIndex={stepIndex}
          totalSteps={totalSteps}
        />
      )}
      {currentStep === "ritual_design" && (
        <RitualDesignStep 
          stepIndex={stepIndex}
          totalSteps={totalSteps}
        />
      )}
      {currentStep === "voice_selection" && (
        <VoiceSelectionStep 
          stepIndex={stepIndex}
          totalSteps={totalSteps}
        />
      )}
      {currentStep === "complete" as Step && (
        <CompleteStep
          knowledgeCategories={knowledgeCategories}
          primaryGoals={primaryGoals}
          personalityProfile={personalityProfile}
          ritualPreferences={ritualPreferences}
          onContinue={onBack}
          stepIndex={stepIndex}
          totalSteps={totalSteps}
        />
      )}
    </main>
  );
}
