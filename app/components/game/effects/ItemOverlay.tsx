import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  visible: boolean;
};

const ItemOverlay: React.FC<Props> = ({ visible }) => {
  if (!visible) return null;

  return <View style={styles.overlay} />;
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 4,
    zIndex: 10,
  },
});

export default ItemOverlay;
