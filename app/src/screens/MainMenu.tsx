import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const MainMenu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MainMenu'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slime It Up!</Text>
      <Button title="Start Game" onPress={() => navigation.navigate('Game')} />
      <Button title="Unlocked Items" onPress={() => navigation.navigate('PowersGallery')} />
      <Button title="Options" onPress={() => navigation.navigate('Options')} />
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
    color: '#00ff99',
    marginBottom: 40,
  },
});

export default MainMenu;
