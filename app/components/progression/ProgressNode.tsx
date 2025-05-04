import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  unlocked: boolean;
}

const ProgressNode = ({ label, unlocked }: Props) => {
  return (
    <View style={[styles.node, unlocked && styles.unlocked]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  node: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  unlocked: {
    backgroundColor: '#4caf50',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProgressNode;
