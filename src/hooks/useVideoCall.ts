import { useEffect, useState, useCallback } from 'react';
import { useDaily } from '@daily-co/daily-react';
import { IConversation } from '@/types';

export const useVideoCall = (conversation: IConversation) => {
  const daily = useDaily();
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    if (conversation && daily) {
      const { conversation_url } = conversation;
      daily.join({
        url: conversation_url,
      });
      setIsConnected(true);
    }
  }, [daily, conversation]);

  const leaveCall = useCallback(async () => {
    await daily?.leave();
    setIsConnected(false);
  }, [daily]);

  return { isConnected, leaveCall };
}; 