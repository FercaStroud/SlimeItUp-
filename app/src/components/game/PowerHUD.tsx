import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Power {
  id: string;
  name: string;
  cooldown: number;
  ready: boolean;
}

interface Props {
  powers: Power[];
}

const PowerHUD = ({ powers }: Props) => {
  return (
    <View style={styles.container}>
      {powers.map((power) => (
        <View key={power.id} style={styles.powerSlot}>
          <Text style={[styles.text, !power.ready && styles.cooldown]}>
            {power.name} {power.ready ? '' : `(${power.cooldown}s)`}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  powerSlot: {
    marginHorizontal: 5,
    padding: 8,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  cooldown: {
    color: '#aaa',
  },
});

export default PowerHUD;
