

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ConnectionHighlight = () => {
  return <View style={styles.highlight} />;
};

const styles = StyleSheet.create({
  highlight: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#00ffcc',
    borderRadius: 4,
    opacity: 0.5,
  },
});

export default ConnectionHighlight;
