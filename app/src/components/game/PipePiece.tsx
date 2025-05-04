import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  rotation: number;
  type: 'straight' | 'curve' | 'T' | 'cross';
}

const PipePiece = ({ rotation, type }: Props) => {
  const color = {
    straight: '#bbb',
    curve: '#8e44ad',
    T: '#3498db',
    cross: '#e67e22',
  }[type];

  return (
    <View
      style={[
        styles.piece,
        { backgroundColor: color, transform: [{ rotate: `${rotation}deg` }] },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  piece: {
    width: 40,
    height: 40,
    borderRadius: 5,
    margin: 2,
  },
});

export default PipePiece;
