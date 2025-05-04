import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  item: { id: string };
  size: number;
}

const Item = ({ item, size }: Props) => {
  return (
    <View style={[styles.item, { width: size, height: size }]}>
      <Text style={styles.text}>⭐</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd700',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});

export default Item;
