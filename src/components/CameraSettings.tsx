import { useState, useCallback } from 'react';
import {
  useDevices,
  useDaily,
  useDailyEvent,
  useLocalSessionId,
  useVideoTrack,
  useAudioTrack,
} from '@daily-co/daily-react';
import { Mic, VideoOff, VideoIcon, MicOff, PhoneOff } from 'lucide-react';

export const CameraSettings = ({ onAction }:
  {
    onAction?: () => void,
  }
) => {
  const daily = useDaily();
  const {
    currentCam,
    currentMic,
    refreshDevices,
  } = useDevices();
  const localSessionId = useLocalSessionId();
  const localVideo = useVideoTrack(localSessionId);
  const localAudio = useAudioTrack(localSessionId);
  const isCameraEnabled = !localVideo.isOff;
  const isMicEnabled = !localAudio.isOff;
  const [getUserMediaError, setGetUserMediaError] = useState(false);


  useDailyEvent(
    'camera-error',
    useCallback(() => {
      setGetUserMediaError(true);
    }, [])
  );

  const toggleCamera = () => {
    daily?.setLocalVideo(!isCameraEnabled);
  };

  const toggleMicrophone = () => {
    daily?.setLocalAudio(!isMicEnabled);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-screen-md flex-col items-center justify-center">
      <div className='flex items-center justify-center'>
        {getUserMediaError && (
          <button
            onClick={() => {
              refreshDevices();
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
              disabled={getUserMediaError || !currentCam || !currentMic}
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
