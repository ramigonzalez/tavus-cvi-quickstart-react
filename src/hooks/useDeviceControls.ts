import { useState, useCallback } from 'react';
import {
  useDevices,
  useDaily,
  useDailyEvent,
  useLocalSessionId,
  useVideoTrack,
  useAudioTrack,
} from '@daily-co/daily-react';

export const useDeviceControls = () => {
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

  const toggleCamera = useCallback(() => {
    daily?.setLocalVideo(!isCameraEnabled);
  }, [daily, isCameraEnabled]);

  const toggleMicrophone = useCallback(() => {
    daily?.setLocalAudio(!isMicEnabled);
  }, [daily, isMicEnabled]);

  return {
    isCameraEnabled,
    isMicEnabled,
    toggleCamera,
    toggleMicrophone,
    refreshDevices,
    hasDevices: !!(currentCam && currentMic),
    getUserMediaError,
    setGetUserMediaError
  };
}; 