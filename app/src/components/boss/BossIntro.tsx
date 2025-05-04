import React, { useEffect, useState } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';

interface Props {
  name: string;
  icon: string;
  phrase: string;
}

const BossIntro = ({ name, icon, phrase }: Props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.delay(2500),
      Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phrase}>{phrase}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 42,
    color: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  phrase: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#ddd',
    marginTop: 6,
  },
});

export default BossIntro;
