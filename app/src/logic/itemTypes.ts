export type ItemType = 'gear' | 'orb' | 'fragment' | 'shield';

export interface GameItem {
  id: string;
  type: ItemType;
  value?: number;
}

export const getItemEffect = (type: ItemType): string => {
  switch (type) {
    case 'gear':
      return 'Aumenta puntuación';
    case 'orb':
      return 'Recarga poderes';
    case 'fragment':
      return 'Avanza en desbloqueos';
    case 'shield':
      return 'Bloquea fuga';
  }
};
