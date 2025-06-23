"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useConversation } from "@11labs/react";

async function getSignedUrl(): Promise<string> {
  const res = await fetch('/api/getSignedUrl');
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to get signed URL');
  return data.signed_url;
}

export const OnboardingPage = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState<
    "initial" | "training" | "voice" | "email" | "ready"
  >("initial");
  const [userName, setUserName] = useState("");
  const [conversationId, setConversationId] = useState("");

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message: string) => console.log("Message:", message),
    onError: (error: Error) => console.error("Error:", error),
  });

  useEffect(() => {
      const requestMic = async () => await navigator.mediaDevices.getUserMedia({ audio: true });
      requestMic()
    }, [])

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start the conversation with your agent
      const signedUrl = await getSignedUrl();
      const convId = await conversation.startSession({
        signedUrl,
        dynamicVariables: {
          user_name: userName,
        },
        // clientTools: {
        //   set_ui_state: ({ step }: { step: string }): string => {
        //     // Allow agent to navigate the UI.
        //     setCurrentStep(
        //       step as "initial" | "training" | "voice" | "email" | "ready"
        //     );
        //     return `Navigated to ${step}`;
        //   },
        // },
        clientTools: {
          set_personality_profile: ({ disc, enneagram, confidence }: {
            disc: 'D' | 'I' | 'S' | 'C',
            enneagram?: string,
            confidence: number
          }): string => setPersonalityProfile({ disc, enneagram, confidence }),
          set_ritual_preferences: ({ timing, duration, style, voice_id, focus_area }: {
            timing: 'morning_person' | 'evening_person',
            duration: 'quick_focused' | 'deeper_dive', 
            style: 'guided_structure' | 'open_conversation',
            voice_id: 'confident_coach' | 'warm_friend' | 'gentle_guide' | 'wise_mentor',
            focus_area: 'stress_management' | 'goal_achievement' | 'relationships' | 'self_worth' | 'emotional_regulation'
          }): string => setRitualPreferences({ timing, duration, style, voice_id, focus_area }),
          tag_knowledge_category: ({ categories }: { categories: string[] }): string => tagKnowledgeCategory({ categories }),
          set_primary_goals: ({ goals }: { goals: string[] }): string => setPrimaryGoals({ goals }),
          clarify_user_input: ({ question }: { question: string }): string => clarifyUserInput({ question }),
          complete_onboarding: async (): Promise<string> => {
            console.log("*** complete_onboarding ***")
            await conversation.endSession();
            return "ss";
          },
        }
      });
      setConversationId(convId);
      console.log("Conversation ID:", convId);
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, userName]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className={currentStep === "initial" ? "block" : "hidden"}>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Design your Conversational AI Agent
            </h1>
            <p className="text-lg text-gray-300">
              Let's have a chat to design your helpful conversational AI agent!
              Click start and enable microphone access.
            </p>

            <div className="space-y-4">
              <label htmlFor="name-input" className="text-sm text-gray-400">
                Your Name
              </label>
              <input
                id="name-input"
                type="text"
                placeholder="Enter your name"
                className="bg-gray-800 border-gray-700 text-white"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                required
              />
            </div>

            {conversation.status === "connected" ? (
              <Button
                type="button"
                onClick={() => stopConversation}
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
      </div>
    </main>
  );
}

function setPersonalityProfile(arg0: { disc: "D" | "I" | "S" | "C"; enneagram: string | undefined; confidence: number; }): string {
  console.log("*** setPersonalityProfile ***", JSON.stringify(arg0))
  return "Personality Profile Set Done";
}


function setRitualPreferences(arg0: { timing: "morning_person" | "evening_person"; duration: "quick_focused" | "deeper_dive"; style: "guided_structure" | "open_conversation"; voice_id: "confident_coach" | "warm_friend" | "gentle_guide" | "wise_mentor"; focus_area: "stress_management" | "goal_achievement" | "relationships" | "self_worth" | "emotional_regulation"; }): string {
  console.log("*** setRitualPreferences ***", JSON.stringify(arg0))
  return "Ritual Preferences Set Done";
}


function tagKnowledgeCategory(arg0: { categories: string[]; }): string {
    console.log("*** tagKnowledgeCategory ***", JSON.stringify(arg0))
  return "Knowledge Category Tag Done";
}


function setPrimaryGoals(arg0: { goals: string[]; }): string {
    console.log("*** setPrimaryGoals ***", JSON.stringify(arg0))
  return "Primary Goals Set Done";
}


function clarifyUserInput(arg0: { question: string; }): string {
    console.log("*** clarifyUserInput ***", JSON.stringify(arg0))
  return "Personality Profile Done";
}
