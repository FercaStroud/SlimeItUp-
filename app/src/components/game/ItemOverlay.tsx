import React from 'react';
import { View, StyleSheet } from 'react-native';
import Item from './Item';

interface Props {
  items: { row: number; col: number; id: string }[];
  cellSize: number;
}

const ItemOverlay = ({ items, cellSize }: Props) => {
  return (
    <>
      {items.map((item) => (
        <View
          key={item.id}
          style={[
            styles.item,
            {
              width: cellSize,
              height: cellSize,
              top: item.row * cellSize,
              left: item.col * cellSize,
            },
          ]}
        >
          <Item item={item} size={cellSize * 0.8} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
});

export default ItemOverlay;
