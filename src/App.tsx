import { useEffect, useState } from 'react'
import { DailyProvider } from '@daily-co/daily-react'
import { WelcomePage } from '@/pages/WelcomePage'
import { VideoCallModule } from '@/VideoCallModule'
import { ConversationService } from '@/services/conversationService'
import { IConversation } from '@/types'
import { useToast } from "@/hooks/use-toast"
import { OnboardingPage } from '@/pages/OnboardingPage'

function App() {
  const { toast } = useToast()
  const [screen, setScreen] = useState<'welcome' | 'call' | 'onboarding'>('welcome')
  const [conversation, setConversation] = useState<IConversation | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      if (conversation) {
        void ConversationService.endConversation(conversation.conversation_id)
      }
    }
  }, [conversation])

  const handleStart = async () => {
    try {
      setLoading(true)
      const conversation = await ConversationService.createConversation()
      setConversation(conversation)
      setScreen('call')
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'Check console for details',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEnd = async () => {
    try {
      if (!conversation) return
      await ConversationService.endConversation(conversation.conversation_id)
    } catch (error) {
      console.error(error)
    } finally {
      setConversation(null)
      setScreen('welcome')
    }
  }

  return (
    <main>
      {screen === 'onboarding' ? (
        <OnboardingPage onBack={() => setScreen('welcome')} />
      ) : (
        <>
          <button onClick={() => setScreen('onboarding')} style={{borderBottom: '1px solid'}}>ONBOARDING</button>
          <DailyProvider>
            {screen === 'welcome' && <WelcomePage onStart={handleStart} loading={loading} />}
            {screen === 'call' && conversation && (
              <VideoCallModule 
                conversation={conversation} 
                onEnd={handleEnd}
                config={{ enableToolCalls: true, enableDeviceControls: true }}
              />
            )}
          </DailyProvider>
        </>
      )}
    </main>
  )
}

export default App
