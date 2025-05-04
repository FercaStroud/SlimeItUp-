

import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const FugueAlert = () => {
  return <View style={styles.alertOverlay} />;
};

const styles = StyleSheet.create({
  alertOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    zIndex: 99,
  },
});

export default FugueAlert;
