// Tipado para navegación entre pantallas
export type RootStackParamList = {
  MainMenu: undefined;
  Game: undefined;
  GameOver: undefined;
  PowersGallery: undefined;
  Options: undefined;
  BossWarning: {
    name: string;
    icon: string;
    phrase: string;
  };
};

// Datos de poderes
export type Power = {
  id: string;
  name: string;
  description: string;
  cooldown: number;
  usesPerLevel: number;
  icon?: string;
};

// Tipos de slime visuales y funcionales
export type SlimeType = {
  id: string;
  name: string;
  color: string;
  texture?: string;
  styleEffect?: string;
};

// Configuración de niveles individuales
export type GameLevelData = {
  level: number;
  hasBoss: boolean;
  obstacles?: number[][];
  complications?: string[];
  requiredObjectives?: string[];
};

// Información de jefes
export type Boss = {
  id: string;
  name: string;
  icon: string;
  phrase: string;
  complication: string;
  style?: string;
};

// Datos de progreso del jugador
export type PlayerProgress = {
  unlockedPowers: string[];
  unlockedStyles: string[];
  unlockedSlimes: string[];
  highScore: number;
  progressionTree: Record<string, boolean>;
};

// Elementos recolectables
export type CollectibleItem = {
  id: string;
  name: string;
  icon: string;
  effect: 'score' | 'multiplier' | 'powerCharge' | 'progression';
  value: number;
};

// Nodo de progresión
export type ProgressionNode = {
  id: string;
  label: string;
  unlocked: boolean;
  requiredConditions: string[];
  type: 'power' | 'style' | 'slime' | 'music';
};
