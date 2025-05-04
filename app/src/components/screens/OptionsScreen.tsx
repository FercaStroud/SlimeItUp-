import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AccessibilitySwitches from '../settings/AccessibilitySwitches';
import AudioSliders from '../settings/AudioSliders';

const OptionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Opciones</Text>
      <AudioSliders />
      <AccessibilitySwitches />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OptionsScreen;
