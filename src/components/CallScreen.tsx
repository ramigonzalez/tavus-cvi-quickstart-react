import { useEffect } from 'react';
import { useDaily } from '@daily-co/daily-react';
import { IConversation } from '@/types';
import { CameraSettings } from './CameraSettings';
import { Call } from './Call';

export const CallScreen = ({ conversation, handleEnd }: { conversation: IConversation, handleEnd: () => void }) => {
  const daily = useDaily();

  useEffect(() => {
    if (conversation && daily) {
      const { conversation_url } = conversation;
      daily.join({
        url: conversation_url,
      });
    }
  }, [daily, conversation]);

  const handleLeave = async () => {
    await daily?.leave();
    handleEnd();
  }

  return (
    <main className="h-screen w-screen bg-black flex flex-col items-center justify-between p-6">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Face-to-Face with Arami</h1>
      </div>

      <div className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden">
        <Call />
      </div>

      <div className="w-full">
        <CameraSettings onAction={handleLeave} />
      </div>
    </main>
  );
};
