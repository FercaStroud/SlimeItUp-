import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProgressNode from './ProgressNode';

const mockData = [
  { label: 'Power: Freeze', unlocked: true },
  { label: 'Style: Chibi', unlocked: true },
  { label: 'Slime: Ghost', unlocked: false },
  { label: 'Boss 3 Defeated', unlocked: false },
];

const ProgressTree = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {mockData.map((node, idx) => (
        <ProgressNode key={idx} label={node.label} unlocked={node.unlocked} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProgressTree;
