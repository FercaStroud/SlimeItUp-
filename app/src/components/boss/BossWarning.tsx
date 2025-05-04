import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface Props {
  icon: string;
  message?: string;
}

const BossWarning = ({ icon, message = "A Boss Approaches!" }: Props) => {
  const [blinkAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.overlay, { opacity: blinkAnim }]}>
      <Text style={styles.warningText}>{message}</Text>
      <Text style={styles.icon}>{icon}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  icon: {
    fontSize: 48,
  },
});

export default BossWarning;
