import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMultipleCardsScreen from './onboarding/AddMultipleCardsScreen';
import TrackSpendingScreen from './onboarding/TrackSpendingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header
          gestureEnabled: true, // Enable swipe gestures
          animationEnabled: true, // Animate transitions
        }}
      >
        <Stack.Screen name="AddCards" component={AddMultipleCardsScreen} />
        <Stack.Screen name="TrackSpending" component={TrackSpendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
