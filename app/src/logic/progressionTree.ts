export interface UnlockNode {
  id: string;
  label: string;
  unlocked: boolean;
  condition: string;
}

export const progressionTree: UnlockNode[] = [
  { id: 'p1', label: 'Power: Freeze Slime', unlocked: true, condition: 'Beat Boss 1' },
  { id: 'p2', label: 'Style: Chibi', unlocked: true, condition: '5000 score' },
  { id: 'p3', label: 'Power: Ghost Pipe', unlocked: false, condition: '3 runs sin fugas' },
  { id: 's1', label: 'Slot extra de poder', unlocked: false, condition: 'Beat Boss 4' },
  { id: 'm1', label: 'Música alterna: Jazz rápido', unlocked: false, condition: 'Nivel 10 sin poderes' },
];
