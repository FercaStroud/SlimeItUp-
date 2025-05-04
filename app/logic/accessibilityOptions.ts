export interface AccessibilitySettings {
  colorBlindMode: boolean;
  noTimeLimit: boolean;
  highContrast: boolean;
  vibration: boolean;
}

export const defaultAccessibility: AccessibilitySettings = {
  colorBlindMode: false,
  noTimeLimit: false,
  highContrast: false,
  vibration: true,
};
