import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SharedStyles';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function AddMultipleCardsScreen() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('TrackSpending');
  };

  const [fontsLoaded] = Font.useFonts({
  FungkyBrow: require('../assets/fonts/Fungky.otf'),
});

React.useEffect(() => {
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

if (!fontsLoaded) return null;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trickl</Text>
      <Image source={require('../assets/wallet-cards.png')} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.descriptor}>Add Multiple Cards</Text>
      <Text style={styles.description}>
        Securely link any major debit or credit card, including Visa, Wealthsimple and American Express.
      </Text>
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}