// Validación de conexiones entre piezas del grid

export type Direction = 'top' | 'bottom' | 'left' | 'right';

export const getOppositeDirection = (dir: Direction): Direction => {
  switch (dir) {
    case 'top': return 'bottom';
    case 'bottom': return 'top';
    case 'left': return 'right';
    case 'right': return 'left';
  }
};

export const canConnect = (a: Direction[], b: Direction[], side: Direction): boolean => {
  const opposite = getOppositeDirection(side);
  return a.includes(side) && b.includes(opposite);
};
