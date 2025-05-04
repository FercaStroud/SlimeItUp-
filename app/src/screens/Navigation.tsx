import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../screens/MainMenu';
import GameScreen from '../screens/GameScreen';
import GameOver from '../screens/GameOver';
import PowersGallery from '../screens/PowersGallery';
import BossWarning from '../screens/BossWarning';
import OptionsScreen from '../screens/OptionsScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="MainMenu" screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainMenu" component={MainMenu}/>
            <Stack.Screen name="GameOver" component={GameOver}/>
            <Stack.Screen name="PowersGallery" component={PowersGallery}/>
            <Stack.Screen name="BossWarning" component={BossWarning}/>
            <Stack.Screen name="Game" component={GameScreen}/>
            <Stack.Screen name="Options" component={OptionsScreen}/>
        </Stack.Navigator>
    );
}
