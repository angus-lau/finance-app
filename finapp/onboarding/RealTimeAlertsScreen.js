import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SharedStyles';

export default function RealTimeAlertsScreen() {
    const navigation = useNavigation();
    
      const handleNext = () => {
        navigation.navigate('SignUpScreen');
      };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trickl</Text>
      <Image source={require('../assets/credit-notif.png')} style={styles.illustration} resizeMode="contain" />
      <Text style={styles.descriptor}>Real-Time Alerts</Text>
      <Text style={styles.description}>
        Never miss a transaction with instant spend notifications.
      </Text>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}