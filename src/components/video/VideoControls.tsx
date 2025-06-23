import { Mic, VideoOff, VideoIcon, MicOff, PhoneOff } from 'lucide-react';
import { useDeviceControls } from '@/hooks/useDeviceControls';

interface VideoControlsProps {
  onAction?: () => void;
  config?: {
    enableDeviceControls?: boolean;
  };
}

export const VideoControls = ({ onAction, config }: VideoControlsProps) => {
  const {
    isCameraEnabled,
    isMicEnabled,
    toggleCamera,
    toggleMicrophone,
    refreshDevices,
    hasDevices,
    getUserMediaError,
    setGetUserMediaError
  } = useDeviceControls();

  return (
    <div className="relative mx-auto flex w-full max-w-screen-md flex-col items-center justify-center">
      <div className='flex items-center justify-center'>
        {getUserMediaError && (
          <button
            onClick={() => {
              refreshDevices();
              setGetUserMediaError(false);
            }}
            className='px-6 py-2 rounded-button bg-primary text-slate-50'
          >
            Turn on Camera & Microphone
          </button>
        )}
        {!getUserMediaError && (
          <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center justify-center'>
              <button
                onClick={toggleCamera}
                className={`p-3 rounded-full text-slate-50 bg-slate-500/70`}
              >
                {isCameraEnabled ? (
                  <VideoIcon className='size-5' />
                ) : (
                  <VideoOff className='size-5' />
                )}
              </button>
            </div>
            <div className='flex items-center justify-center'>
              <button
                onClick={toggleMicrophone}
                className={`p-3 rounded-full text-slate-50 bg-slate-500/70`}
              >
                {isMicEnabled ? (
                  <Mic className='size-5' />
                ) : (
                  <MicOff className='size-5' />
                )}
              </button>
            </div>
            <div className='flex items-center justify-center'>
            <button
              onClick={onAction}
              disabled={getUserMediaError || !hasDevices}
              className={`p-3 rounded-full text-slate-50 bg-red-500`}
              >
              <span><PhoneOff className='size-5' /></span>
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 