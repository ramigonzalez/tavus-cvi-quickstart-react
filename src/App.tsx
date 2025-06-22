import { useEffect, useState } from 'react'
import { DailyProvider } from '@daily-co/daily-react'
import { WelcomeScreen } from '@/components/WelcomeScreen'
import { CallScreen } from '@/components/CallScreen'
import { endConversation } from '@/api'
import { ConversationStatus, IConversation } from '@/types'
import { useToast } from "@/hooks/use-toast"

function App() {
  const { toast } = useToast()
  const [screen, setScreen] = useState<'welcome' | 'hairCheck' | 'call'>('welcome')
  const [conversation, setConversation] = useState<IConversation | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      if (conversation) {
        void endConversation(conversation.conversation_id)
      }
    }
  }, [conversation])

  const handleStart = async () => {
    try {
      setLoading(true)
      // const conversation = await createConversation()
      const conversation = {
        conversation_id: "c24b055c0a427428",
        conversation_name: "New Conversation 1750378478270",
        status: ConversationStatus.ACTIVE,
        conversation_url: "https://tavus.daily.co/c9eb391058d0f4b7",
        replica_id: null,
        persona_id: null,
        created_at: "2025-06-20T00:14:38.292493Z"
      };
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
      await endConversation(conversation.conversation_id)
    } catch (error) {
      console.error(error)
    } finally {
      setConversation(null)
      setScreen('welcome')
    }
  }

  return (
    <main>
      <DailyProvider>
        {screen === 'welcome' && <WelcomeScreen onStart={handleStart} loading={loading} />}
        {screen === 'call' && conversation && <CallScreen conversation={conversation} handleEnd={handleEnd} />}
      </DailyProvider>
    </main>
  )
}

export default App
