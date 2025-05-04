import { useState } from 'react';

export interface Power {
  id: string;
  name: string;
  uses: number;
  cooldown: number;
  active: boolean;
}

export const usePowers = () => {
  const [powers, setPowers] = useState<Power[]>([]);

  const activatePower = (id: string) => {
    setPowers(prev =>
      prev.map(power =>
        power.id === id && power.uses > 0
          ? { ...power, uses: power.uses - 1, active: true }
          : power
      )
    );
  };

  const addPower = (power: Power) => {
    setPowers(prev => [...prev, power]);
  };

  const resetPowers = () => {
    setPowers([]);
  };

  return {
    powers,
    activatePower,
    addPower,
    resetPowers,
  };
};
