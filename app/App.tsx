import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './components/screens/MainMenu';
import GameScreen from './components/screens/GameScreen';
import GameOver from './components/screens/GameOver';
import PowersGallery from './components/screens/PowersGallery';
import OptionsScreen from './components//screens/OptionsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="GameOver" component={GameOver} />
        <Stack.Screen name="PowersGallery" component={PowersGallery} />
        <Stack.Screen name="Options" component={OptionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
