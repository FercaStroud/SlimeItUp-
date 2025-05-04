

import React, { createContext, useContext, useState } from 'react';

type GameContextType = {
  level: number;
  setLevel: (lvl: number) => void;
  score: number;
  setScore: (value: number) => void;
  powersUsed: string[];
  addPowerUsed: (id: string) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [powersUsed, setPowersUsed] = useState<string[]>([]);

  const addPowerUsed = (id: string) => {
    setPowersUsed(prev => [...prev, id]);
  };

  return (
    <GameContext.Provider value={{ level, setLevel, score, setScore, powersUsed, addPowerUsed }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
