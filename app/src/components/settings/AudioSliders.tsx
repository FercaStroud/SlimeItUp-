import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const AudioSliders = () => {
  const [musicVolume, setMusicVolume] = useState(0.5);
  const [effectsVolume, setEffectsVolume] = useState(0.5);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Música</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={musicVolume}
        onValueChange={setMusicVolume}
        style={styles.slider}
      />
      <Text style={styles.label}>Efectos</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={effectsVolume}
        onValueChange={setEffectsVolume}
        style={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  slider: {
    width: '100%',
  },
});

export default AudioSliders;
