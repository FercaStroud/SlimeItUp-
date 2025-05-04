

import React, { createContext, useContext, useState } from 'react';

type GameContextType = {
  level: number;
  setLevel: (lvl: number) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState(1);

  return (
    <GameContext.Provider value={{ level, setLevel }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
