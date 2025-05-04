import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const rows = 6;
const cols = 6;
const cellSize = 50;

const Grid = () => {
  const cells = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push(
        <Cell key={`${row}-${col}`} row={row} col={col} size={cellSize} />
      );
    }
  }

  return <View style={styles.grid}>{cells}</View>;
};

const styles = StyleSheet.create({
  grid: {
    width: cols * cellSize,
    height: rows * cellSize,
    position: 'relative',
    backgroundColor: '#eee',
  },
});

export default Grid;
