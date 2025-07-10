import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AddMultipleCardsScreen from './onboarding/AddMultipleCardsScreen';
import TrackSpendingScreen from './onboarding/TrackSpendingScreen';
import RealTimeAlertsScreen from './onboarding/RealTimeAlertsScreen';
import LoginScreen from './auth/LoginScreen';
import SignUpScreen from './auth/SignUpScreen';
import DashboardScreen from './app/DashboardScreen';
import AnalyticsScreen from './app/AnalyticsScreen';
import BudgetScreen from './app/BudgetScreen';
import SavingsScreen from './app/SavingsScreen';
import TransactionScreen from './app/TransactionScreen';


const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {

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
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
        <Stack.Screen name="BudgetScreen" component={BudgetScreen} />
        <Stack.Screen name="SavingsScreen" component={SavingsScreen} />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}