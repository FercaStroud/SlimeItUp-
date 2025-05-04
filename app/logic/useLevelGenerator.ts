import { useState } from 'react';

export interface LevelTile {
  row: number;
  col: number;
  type: 'empty' | 'start' | 'end' | 'obstacle';
}

export const useLevelGenerator = (size: number = 6) => {
  const [level, setLevel] = useState<LevelTile[][]>([]);

  const generateLevel = () => {
    const newLevel: LevelTile[][] = [];
    for (let row = 0; row < size; row++) {
      const currentRow: LevelTile[] = [];
      for (let col = 0; col < size; col++) {
        currentRow.push({ row, col, type: 'empty' });
      }
      newLevel.push(currentRow);
    }

    // Colocar entrada y salida
    newLevel[0][0].type = 'start';
    newLevel[size - 1][size - 1].type = 'end';

    setLevel(newLevel);
  };

  return { level, generateLevel };
};
