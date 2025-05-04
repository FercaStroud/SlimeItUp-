export interface Boss {
  id: number;
  name: string;
  icon: string;
  phrase: string;
  effect: string;
}

export const bosses: Boss[] = [
  {
    id: 1,
    name: 'The Rusted Engineer',
    icon: '🛠️',
    phrase: "You can’t outflow rust, rookie.",
    effect: 'Oxida piezas cada 10s',
  },
  {
    id: 2,
    name: 'Blobber Queen',
    icon: '👑',
    phrase: "Double the slime, double the mess. Let’s dance!",
    effect: 'Doble flujo',
  },
  {
    id: 3,
    name: 'Dr. Leak',
    icon: '💧',
    phrase: "Let’s see how well you handle a little *pressure*.",
    effect: 'Fugas constantes',
  },
  {
    id: 4,
    name: 'Mother Gridlock',
    icon: '🔒',
    phrase: "You build. I break. Ready?",
    effect: 'Reorganiza el tablero',
  },
  {
    id: 5,
    name: 'Slime Reaper',
    icon: '☠️',
    phrase: "Only the bold survive the flood of silence.",
    effect: 'Slime ultra rápido + niebla',
  },
  {
    id: 6,
    name: 'Toybreaker',
    icon: '🧸',
    phrase: "Let’s play until the pieces go *boom*!",
    effect: 'Explota filas',
  },
  {
    id: 7,
    name: 'Glitchcore AI',
    icon: '🤖',
    phrase: "Reality is overrated. Try building *here*.",
    effect: 'Corrupción de piezas',
  },
  {
    id: 8,
    name: 'King Overflow',
    icon: '👑💀',
    phrase: "I am every leak, every flow, every ruin. Bow before the flood.",
    effect: 'Mecánicas combinadas',
  },
];
