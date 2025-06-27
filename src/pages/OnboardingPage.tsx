"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useConversation } from "@11labs/react";
import type { Language } from "@11labs/react";

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

export const OnboardingPage = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState<
    "welcome" | "emotional_discovery" | "ritual_design" | "voice_selection" | "complete"
  >("welcome");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState<Language>("en");
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

      // Start the conversation with your agent
      await conversation.startSession({
        overrides: { agent: { language } },
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
            setCurrentStep('complete')
            console.log("*** complete_onboarding ***")
            await conversation.endSession();
            return "Onboarding completed";
          },
          set_ui_step: ({ step }: { step: string }): string => {
            // Allow agent to navigate the UI.
            setCurrentStep(
              step as "welcome" | "emotional_discovery" | "ritual_design" | "voice_selection"
            );
            console.log("***** set_ui_step ****", step)
            return `Navigated to ${step}`;
          },
        }
      });
      console.log("Conversation started successfully");
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, userName, language]);



  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Welcome Step */}
        <div className={currentStep === "welcome" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Design your Conversational AI Agent
            </h1>
            <p className="text-lg text-gray-300">
              Let's have a chat to design your helpful conversational AI agent!
              Click start and enable microphone access.
            </p>

            <div className="space-y-10">
            <div className="space-y-4 mt-6">
                <label htmlFor="name-input" className="block text-base font-semibold text-purple-400 mb-1">
                  Your Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Enter your name"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="language-select" className="block text-base font-semibold text-purple-400 mb-1">
                  Preferred Language
                </label>
                <select
                  id="language-select"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  value={language}
                  onChange={e => setLanguage(e.target.value as Language)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                </select>
              </div>
            </div>

            {conversation.status === "connected" ? (
              <Button
                type="button"
                onClick={() => stopConversation()}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
              >
                <span>End Conversation</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={startConversation}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
                disabled={!userName.trim()}
              >
                <span>Start</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Emotional Discovery Step */}
        <div className={currentStep === "emotional_discovery" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Emotional Discovery
            </h1>
            <p className="text-lg text-gray-300">
              Let's explore your emotional landscape and understand what drives you.
            </p>
            
            {conversation.status === "connected" && (
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-sm text-gray-400">Listening...</p>
              </div>
            )}
          </div>
        </div>

        {/* Ritual Design Step */}
        <div className={currentStep === "ritual_design" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Ritual Design
            </h1>
            <p className="text-lg text-gray-300">
              Let's design your perfect daily ritual together.
            </p>
            
            {conversation.status === "connected" && (
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-sm text-gray-400">Listening...</p>
              </div>
            )}
          </div>
        </div>

        {/* Voice Selection Step */}
        <div className={currentStep === "voice_selection" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Voice Selection
            </h1>
            <p className="text-lg text-gray-300">
              Choose the voice that resonates with you most.
            </p>
            
            {conversation.status === "connected" && (
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mx-auto mb-4"></div>
                <p className="text-sm text-gray-400">Listening...</p>
              </div>
            )}
          </div>
        </div>

        {/* Complete Step */}
        <div className={currentStep === "complete" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              All Set!
            </h1>
            <p className="text-lg text-gray-300">
              Your conversational AI agent is ready to support you on your journey.
            </p>

            <div className="bg-gray-900 rounded-xl shadow-lg p-6 space-y-6">
              {/* Knowledge Categories */}
              <div>
                <h2 className="text-xl font-semibold text-purple-300 mb-2">Knowledge Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {knowledgeCategories.map((cat, i) => (
                    <span key={i} className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm">{cat}</span>
                  ))}
                </div>
              </div>

              {/* Primary Goals */}
              <div>
                <h2 className="text-xl font-semibold text-purple-300 mb-2">Primary Goals</h2>
                <ul className="list-disc list-inside text-gray-200">
                  {primaryGoals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>

              {/* Personality Profile */}
              {personalityProfile && (
                <div>
                  <h2 className="text-xl font-semibold text-purple-300 mb-2">Personality Profile</h2>
                  <div className="flex flex-col gap-1 text-gray-200">
                    <span><b>DISC:</b> {personalityProfile.disc}</span>
                    {personalityProfile.enneagram && <span><b>Enneagram:</b> {personalityProfile.enneagram}</span>}
                    <span><b>Confidence:</b> {(personalityProfile.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
              )}

              {/* Ritual Preferences */}
              {ritualPreferences && (
                <div>
                  <h2 className="text-xl font-semibold text-purple-300 mb-2">Ritual Preferences</h2>
                  <div className="grid grid-cols-2 gap-2 text-gray-200">
                    <span><b>Timing:</b> {ritualPreferences.timing.replace('_', ' ')}</span>
                    <span><b>Duration:</b> {ritualPreferences.duration.replace('_', ' ')}</span>
                    <span><b>Style:</b> {ritualPreferences.style.replace('_', ' ')}</span>
                    <span><b>Voice:</b> {ritualPreferences.voice_id.replace('_', ' ')}</span>
                    <span><b>Focus Area:</b> {ritualPreferences.focus_area.replace('_', ' ')}</span>
                  </div>
                </div>
              )}
            </div>

            <Button
              type="button"
              onClick={onBack}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
            >
              <span>Continue</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
