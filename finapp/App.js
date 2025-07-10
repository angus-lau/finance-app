import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AddMultipleCardsScreen from './onboarding/AddMultipleCardsScreen';
import TrackSpendingScreen from './onboarding/TrackSpendingScreen';
import RealTimeAlertsScreen from './onboarding/RealTimeAlertsScreen';


const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    FungkyBrow: require('./assets/fonts/Fungky.otf'), // ✅ Make sure this path is correct
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="AddCards" component={AddMultipleCardsScreen} />
        <Stack.Screen name="TrackSpending" component={TrackSpendingScreen} />
        <Stack.Screen name="RealTimeAlerts" component={RealTimeAlertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}