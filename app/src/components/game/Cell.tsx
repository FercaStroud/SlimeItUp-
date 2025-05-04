import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  size: number;
  row: number;
  col: number;
  occupied?: boolean;
}

const Cell = ({ size, row, col, occupied }: Props) => {
  return (
    <View
      style={[
        styles.cell,
        {
          width: size,
          height: size,
          top: row * size,
          left: col * size,
          backgroundColor: occupied ? '#666' : '#ccc',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#999',
  },
});

export default Cell;
