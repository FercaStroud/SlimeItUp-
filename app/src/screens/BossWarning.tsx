import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import BossIntro from '../components/boss/BossIntro';

type BossParams = {
  BossWarning: {
    name: string;
    icon: string;
    phrase: string;
  };
};

export default function BossWarning() {
  const route = useRoute<RouteProp<BossParams, 'BossWarning'>>();
  const { name, icon, phrase } = route.params;

  return (
    <BossIntro
      name={name}
      icon={icon}
      phrase={phrase}
    />
  );
}
