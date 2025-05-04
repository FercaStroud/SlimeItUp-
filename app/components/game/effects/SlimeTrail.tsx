import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  color?: string;
};

const SlimeTrail: React.FC<Props> = ({ color = '#00ffcc' }) => {
  return <View style={[styles.trail, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  trail: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 4,
    opacity: 0.6,
  },
});

export default SlimeTrail;
