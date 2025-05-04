import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const AccessibilitySwitches = () => {
  const [colorBlind, setColorBlind] = useState(false);
  const [noTime, setNoTime] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [vibration, setVibration] = useState(true);

  return (
    <View style={styles.container}>
      <Setting label="Modo daltónico" value={colorBlind} onChange={setColorBlind} />
      <Setting label="Sin límite de tiempo" value={noTime} onChange={setNoTime} />
      <Setting label="Alto contraste" value={highContrast} onChange={setHighContrast} />
      <Setting label="Vibración" value={vibration} onChange={setVibration} />
    </View>
  );
};

const Setting = ({ label, value, onChange }: { label: string; value: boolean; onChange: (val: boolean) => void }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Switch value={value} onValueChange={onChange} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default AccessibilitySwitches;
