import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SharedStyles';

export default function TrackSpendingScreen() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('RealTimeAlerts'); // 🔁 Update this to your next screen name
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trickl</Text>
      <Image source={require('../assets/cash-coins.png')} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.descriptor}>Track Spending</Text>
      <Text style={styles.description}>
        See every purchase, from every card, in every category instantly.
      </Text>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}