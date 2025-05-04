import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Grid from '../components/game/Grid';
import { bosses } from '../logic/bossData';
import { complicationsList } from '../logic/complications';

const GameScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Game'>>();

  // Simulación: jefe 1 activo
  const boss = bosses.find(b => b.id === 1);
  const activeComplication = complicationsList.find(c => c.description.includes('pierden slime'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
      {boss && (
        <Text style={styles.effectText}>
          {boss.icon} {boss.effect}
        </Text>
      )}
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
  effectText: {
    fontSize: 18,
    color: '#ffcc00',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default GameScreen;
