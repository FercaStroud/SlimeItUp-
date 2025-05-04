export type ComplicationType =
  | 'leakyPipes'
  | 'rotatingPieces'
  | 'fogMode'
  | 'mutantSlime'
  | 'randomObstacles';

export interface Complication {
  type: ComplicationType;
  duration: number;
  description: string;
}

export const complicationsList: Complication[] = [
  {
    type: 'leakyPipes',
    duration: 15,
    description: 'Algunas piezas pierden slime y aceleran el flujo.',
  },
  {
    type: 'rotatingPieces',
    duration: 10,
    description: 'Las piezas colocadas giran automáticamente cada 5s.',
  },
  {
    type: 'fogMode',
    duration: 12,
    description: 'Partes del tablero quedan ocultas temporalmente.',
  },
  {
    type: 'mutantSlime',
    duration: 20,
    description: 'El slime cambia de color y afecta compatibilidad.',
  },
  {
    type: 'randomObstacles',
    duration: 18,
    description: 'Aparecen obstáculos fijos en celdas aleatorias.',
  },
];

export const getRandomComplication = (): Complication => {
  const index = Math.floor(Math.random() * complicationsList.length);
  return complicationsList[index];
};
