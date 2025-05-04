import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const GameOver = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'GameOver'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Button title="Try Again" onPress={() => navigation.navigate('Game')} />
      <Button title="Back to Menu" onPress={() => navigation.navigate('MainMenu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ff6666',
    marginBottom: 40,
  },
});

export default GameOver;
