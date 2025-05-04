import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import Grid from '../game/Grid';

const GameScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Game'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
      <Grid />
      <Button title="End Game" onPress={() => navigation.navigate('GameOver')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ccff',
    marginBottom: 20,
  },
});

export default GameScreen;
