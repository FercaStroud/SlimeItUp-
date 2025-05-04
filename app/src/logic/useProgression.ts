import { useState } from 'react';
import { progressionTree, UnlockNode } from './progressionTree';

export const useProgression = () => {
  const [unlocks, setUnlocks] = useState<UnlockNode[]>(progressionTree);

  const unlockNode = (id: string) => {
    setUnlocks(prev =>
      prev.map(n => (n.id === id ? { ...n, unlocked: true } : n))
    );
  };

  const isUnlocked = (id: string): boolean => {
    return unlocks.find(n => n.id === id)?.unlocked ?? false;
  };

  return {
    unlocks,
    unlockNode,
    isUnlocked,
  };
};
