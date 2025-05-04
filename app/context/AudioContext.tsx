import React, { createContext, useState, useContext } from 'react';

type AudioContextType = {
  musicVolume: number;
  effectsVolume: number;
  setMusicVolume: (v: number) => void;
  setEffectsVolume: (v: number) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [musicVolume, setMusicVolume] = useState(0.5);
  const [effectsVolume, setEffectsVolume] = useState(0.5);

  return (
    <AudioContext.Provider value={{ musicVolume, effectsVolume, setMusicVolume, setEffectsVolume }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
