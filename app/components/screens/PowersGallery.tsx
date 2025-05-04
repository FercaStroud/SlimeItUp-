import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressTree from '../../components/progression/ProgressTree';

const PowersGallery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Unlocked Powers & Items</Text>
      <ProgressTree />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PowersGallery;
