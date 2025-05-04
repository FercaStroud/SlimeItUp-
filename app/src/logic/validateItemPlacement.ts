import { LevelTile } from './useLevelGenerator';

export const isValidItemPlacement = (
  tile: LevelTile,
  reservedCoords: Set<string>
): boolean => {
  const key = `${tile.row},${tile.col}`;
  if (tile.type === 'obstacle' || tile.type === 'start' || tile.type === 'end') return false;
  if (reservedCoords.has(key)) return false;
  return true;
};
