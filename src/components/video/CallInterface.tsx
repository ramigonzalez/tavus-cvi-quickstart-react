import { DailyAudio, useParticipantIds, useLocalSessionId } from '@daily-co/daily-react';
import { useAppMessages } from '@/hooks/useAppMessages';
import { VideoPlayer } from './VideoPlayer';

export const CallInterface = () => {
  const remoteParticipantIds = useParticipantIds({ filter: 'remote' });
  const localSessionId = useLocalSessionId();

  // Clean separation - all app message logic extracted
  useAppMessages();

  return (
    <div className="relative h-full w-full">
      {remoteParticipantIds.length > 0 ? (
        <VideoPlayer id={remoteParticipantIds[0]} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center" />
      )}
      {localSessionId && (
        <VideoPlayer
          id={localSessionId}
          className="absolute bottom-4 right-4 h-32 w-32 rounded-lg"
        />
      )}
      <DailyAudio />
    </div>
  );
}; 