import { LevelTile } from './useLevelGenerator';

export const isLevelValid = (level: LevelTile[][]): boolean => {
  const size = level.length;
  const visited = Array.from({ length: size }, () => Array(size).fill(false));

  const dfs = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row >= size || col >= size) return false;
    if (visited[row][col]) return false;
    if (level[row][col].type === 'obstacle') return false;

    if (level[row][col].type === 'end') return true;

    visited[row][col] = true;

    return (
      dfs(row + 1, col) ||
      dfs(row - 1, col) ||
      dfs(row, col + 1) ||
      dfs(row, col - 1)
    );
  };

  return dfs(0, 0); // Empieza desde entrada
};
