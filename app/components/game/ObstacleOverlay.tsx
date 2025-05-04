import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  type: 'fog' | 'block' | 'leak';
}

const ObstacleOverlay = ({ type }: Props) => {
  const colorMap = {
    fog: 'rgba(100,100,100,0.5)',
    block: '#333',
    leak: 'rgba(0,0,255,0.3)',
  };

  return <View style={[styles.overlay, { backgroundColor: colorMap[type] }]} />;
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
});

export default ObstacleOverlay;
