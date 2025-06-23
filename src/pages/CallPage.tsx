import { IConversation } from '@/types';
import { useVideoCall } from '@/hooks/useVideoCall';
import { VideoControls } from '@/components/video/VideoControls';
import { CallInterface } from '@/components/video/CallInterface';

interface CallPageProps {
  conversation: IConversation;
  handleEnd: () => void;
  config?: {
    enableDeviceControls?: boolean;
  };
}

export const CallPage = ({ conversation, handleEnd, config }: CallPageProps) => {
  const { leaveCall } = useVideoCall(conversation);

  const handleLeave = async () => {
    await leaveCall();
    handleEnd();
  };

  return (
    <main className="h-screen w-screen bg-black flex flex-col items-center justify-between p-6">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Face-to-Face with Arami</h1>
      </div>

      <div className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden">
        <CallInterface />
      </div>

      <div className="w-full">
        <VideoControls onAction={handleLeave} config={config} />
      </div>
    </main>
  );
}; 