import { GameItem, ItemType } from './itemTypes';

export const generateItems = (gridSize: number, count: number): GameItem[] => {
  const items: GameItem[] = [];
  const used = new Set<string>();
  const types: ItemType[] = ['gear', 'orb', 'fragment', 'shield'];

  while (items.length < count) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    const key = `${row},${col}`;
    if (used.has(key)) continue;

    used.add(key);
    items.push({
      id: `${row}-${col}`,
      type: types[Math.floor(Math.random() * types.length)],
    });
  }

  return items;
};
