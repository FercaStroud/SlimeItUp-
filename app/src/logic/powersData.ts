export interface PowerData {
  id: string;
  name: string;
  description: string;
  uses: number;
  cooldown: number;
}

export const powers: PowerData[] = [
  {
    id: 'freeze',
    name: 'Freeze Slime',
    description: 'Detiene el flujo durante 3 segundos.',
    uses: 1,
    cooldown: 10,
  },
  {
    id: 'swap',
    name: 'Pipe Swap',
    description: 'Cambia la pieza actual por otra.',
    uses: 2,
    cooldown: 8,
  },
  {
    id: 'ghost',
    name: 'Ghost Pipe',
    description: 'Conecta una pieza sin continuidad física.',
    uses: 1,
    cooldown: 15,
  },
  {
    id: 'explosive',
    name: 'Explosive Flush',
    description: 'Limpia 3 piezas consecutivas y pausa el flujo.',
    uses: 1,
    cooldown: 20,
  },
];
