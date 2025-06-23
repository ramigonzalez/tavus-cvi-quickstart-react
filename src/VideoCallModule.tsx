import { CallPage } from './pages/CallPage';
import { IConversation } from './types';
import { ConversationService } from './services/conversationService';
import { Toaster } from "@/components/ui/toaster";

export interface VideoCallModuleProps {
  conversation: IConversation;
  onEnd: () => void;
  config?: {
    enableToolCalls?: boolean;
    enableDeviceControls?: boolean;
  };
}

export const VideoCallModule = ({ conversation, onEnd, config }: VideoCallModuleProps) => {
  const handleEnd = async () => {
    try {
      if (!conversation) return;
      await ConversationService.endConversation(conversation.conversation_id);
    } catch (error) {
      console.error(error);
    } finally {
      onEnd();
    }
  };

  return (
    <>
      <CallPage conversation={conversation} handleEnd={handleEnd} config={config} />
      <Toaster />
    </>
  );
}; 